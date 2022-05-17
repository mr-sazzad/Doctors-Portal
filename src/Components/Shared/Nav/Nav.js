import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div class="navbar w-full bg-base-100 justify-between px-12">
      <Link to="/" class="btn btn-ghost normal-case text-xl">
        Doctors Portal
      </Link>
      {/* <h2 className="normal-case text-xl">Doctors Portal</h2> */}
      <div class="navbar-end">
        <div class="dropdown dropdown-left">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

         
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="my-1">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="my-1">
              <NavLink to="/about" class="justify-between">
                About
              </NavLink>
            </li>
            <li className="my-1">
              <NavLink to="/appointment" class="justify-between">
                Appointment
              </NavLink>
            </li>
            <li className="my-1">
              <NavLink to="/reviews" class="justify-between">
                Reviews
              </NavLink>
            </li>
            <li className="my-1">
              <NavLink to="/contact" class="justify-between">
                Contact
              </NavLink>
            </li>
            <li className="my-1">
              <NavLink to="/login" class="justify-between">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li className="mx-3">
            <NavLink to="/">Home</NavLink>
          </li>
          <li tabindex="0" className="mx-3">
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
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
