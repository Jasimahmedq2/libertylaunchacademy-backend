"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const createUser = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "name is required",
        }),
        email: zod_1.z
            .string({
            required_error: "email is required",
        })
            .email(),
        password: zod_1.z.string({
            required_error: "password is required",
        }),
        phoneNumber: zod_1.z.string().optional(),
        role: zod_1.z.string().optional(),
        bio: zod_1.z.string({
            required_error: "user boi is required",
        }),
        image: zod_1.z.string({
            required_error: "image is required",
        }),
    }),
});
exports.userValidation = {
    createUser,
};
