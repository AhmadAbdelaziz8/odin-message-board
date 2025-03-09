// client/src/components/MessageDetail.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function MessageDetail() {
  const { id } = useParams();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch(`/api/messages/${id}`)
      .then((res) => res.json())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!message) return <p>Loading...</p>;

  return (
    <div>
      <h1>Message Details</h1>
      <p>
        <strong>User:</strong> {message.user}
      </p>
      <p>
        <strong>Message:</strong> {message.text}
      </p>
      <p>
        <strong>Date:</strong> {new Date(message.added).toLocaleString()}
      </p>
      <Link to="/">Back to Messages</Link>
    </div>
  );
}

export default MessageDetail;
