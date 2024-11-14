const express = require("express");
const path = require("path");
const connectDB = require("./database");
const booksRouter = require("./api/books/routers");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON
app.use(express.json());

// Add a static route to serve files from the media folder
app.use("/media", express.static(path.join(__dirname, "media")));

// Use the books router with the base URL /api/books
app.use("/books", booksRouter);

// Connect to MongoDB
connectDB();

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
