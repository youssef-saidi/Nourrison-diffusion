const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const i18n = require("i18n-express");
const rateLimit = require("express-rate-limit");
const languageProvider = require("../middlewares/languageProvider");
const adminBroRouter = require("./admin-bro");
const { RATE_LIMIT_CONFIGS } = require("./settings");
const httpsRedirect = require("../middlewares/httpsRedirect");

const configExpressApp = (app) => {
    app.use(express.static("public"));
    app.use(cookieParser());
    app.use(bodyParser.json());
    // app.use(httpsRedirect);
    app.use(rateLimit(RATE_LIMIT_CONFIGS));
    app.use(languageProvider);
    app.use(adminBroRouter);
    app.set("views", path.resolve("src/views"));
    app.engine("html", require("ejs").renderFile);
    app.set("view engine", "ejs");
    app.use(i18n({
        translationsPath: path.resolve("src/languages"),
        defaultLang: "fr",
        cookieLangName: "lang",
        siteLangs: ["fr", "eng"],
        textsVarName: "trans"
    }));
}

module.exports = configExpressApp;