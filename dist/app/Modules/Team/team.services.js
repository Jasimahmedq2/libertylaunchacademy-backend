"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamServices = void 0;
const team_model_1 = require("./team.model");
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const addMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existTeamMember = yield team_model_1.Team.findOne({
        teamMember: id,
    });
    if (existTeamMember) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "already the team member exist");
    }
    const result = (yield team_model_1.Team.create({
        teamMember: id,
    })).populate("teamMember");
    return result;
});
const retrieveTeamMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield team_model_1.Team.find({}).populate("teamMember");
    return result;
});
const retrieveSingleTeamMembers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield team_model_1.Team.findOne({ teamMember: id }).populate("teamMember");
    return result;
});
exports.TeamServices = {
    addMember,
    retrieveTeamMembers,
    retrieveSingleTeamMembers,
};
