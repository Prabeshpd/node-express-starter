import { NextFunction, Request, Response } from 'express';

import * as jwt from '../utils/jwt';
import { UserDetail } from '../models/user';
import ErrorFormatter from '../utils/ErrorHandler';

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
        const error = new ErrorFormatter({ code: 'BadRequest', message: 'No authorization header set' })
          .addInnerError({ code: 'NO_AUTHORIZATION_HEADER' })
          .construct();

        return next(error);
      }

      if (!token.includes('Bearer')) {
        const error = new ErrorFormatter({
          code: 'BadRequest',
          message: "Authorization header doesn't include a Bearer token"
        })
          .addInnerError({ code: 'NO_BEARER_TOKEN' })
          .construct();

        return next(error);
      }

      const bearerToken = token.split(' ')[1];

      try {
        const decodedResult = (await jwt.verifyToken(bearerToken, secret)) as UserDetail;
        request.user = decodedResult;

        next();
      } catch (err) {
        const error = new ErrorFormatter({
          code: 'UNAUTHORIZED',
          message: 'INVALID TOKEN'
        });

        return next(error);
      }
    } catch (err) {
      const error = new ErrorFormatter({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Something went wrong'
      });

      return next(error);
    }
  };
}

export default authenticate;
