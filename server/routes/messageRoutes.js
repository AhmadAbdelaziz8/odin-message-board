// server/routes/messageRoutes.js
const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

// GET all messages
router.get("/", messageController.getAllMessages);

// GET a single message by id (for the details page)
router.get("/:id", messageController.getMessageById);

// POST a new message
router.post("/", messageController.createMessage);

module.exports = router;
