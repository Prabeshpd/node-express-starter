import { isEmpty } from 'ramda';
import httpStatusCode from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import logger from '../utils/logger';
import ErrorFormatter from '../utils/ErrorHandler';

/**
 * Error response middleware for 404 not found. This middleware function should be at the very bottom of the stack.
 *
 * @param {any} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function notFoundHandler(err: any, req: Request, res: Response, next: NextFunction) {
  res.status(httpStatusCode.NOT_FOUND).json({
    error: {
      code: 'NOT_FOUND_ERROR',
      message: httpStatusCode.getStatusText(httpStatusCode.NOT_FOUND)
    }
  });
}

/**
 * Middleware to handle empty JSON body requests. Message is hard-coded
 * as middleware (bindIntl.bindCoreIntl) to bind i18n of core/api
 * to request runs after this middleware.
 *
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 */
export function emptyBody(request: Request, response: Response, next: NextFunction) {
  const { body, method } = request;
  const disallowedHttpHeaders: any = ['PUT', 'POST', 'PATCH'];

  if (request.is('application/json') && disallowedHttpHeaders.includes(method) && isEmpty(body)) {
    logger.error('JSON: Empty JSON body');

    const error = new ErrorFormatter({
      code: 'INVALID_PAYLOAD',
      message: 'Payload is invalid.'
    }).construct();

    response.status(httpStatusCode.BAD_REQUEST).json(error);

    return;
  }

  next();
}

/**
 * To handle errors from body parser for cases such as invalid JSON sent through
 * the body (https://github.com/expressjs/body-parser#errors).
 *
 * @param  {any}   err
 * @param  {Request}   req
 * @param  {Response}   res
 * @param  {NextFunction} next
 */
export function bodyParser(err: any, req: Request, res: Response, next: NextFunction) {
  logger.error(err.message);

  res.status(err.status).json({
    error: {
      code: err.status,
      message: httpStatusCode.getStatusText(err.status)
    }
  });
}
