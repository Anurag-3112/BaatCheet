import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
        },

        avatar: {
            type: String,
            default: "",
        },

        bio: {
            type: String,
            default: "Hey there! I'm using BaatCheet.",
        },

        isOnline: {
            type: Boolean,
            default: false,
        },

        lastSeen: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);