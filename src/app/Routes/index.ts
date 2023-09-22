import express from "express";
import { userRoutes } from "../Modules/User/user.routes";
import { teamRoutes } from "../Modules/Team/team.route";
import { AdmissionRoutes } from "../Modules/admission/admission.route";
import { eventRoutes } from "../Modules/events/event.routes";
import { ArticleRoutes } from "../Modules/article/article.routes";
const router = express.Router();

const AllRoutes = [
  {
    path: "/users",
    element: userRoutes,
  },
  {
    path: "/teams",
    element: teamRoutes,
  },
  {
    path: "/admission",
    element: AdmissionRoutes,
  },
  {
    path: "/events",
    element: eventRoutes,
  },
  {
    path: "/articles",
    element: ArticleRoutes,
  },
];

AllRoutes.forEach((route) => router.use(route.path, route.element));

export const MainRoutes = router;
