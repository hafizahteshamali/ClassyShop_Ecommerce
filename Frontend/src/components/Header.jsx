import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { IoCart } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isUserData, setIsUserData] = useState({
    firstname: "",
    lastname: "",
    profile: ""
  });
  const data = useSelector((state)=>state?.cart);
  console.log("data: ", data);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const firstname = sessionStorage.getItem("firstname");
    const lastname = sessionStorage.getItem("lastname");
    const profile = sessionStorage.getItem("profile");
    
    setIsUserData({
      firstname: firstname || "",
      lastname: lastname || "",
      profile: profile || ""
    });
    
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-menu-container')) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLogout = ()=>{
    setIsProfileMenuOpen(false);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("firstname");
    sessionStorage.removeItem("lastname");
    sessionStorage.removeItem("profile");
    window.location.href = "/";
  }

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-300">
        <div className="container">
          <div className="hidden md:flex items-center justify-between md:flex-row">
            <div className="col1 w-[100%] md:w-[50%] md:text-left text-center">
              <p className="text-[14px]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex md:justify-end items-center md:w-full">
              <ul className="flex items-center w-full md:w-[30%] justify-between gap-2 md:flex-row">
                <li>
                  <Link
                    className="hover:text-[var(--colorPrimary)] transition"
                    to="/help-center"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[var(--colorPrimary)] transition"
                    to="/ordert-tracking"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-5 border-b-[1px] border-gray-300">
        <div className="container mx-auto flex md:flex-row gap-5 items-center justify-between">
          <div className="col1 w-full md:w-[25%] flex justify-start">
            <Link to="/">
              <img src="/assets/images/logo.jpg" alt="" />
            </Link>
          </div>
          <ul className="flex items-center justify-end gap-5 w-full">
            <li>
              <div className="relative">
                {isLoggedIn && (
                  <span className="h-[20px] w-[20px] rounded-full bg-red-500 text-sm flex justify-center items-center text-white absolute -top-[10px] -right-[10px]">{data.items.length}</span>
                )}
              <IoCart className="text-3xl" />
              </div>
            </li>
            <li className="relative profile-menu-container">
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="focus:outline-none"
                  >
                    <img
                      src={isUserData.profile || "/assets/images/default-avatar.jpg"}
                      className="h-[50px] w-[50px] rounded-full object-cover cursor-pointer hover:opacity-80 transition border-2 border-gray-200 hover:border-[var(--colorPrimary)]"
                      alt="Profile"
                      onError={(e) => {
                        e.target.src = "/assets/images/default-avatar.jpg";
                      }}
                    />
                  </button>

                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">
                          {isUserData.firstname} {isUserData.lastname}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          // You'll add your logout logic here
                          handleLogout()
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  className="bg-gray-700 text-white py-2 px-3 flex justify-center items-center rounded transition text-[15px] font-[600]"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;