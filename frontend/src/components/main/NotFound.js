import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="">
      <img
        className="w-50 mx-auto d-block mt-5 bg-transparent"
        src="https://cdn.dribbble.com/users/605899/screenshots/4144886/pikabu.gif"
        alt="Npt Found"
      />
      <div className="d-flex justify-content-center align-item-center mt-3">
      <button className="btn ">
       <Link to="home" className="">Return To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;