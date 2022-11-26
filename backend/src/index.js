const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "./config.env") });
app.use("/public", express.static("public"));

app.use(express.json());
const PORT = process.env.PORT || 5000

app.use(require("./routers/signup"));
app.use(require("./routers/Post"));


app.listen(PORT, () => {
  console.log("running on 5000");
});
