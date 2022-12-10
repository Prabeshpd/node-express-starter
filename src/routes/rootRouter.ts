import { Router } from 'express';

import homeRouter from './home';

const generalRouter = Router();

generalRouter.use(homeRouter);

export { generalRouter };
