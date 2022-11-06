import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/main";
import Admin from "./components/admin";
import User from "./components/user";
import Login from "./components/main/Login";
import SignUp from "./components/main/SignUp";
import ManageUser from "./components/admin/ManageUser";
import AdminProfile from "./components/admin/AdminProfile";
import Userprofile from "./components/user/Userprofile";
import Blog from "./components/blog";
import { useState } from "react";
import { UserProvider } from "./components/main/UseContext";
import VideoManager from "./components/user/VideoManager";
import AddBlog from "./components/blog/AddBlog";
import BlogManager from "./components/blog/BlogManager";
import ContactUs from "./components/main/ContactUs";
import NotFound from "./components/main/NotFound";
import { createTheme } from "@mui/system";
import ViewVideos from "./components/user/ViewVideos";
import { Toaster } from "react-hot-toast";
import Authoriser from "./components/main/Authoriser";
import ManageProfile from "./components/user/ManageProfile";
import  Dashboard  from "./components/admin/Dashboard";
import ViewBlog from "./components/blog/ViewBlog";


function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const theme1 = createTheme({
    palette: {
      mode: "dark",
      error: {
        main: "#f44336",
        contrastText: "#dea500",
      },
      background: {
        paper: "#001e3c",
      },
      text: {
        primary: "#dea500",
      },
    },
  });

  const theme2 = createTheme({
    palette: {
      mode: "light",
      secondary: {
        main: "#ff7b31",
        dark: "#30dde1",
      },
    },
  });
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  return (
    <div>
    {/* <ThemeProvider theme={darkTheme ? theme1 : theme2}> */}
    <UserProvider user={currentUser}>
      <Toaster></Toaster>
      <BrowserRouter>
        <Routes>
        <Route element={<Main />} path="/">
            <Route element={<Login />} path="login" />
            <Route element={<SignUp />} path="/" />
            <Route element={<ContactUs />} path="contact" />
          </Route>

          <Route element={<Admin/>} path="admin">   
          <Route path="dashboard" element={<Dashboard/>} ></Route>        
          <Route path="manageuser" element={<ManageUser/>} ></Route>        
          <Route path="adminprofile" element={<AdminProfile/>} ></Route>        
           </Route>

          <Route element={<User />} path="user">
            <Route element={<Authoriser><Userprofile /></Authoriser>} path="userprofile/:id" />
            <Route element={<Authoriser><VideoManager /></Authoriser>} path="videomanager/:id" />
            <Route element={<Authoriser><ViewVideos/></Authoriser>} path="viewvideo/:id"></Route>
            <Route element={<Authoriser><ManageProfile /></Authoriser>} path="manageprofile/:id" />
          </Route>

          <Route element={<Blog />} path="blog">
            <Route element={<Authoriser><AddBlog/></Authoriser>} path="addblog/:id"/>
            <Route element={<Authoriser><BlogManager/></Authoriser>} path="blogmanager/:id"/>
            <Route element={<Authoriser><ViewBlog/></Authoriser>} path="viewblog/:id"/>
          </Route>
          <Route element={<NotFound/>} path="*"/>

        </Routes>
      </BrowserRouter>
    </UserProvider>
    {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
