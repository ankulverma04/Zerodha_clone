import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  const [ready, setReady] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const name = params.get("name");

    if (token) {
      localStorage.setItem("token", token);
      if (name) localStorage.setItem("userName", name);
      window.history.replaceState({}, "", window.location.pathname + window.location.hash);
    }

    setIsLogin(!!localStorage.getItem("token"));
    setReady(true);

    const interval = setInterval(() => {
      fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/ping`);
    }, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (!ready) return null;

  if (!isLogin) {
    const loginUrl = import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173/#/login";
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h3>Please login first</h3>
        <a href={loginUrl}>Go to Login</a>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
