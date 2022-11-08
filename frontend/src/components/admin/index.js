import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AccountCircle } from "@mui/icons-material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';


const Admin = () => {
  const options = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/admin/adminprofile",
    },
    {
      name: "Manage Users",
      icon: <ManageAccountsIcon/>,
      link: "/admin/manageuser",
    },
    {
      name: "Dashboard",
      icon: <DashboardIcon/>,
      link: "/admin/dashboard",
    },
    {
      name: "ManageBlog",
      icon: <BookIcon/>,
      link: "/admin/blogmanager",
    },

  ];

  return (
    <div>
      <h1>Admin Component</h1>
      <Sidebar title="Admin Dashboard" options={options}>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Admin;