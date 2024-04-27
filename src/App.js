import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import "./App.css";

export default function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState(null);

  // Check if user is already logged in when component mounts
  useEffect(() => {
    const loggedInUser = cookies.user;
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, [cookies.user]);

  const handleLogin = async (email, password) => {
    try {
      // Make API call to verify credentials
      const response = await fetch("https://mejevo.pythonanywhere.com/emps/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      // Check if credentials are valid
      const loggedInUser = data.find(
        (user) => user.email === email && user.password === password
      );
      if (!loggedInUser) {
        throw new Error("Invalid email or password");
      }

      // Check if another user is already logged in
      if (user && user.email !== loggedInUser.email) {
        alert("Another user is already logged in.");
        return false;
      }

      // Store user data in cookies
      setCookie("user", loggedInUser, { path: "/" });

      // Update user state
      setUser(loggedInUser);

      return true; // Return true for successful login
    } catch (error) {
      alert(error.message);
      return false; // Return false for failed login
    }
  };

  const handleLogout = () => {
    // Remove user data from cookies
    removeCookie("user");
    // Update user state to null
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<HomePage user={user} onLogout={handleLogout} />}
        />
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/page1"
          element={<Page1 user={user} onLogout={handleLogout} />}
        />
        <Route
          path="/page2"
          element={<Page2 user={user} onLogout={handleLogout} />}
        />
        <Route
          path="/page3"
          element={<Page3 user={user} onLogout={handleLogout} />}
        />
        {/* Redirect to login page if user is not authenticated */}
        <Route
          path="*"
          element={
            user ? <Navigate to="/home" replace /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
