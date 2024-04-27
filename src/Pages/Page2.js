import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import vk2 from "../images/vk2.png";

const Page2 = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      onLogout();
      navigate("/");
    }
  };
  return (
    <>
      <Header />

      <div className="container mt-4 d-flex justify-content-center mb-4">
        <div className="col-md-3">
          <div className="card bg-light p-3">
            <h2 className="text-center">Page 2</h2>
            {user ? (
              <div>
                <div className="card">
                  <img
                    className="card-img-top w-100"
                    src={vk2}
                    alt="Card image"
                    style={{ backgroundColor: "#E8E8E8" }}
                  />
                  <div className="card-body">
                    <h2 className="text-center">Welcome, {user.name}!</h2>
                    <p className="text-center">
                      <span style={{ fontWeight: "bold" }}>Email: </span>{" "}
                      {user.email}
                    </p>
                    <p className="text-center">
                      <span style={{ fontWeight: "bold" }}>Address:</span>{" "}
                      {user.address}
                    </p>
                    <button
                      className="btn btn-danger w-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <p>
                Please login to view this page. <Link to="/login">Login</Link>
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page2;
