import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  name: Joi.string().alphanum().min(2).max(30).required().error(errors => {
    return {
      message: 'name is required.'
    };
  }),
  nif: Joi.number().integer().min(200000000).max(999999999).required().error(
    errors => {
      return {
        message: 'nif is required.'
      };
    }),
  address: Joi.string().alphanum().min(2).max(30)
});
export default schema;
