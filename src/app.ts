import express, { Application, Request, Response } from "express";
import cors from "cors";
import { MainRoutes } from "./app/Routes";
import globalMiddleware from "./app/Middleware/globalMiddleware";
const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("the server is running...");
});

app.use("/api/v1", MainRoutes);
app.use(globalMiddleware);

export default app;
