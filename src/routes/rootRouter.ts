import { Router } from 'express';

import homeRouter from './home';
import authRouter from './auth/authRouter';

const generalRouter = Router();

generalRouter.use(homeRouter);
generalRouter.use(authRouter);

export { generalRouter };
