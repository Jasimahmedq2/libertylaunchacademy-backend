"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
    },
    bio: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        default: "",
    },
}, { timestamps: true });
exports.User = (0, mongoose_1.model)("user", userModel);
