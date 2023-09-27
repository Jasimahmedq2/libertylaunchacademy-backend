"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admission = void 0;
const mongoose_1 = require("mongoose");
const AdmissionModel = new mongoose_1.Schema({
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
            type: Number,
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
}, { timestamps: true });
exports.Admission = (0, mongoose_1.model)("admission", AdmissionModel);
