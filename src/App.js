import React from "react";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import LoginPage from "../src/components/Login";
import Packages from "./components/Packages";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
