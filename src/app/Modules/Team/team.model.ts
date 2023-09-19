import mongoose, { Schema, model } from "mongoose";
import { ITeams } from "./team.interfaces";

const TeamModel = new Schema<ITeams>(
  {
    teamMember: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export const Team = model<ITeams>("team", TeamModel);
