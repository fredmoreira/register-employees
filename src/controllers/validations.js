import Joi from '@hapi/joi';

const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    nif: Joi.number().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()]
});

// Return result.
const result = Joi.validate({ username: 'abc', birthyear: 1994 }, schema);
// result.error === null -> valid

// You can also pass a callback which will be called synchronously with the validation result.
Joi.validate({ username: 'abc', birthyear: 1994 }, schema, function (err, value) { });
