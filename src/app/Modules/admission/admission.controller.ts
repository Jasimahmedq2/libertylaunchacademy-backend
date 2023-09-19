import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AdmissionServices } from "./admission.service";
import sendResponse from "../../../shared/sendResponse";
import { IAdmission } from "./admission.interfaces";
import httpStatus from "http-status";

const createAdmission = catchAsync(async (req: Request, res: Response) => {
  const result = await AdmissionServices.createAdmission(req.body);
  sendResponse<IAdmission>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "successfully admitted a student",
    data: result,
  });
});

const retrieveAdmission = catchAsync(async (req: Request, res: Response) => {
  const result = await AdmissionServices.retrieveAdmission();
  sendResponse<IAdmission[] | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "successfully retrieve all admission info",
    data: result,
  });
});

export const AdmissionControllers = {
  createAdmission,
  retrieveAdmission,
};
