const Book = require("../../models/Book");
// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
};

// Get a book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Error fetching book" });
  }
};

// Create a new book
const createBook = async (req, res) => {
  const { title, author, price, image } = req.body;
  try {
    const newBook = await Book.create({ title, author, price, image });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: "Error creating book" });
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) return res.status(404).json({ error: "Book not found" });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Error updating book" });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    if (!deletedBook) return res.status(404).json({ error: "Book not found" });
    res.json(deletedBook);
  } catch (error) {
    res.status(500).json({ error: "Error deleting book" });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
