import express from "express";
import cors from "cors";
import messagesRouter from "./routes/messages.js";

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
