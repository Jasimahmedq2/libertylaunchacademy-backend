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
exports.AdmissionServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const admission_model_1 = require("./admission.model");
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../../../config"));
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: config_1.default.my_email,
        pass: config_1.default.my_password,
    },
});
const createAdmission = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const alreadyAdmitted = yield admission_model_1.Admission.findOne({
        "guardian.email": payload.guardian.email,
        "student.name": (_a = payload.student) === null || _a === void 0 ? void 0 : _a.name,
        "student.birthday": (_b = payload.student) === null || _b === void 0 ? void 0 : _b.birthday,
    });
    console.log({ alreadyAdmitted });
    if (alreadyAdmitted) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "the student already admitted! please change name or email then try again");
    }
    const result = yield admission_model_1.Admission.create(payload);
    const mailOptions = {
        from: "jasim.dev48@gmail.com",
        to: payload.guardian.email,
        subject: "Congratulations on Your Admission!",
        html: `<p>Dear ${((_d = (_c = payload.student) === null || _c === void 0 ? void 0 : _c.name) === null || _d === void 0 ? void 0 : _d.firstName) + " " + ((_f = (_e = payload.student) === null || _e === void 0 ? void 0 : _e.name) === null || _f === void 0 ? void 0 : _f.lastName)}, We are thrilled to inform you that you have been admitted to LibertyLaunchAcademy for the  program. Congratulations! This is a significant achievement, and we believe your dedication and hard work have paid off. We are confident that you will excel in your studies and make the most of the opportunities that await you here.</p> `,
    };
    yield transporter.sendMail(mailOptions);
    return result;
});
const retrieveAdmission = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield admission_model_1.Admission.find({});
    return result;
});
exports.AdmissionServices = {
    createAdmission,
    retrieveAdmission,
};
