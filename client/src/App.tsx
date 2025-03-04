// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="p-4 bg-gray-200 flex gap-4">
          <Link to="/" className="text-blue-700">
            Home
          </Link>
          <Link to="/new" className="text-blue-700">
            New Message
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<MessageList />} />
          <Route path="/new" element={<MessageForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
