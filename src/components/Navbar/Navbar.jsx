import { IoLogOutOutline } from "react-icons/io5";
import { RiUser6Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";

import NavLogo from "../../assets/nav_logo.svg";
// import UserLogo from "../../assets/user_nav.svg"

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__container-left">
          <div className="nav__logo">
            <img src={NavLogo} alt="company__nav-logo" />
          </div>

          <ul className="nav__links">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Markets</a>
            </li>
            <li>
              <a href="#">Exchange</a>
            </li>
            <li>
              <a href="#">Wallets</a>
            </li>
          </ul>
        </div>

        <div className="nav__container-right">
          <div className="search__box">
            <CiSearch className="icons" />

            <input type="search" name="search" id="search" />
          </div>

          <div className="profile">
            <div className="profile__avatar">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="profile__avatar"
              >
                <RiUser6Line className="icons" />
                Aderemi Abiodun
              </a>
            </div>

            <div className="logout">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <IoLogOutOutline className="icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
