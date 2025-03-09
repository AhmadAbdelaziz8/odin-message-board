// server/index.js
require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000; // uses PORT from .env if available

// Middleware and routes setup...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example route mounting
const messageRoutes = require("./routes/messageRoutes");
app.use("/api/messages", messageRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
