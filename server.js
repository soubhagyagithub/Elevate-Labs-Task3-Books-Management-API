const express = require("express");
const cors = require("cors");
const app = express();
const booksRoutes = require("./routes/booksRoutes");

app.use(express.json());
app.use(cors());
app.use("/books", booksRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
