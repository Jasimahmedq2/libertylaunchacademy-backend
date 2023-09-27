"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const article_controller_1 = require("./article.controller");
const router = express_1.default.Router();
router.post("/create-article", article_controller_1.ArticleControllers.createArticle);
router.get("/get-article", article_controller_1.ArticleControllers.retrieveArticle);
router.get("/get-article/:id", article_controller_1.ArticleControllers.retrieveSingleArticle);
exports.ArticleRoutes = router;
