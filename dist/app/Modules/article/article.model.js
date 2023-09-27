"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const mongoose_1 = require("mongoose");
const ArticleModel = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    link: {
        type: Array,
        default: [],
    },
});
exports.Article = (0, mongoose_1.model)("article", ArticleModel);
