const express = require("express");
const route = require("./routes/client/index.route");

const database = require("./config/database")
require('dotenv').config();

database.connetc();

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

//Routes
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});