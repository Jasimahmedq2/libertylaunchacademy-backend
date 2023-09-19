import { z } from "zod";

const createAdmission = z.object({
  body: z.object({
    student: z.object({
      name: z.object({
        firstName: z.string({
          required_error: "first name is required",
        }),
        lastName: z.string({
          required_error: "last name is required",
        }),
      }),
      birthday: z.string({
        required_error: "this field is required",
      }),
      currentGrade: z.number({
        required_error: "this field is required",
      }),
      gender: z.string({
        required_error: "this field is required",
      }),
      disabilities: z.boolean().optional(),
    }),
    guardian: z.object({
      name: z.object({
        firstName: z.string({
          required_error: "first name is required",
        }),
        lastName: z.string({
          required_error: "last name is required",
        }),
      }),
      email: z
        .string({
          required_error: "email is required",
        })
        .email("Email is not valid"),
      confirmEmail: z
        .string({
          required_error: "email is required",
        })
        .email("Email confirmation is not valid"),
      phoneNo: z.number({
        required_error: "this field is required",
      }),
      address: z.string({
        required_error: "this field is required",
      }),
      streetAddress: z.string({
        required_error: "this field is required",
      }),
      addressLine2: z.string({
        required_error: "this field is required",
      }),
      city: z.string({
        required_error: "this field is required",
      }),
      region: z.string({
        required_error: "this field is required",
      }),
      postalCode: z.string({
        required_error: "this field is required",
      }),
      country: z.string({
        required_error: "this field is required",
      }),
      opinion: z.string({
        required_error: "this field is required",
      }),
    }),
  }),
});

export const AdmissionSchema = {
  createAdmission,
};
