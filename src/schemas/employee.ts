import * as Joi from 'joi';

const employee = {
  email: Joi.string().email().max(50).required(),
  name: Joi.string().max(30).required(),
  hire_date: Joi.date().required()
};

export default employee;
