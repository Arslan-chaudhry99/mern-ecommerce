const express = require("express");
const Signupuser = require("../model/signup");
require("../DB/db");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
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

// reset from outer
router.post("/ResetPass", async (req, res) => {
  const { email } = req.body;
  let authentication = await Signupuser.find({ email: email });

  try {
    if (authentication !== 0) {
      const transpoter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.gmail, // generated ethereal user
          pass: process.env.password, // generated ethereal password
        },
      });
      const mailOpctions = {
        from: process.env.gmail,
        to: email,
        subject: "Mobilows",
        html: "<p>Your OTP is:<strong>21345</strong></p>",
      };
      transpoter.sendMail(mailOpctions, (error, info) => {
        if (error) {
          return res.status(500).json({
            error: "Error 505.contact with chaudhry.",
          });
        } else {
          return res.status(200).json({
            success:
              "Reset password link has been send to your email successfuly.",
          });
        }
      });
    }
    return res.status(200).json({
      success: "not possible",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error 505.",
    });
  }
});
module.exports = router;
