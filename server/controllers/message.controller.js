import Message from "../models/Message.js";
import cloudinary from "../config/cloudinary.js";

import {

    getIO,

    getReceiverSocket,

} from "../socket/socket.js";

export const sendMessage = async (req, res) => {

    try {

        const { receiverId, text } = req.body;

        let imageUrl = "";

        if (req.file) {

            const uploadResult = await new Promise(

                (resolve, reject) => {

                    cloudinary.uploader.upload_stream(

                        {

                            folder: "BaatCheet",

                            resource_type: "image",

                        },

                        (error, result) => {

                            if (error) {

                                reject(error);

                            } else {

                                resolve(result);

                            }

                        }

                    ).end(req.file.buffer);

                }

            );

            imageUrl = uploadResult.secure_url;

        }

        const message =

            await Message.create({

                sender: req.user._id,

                receiver: receiverId,

                text,

                image: imageUrl,

            });

        const populated = await message.populate([

            {
                path: "sender",
                select: "-password",
            },

            {
                path: "receiver",
                select: "-password",
            },

        ]);

        const receiverSocket = getReceiverSocket(receiverId);

        if (receiverSocket) {

            getIO()

                .to(receiverSocket)

                .emit("receiveMessage", populated);

        }

        res.status(201).json(populated);

    } catch (err) {

        res.status(500).json({

            message: err.message,

        });

    }

};

export const getMessages = async (req, res) => {

    try {

        const { id } = req.params;

        const messages = await Message.find({

            $or: [

                {
                    sender: req.user._id,
                    receiver: id,
                },

                {
                    sender: id,
                    receiver: req.user._id,
                },

            ],

        }).sort({

            createdAt: 1,

            _id: 1

        });

        res.json(messages);

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }

};