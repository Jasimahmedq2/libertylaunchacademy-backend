"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controllers_1 = require("./user.controllers");
const router = express_1.default.Router();
router.post("/create-user", user_controllers_1.UserController.createUser);
router.post("/login", user_controllers_1.UserController.loginUser);
exports.userRoutes = router;
