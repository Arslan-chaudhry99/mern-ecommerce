const mongoose = require("mongoose");
const Login = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Login_User = new mongoose.model("Login", Login);
module.exports = Login_User;