import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
const Main = ({darkTheme, setDarkTheme}) => {
  return (
    <div>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}></Header>
      <Outlet/>
    </div>
  )
}

export default Main;