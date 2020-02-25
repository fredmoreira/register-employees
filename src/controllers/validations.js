/* eslint-disable no-magic-numbers */
import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  name: Joi.string()
    .min(2)
    .max(30)
    .required()
    .error(() => ({
      message: 'name is required.',
    })),
  nif: Joi.number()
    .integer()
    .min(200000000)
    .max(999999999)
    .required()
    .error(() => ({
      message: 'nif is required.',
    })),
  address: Joi.string()
    .min(2)
    .max(30),
});
export default schema;
