const express = require("express");
const Signupuser = require("../model/signup");
require("../DB/db");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
// to create a new user
const secKey = process.env.SECRET_KEY;
// create a email transport
const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.gmail, // generated ethereal user
    pass: process.env.password, // generated ethereal password
  },
});
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
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
      console.log(result);
      if (result) {
        return res.status(201).json({ message: "User create Successfully" });
      }
    } else {
      return res.status(203).json({ message: "User already exist." });
    }
  } catch (error) {
    return res.status(500).json({ error: "Please Try again later." });
  }
});
// to reset password when user login.
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
        return res.status(205).json({ message: "Try again later." });
      }

      return res.status(205).json({ message: "wrong credentials" });
    }

    return res.status(203).json({ message: "wrong credentials" });
  } catch (error) {
    return res.status(205).json({ message: "server error.Try again later!" });
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
router.post("/changePassword", async (req, res) => {
  const { password, id, token } = req.body;
  try {
    let findUser = await Signupuser.findOne({ _id: id, veryfiyuser: token });

    const veryfiyToken = jwt.verify(token, secKey);
    if (findUser && veryfiyToken._id) {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      const setToken = await Signupuser.findByIdAndUpdate(
        { _id: id },
        { password: hashedPass },
        { new: true }
      );
      console.log(setToken);
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/sendpasswordlink", async (req, res) => {
  const { email } = req.body;
  let findUser = await Signupuser.findOne({ email: email });
  if (!findUser) {
    console.log("length is zero");
    return res.status(400).json({ error: "User not found" });
  }
  //  generating token to reset passowrd
  try {
    const token = jwt.sign({ _id: findUser._id }, secKey, {
      expiresIn: "300s",
    });

    const setToken = await Signupuser.findByIdAndUpdate(
      { _id: findUser._id },
      { veryfiyuser: token },
      { new: true }
    );

    if (setToken) {
      const mailOpctions = {
        from: process.env.gmail,
        to: email,
        subject: "Mobilows(Password reset)",
        html: `<h5>Your Password Link is:</h5><br />
        <h5><span style="color:'red'">Note:</span>Link will expire In next 4 mins.</h5>
        http://localhost:3000/change_password_now/${findUser._id}/${setToken.veryfiyuser}
        `,
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
  } catch (error) {}
});
module.exports = router;
