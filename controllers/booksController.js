const bookStore = require("../bookStore/bookStores");

function createBook(req, res) {
  const { id, title, author } = req.body;

  if (!id || !title || !author) {
    return res.status(400).json({
      message: "All fields must be required",
      error: "Validation error",
    });
  }

  const book = { id, title, author };
  bookStore.push(book);
  res.status(201).json({ message: "Book created successfully" });
}

function getBooks(req, res) {
  res.status(200).json(bookStore);
}

function deleteBook(req, res) {
  const { id } = req.params;
  const index = bookStore.findIndex((book) => book.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  bookStore.splice(index, 1);
  res.status(200).json({ message: "Book deleted successfully" });
}

function updateBook(req, res) {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = bookStore.find((book) => book.id == id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.status(200).json({ message: "Book updated successfully", book });
}

module.exports = {
  createBook,
  getBooks,
  deleteBook,
  updateBook,
};
