const staticPageController = (pageName, status) => (_, res) => status ?
    res.status(status).render(pageName) : res.render(pageName);

module.exports = staticPageController;