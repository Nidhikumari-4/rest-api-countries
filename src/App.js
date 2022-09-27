import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Details from "./components/Details";
import Home from "./components/Home";

function App() {
  return (
    <div className="header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
