

import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logged out successfully!"))
      .catch((err) => toast.error(err.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-indigo-600 font-semibold" : ""
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-16 bg-base-100 shadow-md">
        <span className="loading loading-spinner text-indigo-500"></span>
      </div>
    );
  }

  return (
    <div className="navbar bg-violet-700 shadow-md px-4">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-red">
          ToyTopia
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>

        {user ? (
          <div className="flex items-center gap-4 ml-4">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "User"}
            >
              <img
                src={user.photoURL || "https://i.ibb.co/yP6BzjK/default-avatar.png"}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-indigo-500 cursor-pointer"
              />
            </div>

            <button onClick={handleLogout} className="btn btn-sm btn-outline">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-sm btn-primary ml-4">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

