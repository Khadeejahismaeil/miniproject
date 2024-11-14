const mongoose = require("mongoose");
//k
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
    default: 5, // Default price if not provided
  },
  image: {
    type: String,
    default: "/media/test-image.jpg", // Default image if not provided
  },
});

module.exports = mongoose.model("Book", BookSchema);
