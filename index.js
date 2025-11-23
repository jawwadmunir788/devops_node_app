const app = require("./app");
const config = require("./src/config");

// Prevent server from starting during test runs
if (process.env.NODE_ENV !== "test") {
  app.listen(config.PORT, () =>
    console.log(`${config.APP_NAME} running on port ${config.PORT}`)
  );
}

module.exports = app;