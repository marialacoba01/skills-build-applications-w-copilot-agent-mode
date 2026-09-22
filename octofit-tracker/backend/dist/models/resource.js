"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workout = exports.LeaderboardEntry = exports.Activity = exports.Team = exports.User = void 0;
const mongoose_1 = require("mongoose");
const resourceSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    data: { type: mongoose_1.Schema.Types.Mixed, default: {} },
}, { timestamps: true });
exports.User = (0, mongoose_1.model)('User', resourceSchema, 'users');
exports.Team = (0, mongoose_1.model)('Team', resourceSchema, 'teams');
exports.Activity = (0, mongoose_1.model)('Activity', resourceSchema, 'activities');
exports.LeaderboardEntry = (0, mongoose_1.model)('LeaderboardEntry', resourceSchema, 'leaderboard');
exports.Workout = (0, mongoose_1.model)('Workout', resourceSchema, 'workouts');
