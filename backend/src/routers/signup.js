const express = require("express");
const Signupuser = require("../model/signup");
require("../DB/db");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// to create a new user
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
// to reset password.
router.post("/ResetPassword", async (req, res) => {
  const { New, Old, username } = req.body;
  try {
    const findUser = await Signupuser.find({ username: username });

    if (findUser.length > 0) {
      const isMatch = await bcrypt.compare(Old, findUser[0].password);
      if (isMatch) {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(New, salt);
        let _id = findUser[0]._id;
        let resFromServer = await Signupuser.findByIdAndUpdate(
          { _id },
          {
            $set: {
              password: hashedPass,
            },
          }
        );
        if (resFromServer) {
          return res
            .status(200)
            .json({ message: "Password update successfuly." });
        }
        return res.status(200).json({ error: "Try again later." });
      }

      return res.status(400).json({ error: "wrong credentials" });
    }

    return res.status(400).json({ error: "wrong credentials" });
  } catch (error) {
    return res.status(500).json({ error: "server error.Try again later!" });
  }
});
// to login a user
router.post("/admin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const loginNow = await Signupuser.findOne({ username: username });

    if (loginNow) {
      const isMatch = await bcrypt.compare(password, loginNow.password);

      if (isMatch) {
        const token = await loginNow.generateAuthToken();
        res
          .status(200)
          .cookie("userToken", token, {
            expires: new Date(Date.now() + 900000),
          })
          .json({ success: " Login success" });
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
// logout user
router.post("/logout", (req, res) => {
  res
    .status(200)
    .clearCookie("userToken")
    .json({ message: "Logout Successfully" });
});

module.exports = router;
