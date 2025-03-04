// src/components/MessageForm.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MessageForm = () => {
  const [messageText, setMessageText] = useState("");
  const [messageUser, setMessageUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messageText, messageUser }),
      });
      if (res.ok) {
        navigate("/");
      } else {
        console.error("Error posting message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">New Message</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={messageUser}
          onChange={(e) => setMessageUser(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Your message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="border p-2 rounded"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
