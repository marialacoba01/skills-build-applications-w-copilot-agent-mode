"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const resource_js_1 = require("../models/resource.js");
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
// Seed the octofit_db database with test data.
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            resource_js_1.User.deleteMany({}),
            resource_js_1.Team.deleteMany({}),
            resource_js_1.Activity.deleteMany({}),
            resource_js_1.LeaderboardEntry.deleteMany({}),
            resource_js_1.Workout.deleteMany({}),
        ]);
        await resource_js_1.User.insertMany([
            { name: 'Avery Chen', data: { email: 'avery@example.com', level: 12 } },
            { name: 'Jordan Smith', data: { email: 'jordan@example.com', level: 9 } },
            { name: 'Morgan Lee', data: { email: 'morgan@example.com', level: 15 } },
        ]);
        await resource_js_1.Team.insertMany([
            { name: 'Summit Striders', data: { memberCount: 8, goal: 'Run 100 km' } },
            { name: 'Core Collective', data: { memberCount: 6, goal: 'Complete 40 workouts' } },
        ]);
        await resource_js_1.Activity.insertMany([
            { name: 'Morning run', data: { user: 'Avery Chen', type: 'running', minutes: 32, points: 320 } },
            { name: 'Strength circuit', data: { user: 'Jordan Smith', type: 'strength', minutes: 45, points: 270 } },
            { name: 'Evening ride', data: { user: 'Morgan Lee', type: 'cycling', minutes: 55, points: 440 } },
        ]);
        await resource_js_1.LeaderboardEntry.insertMany([
            { name: 'Morgan Lee', data: { rank: 1, points: 1840, streak: 12 } },
            { name: 'Avery Chen', data: { rank: 2, points: 1620, streak: 8 } },
            { name: 'Jordan Smith', data: { rank: 3, points: 1410, streak: 6 } },
        ]);
        await resource_js_1.Workout.insertMany([
            { name: 'Full-body foundation', data: { difficulty: 'beginner', minutes: 30, focus: 'full body' } },
            { name: 'Tempo intervals', data: { difficulty: 'intermediate', minutes: 25, focus: 'cardio' } },
            { name: 'Mobility reset', data: { difficulty: 'beginner', minutes: 15, focus: 'mobility' } },
        ]);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
