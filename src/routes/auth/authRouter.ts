import { Router } from 'express';

import loginSchema from '../../schemas/login';
import { schema } from '../../middlewares/validate';
import * as authController from '../../controllers/authController';

const authRouter = Router();

authRouter.post('/login', schema(loginSchema), authController.login);
authRouter.post('/refresh', authController.refresh);

export default authRouter;
