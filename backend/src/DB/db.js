const mongoose = require("mongoose");
const DB = process.env.DATABASE;
mongoose.connect(DB, () => {
  console.log("data base connect successfuly");
});
