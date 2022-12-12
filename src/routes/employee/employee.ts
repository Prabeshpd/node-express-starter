import { Router } from 'express';

import authenticate from '../../middlewares/auth';
import * as employeeController from '../../controllers/employeeController';

const employeeRouter = Router();

employeeRouter.get('/', authenticate, employeeController.fetch);
employeeRouter.post('/', authenticate, employeeController.create);

export default employeeRouter;
