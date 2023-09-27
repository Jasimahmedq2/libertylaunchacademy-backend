"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSchema = void 0;
const zod_1 = require("zod");
const addEvent = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "name is required",
        }),
        start_date: zod_1.z.date({
            required_error: "start date is required",
        }),
        end_date: zod_1.z.date({
            required_error: "end date is required",
        }),
    }),
});
exports.EventSchema = {
    addEvent,
};
