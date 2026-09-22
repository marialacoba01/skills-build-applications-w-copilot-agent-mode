"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workoutsRouter = exports.leaderboardRouter = exports.activitiesRouter = exports.teamsRouter = exports.usersRouter = void 0;
const express_1 = require("express");
const resource_js_1 = require("../models/resource.js");
const createResourceRouter = (resourceModel) => {
    const router = (0, express_1.Router)();
    router.get('/', async (_request, response) => {
        const resources = await resourceModel.find().sort({ createdAt: -1 }).lean();
        response.json(resources);
    });
    router.post('/', async (request, response) => {
        const resource = await resourceModel.create(request.body);
        response.status(201).json(resource);
    });
    return router;
};
exports.usersRouter = createResourceRouter(resource_js_1.User);
exports.teamsRouter = createResourceRouter(resource_js_1.Team);
exports.activitiesRouter = createResourceRouter(resource_js_1.Activity);
exports.leaderboardRouter = createResourceRouter(resource_js_1.LeaderboardEntry);
exports.workoutsRouter = createResourceRouter(resource_js_1.Workout);
