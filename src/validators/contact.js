const Joi = require("joi");
const createContactValidator = Joi.object({
    firstName: Joi.string().required().min(2).max(64).trim(),
    lastName: Joi.string().required().min(2).max(64).trim(),
    email: Joi.string().required().trim(),
    company: Joi.string().min(2).max(128).trim().allow(null, ""),
    phoneNumber: Joi.string().required().min(8).max(20).trim(),
    address: Joi.string().required().min(6).max(255).trim(),
    message: Joi.string().trim().max(1000).allow(null, ""),
    captchaToken: Joi.string(),

});

module.exports = {
    createContactValidator
}