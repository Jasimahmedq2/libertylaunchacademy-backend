"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRoutes = void 0;
const express_1 = __importDefault(require("express"));
const event_controller_1 = require("./event.controller");
const router = express_1.default.Router();
router.post("/add-event", event_controller_1.EventControllers.addEvent);
router.get("/get-event", event_controller_1.EventControllers.retrieveEvents);
exports.eventRoutes = router;
