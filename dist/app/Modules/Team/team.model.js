"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const mongoose_1 = require("mongoose");
const TeamModel = new mongoose_1.Schema({
    teamMember: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
    },
}, { timestamps: true });
exports.Team = (0, mongoose_1.model)("team", TeamModel);
