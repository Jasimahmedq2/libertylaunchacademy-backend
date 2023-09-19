import mongoose, { Schema, model } from "mongoose";
import { IEvent } from "./event.interface";

const EventModels = new Schema<IEvent>(
  {
    name: {
      type: String,
      required: true,
      default: "No School",
    },
    description: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Event = model<IEvent>("event", EventModels);
