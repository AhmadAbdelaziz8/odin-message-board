// server/controllers/messageController.js

// Sample messages array (this acts as our "model")
const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

let nextId = 3; // For assigning new message IDs

exports.getAllMessages = (req, res) => {
  res.json(messages);
};

exports.getMessageById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const message = messages.find((m) => m.id === id);
  if (message) {
    res.json(message);
  } else {
    res.status(404).json({ error: "Message not found" });
  }
};

exports.createMessage = (req, res) => {
  const { messageText, messageUser } = req.body;
  if (!messageText || !messageUser) {
    return res
      .status(400)
      .json({ error: "Missing messageText or messageUser" });
  }
  const newMessage = {
    id: nextId++,
    text: messageText,
    user: messageUser,
    added: new Date(),
  };
  messages.push(newMessage);
  res.status(201).json(newMessage);
};
