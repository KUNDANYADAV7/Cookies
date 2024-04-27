import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isLoggedIn = await onLogin(email, password);
      if (isLoggedIn) {
        setShowPopup(true); // Show the popup on successful login
        setTimeout(() => {
          setShowPopup(false); // Hide the popup after a delay (e.g., 3 seconds)
          navigate("/home"); // Redirect to HomePage.jsx after successful login
        }, 3000);
      }
    } catch (error) {
      // Handle login errors here
      alert(error.message);
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#B0C4DE" }}
    >
      <div className="card p-5" style={{ maxWidth: "400px", width: "90%" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        {showPopup && (
          <div className="alert alert-success mt-3" role="alert">
            Login successful! Redirecting to homepage...
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
