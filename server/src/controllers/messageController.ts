import { Request, Response } from "express";
import { messages, Message } from "../models/messages.js";

export const getMessages = (req: Request, res: Response) => {
  res.json({ title: "Mini Messageboard", messages });
};

export const addMessage = (req: Request, res: Response) => {
  const { messageText, messageUser } = req.body;
  if (!messageText || !messageUser) {
    return res
      .status(400)
      .json({ error: "Both messageText and messageUser are required" });
  }
  const newMessage: Message = {
    text: messageText,
    user: messageUser,
    added: new Date(),
  };
  messages.push(newMessage);
  res.status(201).json({ message: "Message added", newMessage });
};

export const getMessageDetails = (req: Request, res: Response) => {
  const { id } = req.params;
  const messageIndex = parseInt(id, 10);
  if (
    isNaN(messageIndex) ||
    messageIndex < 0 ||
    messageIndex >= messages.length
  ) {
    return res.status(404).json({ error: "Message not found" });
  }
  res.json(messages[messageIndex]);
};
