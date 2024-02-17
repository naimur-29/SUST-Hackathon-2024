import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { RiMenu3Fill, RiCloseFill, RiXingLine } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";

import { logoutSuccessFully } from "../../Utils/Toasts";
import UseAuth from "../../Hooks/UseAuth";

const navLink = [
  {
    item: "Home",
    link: "/",
  },

  {
    item: "Contact",
    link: "/contact",
  },
];

const avatarItems = [
  {
    item: "Dashboard",
    link: "/dashboard/profile",
  },
];

const NavBar = () => {
  const { toggleDarkMode, darkmode, user, logoutFunction } = UseAuth();

  const [toggleAvatar, setToggleAvatar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [photourl, setPhotoUrl] = useState(user?.photoURL);

  // console.log(user);

  const handleToggle = () => {
    // setToggle(!toggle);
    setNavToggle(!navToggle);
  };

  // dark mode toggle
  const handleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    toggleDarkMode();
  };

  // logout function
  const handleLogout = () => {
    setToggleAvatar(!toggleAvatar);
    logoutFunction();
    logoutSuccessFully();
  };

  // use effect to handle user photourl
  useEffect(() => {
    setPhotoUrl(user?.photoURL);
  }, [user, user?.photoURL]);

  return (
    <div
      className={` navContainer  z-50 py-2.5  bg-gray-100 dark:bg-gray-400  fixed w-full drop-shadow-lg `}
    >
      <div className="navWrapper flex justify-between w-[98%] xsm:w-[97%] lg:w-[96%] m-auto items-center ">
        {/* nav left  */}
        <div className="navLeft ">
          <div className="navLeftImg ">
            <Link
              to={`/`}
              className="self-center font-semibold cursor-pointer whitespace-nowrap "
            >
              <div className="flex items-center justify-center ">
                <div className="logo w-[2.1rem] h-[2.1rem] xsm:w-[2.6rem] xsm:h-[2.5rem] sm:w-[2.8rem] sm:h-[2.7rem]  rounded-md overflow-auto ">
                  <img
                    src="https://i.ibb.co/phpJRMB/rocket-1976107-640.png"
                    className="w-full h-full "
                    alt=""
                  />{" "}
                </div>
                <p
                  className={`   text-gray-900 dark:text-white text-sm xsm:text-base lg:text-xl  CormorantFont  `}
                >
                  CodeCompanion
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* nav left  */}

        {/* nav right  */}
        <div className="flex items-center justify-between navRight ">
          <div className="navLinks hidden md:flex  justify-center items-center   mr-1.5   ">
            {navLink.map((ele, ind) => (
              <Link
                key={ind}
                to={ele.link}
                className={`  ${
                  navLink.length - 1 === ind ? "mr-2" : "mr-5"
                } relative group  text-base lg:text-lg   text-gray-700 dark:text-[#E4F1FF] hover:text-blue-500    `}
              >
                {ele.item}

                <span className="absolute -bottom-[.15rem] left-0 w-0 h-[.14rem] bg-blue-400 group-hover:w-full group-hover:transition-all"></span>
              </Link>
            ))}
          </div>
          {/* !mobile view  */}

          <div className="notMobile  mr-1 flex justify-center items-center relative z-[10]  ">
            {/*  */}
            {/*  */}

            {user ? (
              <button
                id="dropdownUserAvatarButton"
                data-dropdown-toggle="dropdownAvatar"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                type="button"
                onClick={() => setToggleAvatar(!toggleAvatar)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full "
                  src={user?.photoURL}
                  alt="user photo"
                />
              </button>
            ) : (
              <Link
                to={`/login`}
                className="hidden px-3 py-2 text-xs font-semibold text-white bg-gray-600 rounded  md:block hover:bg-gray-700 lg:px-4 lg:text-sm"
              >
                Log in
              </Link>
            )}

            {/* <!-- Dropdown menu --> */}

            {toggleAvatar && (
              <div
                id="dropdownAvatar"
                className="z-10 absolute  top-[6.5rem] -right-[6rem]  md:-right-[5.6rem]  transform -translate-x-1/2 -translate-y-1/2  bg-blue-300 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="px-4 py-3 text-sm text-gray-900 cursor-pointer dark:text-white">
                  <h1 className="font-semibold "> {user?.displayName} </h1>
                </div>
                <ul
                  className="py-2 text-sm font-medium text-gray-700 dark:text-gray-200 "
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  <div className="flex flex-col avatarMenuItems ">
                    {avatarItems &&
                      avatarItems?.map((avatarMenu, ind) => (
                        <NavLink
                          key={ind}
                          to={avatarMenu.link}
                          onClick={() => setToggleAvatar(!toggleAvatar)}
                          className={`   px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white    `}
                        >
                          {avatarMenu.item}
                        </NavLink>
                      ))}
                  </div>
                  <li
                    className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleLogout()}
                  >
                    Sign out
                  </li>
                </ul>
              </div>
            )}

            {/*  */}
            {/*  */}
          </div>

          {/* !mobile view  */}

          {/* toggle button  */}
          <div
            className="pl-0 ml-2 mr-3 text-xl toggleMode md:pl-2 md:ml-0 md:pr-0 sm:text-2xl "
            onClick={() => handleDarkMode()}
          >
            {darkmode ? <BsFillMoonFill /> : <BsFillSunFill />}
          </div>
          {/* toggle button ends  */}

          {/*  */}
          {/* mobile view  */}

          <div className="relative flex mobileView md:hidden ">
            {/* menu icon  */}
            <div
              className="text-lg menuIcon xsm:text-xl sm:text-2xl "
              onClick={() => handleToggle()}
            >
              {/* {!toggle ? <RiMenu3Fill /> : <RiCloseFill />} */}
              {!navToggle ? <RiMenu3Fill /> : <RiCloseFill />}
            </div>
            {/* menu icon ends */}

            {/* menu list  */}

            {navToggle && (
              <div className="menuList text-center py-2 bg-[#183D3D] dark:bg-gray-300 absolute transform -translate-x-1/2 -translate-y-1/2 -right-[4.8rem] top-[5.5rem] sm:top-[5.8rem] w-[10rem] ">
                <div className="mb-4 menuItem ">
                  {navLink.map((ele, ind) => (
                    <div key={ind} className={` text-base pb-3   `}>
                      <a
                        href={ele.link}
                        className="cursor-pointer text-gray-50 dark:text-gray-900"
                        onClick={() => handleToggle()}
                      >
                        {" "}
                        {ele.item}{" "}
                      </a>
                    </div>
                  ))}

                  <Link
                    to={`/login`}
                    className="cursor-pointer  text-gray-50 dark:text-gray-900"
                    onClick={() => handleToggle()}
                  >
                    Log in
                  </Link>
                  {/* <Link
                    to={`/login`}
                    className="px-3 py-2 text-xs font-semibold text-white bg-gray-600 rounded  hover:bg-gray-700 lg:px-4 lg:text-sm"
                  >
                    Log in
                  </Link> */}
                </div>
              </div>
            )}
            {/* menu list  */}
          </div>

          {/* mobile view  */}
        </div>
        {/* nav right  */}
      </div>
    </div>
  );
};

export default NavBar;
