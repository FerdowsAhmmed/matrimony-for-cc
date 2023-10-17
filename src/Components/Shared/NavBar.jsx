// import React from 'react'

// function NavBar() {
//   return (
//     <div>NavBar</div>
//   )
// }

// export default NavBar
import { Link } from "react-router-dom";


const NavOption =
  <>
    <li>
      <Link to="/">Home</Link >
    </li>
    <li>
      <Link to="/login">Login</Link >
    </li>
    <li>
      <Link to="/signup-page">Register</Link >
    </li>
    <li>
      <Link to="/"><img src="" alt="User Photo" /></Link >
    </li>
  </>
;

function Navbar  ()  {
  return (
    <div className="navbar fixed z-10 bg-opacity-50 bg-blue-900 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-900 rounded-box w-52"
          >
            {NavOption}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Matrimony BD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {NavOption}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
