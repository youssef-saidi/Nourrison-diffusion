const { DEVELOPEMENT_MODE } = require("./../configs/settings");

const httpsRedirect = (req, res, next) => {

    if ((DEVELOPEMENT_MODE || req.secure) && req.method === "GET")
        next();
    else {
        const secureRedirectLink = "https://" + req.headers.host + req.url;
        res.redirect(secureRedirectLink);
    }
};
module.exports = httpsRedirect;