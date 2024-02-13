// server entrypoint

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const keys = require("./config/keys");
const setupDB = require("./utils/db");
const routes = require("./routes");

const { port } = keys;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet({ contentSecurityPolicy: true, frameguard: true }));
app.use(cors());

setupDB();

app.use(routes);

const server = app.listen(port, () => {
  console.log(
    `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
  );
});
