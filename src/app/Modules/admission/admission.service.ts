import httpStatus from "http-status";
import ApiError from "../../../errors/apiError";
import { IAdmission } from "./admission.interfaces";
import { Admission } from "./admission.model";
import nodemailer from "nodemailer";
import config from "../../../config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.my_email,
    pass: config.my_password,
  },
});

const createAdmission = async (payload: IAdmission): Promise<IAdmission> => {
  const alreadyAdmitted = await Admission.findOne({
    "guardian.email": payload.guardian.email,
    "student.name": payload.student?.name,
    "student.birthday": payload.student?.birthday,
  });
  console.log({ alreadyAdmitted });
  if (alreadyAdmitted) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "the student already admitted! please change name or email then try again"
    );
  }
  const result = await Admission.create(payload);

  const mailOptions = {
    from: "jasim.dev48@gmail.com",
    to: payload.guardian.email,
    subject: "Congratulations on Your Admission!",
    html: `<p>Dear ${
      payload.student?.name?.firstName + " " + payload.student?.name?.lastName
    }, We are thrilled to inform you that you have been admitted to LibertyLaunchAcademy for the  program. Congratulations! This is a significant achievement, and we believe your dedication and hard work have paid off. We are confident that you will excel in your studies and make the most of the opportunities that await you here.</p> `,
  };

  await transporter.sendMail(mailOptions);

  return result;
};

const retrieveAdmission = async (): Promise<IAdmission[] | null> => {
  const result = await Admission.find({});
  return result;
};

export const AdmissionServices = {
  createAdmission,
  retrieveAdmission,
};
