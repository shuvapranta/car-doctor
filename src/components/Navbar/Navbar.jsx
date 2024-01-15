import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const linkNav = (
    <>
      <NavLink to="/">
        <li className="px-2 text-md">Home</li>
      </NavLink>
      <NavLink to="/about">
        <li className="px-2 text-md">About</li>
      </NavLink>
      <NavLink to="/services">
        <li className="px-2 text-md">Services</li>
      </NavLink>
      <NavLink to="/blog">
        <li className="px-2 text-md">Blog</li>
      </NavLink>
      <NavLink to="/contact">
        <li className="px-2 text-md">Contact</li>
      </NavLink>
    </>
  );

  return (
    <div className="px-36 mb-10">
      <div className="navbar">
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
              {linkNav}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linkNav}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-5">
          <HiOutlineShoppingBag className="text-lg"></HiOutlineShoppingBag>
          <CiSearch className="text-lg"></CiSearch>
          </div>
          <button className="btn btn-outline btn-error ml-5">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
