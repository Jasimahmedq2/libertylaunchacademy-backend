import httpStatus from "http-status";
import ApiError from "../../../errors/apiError";
import { IAdmission } from "./admission.interfaces";
import { Admission } from "./admission.model";

const createAdmission = async (payload: IAdmission): Promise<IAdmission> => {
  const alreadyAdmitted = await Admission.findOne({
    guardian: {
      email: payload.guardian.email,
    },
    student: {
      name: payload.student.name,
      birthday: payload.student.birthday,
    },
  });
  if (alreadyAdmitted) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "the student already admitted! please change name or email then try again"
    );
  }
  const result = await Admission.create(payload);
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
