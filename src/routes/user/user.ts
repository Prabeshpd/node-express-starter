import { Router } from 'express';

import authenticate from '../../middlewares/auth';
import * as userController from '../../controllers/userController';

const userRouter = Router();

userRouter.post('/', authenticate, userController.createUser);

export default userRouter;
