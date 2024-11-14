const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 5,
  },
  image: {
    type: String,
    default: "/media/test-image.jpg",
  },
});

module.exports = mongoose.model("Book", BookSchema);
