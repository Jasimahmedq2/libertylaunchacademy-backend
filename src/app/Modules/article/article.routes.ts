import express from "express";
import { ArticleControllers } from "./article.controller";
const router = express.Router();

router.post("/create-article", ArticleControllers.createArticle);
router.get("/get-article", ArticleControllers.retrieveArticle);
router.get("/get-article/:id", ArticleControllers.retrieveSingleArticle);

export const ArticleRoutes = router;
