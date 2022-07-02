const express = require("express");
const config = require("./src/config");
const router = require("./src/routes");
const app = express();
require("./src/helpers/db");

app.use(express.json());

app.use("/api", router);

app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);
});
