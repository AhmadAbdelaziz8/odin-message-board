// client/src/components/MessageList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MessageList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((message) => (
            <li key={message.id} style={{ marginBottom: "15px" }}>
              <p>
                <strong>{message.user}:</strong> {message.text}
              </p>
              <p>
                <small>{new Date(message.added).toLocaleString()}</small>
              </p>
              <Link to={`/message/${message.id}`}>Open</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MessageList;
