import express from "express";
import { EventControllers } from "./event.controller";
import validateRequest from "../../Middleware/validateRequest";
import { EventSchema } from "./event.validation";
const router = express.Router();

router.post("/add-event", EventControllers.addEvent);
router.get("/get-event", EventControllers.retrieveEvents);

export const eventRoutes = router;
