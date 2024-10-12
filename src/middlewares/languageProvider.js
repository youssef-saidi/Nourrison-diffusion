const { ALLOWED_LANGUAGES, LANGUAGE_COOKIES_EXPIRATION_DURATION } = require("../configs/settings");


const getClientLanguage = ({ lang }) => {
    if (lang && ALLOWED_LANGUAGES.includes(lang)) {
        return lang;
    }
    return ALLOWED_LANGUAGES[0];
};

const languageProvider = (req, res, next) => {
    if (req.query.clang) {
        res.cookie("lang", getClientLanguage({ lang: req.query.clang }), {
            maxAge: LANGUAGE_COOKIES_EXPIRATION_DURATION,
        });
    }
    next();
};
module.exports = languageProvider;