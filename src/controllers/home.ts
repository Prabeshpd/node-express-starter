import { Request, Response } from 'express';
import * as homeService from '../services/home';

/**
 * Get app information.
 *
 * @param {Request} request
 * @param {Response} reply
 */
export async function getAppInfo(request: Request, reply: Response) {
  const appInfo = await homeService.getAppInfo();

  reply.send(appInfo);
}
