const mongoose = require("mongoose");
const signup = new mongoose.Schema({
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

const Signupuser = new mongoose.model("signup", signup);
module.exports = Signupuser;
