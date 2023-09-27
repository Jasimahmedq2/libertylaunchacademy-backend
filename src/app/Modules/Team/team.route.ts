import express from "express";
import { TeamControllers } from "./team.controller";
const router = express.Router();

router.post("/add-team-member", TeamControllers.addMember);
router.get("/get-team-member", TeamControllers.retrieveTeamMembers);
router.get("/get-team-member/:id", TeamControllers.retrieveSingleTeamMembers);

export const teamRoutes = router;
