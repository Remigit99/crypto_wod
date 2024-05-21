
import Navbar from "./Navbar/Navbar"
import { Outlet } from "react-router-dom"


const Layout = ({Children}) => {

  return (
    <>
    <Navbar/>
    {Outlet}
    </>
  )
}

export default Layout