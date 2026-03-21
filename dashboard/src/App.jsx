import React from "react";
import {HashRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {
useEffect(() => {
  const interval = setInterval(() => {
    fetch(`${import.meta.env.VITE_API_URL}/ping`);
  }, 10 * 60 * 1000); // har 10 min

  return () => clearInterval(interval);
}, []);
   return(
     <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
   )
}
export default App;
