import { NextFunction, Request, Response } from 'express';

import * as jwt from '../utils/jwt';
import { UserDetail } from '../models/user';
import ErrorFormatter from '../utils/ErrorHandler';
import { ERROR_TYPES } from '../constants/enums';

interface AuthorizedRequest extends Request {
  user: UserDetail;
}

async function authenticate() {
  return async (request: AuthorizedRequest, response: Response, next: NextFunction) => {
    try {
      const { accessTokenSecret } = process.env;

      const secret = `${accessTokenSecret}`;
      const token = request.headers.authorization;

      if (!token) {
        const error = new ErrorFormatter({
          code: ERROR_TYPES.BAD_REQUEST,
          message: 'No authorization header set'
        }).construct();

        return next(error);
      }

      if (!token.includes('Bearer')) {
        const error = new ErrorFormatter({
          code: ERROR_TYPES.BAD_REQUEST,
          message: "Authorization header doesn't include a Bearer token"
        }).construct();

        return next(error);
      }

      const bearerToken = token.split(' ')[1];

      try {
        const decodedResult = (await jwt.verifyToken(bearerToken, secret)) as UserDetail;
        request.user = decodedResult;

        next();
      } catch (err) {
        const error = new ErrorFormatter({
          code: ERROR_TYPES.UNAUTHORIZED,
          message: 'INVALID TOKEN'
        }).construct();

        return next(error);
      }
    } catch (err) {
      const error = new ErrorFormatter({
        code: ERROR_TYPES.INTERNAL_SERVER_ERROR,
        message: 'Something went wrong'
      }).construct();

      return next(error);
    }
  };
}

export default authenticate;
