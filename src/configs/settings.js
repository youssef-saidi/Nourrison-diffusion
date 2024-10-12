const { config } = require("dotenv");
config();

const DEVELOPEMENT_MODE = false;
const PORT = process.env.PORT || 4000;
const RATE_LIMIT_CONFIGS = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200,
};
const ALLOWED_LANGUAGES = ["fr", "eng"];
const LANGUAGE_COOKIES_EXPIRATION_DURATION = 1000 * 60 * 60 * 24 * 365; // one year
const INIT_ADMIN_PASSWORD = "admintestpass1234";
const GOOGLE_CAPTCHA_SECRET_KEY = "6LdQZb0aAAAAAI7eNw-_YKJxQtOeofH1P0vfv-AI";
const DATA_BASE_CONFIGS = {
    host: "stwsikrnour.mysql.db",
    user: "stwsikrnour",
    password: "Nour123456",
    db: "stwsikrnour",
    dialect: "mysql",
}
module.exports = {
    PORT,
    RATE_LIMIT_CONFIGS,
    ALLOWED_LANGUAGES,
    LANGUAGE_COOKIES_EXPIRATION_DURATION,
    INIT_ADMIN_PASSWORD,
    GOOGLE_CAPTCHA_SECRET_KEY,
    DEVELOPEMENT_MODE,
    DATA_BASE_CONFIGS
}