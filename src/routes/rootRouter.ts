import { Router } from 'express';

import homeRouter from './home';
import authRouter from './auth/authRouter';
import userRouter from './user/user';

const appRouter = Router();
const generalRouter = Router();

generalRouter.use(homeRouter);
appRouter.use('/auth', authRouter);
appRouter.use('/users', userRouter);

export { generalRouter, appRouter };
