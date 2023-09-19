import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { EventServices } from "./event.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IEvent } from "./event.interface";

const addEvent = catchAsync(async (req: Request, res: Response) => {
  const result = await EventServices.addEvent(req.body);
  sendResponse<IEvent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "successfully added a event",
    data: result,
  });
});

const retrieveEvents = catchAsync(async (req: Request, res: Response) => {
  const filter = req.query;
  const result = await EventServices.retrieveEvents(filter);
  sendResponse<IEvent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "successfully retrieve all event",
    data: result,
  });
});

export const EventControllers = {
  addEvent,
  retrieveEvents,
};
