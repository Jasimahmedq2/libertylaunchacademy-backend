import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
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
