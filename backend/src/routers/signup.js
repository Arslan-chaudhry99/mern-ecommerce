const express = require("express");
const Signupuser = require("../model/signup");
require("../DB/db");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  res.cookie("arslan", "arslanchaudhry9911");

  try {
    const loginNow = await Signupuser.findOne({ username: username });
    if (loginNow) {
      const isMatch = await bcrypt.compare(password, loginNow.password);
      if (isMatch) {
        const token = await loginNow.generateAuthToken();
        res.cookie("userToken", token, {
          expires: new Date(Date.now() + 1800000),
          httpOnly: true,
        });
      } else {
        () => res.status(404).json({ error: " Login failed" });
      }
    } else {
      () => res.status(404).json({ error: " Login failed" });
    }
  } catch (error) {
    () => res.status(500).json({ error: " Login failed" });
  }
});

module.exports = router;
