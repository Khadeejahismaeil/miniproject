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
  const { bookId } = req.params;
  try {
    const book = await Book.findById(bookId);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Error fetching book" });
  }
};

// Create a new book
const createBook = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    }
    newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE

const updateBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    if (req.file) {
      req.body.image = ` ${req.protocol}://${req.get("host")}/${req.file.path}`;
    }
    const foundBook = await Book.findById(bookId);
    if (foundBook) {
      for (const key in req.body) {
        foundBook[key] = req.body[key];
      }
      await foundBook.save();
      res.status(200).json(foundBook);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.bookId);
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
