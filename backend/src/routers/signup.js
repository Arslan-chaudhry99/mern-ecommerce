const express = require("express");
const Signupuser = require("../model/signup");
require("../DB/db");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const findEmail = await Signupuser.findOne({ email: email });
  if (!findEmail) {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const user = new Signupuser({
      username: username,
      email: email,
      password: hashedPass,
    });
    const result = await user.save();
  } else {
    console.log("user already exist");
  }
});

module.exports = router;
