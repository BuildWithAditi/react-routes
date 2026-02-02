import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h2>🏠 Home</h2>
      <button onClick={() => navigate("/about")}>
        Go to About
      </button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h2>ℹ️ About</h2>
      <button onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Experiment-1: Basic Routing</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
