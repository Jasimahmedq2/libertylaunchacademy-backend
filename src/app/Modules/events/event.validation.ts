import { z } from "zod";

const addEvent = z.object({
  body: z.object({
    name: z.string({
      required_error: "name is required",
    }),
    start_date: z.date({
      required_error: "start date is required",
    }),
    end_date: z.date({
      required_error: "end date is required",
    }),
  }),
});

export const EventSchema = {
  addEvent,
};
