import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return <h2> Home</h2>;
}
function Profile() {
  return <h2> Profile</h2>;
}
function Dashboard() {
  return <h2> Dashboard</h2>;
}

function App() {
  return (
    <div>
      <h1>Experiment-3: Multi-Page SPA</h1>

      <div className="card-container">
        <Link to="/" className="card">Home</Link>
        <Link to="/profile" className="card">Profile</Link>
        <Link to="/dashboard" className="card">Dashboard</Link>
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
