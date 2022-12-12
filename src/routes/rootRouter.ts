import { Router } from 'express';

import homeRouter from './home';
import authRouter from './auth/authRouter';
import userRouter from './user/user';
import employeeRouter from './employee/employee';

const appRouter = Router();
const generalRouter = Router();

generalRouter.use(homeRouter);
appRouter.use('/auth', authRouter);
appRouter.use('/users', userRouter);
appRouter.use('/employees', employeeRouter);

export { generalRouter, appRouter };
