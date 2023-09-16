import { z } from "zod";

const createUser = z.object({
  body: z.object({
    name: z.string({
      required_error: "name is required",
    }),
    email: z
      .string({
        required_error: "email is required",
      })
      .email(),
    password: z.string({
      required_error: "password is required",
    }),
    phoneNumber: z.string().optional(),
    role: z.string().optional(),
    bio: z.string({
      required_error: "user boi is required",
    }),
    image: z.string({
      required_error: "image is required",
    }),
  }),
});

export const userValidation = {
  createUser,
};
