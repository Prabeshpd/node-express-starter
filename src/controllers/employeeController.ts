import { Response, NextFunction, Request } from 'express';
import httpStatusCode from 'http-status-codes';
import { AuthorizedRequest } from '../middlewares/auth';

import * as employeeService from '../services/employee';

/**
 * Get app information.
 *
 * @param {Request} request
 * @param {Response} response
 */
export async function fetch(request: Request, response: Response, next: NextFunction) {
  const authorizedRequest = request as AuthorizedRequest;
  const userId = authorizedRequest.user.id;
  const paginationParams = request.query;

  employeeService
    .fetchEmployee(userId, paginationParams)
    .then((data) => response.status(httpStatusCode.OK).json(data))
    .catch((e) => next(e));
}

/**
 * Get app information.
 *
 * @param {Request} request
 * @param {Response} response
 */
export async function create(request: Request, response: Response, next: NextFunction) {
  const authorizedRequest = request as AuthorizedRequest;
  const userId = authorizedRequest.user.id;
  const payload = { ...request.body, userId };
  employeeService
    .create(payload)
    .then((data) => response.status(httpStatusCode.OK).json(data))
    .catch((e) => next(e));
}
