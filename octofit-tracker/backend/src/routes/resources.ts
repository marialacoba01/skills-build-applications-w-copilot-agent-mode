import { Router, type Request, type Response } from 'express';
import {
  Activity,
  LeaderboardEntry,
  Team,
  User,
  Workout,
} from '../models/resource.js';

type ResourceModel = typeof User;

const createResourceRouter = (resourceModel: ResourceModel) => {
  const router = Router();

  router.get('/', async (_request: Request, response: Response) => {
    const resources = await resourceModel.find().sort({ createdAt: -1 }).lean();
    response.json(resources);
  });

  router.post('/', async (request: Request, response: Response) => {
    const resource = await resourceModel.create(request.body);
    response.status(201).json(resource);
  });

  return router;
};

export const usersRouter = createResourceRouter(User);
export const teamsRouter = createResourceRouter(Team);
export const activitiesRouter = createResourceRouter(Activity);
export const leaderboardRouter = createResourceRouter(LeaderboardEntry);
export const workoutsRouter = createResourceRouter(Workout);