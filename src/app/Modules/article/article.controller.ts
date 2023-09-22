import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ArticleServices } from "./article.services";
import sendResponse from "../../../shared/sendResponse";
import { IArticle } from "./article.interfaces";

const createArticle = catchAsync(async (req: Request, res: Response) => {
  const result = await ArticleServices.createArticle(req.body);
  sendResponse<IArticle>(res, {
    statusCode: 200,
    success: true,
    message: "successfully created a article",
    data: result,
  });
});

const retrieveArticle = catchAsync(async (req: Request, res: Response) => {
  const result = await ArticleServices.retrieveArticle();
  sendResponse<IArticle[]>(res, {
    statusCode: 200,
    success: true,
    message: "successfully retrieve all article",
    data: result,
  });
});
const retrieveSingleArticle = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ArticleServices.retrieveSingleArticle(req.params.id);
    sendResponse<IArticle>(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieve a article",
      data: result,
    });
  }
);

export const ArticleControllers = {
  createArticle,
  retrieveArticle,
  retrieveSingleArticle,
};
