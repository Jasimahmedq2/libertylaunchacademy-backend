import { Secret } from "jsonwebtoken";
import config from "../../../config";
import ApiError from "../../../errors/apiError";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt, { hash } from "bcrypt";
import httpStatus from "http-status";

const createUser = async (payload: IUser): Promise<IUser> => {
  payload.role = "user";
  const hashedPassword = await bcrypt.hash(payload.password, 12);
  payload.password = hashedPassword;
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: {
  email: string;
  password: string;
}): Promise<string> => {
  const isEmailExist = await User.findOne({ email: payload.email });
  if (!isEmailExist) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "email doesn't exist in the application"
    );
  }
  const passwordMatched = await bcrypt.compare(
    payload.password,
    isEmailExist.password
  );

  if (!passwordMatched) {
    throw new ApiError(httpStatus.BAD_REQUEST, "oops password doesn't matched");
  }

  const userInfo = {
    userId: isEmailExist._id,
    role: isEmailExist.role,
  };

  const accessToken = jwtHelpers.createToken(
    userInfo,
    config.jwt.secret as Secret,
    config.jwt.secret_expireIn as string
  );

  return accessToken;
};

export const UserServices = {
  createUser,
  loginUser,
};
