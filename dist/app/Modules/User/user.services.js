"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const config_1 = __importDefault(require("../../../config"));
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.role = "user";
    const hashedPassword = yield bcrypt_1.default.hash(payload.password, 12);
    payload.password = hashedPassword;
    const result = yield user_model_1.User.create(payload);
    return result;
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isEmailExist = yield user_model_1.User.findOne({ email: payload.email });
    if (!isEmailExist) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "email doesn't exist in the application");
    }
    const passwordMatched = yield bcrypt_1.default.compare(payload.password, isEmailExist.password);
    if (!passwordMatched) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "oops password doesn't matched");
    }
    const userInfo = {
        userId: isEmailExist._id,
        role: isEmailExist.role,
    };
    const accessToken = jwtHelpers_1.jwtHelpers.createToken(userInfo, config_1.default.jwt.secret, config_1.default.jwt.secret_expireIn);
    return accessToken;
});
exports.UserServices = {
    createUser,
    loginUser,
};
