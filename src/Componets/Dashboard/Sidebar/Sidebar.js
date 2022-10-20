import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <h4 className="logo text-center mt-3 mb-3">
        POWER <span style={{ color: "#FCD842" }}>X</span>
      </h4>
      <hr />
      <div className="row">
        <div className="">
          <div className="list-group sidebarList" id="list-tab" role="tablist">
            <Link
              to="/mainDashboard"
              className="list-group-item list-group-item-action"
              id="list-profile-list"
              role="tab"
            >
              <i className="fas fa-chart-line"></i>DASHBOARD
            </Link>
            <Link
              to="/addClass"
              className="list-group-item list-group-item-action"
              id="list-profile-list"
              role="tab"
            >
              <i className="fas fa-book-open"></i>OUR CLASS
            </Link>
            <Link
              className="list-group-item list-group-item-action"
              id="list-profile-list"
              role="tab"
            >
              <i className="fa-solid fa-money-bill"></i>PAID USER INFO
            </Link>
            <Link
              to="/userList"
              className="list-group-item list-group-item-action"
              id="list-profile-list"
              role="tab"
            >
              <i className="fa-solid fa-users"></i>USER
            </Link>
            <Link
              to="/adminList"
              className="list-group-item list-group-item-action"
              id="list-profile-list"
              role="tab"
            >
              <i className="fa-solid fa-user"></i>ADMIN
            </Link>
            <Link
              to="/home"
              className="list-group-item list-group-item-action"
              id="list-profile-list"
              role="tab"
            >
              <i className="fa-solid fa-house"></i>Home
            </Link>
            <br /> <br /> <br /> <hr />
            <Link
              className="list-group-item list-group-item-action"
              id="list-profile-list"
              role="tab"
            >
              <i class="fas fa-sign-out"></i>SING OUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
