import * as Joi from 'joi';

const authLogin = {
  email: Joi.string().email().max(50).required(),
  password: Joi.string().required()
};

export default authLogin;
