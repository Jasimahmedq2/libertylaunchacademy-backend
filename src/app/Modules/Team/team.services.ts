import { Types } from "mongoose";
import { Team } from "./team.model";
import { ITeams } from "./team.interfaces";
import ApiError from "../../../errors/apiError";
import httpStatus from "http-status";

const addMember = async (id: Types.ObjectId): Promise<ITeams> => {
  const existTeamMember = await Team.findOne({
    teamMember: id,
  });
  if (existTeamMember) {
    throw new ApiError(httpStatus.NOT_FOUND, "already the team member exist");
  }
  const result = (
    await Team.create({
      teamMember: id,
    })
  ).populate("teamMember");
  return result;
};

const retrieveTeamMembers = async (): Promise<ITeams[] | null> => {
  const result = await Team.find({}).populate("teamMember");
  return result;
};

const retrieveSingleTeamMembers = async (
  id: string
): Promise<ITeams | null> => {
  const result = await Team.findById(id);
  return result;
};
export const TeamServices = {
  addMember,
  retrieveTeamMembers,
  retrieveSingleTeamMembers,
};
