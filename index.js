const express = require("express");
const app = express();
const config = require("./src/config");
const routes = require("./src/routes");

// Middlewares
app.use(express.json());
app.use("/", routes);

// Export app (important for tests)
module.exports = app;

// Start server only if not in test mode
if (require.main === module) {
  app.listen(config.PORT, () =>
    console.log(`${config.APP_NAME} running on port ${config.PORT}`)
  );
}