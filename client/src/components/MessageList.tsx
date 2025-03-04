import { useEffect, useState } from "react";

interface Message {
  text: string;
  user: string;
  added: string; // we expect an ISO string from the backend
}

const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch messages from your backend API
    fetch("http://localhost:5000/") // adjust if using a proxy
      .then((res) => res.json())
      .then((data) => {
        setMessages(data.messages);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching messages:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading messages...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index} className="mb-4 border p-3 rounded">
            <p className="font-semibold">{msg.user}</p>
            <p>{msg.text}</p>
            <p className="text-xs text-gray-500">
              {new Date(msg.added).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
