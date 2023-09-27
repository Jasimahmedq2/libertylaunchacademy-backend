"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmissionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admission_controller_1 = require("./admission.controller");
const validateRequest_1 = __importDefault(require("../../Middleware/validateRequest"));
const admission_validation_1 = require("./admission.validation");
const router = express_1.default.Router();
router.post("/create-admission", (0, validateRequest_1.default)(admission_validation_1.AdmissionSchema.createAdmission), admission_controller_1.AdmissionControllers.createAdmission);
router.get("/get-admission", admission_controller_1.AdmissionControllers.retrieveAdmission);
exports.AdmissionRoutes = router;
