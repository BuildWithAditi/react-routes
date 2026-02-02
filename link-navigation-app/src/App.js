import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

function Services() {
  return <h2>🛠 Services Page</h2>;
}

function App() {
  return (
    <div>
        <nav className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/services">Services</Link>
      </nav>

      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
