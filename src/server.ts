import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();

const port = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING as string);
    app.listen(port, () => {
      console.log(colors.green(`yee the database running on the ${port} port`));
    });
  } catch (error) {
    console.log(colors.red("database not connected:"), error);
  }
};
connectDB();
