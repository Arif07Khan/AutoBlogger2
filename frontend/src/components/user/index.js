import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../main/Header';
import { Toaster } from 'react-hot-toast';

const User = () => {
  return (
    <div>
      <Header  />
      <Toaster/>
      <Outlet/>
    </div>
  )
}

export default User;