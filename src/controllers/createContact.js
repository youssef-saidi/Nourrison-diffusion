const Contact = require("../models/contact");
const validateGoogleReCaptchaToken = require("./../utils/validateGoogleReCaptchaToken");
const createContact = async(req, res) => {
    console.log(req.body);
    if (await validateGoogleReCaptchaToken(req.body.captchaToken)) {
        try {
            const createdContact = await Contact.create(req.body);
            return res.json(createdContact);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
    return res.status(400).json({ "message": "HUMAN_NOT_VERIFIED" });
};

module.exports = createContact;