import express from "express";

import protect from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";

import {
    sendMessage,
    getMessages,
} from "../controllers/message.controller.js";

const router = express.Router();

router.post(
    "/",
    protect,
    upload.single("image"),
    sendMessage
);
router.get("/:id", protect, getMessages);

export default router;