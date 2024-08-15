import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handlelogIn = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <header className="header">
        <h1 className="title">Kiyani Ticketing System</h1>
        <p className="subtitle">
          Manage your clients under Kiyani Ticketing System
        </p>
      </header>
      <div className="content">
        <p>
          Welcome to the Kiyani Ticketing System. Navigate to manage tickets or
          explore other features.
        </p>
        <button className="get-started-button" onClick={handlelogIn}>
          Login
        </button>
        <button className="get-started-button" onClick={handleSignUp}>
          SignUp
        </button>
      </div>
    </>
  );
};

export default HomePage;
