import { Router } from "express";

const router = Router();

interface Message {
  text: string;
  user: string;
  added: Date;
}

let messages: Message[] = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// GET all messages
router.get("/", (req, res) => {
  res.json(messages);
});

// POST new message
router.post("/", (req, res) => {
  const { text, user } = req.body;

  if (!text || !user) {
    return res.status(400).json({ error: "Text and user are required" });
  }

  const newMessage: Message = {
    text,
    user,
    added: new Date(),
  };

  messages.push(newMessage);
  res.status(201).json(newMessage);
});

export default router;
