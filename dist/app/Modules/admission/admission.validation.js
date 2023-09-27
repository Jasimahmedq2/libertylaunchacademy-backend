"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmissionSchema = void 0;
const zod_1 = require("zod");
const createAdmission = zod_1.z.object({
    body: zod_1.z.object({
        student: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: "first name is required",
                }),
                lastName: zod_1.z.string({
                    required_error: "last name is required",
                }),
            }),
            birthday: zod_1.z.string({
                required_error: "this field is required",
            }),
            currentGrade: zod_1.z.number({
                required_error: "this field is required",
            }),
            gender: zod_1.z.string({
                required_error: "this field is required",
            }),
            disabilities: zod_1.z.boolean().optional(),
        }),
        guardian: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: "first name is required",
                }),
                lastName: zod_1.z.string({
                    required_error: "last name is required",
                }),
            }),
            email: zod_1.z
                .string({
                required_error: "email is required",
            })
                .email("Email is not valid"),
            confirmEmail: zod_1.z
                .string({
                required_error: "email is required",
            })
                .email("Email confirmation is not valid"),
            phoneNo: zod_1.z.number({
                required_error: "this field is required",
            }),
            address: zod_1.z.string({
                required_error: "this field is required",
            }),
            streetAddress: zod_1.z.string({
                required_error: "this field is required",
            }),
            addressLine2: zod_1.z.string({
                required_error: "this field is required",
            }),
            city: zod_1.z.string({
                required_error: "this field is required",
            }),
            region: zod_1.z.string({
                required_error: "this field is required",
            }),
            postalCode: zod_1.z.string({
                required_error: "this field is required",
            }),
            country: zod_1.z.string({
                required_error: "this field is required",
            }),
            opinion: zod_1.z.string({
                required_error: "this field is required",
            }),
        }),
    }),
});
exports.AdmissionSchema = {
    createAdmission,
};
