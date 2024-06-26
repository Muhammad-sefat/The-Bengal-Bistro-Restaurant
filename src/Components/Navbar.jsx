import { Link, NavLink } from "react-router-dom";
import useAuth from "./Hooks/useAuth";

import useCart from "./Hooks/useCart";

const Navbar = () => {
  const { logOut, user } = useAuth();

  const [cart] = useCart();

  const navMenu = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact-us"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <a>Contact Us</a>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <a>Dashboard</a>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/our-menu"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <a>Our Menu</a>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/our-shop"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <a>Our Shop</a>
        </NavLink>
      </li>
      {!user && (
        <li>
          <Link to={"/signin"}>Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed top-0 z-20 opacity-90 bg-red-800 text-white md:w-[95%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold uppercase">
            The Bengal Bistro <span className="text-xs">Restaurant</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{navMenu}</ul>
          <Link to={"/dashboard/cart"}>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item">
                  {cart.length}
                </span>
              </div>
            </button>
          </Link>
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full" title={user?.displayName}>
                  <img
                    referrerPolicy="no-referrer"
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 text-black z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/signin"}>SignIn</Link>
                </li>
                <li>
                  <Link to={"/signup"}>SignUp </Link>
                </li>
                <li>
                  <button onClick={logOut}>LogOut</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
