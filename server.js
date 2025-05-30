const express = require("express");
const app = express();
const booksRoutes = require("./routes/booksRoutes");

app.use(express.json());
app.use("/books", booksRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
