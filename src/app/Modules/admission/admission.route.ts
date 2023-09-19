import express from "express";
import { AdmissionControllers } from "./admission.controller";
import validateRequest from "../../Middleware/validateRequest";
import { AdmissionSchema } from "./admission.validation";
const router = express.Router();

router.post(
  "/create-admission",
  validateRequest(AdmissionSchema.createAdmission),
  AdmissionControllers.createAdmission
);
router.get("/get-admission", AdmissionControllers.retrieveAdmission);

export const AdmissionRoutes = router;
