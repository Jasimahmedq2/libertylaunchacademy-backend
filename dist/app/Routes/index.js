"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../Modules/User/user.routes");
const team_route_1 = require("../Modules/Team/team.route");
const admission_route_1 = require("../Modules/admission/admission.route");
const event_routes_1 = require("../Modules/events/event.routes");
const article_routes_1 = require("../Modules/article/article.routes");
const router = express_1.default.Router();
const AllRoutes = [
    {
        path: "/users",
        element: user_routes_1.userRoutes,
    },
    {
        path: "/teams",
        element: team_route_1.teamRoutes,
    },
    {
        path: "/admission",
        element: admission_route_1.AdmissionRoutes,
    },
    {
        path: "/events",
        element: event_routes_1.eventRoutes,
    },
    {
        path: "/articles",
        element: article_routes_1.ArticleRoutes,
    },
];
AllRoutes.forEach((route) => router.use(route.path, route.element));
exports.MainRoutes = router;
