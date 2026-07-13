import { Server } from "socket.io";

let io;

const onlineUsers = new Map();

export const initializeSocket = (server) => {

    io = new Server(server, {
        cors: {
            origin: process.env.CLIENT_URL,
            credentials: true,
        },
    });

    io.on("connection", (socket) => {

        socket.on("typing", ({ senderId, receiverId }) => {

            const receiverSocket = onlineUsers.get(receiverId);

            if (receiverSocket) {

                io.to(receiverSocket).emit("typing", {
                    senderId,
                });

            }

        });

        socket.on("stopTyping", ({ senderId, receiverId }) => {

            const receiverSocket = onlineUsers.get(receiverId);

            if (receiverSocket) {

                io.to(receiverSocket).emit("stopTyping", {
                    senderId,
                });

            }

        });

        console.log("Socket Connected:", socket.id);

        socket.on("join", (userId) => {

            onlineUsers.set(userId, socket.id);

            io.emit("onlineUsers", [...onlineUsers.keys()]);

        });

        socket.on("disconnect", () => {

            for (const [userId, socketId] of onlineUsers) {

                if (socketId === socket.id) {

                    onlineUsers.delete(userId);

                    break;

                }

            }

            io.emit("onlineUsers", [...onlineUsers.keys()]);

        });

        socket.on(

            "typing",

            (data) => {

                const receiverSocket =

                    onlineUsers.get(

                        data.receiver

                    );

                if (receiverSocket) {

                    io.to(receiverSocket)

                        .emit(

                            "typing",

                            data.sender

                        );

                }

            }

        );

        socket.on(

            "stopTyping",

            (data) => {

                const receiverSocket =

                    onlineUsers.get(

                        data.receiver

                    );

                if (receiverSocket) {

                    io.to(receiverSocket)

                        .emit(

                            "stopTyping"

                        );

                }

            }

        );

    });

};

export const getIO = () => io;

export const getReceiverSocket = (userId) => {

    return onlineUsers.get(userId);

};