"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    db_connect: process.env.DB_STRING,
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    bcrypt_hash_sold: process.env.BCRYPT_HASH_SOLD,
    jwt: {
        secret: process.env.JWT_SECRET,
        secret_expireIn: process.env.JWT_SECRET_EXPIRE_IN,
    },
    my_email: process.env.MY_EMAIL,
    my_password: process.env.MY_PASSWORD,
};
