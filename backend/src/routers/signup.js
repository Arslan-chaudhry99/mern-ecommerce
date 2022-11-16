const express = require("express");
const signupuser = require("../model/signup");
require("../DB/db");
const router = express.Router();

router.post("/signup", (req, res) => {
  console.log(req.body);
});

module.exports = router;
