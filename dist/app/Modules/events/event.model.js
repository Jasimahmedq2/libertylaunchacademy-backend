"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const mongoose_1 = require("mongoose");
const EventModels = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        default: "No School",
    },
    description: {
        type: String,
        default: "",
    },
    location: {
        type: String,
        default: "",
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Event = (0, mongoose_1.model)("event", EventModels);
