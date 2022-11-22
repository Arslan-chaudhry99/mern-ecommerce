const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "./config.env") });
app.use("/public", express.static("public"));
require("./DB/db");
app.use(express.json());
const PORT = process.env.PORT;

app.use(require("./routers/signup"));
app.use(require("./routers/Post"));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("running on 5000");
});
