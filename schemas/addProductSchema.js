const Joi = require("joi");

const addProductSchema = Joi.object({
  coverImg: Joi.string(),
  galerry: Joi.array(),
  title: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().required(),
  volume: Joi.number().required(),
  brand: Joi.string().required(),
  categorie: Joi.string().required(),
  markers: Joi.array().required(),
  new: Joi.bool(),
  available: Joi.bool(),
  shortDescription: Joi.string().required(),
  fullDescription: Joi.string().required(),
});

module.exports = addProductSchema;
