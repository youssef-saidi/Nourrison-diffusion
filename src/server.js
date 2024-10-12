const express = require("express");
const configExpressApp = require("./configs/express");
const routes = require("./routes");
const setAppRoutes = require("./utils/setAppRoutes");
const { connectSequelize } = require("./configs/sequelize");


const app = express();
configExpressApp(app);
connectSequelize();


setAppRoutes(app, routes);
module.exports = app;