const bodyJoiValidatorMiddleware = (joiValidator) => async(req, res, next) => {
    try {
        req.body = await joiValidator.validateAsync(req.body, {
            abortEarly: false,
        });
    } catch (err) {
        return res.status(400).json(err.details);
    }
    next();
};
module.exports = bodyJoiValidatorMiddleware;