import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Header.css';
import Profile from "./photo/profile.jpg";

const Header = () => {

  
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  )
  const [profileData, setProfileData] = useState("");

  const logout = () => {
    sessionStorage.removeItem("user");
    setCurrentUser(null);
    navigate('/login');
  }

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/user/getbyid/"+currentUser._id);
    if(response.status===200){
      const data=await response.json();
      setProfileData(data);
    }
  }

  useEffect(() => {
    getDataFromBackend();
  }, [])

  

  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <NavLink className="navbar-brand mt-2 mt-lg-0 logo" to="#">
        <img
          src={Profile}
          height="50"
          alt="MDB Logo"
          loading="lazy"
          title="Blogmatic"
        />
      </NavLink>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item navbar-li">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item navbar-li">
          <NavLink className="nav-link" to="/blog/listblog">
            Blogs
          </NavLink>
        </li>
        {currentUser?(
          <>
        <li className="nav-item navbar-li">
          <NavLink className="nav-link" to={"/user/videomanager/"+currentUser._id}>Video Manager</NavLink>
        </li>
        <li className="nav-item navbar-li">
          <NavLink className="nav-link" to={"/blog/blogmanager/"+currentUser._id}>Blog Manager</NavLink>
        </li>
          </>
        ):null
        }
      </ul>
    </div>
    <div className="d-flex align-items-center">
      {!currentUser ? (
      <div className="d-flex align-items-center">
        <NavLink type="button" className="btn btn-link px-3 me-2" to="/login">
          Login
        </NavLink>
        <NavLink type="button" className="btn btn-primary me-3" to="/">
          Sign up for free
        </NavLink>
      </div>):null}

    
      {currentUser ? (
      <div className="dropdown">
        <NavLink
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          to="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >

          <img
            src={"http://localhost:5000/"+profileData.avatar}
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </NavLink>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <span className="dropdown-item curson-auto">{profileData.name}</span>
          </li>
          <li>
            <NavLink className="dropdown-item" to={"/user/manageprofile/"+currentUser._id}>My profile</NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to={"/blog/addblog/"+currentUser._id}>Add Blog</NavLink>
          </li>
          <li>
              <button className="btn btn-danger w-100" onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
      ) : null}
    </div>
  </div>
</nav>

    </div>
  );
};

export default Header;