"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./config/database");
const resources_js_1 = require("./routes/resources.js");
const app = (0, express_1.default)();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const apiUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${port}`;
app.use(express_1.default.json());
app.use('/api/users', resources_js_1.usersRouter);
app.use('/api/teams', resources_js_1.teamsRouter);
app.use('/api/activities', resources_js_1.activitiesRouter);
app.use('/api/leaderboard', resources_js_1.leaderboardRouter);
app.use('/api/workouts', resources_js_1.workoutsRouter);
app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok', service: 'octofit-tracker-api', apiUrl });
});
app.listen(port, () => {
    console.log(`OctoFit Tracker API listening at ${apiUrl}`);
});
