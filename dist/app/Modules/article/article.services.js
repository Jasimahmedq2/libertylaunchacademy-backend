"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleServices = void 0;
const article_model_1 = require("./article.model");
const createArticle = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield article_model_1.Article.create(payload);
    return result;
});
const retrieveArticle = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield article_model_1.Article.find({});
    return result;
});
const retrieveSingleArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield article_model_1.Article.findById(id);
    return result;
});
exports.ArticleServices = {
    createArticle,
    retrieveArticle,
    retrieveSingleArticle,
};
