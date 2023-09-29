import mongoose, { Schema, model } from "mongoose";
import { boolean } from "zod";
import { IAdmission } from "./admission.interfaces";

const AdmissionModel = new Schema<IAdmission>(
  {
    student: {
      name: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      birthday: {
        type: String,
        required: true,
      },
      currentGrade: {
        type: Number,
        required: true,
      },
      gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true,
      },
      disabilities: {
        type: Boolean,
        default: false,
        required: true,
      },
    },
    guardian: {
      name: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      email: {
        type: String,
        required: true,
      },
      confirmEmail: {
        type: String,
        required: true,
      },
      phoneNo: {
        type: String,
      },
      address: {
        type: String,
      },
      streetAddress: {
        type: String,
      },
      addressLine2: {
        type: String,
      },
      city: {
        type: String,
      },
      region: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      country: {
        type: String,
      },
      opinion: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

export const Admission = model<IAdmission>("admission", AdmissionModel);
