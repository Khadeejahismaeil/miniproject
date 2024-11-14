const express = require("express");
const connectDB = require("./database"); // Import the database connection function
const booksRouter = require("./api/books/routers"); // Import the router
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON
app.use(express.json());

// Use the books router with the base URL /api/books
app.use("/api", booksRouter);

// Connect to MongoDB
connectDB();

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require("express");
// const app = express();
// const booksRouter = require('./api/books/routers');
// const PORT = process.env.PORT || 8000;
// require("dotenv").config();

// const connectDB = require('./database');
// connectDB();

// app.use('/api', booksRouter);

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello, Express!");
// });

// app.listen(PORT, () => {
//   console.log(`App is running on port: ${PORT}`);
// });
