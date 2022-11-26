const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  pticeoyeLink: {
    type: String,
    require: true,
  },
  images: {
    type: Array,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
