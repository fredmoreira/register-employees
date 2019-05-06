import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  name: Joi.string().alphanum().min(2).max(30).required(),
  nif: Joi.number().integer().min(200000000).max(999999999).required(),
  address: Joi.string().alphanum().min(2).max(30)
});

export function validations(employee) {

  const result = Joi.validate(employee, schema);
  console.log(result);
  //return result;

}

export default validations;
// // Return result.
// const result = Joi.validate({
//   name: 'abc',
//   nif: 999555888
// }, schema);
// console.log(result);
// // result.error === null -> valid

// // You can also pass a callback which will be called synchronously with the validation result.
// Joi.validate({
//   username: 'abc',
//   nif: 999555444
// }, schema, function(err, value) {});
