import { Router } from "express";
import {
  getMessages,
  addMessage,
  getMessageDetails,
} from "../controllers/messageController.js";

const router = Router();

// Route to get all messages
router.get("/", getMessages);

// Route to handle posting a new message
// router.post("/new", addMessage);

// Route to get a specific message (using an index as a simple identifier)
// router.get("/message/:id", getMessageDetails);

export default router;
