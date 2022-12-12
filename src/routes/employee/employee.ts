import { Router } from 'express';

import authenticate from '../../middlewares/auth';
import { schema } from '../../middlewares/validate';
import employeeSchema from '../../schemas/employee';
import * as employeeController from '../../controllers/employeeController';

const employeeRouter = Router();

employeeRouter.get('/', authenticate, employeeController.fetch);
employeeRouter.post('/', authenticate, schema(employeeSchema), employeeController.create);

export default employeeRouter;
