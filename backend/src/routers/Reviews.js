const express = require("express");
require("../DB/db");
const Review = require("../model/Reviews");
const router = express.Router();

router.post("/submiteReview", async (req, res) => {
  const { ID, name, email, description, rating } = req.body;
  const data = {
    ID,
    name,
    email,
    description,
    rating,
    IP: req.socket.remoteAddress,

  };

  const dataVals = await Review.find({ IP: req.socket.remoteAddress });

  if (dataVals.length === 0) {
    const newReview = new Review(data);
    newReview.save();
  } else {
    return res.status(401).json({ error: "User already submite review" });
  }
});

router.get("/getReviews", async (req, res) => {
  const find_data = req.query.id;
  const data = await Review.find({ ID: find_data });
  return res.status(200).json({ data: data });
});

module.exports = router;
