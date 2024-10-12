const axios = require("axios");
const { GOOGLE_CAPTCHA_SECRET_KEY } = require("./../configs/settings");

const getVerifyLink = (token) => `https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_CAPTCHA_SECRET_KEY}&response=${token}`;

const validateGoogleReCaptchaToken = async(token) => {
    try {
        const { data: { success } } = await axios.post(getVerifyLink(token));
        return success;
    } catch (err) {}

    return false;
}
module.exports = validateGoogleReCaptchaToken;