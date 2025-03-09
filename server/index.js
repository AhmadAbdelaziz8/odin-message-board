require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Middleware and routes setup...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API routes
const messageRoutes = require("./routes/messageRoutes");
app.use("/api/messages", messageRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "../client/dist")));

  // Handle client-side routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
