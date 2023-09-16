import express from "express";
import { userRoutes } from "../Modules/User/user.routes";
const router = express.Router();

const AllRoutes = [
  {
    path: "/users",
    element: userRoutes,
  },
];

AllRoutes.forEach((route) => router.use(route.path, route.element));

export const MainRoutes = router;
