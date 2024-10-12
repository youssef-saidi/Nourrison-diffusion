const createContact = require("./controllers/createContact");
const serveVideoController = require("./controllers/serveVideo");
const staticPageController = require("./controllers/staticPageController");
const bodyJoiValidatorMiddleware = require("./middlewares/bodyJoiValidator");
const { createContactValidator } = require("./validators/contact");

const routes = [{
        url: "/home",
        get: staticPageController("home"),
    },
    {
        url: "/",
        get: staticPageController("home"),
    },
    {
        url: "/home-page-video",
        get: serveVideoController("public/assets/home/nourrisson-diffusion.mp4")
    },
    {
        url: "/about",
        get: staticPageController("about"),
    },
    {
        url: "/contact",
        middlewares: {
            post: bodyJoiValidatorMiddleware(createContactValidator)
        },
        post: createContact,
        get: staticPageController("contact"),
    },
    {
        url: "/product/lfa-chucks",
        get: staticPageController("lfa-chucks"),
    },
    {
        url: "/product/drill-bits",
        get: staticPageController("drill-bits"),
    },
    {
        url: "/product/milled-file",
        get: staticPageController("milled-file"),
    },
    {
        url: "/product/thread-restorers",
        get: staticPageController("thread-restorers"),
    }, { url: "*", get: staticPageController("404", 404) },
];
module.exports = routes;