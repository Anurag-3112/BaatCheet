import { useEffect, useRef, useState } from "react";

import { getMessages, sendMessage } from "../services/messageService";

import { useSocket } from "../context/SocketContext";
import { useAuth } from "../context/AuthContext";

import MessageBubble from "./MessageBubble";

function ChatWindow({ selectedUser }) {
    const { socket, onlineUsers } = useSocket();
    const { user } = useAuth();

    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const [typing, setTyping] = useState(false);
    const [sending, setSending] = useState(false);
    const [uploading, setUploading] = useState(false);

    const bottomRef = useRef(null);
    const typingTimeout = useRef(null);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState("");

    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {

        if (!selectedUser) return;

        loadMessages();

    }, [selectedUser?._id]);

    useEffect(() => {
        if (!socket || !selectedUser) return;

        const receiveMessage = (message) => {
            const senderId = message.sender._id;
            const receiverId = message.receiver._id;

            const isCurrentChat =
                (senderId === selectedUser._id && receiverId === user._id) ||
                (senderId === user._id && receiverId === selectedUser._id);

            if (!isCurrentChat) return;

            setMessages((prev) => {
                const exists = prev.some((m) => m._id === message._id);
                if (exists) return prev;
                return [...prev, message];
            });
        };

        if (!socket) return;

        const handleTyping = (value) => {

            setText(value);

            if (!socket || !selectedUser) return;

            socket.emit("typing", {
                senderId: user._id,
                receiverId: selectedUser._id,
            });

            clearTimeout(typingTimeout.current);

            typingTimeout.current = setTimeout(() => {

                socket.emit("stopTyping", {
                    senderId: user._id,
                    receiverId: selectedUser._id,
                });

            }, 1200);

        };

        const handleStopTyping = ({ senderId }) => {

            if (senderId === selectedUser?._id) {

                setIsTyping(false);

            }

        };


        socket.on("receiveMessage", receiveMessage);
        socket.on("typing", handleTyping);
        socket.on("stopTyping", handleStopTyping);

        return () => {
            socket.off("receiveMessage", receiveMessage);
            socket.off("typing", handleTyping);
            socket.off("stopTyping", handleStopTyping);
        };
    }, [socket, selectedUser?._id, user?._id]);

    useEffect(() => {
        requestAnimationFrame(() => {
            bottomRef.current?.scrollIntoView({
                behavior: "smooth",
            });
        });
    }, [messages]);

    useEffect(() => {

        if (!image) {
            setPreview("");
            return;
        }

        const objectUrl = URL.createObjectURL(image);

        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);

    }, [image]);

    const loadMessages = async () => {
        try {

            setLoading(true);

            const data = await getMessages(selectedUser._id);

            setMessages(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };

    const handleTypingChange = (e) => {
        const value = e.target.value;
        handleTyping(value);

        if (!socket) return;

        socket.emit("typing", {
            sender: user._id,
            receiver: selectedUser._id,
        });

        clearTimeout(typingTimeout.current);

        typingTimeout.current = setTimeout(() => {
            socket.emit("stopTyping", {
                sender: user._id,
                receiver: selectedUser._id,
            });
        }, 1000);
    };

    const handleSend = async () => {
        if ((!text.trim() && !image) || sending || uploading) return;

        try {
            setSending(true);
            setUploading(true);

            const formData = new FormData();

            formData.append("receiverId", selectedUser._id);
            formData.append("text", text);

            if (image) {
                formData.append("image", image);
            }

            const message = await sendMessage(formData);

            setMessages((prev) => {
                const exists = prev.some(
                    (msg) => msg._id === message._id
                );

                if (exists) return prev;

                return [...prev, message];
            });

            socket?.emit("stopTyping", {
                sender: user._id,
                receiver: selectedUser._id,
            });

            setText("");
            setImage(null);
        } catch (err) {
            console.error(err);
        } finally {
            setSending(false);
            setUploading(false);
        }
    };

    if (!selectedUser) {
        return (
            <div className="chat-window empty">
                <div className="welcome">
                    <h1>💬 BaatCheet</h1>
                    <p>Fast • Secure • Realtime Chat</p>
                </div>
            </div>
        );
    }

    return (
        <div className="chat-window">
            <div className="chat-header">
                <img
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                />

                <div>
                    <h3>{selectedUser.name}</h3>
                    {isTyping && (

                        <div className="typing-indicator">

                            {selectedUser.name} is typing...

                        </div>

                    )}

                    <p>
                        {onlineUsers.includes(selectedUser._id)
                            ? "🟢 Online"
                            : "⚫ Offline"}
                    </p>
                </div>
            </div>

            {typing && (
                <div className="typing">
                    {selectedUser.name} is typing...
                </div>
            )}

            <div className="messages">
                {loading && (
                    <p className="loading-messages">
                        Loading messages...
                    </p>
                )}
                {messages.map((message) => (
                    <MessageBubble
                        key={message._id}
                        message={message}
                    />
                ))}

                <div ref={bottomRef} />
            </div>

            {image && (
                <div className="preview">
                    <img
                        src={preview}
                        alt="preview"
                    />

                    <button
                        onClick={() => setImage(null)}
                    >
                        ✕
                    </button>
                </div>
            )}

            <div className="message-input">
                <label className="image-btn">
                    📷
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        id="image"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (!file) return;

                            setImage(file);
                        }}
                    />
                </label>

                <input
                    value={text}
                    onChange={handleTypingChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSend();
                        }
                    }}
                    placeholder="Type a message..."
                />

                <button
                    onClick={handleSend}
                    disabled={sending || uploading}
                >
                    {uploading
                        ? "Uploading..."
                        : sending
                            ? "Sending..."
                            : "Send"}
                </button>
            </div>
        </div>
    );
}

export default ChatWindow;