// Import Express using ES modules
import express from "express";
import messageRoutes from "./routes/messagesRoutes.js";

// Create an instance of the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Define a basic route at '/'
app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

// Mount the message routes at the root URL
app.use("/", messageRoutes);

// Set the port (using an environment variable if available)
const PORT = process.env.PORT || 5000;

// Start the server and log a message once it's running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
