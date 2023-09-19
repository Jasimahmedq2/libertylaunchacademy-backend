import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { TeamServices } from "./team.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { Types } from "mongoose";
import { object } from "zod";

const addMember = catchAsync(async (req: Request, res: Response) => {
  const { teamMember } = req.body;
  const result = await TeamServices.addMember(teamMember);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "successfully added a team member",
    data: result,
  });
});
const retrieveTeamMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamServices.retrieveTeamMembers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "successfully retrieve all team member",
    data: result,
  });
});
const retrieveSingleTeamMembers = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await TeamServices.retrieveSingleTeamMembers(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "successfully retrieve a team member",
      data: result,
    });
  }
);

export const TeamControllers = {
  addMember,
  retrieveTeamMembers,
  retrieveSingleTeamMembers,
};
