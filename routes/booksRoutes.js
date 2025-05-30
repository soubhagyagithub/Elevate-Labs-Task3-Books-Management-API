const express = require("express");
const router = express.Router(); //
const {
  createBook,
  getBooks,
  deleteBook,
  updateBook,
} = require("../controllers/booksController");

router.get("/get-books", getBooks);
router.post("/create-book", createBook);
router.put("/update-book/:id", updateBook);
router.delete("/delete-book/:id", deleteBook);

module.exports = router;
