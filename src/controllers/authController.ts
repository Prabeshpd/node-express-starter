import { Request, Response } from 'express';
import httpStatusCode from 'http-status-codes';

import * as authService from '../services/auth';

/**
 * Get app information.
 *
 * @param {Request} request
 * @param {Response} response
 */
export async function login(request: Request, response: Response) {
  try {
    const payload = request.body;
    const responsePayload = await authService.login(payload);

    return response.status(httpStatusCode.OK).json(responsePayload);
  } catch (err: any) {
    const statusCode = err.code ? err.code : httpStatusCode.INTERNAL_SERVER_ERROR;

    return response.status(statusCode).json(err);
  }
}

/**
 * Refresh access token.
 *
 * @param {Request} req
 * @param {Response} response
 */
export async function refresh(request: Request, response: Response) {
  try {
    const payload = request.body;
    const responsePayload = await authService.refresh(payload);

    await response.status(httpStatusCode.OK).json(responsePayload);
  } catch (err: any) {
    console.log(err);
    const statusCode = err.code ? err.code : httpStatusCode.INTERNAL_SERVER_ERROR;

    return response.status(statusCode).json(err);
  }
}
