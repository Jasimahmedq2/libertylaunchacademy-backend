import { Request, Response } from "express";
import httpStatus from "http-status";
import { UserServices } from "./user.services";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "./user.interface";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userInfo } = req.body;

  const result = await UserServices.createUser(userInfo);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "successfully created a user",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userInfo } = req.body;

  const result = await UserServices.loginUser(userInfo);
  res.status(httpStatus.OK).json({
    result,
  });

  sendResponse<string>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "successfully logged in",
    data: result,
  });
});

export const UserController = {
  createUser,
  loginUser,
};
