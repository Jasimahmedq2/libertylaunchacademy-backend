import mongoose, { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userModel = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
  },
  bio: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: "",
  },
});

export const User = model<IUser>("user", userModel);
