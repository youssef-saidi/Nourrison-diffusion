const { PORT } = require("./src/configs/settings");
const app = require("./src/server");


app.listen(PORT, () =>
    console.log(`App is listening at http://localhost:${PORT}`)
);