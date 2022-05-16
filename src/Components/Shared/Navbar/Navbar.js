import React from "react";

const Navbar = () => {
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

      <div class="drawer-content flex flex-col">
        <div class="w-full navbar bg-base-300">
          <div class="flex-1 px-2 mx-2 flex-end">Clean Co.</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              <li>
                <a className="rounded-lg">Home</a>
              </li>
              <li>
                <a className="rounded-lg">About</a>
              </li>
              <li>
                <a className="rounded-lg">Appointment</a>
              </li>
              <li>
                <a className="rounded-lg">Contact Us</a>
              </li>
              <li>
                <a className="rounded-lg">Login</a>
              </li>
            </ul>
          </div>
        </div>
        Content
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
        <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Appointment</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Login</a>
              </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
