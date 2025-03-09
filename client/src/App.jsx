import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MessageList from "./components/MessageList";
import NewMessageForm from "./components/NewMessageForm";
import MessageDetail from "./components/MessageDetail";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> | <Link to="/new">New Message</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MessageList />} />
          <Route path="/new" element={<NewMessageForm />} />
          <Route path="/message/:id" element={<MessageDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
