const express = require("express");
const app = express();
const config = require("./src/config");
const { handleError } = require("./src/helpers/error");
const router = require("./src/routes");
require("./src/helpers/db");

app.use(express.json());

app.use("/api", router);

app.use(handleError);
app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);
});
