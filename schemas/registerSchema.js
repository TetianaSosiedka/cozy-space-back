const Joi = require("joi");

const registerSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
  name: Joi.string().required(),
  surname: Joi.string().required(),
  phone: Joi.string().required(),
  country: Joi.string(),
  region: Joi.string(),
  city: Joi.string(),
  index: Joi.string(),
  post: Joi.string(),
});

module.exports = registerSchema;
