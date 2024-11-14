const express = require("express");
const upload = require("../../middleware/multer");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("./controllers");

//define routes for books
router.get("/", getAllBooks);
router.get("/:bookId", getBookById);
router.post("/", upload.single("image"), createBook);
router.put("/:bookId", upload.single("image"), updateBook);
router.delete("/:bookId", deleteBook);

module.exports = router;
