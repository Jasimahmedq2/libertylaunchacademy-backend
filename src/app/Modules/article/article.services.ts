import { IArticle } from "./article.interfaces";
import { Article } from "./article.model";

const createArticle = async (payload: IArticle): Promise<IArticle> => {
  const result = await Article.create(payload);
  return result;
};
const retrieveArticle = async (): Promise<IArticle[] | null> => {
  const result = await Article.find({});
  return result;
};

const retrieveSingleArticle = async (id: string): Promise<IArticle | null> => {
  const result = await Article.findById(id);
  return result;
};

export const ArticleServices = {
  createArticle,
  retrieveArticle,
  retrieveSingleArticle,
};
