import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading";

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  if (loading) {
    <Loading />
  }
  if (error) {
    console.log(error);
  }
  
  return (
    <div className="navbar w-full bg-base-100 justify-between px-12">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Doctors Portal
      </Link>
      {/* <h2 className="normal-case text-xl">Doctors Portal</h2> */}
      <div className="navbar-end">
        <div className="dropdown dropdown-left">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="my-1">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="my-1">
              <NavLink to="/about" className="justify-between">
                About
              </NavLink>
            </li>
            <li className="my-1">
              <NavLink to="/appointment" className="justify-between">
                Appointment
              </NavLink>
            </li>
            <li className="my-1">
              <NavLink to="/reviews" className="justify-between">
                Reviews
              </NavLink>
            </li>
            <li className="my-1">
              <NavLink to="/contact" className="justify-between">
                Contact
              </NavLink>
            </li>
            <li className="my-1">
              {user ? <button onClick={logout} className='btn btn-ghost'>Sign Out</button>: <NavLink to="/login" className="justify-between">Login</NavLink>}
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="mx-3">
            <NavLink to="/">Home</NavLink>
          </li>
          <li tabIndex="0" className="mx-3">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="mx-3">
            <NavLink to="/appointment">Appointment</NavLink>
          </li>
          <li className="mx-3">
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
          <li className="mx-3">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="mx-3">
            {user ?<button onClick={logout} className='btn btn-ghost'>Sign Out</button> :<NavLink to="/login">Login</NavLink>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
