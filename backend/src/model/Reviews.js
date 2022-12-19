const mongoose = require("mongoose");
const ReviewsSchema = new mongoose.Schema({
  ID: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  IP: {
    type: String,
    require: true,
  },
});

const ProductReviews = new mongoose.model("Reviews", ReviewsSchema);
module.exports = ProductReviews;
