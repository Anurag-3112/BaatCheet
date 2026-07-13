import http from "http";
import dotenv from "dotenv";

import app from "./app.js";
import connectDB from "./config/db.js";
import { initializeSocket } from "./socket/socket.js";

dotenv.config();

const startServer = async () => {
    try {
        await connectDB();

        const server = http.createServer(app);

        initializeSocket(server);

        server.listen(process.env.PORT || 5001, () => {
            console.log(`Server Running on ${process.env.PORT || 5001}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();