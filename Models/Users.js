const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Users", userSchema);
