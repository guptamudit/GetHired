import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

const Navbar = ({ loginhai, loginnahihai }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navitems = [
    { path: "/", title: "Start a Search" },
    { path: "/my-posted-job", title: "My Posted Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a Job" },
  ];
  const handleSubmit = () => {
    signOut(auth)
      .then(() => {
        alert("Signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex lg:justify-between md:justify-around justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmls="https://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#3575E2"
              fillOpacity="0.4"
            />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>
          <span className="font-semibold">JobPortal</span>
        </a>
        {/* nav items for large devices */}
        <ul className=" hidden md:flex gap-12">
          {navitems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* signup and login button */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link
            to="/login"
            className={`py-2 px-5 border rounded bg-blue text-white  ${loginhai} hover:bg-[#FF9209]  hover:delay-100 `}
          >
            Login
          </Link>
          <button
            onClick={handleSubmit}
            className={`py-2 px-5 border rounded bg-blue text-white ${loginnahihai} hover:bg-[#FF9209]  hover:delay-100`}
          >
            Logout
          </button>
        </div>

        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* navitems for mobile */}
      <div
        className={`px-4  bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navitems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1 "
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className={`text-white text-base py-1 ${loginhai}`}>
            <Link to="/login">Login</Link>
          </li>
          <li className={`text-white text-base py-1 ${loginnahihai}`}>
            <button onClick={handleSubmit}>Logout</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
