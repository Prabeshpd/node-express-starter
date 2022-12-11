import httpStatus from 'http-status-codes';

import * as crypt from '../utils/crypt';
import ErrorFormatter from '../utils/ErrorHandler';
import User, { UserPayload, UserSchema } from '../models/user';
/**
 * Find user by email.
 *
 * @param {string} email
 * @returns {Promise<UserSchema>}
 */
export async function findUserByEmail(email: string): Promise<UserSchema> {
  const user = await User.fetchByEmail(email);
  if (!user) {
    const error = new ErrorFormatter({
      code: 'BadRequest',
      message: 'username or password does not match'
    }).construct();

    throw { statusCode: httpStatus.BAD_REQUEST, error };
  }

  if (!user.isActive) {
    const error = new ErrorFormatter({
      code: 'BadRequest',
      message: 'User is deactivated'
    }).construct();

    throw { statusCode: httpStatus.BAD_REQUEST, error };
  }

  return user;
}

export async function addUser(userpayload: UserPayload) {
  try {
    const password = userpayload.password;
    const cryptedPassword = await crypt.hash(password);
    const payload = { ...userpayload, password: cryptedPassword, is_active: true };
    await User.insertData(payload);
  } catch (err) {
    console.log(err);
    const error = new ErrorFormatter({
      code: 'InternalServerError',
      message: 'OOPS! Something went wrong'
    }).construct();

    throw { statusCode: httpStatus.INTERNAL_SERVER_ERROR, error };
  }
}