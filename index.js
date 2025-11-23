const app = require("./app");
const config = require("./src/config");

app.listen(config.PORT, () =>
  console.log(`${config.APP_NAME} running on port ${config.PORT}`)
);