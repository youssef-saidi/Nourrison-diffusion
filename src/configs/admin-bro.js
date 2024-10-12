const AdminBro = require("admin-bro");
// const AdminBroMongoose = require("@admin-bro/mongoose");
const AdminBroSequelize = require('@admin-bro/sequelize')
const AdminBroExpress = require("@admin-bro/express");
const bcrypt = require("bcryptjs");
const { Router } = require("express");
const User = require("../models/user");
const Contact = require("../models/contact");
// models

const canModifyUsers = ({ currentAdmin }) =>
    currentAdmin && currentAdmin.canModifyUsers;

const cryptUserPasswordPayload = (req) => {
    if (req.payload.password) {
        req.payload = {
            ...req.payload,
            password: bcrypt.hashSync(req.payload.password),
        };
    }
    return req;
};

const userResource = {
    resource: User,
    options: {
        properties: {
            password: {
                type: "string",
                isVisible: {
                    list: false,
                    edit: true,
                    filter: false,
                    show: false,
                },
            },
        },
        actions: {
            new: {
                before: cryptUserPasswordPayload,
                isAccessible: canModifyUsers,
            },
            edit: { before: cryptUserPasswordPayload, isAccessible: canModifyUsers },
            delete: { isAccessible: canModifyUsers },
        },
        navigation: { name: null, icon: 'Person' }
    },
};

const contactRessource = {
    resource: Contact,
    options: {
        navigation: { name: null, icon: 'Person' }
    }
};

const adminBroOptions = {
    resources: [contactRessource, userResource],
    rootPath: "/nourrisson-diffusion-secure-dashboard",
    loginPath: "/nourrisson-diffusion-secure-dashboard/login",
    logoutPath: "/nourrisson-diffusion-secure-dashboard/login",
    branding: {
        logo: "/assets/logo.svg"
    }
};

AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro(adminBroOptions);

const adminBroRouter = Router();

adminBroRouter.use(
    adminBro.options.rootPath,
    AdminBroExpress.buildAuthenticatedRouter(adminBro, {
        cookiePassword: "session Key",
        authenticate: async(email, password) => {
            const user = await User.findOne({ where: { email } });
            if (user) {
                if (bcrypt.compareSync(password, user.password)) return user;
            }
            return false;
        },
    })
);

module.exports = adminBroRouter;