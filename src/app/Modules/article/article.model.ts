import mongoose, { Schema, model } from "mongoose";
import { IArticle } from "./article.interfaces";

const ArticleModel = new Schema<IArticle>({
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

export const Article = model<IArticle>("article", ArticleModel);
