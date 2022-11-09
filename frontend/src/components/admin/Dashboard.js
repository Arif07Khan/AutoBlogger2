import React from "react";
import { NavLink } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="container-fluid bg-dashboard">
      <h1 className="text-center text-light">Dashboard</h1>
      <div className="row mb-5 gap-5 ms-5">
        <div className="col-md-3 mt-3 ms-3">
          <div className="card">
            <div className="card-header">
              <h4>Manage User</h4>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <NavLink to="/admin/manageuser">Visit</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-3 ms-3">
          <div className="card">
            <div className="card-header">
              <h4>Manage Profile</h4>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <NavLink to="/admin/adminprofile">Visit</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-3 ms-3">
          <div className="card">
            <div className="card-header">
              <h4>Manage Blogs  </h4>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <NavLink to="/admin/blogmanager">Visit</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
