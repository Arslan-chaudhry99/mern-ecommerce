const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "./config.env") });
app.use("/public", express.static("public"));
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(require("./controllers/signup"));
app.use(require("./controllers/Post"));
app.use(require("./controllers/Reviews"));

app.listen(PORT, () => {
  console.log("running on 5000");
});
