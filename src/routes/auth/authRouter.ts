import { Router } from 'express';
import * as authController from '../../controllers/authController';

const authRouter = Router();

authRouter.post('/login', authController.login);
authRouter.post('/refresh', authController.refresh);

export default authRouter;
