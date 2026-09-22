import { Schema, model } from 'mongoose';

const resourceSchema = new Schema(
  {
    name: { type: String, required: true },
    data: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true },
);

export const User = model('User', resourceSchema, 'users');
export const Team = model('Team', resourceSchema, 'teams');
export const Activity = model('Activity', resourceSchema, 'activities');
export const LeaderboardEntry = model('LeaderboardEntry', resourceSchema, 'leaderboard');
export const Workout = model('Workout', resourceSchema, 'workouts');