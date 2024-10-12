// add routes list ( see routes file ) to express app
const setAppRoutes = (app, routes) => {
    routes.forEach((route) => {
        const url = route.url;
        delete route.url;
        // middlewares
        if (route.middlewares) {
            const middlewareMethods = Object.keys(route.middlewares);
            middlewareMethods.forEach((method) => app[method](url, route.middlewares[method]));
            delete route.middlewares;
        }
        // methods
        const methods = Object.keys(route);
        methods.forEach((method) => app[method](url, route[method]));
    });
};

module.exports = setAppRoutes;