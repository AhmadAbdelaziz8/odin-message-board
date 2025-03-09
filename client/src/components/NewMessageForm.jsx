// client/src/components/NewMessageForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewMessageForm() {
  const [messageUser, setMessageUser] = useState('');
  const [messageText, setMessageText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messageUser, messageText })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to create message');
        }
        return res.json();
      })
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>New Message</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="messageUser">User:</label>
          <input
            type="text"
            id="messageUser"
            name="messageUser"
            value={messageUser}
            onChange={(e) => setMessageUser(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="messageText">Message:</label>
          <textarea
            id="messageText"
            name="messageText"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewMessageForm;
