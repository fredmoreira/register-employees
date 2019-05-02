import Joi from '@hapi/joi';

const schema = Joi.object().keys({
    name: Joi.string().required(),
    nif: Joi.number().required(),
    address: Joi.string()
});

// Return result.
const result = Joi.validate({ name: 'abc', nif: 999555888 }, schema);
console.log(result);
// result.error === null -> valid

// You can also pass a callback which will be called synchronously with the validation result.
Joi.validate({ username: 'abc', nif: 999555444 }, schema, function (err, value) { });
