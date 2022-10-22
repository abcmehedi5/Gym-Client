import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../../App";
import "./Navbar.css";
const Navbar = () => {
  // user context

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/admin/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <section className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <h4 className="logo">
            POWER <span style={{ color: "#FCD842" }}>X</span>
          </h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto navlist">
              <Link to="/home">
                <a className="nav-link">Home</a>
              </Link>
              <Link to="/classes">
                <a className="nav-link">Our Classes</a>
              </Link>
              <Link to="/pricing">
                <a className="nav-link">Pricing</a>
              </Link>
              {isAdmin && (
                <Link to="/dashboard">
                  <a className="nav-link">Admin</a>{" "}
                </Link>
              )}
              {!loggedInUser.email && (
                <Link to="/login">
                  <a className="nav-link">Login</a>
                </Link>
              )}
              {!loggedInUser.email && (
                <Link to="/registration">
                  <a className="nav-link">Sing up</a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
