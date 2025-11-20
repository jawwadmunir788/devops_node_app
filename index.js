const express = require("express");
const app = express();
const config = require("./src/config");
const routes = require("./src/routes");

// Middlewares
app.use(express.json());
app.use("/", routes);

// Start server
app.listen(config.PORT, () =>
  console.log(`${config.APP_NAME} running on port ${config.PORT}`)
);
