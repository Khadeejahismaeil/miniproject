const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("./controllers");

// Define CRUD routes for books
router.get("/books", getAllBooks); // Get all books
router.get("/books/:id", getBookById); // Get a book by ID
router.post("/books", createBook); // Create a new book
router.put("/books/:id", updateBook); // Update a book by ID
router.delete("/books/:id", deleteBook); // Delete a book by ID

module.exports = router;
