import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const navLinkClass = ({ isActive }) =>
    `relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
      isActive
        ? "bg-white text-violet-700 shadow-md"
        : "text-white hover:bg-white/15 hover:text-white"
    }`;

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/all-toys" className={navLinkClass}>
          All Toys
        </NavLink>
      </li>

      <li>
        <NavLink to="/new-arrivals" className={navLinkClass}>
          New Arrivals
        </NavLink>
      </li>

      <li>
        <NavLink to="/special-offers" className={navLinkClass}>
          Special Offers
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/orders" className={navLinkClass}>
              My Orders
            </NavLink>
          </li>

          <li>
            <NavLink to="/my-profile" className={navLinkClass}>
              My Profile
            </NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </li>
    </>
  );

  if (loading) {
    return (
      <div className="navbar bg-white shadow-md">
        <div className="mx-auto py-4">
          <span className="loading loading-spinner loading-md text-violet-700"></span>
        </div>
      </div>
    );
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-violet-700/95 shadow-lg">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            to="/"
            className="text-3xl font-extrabold text-white tracking-tight hover:scale-105 transition-transform duration-300"
          >
            ToyTopia
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            {navLinks}
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end gap-3">
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName || "User"}
              >
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="Profile"
                  className="w-11 h-11 rounded-full border-2 border-white object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                />
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-sm bg-white text-violet-700 border-none hover:bg-violet-100"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm bg-white text-violet-700 border-none hover:bg-violet-100"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow-2xl bg-white rounded-2xl w-64 space-y-2"
            >
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;