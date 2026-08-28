import { useAuth } from "../context/AuthContext";

function formatMessageTimestamp(createdAt) {
    const messageDate = new Date(createdAt);

    if (Number.isNaN(messageDate.getTime())) {
        return "";
    }

    const now = new Date();

    const isToday =
        messageDate.getFullYear() === now.getFullYear() &&
        messageDate.getMonth() === now.getMonth() &&
        messageDate.getDate() === now.getDate();

    const time = messageDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    if (isToday) {
        return time;
    }

    const isCurrentYear =
        messageDate.getFullYear() === now.getFullYear();

    const date = messageDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        ...(!isCurrentYear && { year: "numeric" }),
    });

    return `${date}, ${time}`;
}

function MessageBubble({ message }) {

    const { user } = useAuth();

    const ownMessage =

        message.sender._id === user._id;
    const timestamp = formatMessageTimestamp(message.createdAt);

    return (

        <div

            className={`message ${ownMessage ? "sent" : "received"}`}

        >

            {

                message.image && (

                    <img

                        src={message.image}

                        alt=""

                        className="chat-image"

                    />

                )

            }

            {

                message.text && (

                    <p>

                        {message.text}

                    </p>

                )

            }

            {timestamp && <small>{timestamp}</small>}

        </div>

    );

}

export default MessageBubble;