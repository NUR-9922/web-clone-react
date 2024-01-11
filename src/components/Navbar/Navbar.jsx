import React, { useState, useEffect, useRef } from "react";
import { CiSun } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaDev } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import CategoriesData from "../../data/headerCategoriesData";
import headerUlListData from "../../data/HeaderUlListData";
function Navbar() {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  };
  const [categoryMenu, setCategoryMenu] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(true);
  /**
   * Toggles the dark mode and stores the new value in localStorage.
   *
   * @
   */
  const toggleDarkMode = () => {
    const newDarkModeValue = !isDarkMode;
    // Store the boolean value in localStorage
    localStorage.setItem("DarkMode", JSON.stringify(newDarkModeValue));

    setIsDarkMode(newDarkModeValue);
  };
  useEffect(() => {
    setIsDarkMode(JSON.parse(localStorage.getItem("DarkMode")));
    // Set the body class based on the initial value
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        const isScrolled = window.scrollY > 0;
        header.classList.toggle('sticky', isScrolled);
      }
    };

    // Add event listener to handle scroll and update header position
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  console.log(headerUlListData);

  return (


    
    <div className="relative">
      <header
        onMouseLeave={() => setCategoryMenu(false)}
        className="w-full h-14 top-0  dark:bg-gray-900 relative z-[100] transition-all  flex items-center justify-between px-3  text-gray-700 capitalize "
      >
        {/* header left part */}
        <div className="flex items-center justify-center gap-4">
          {/* logo */}
          <NavLink to="/">
            {" "}
            <div className="w-28 h-full">{isDarkMode ? (<img className="w-full" src="/public/assets/asset 1.png" alt="" />) : (<img className="w-full" src="/public/assets/asset 2.png" alt="" />)}</div>
          </NavLink>
          {/* search box */}
          <div className="relative h-[40px] w-[200px] shadow-xl  cursor-pointer  hidden md:flex overflow-hidden  rounded-2xl ">
            <input
              className=" h-full w-[70%]
           outline-none border-none bg-[#f9f7f7] indent-4"
              type="text"
              name=""
              id="homeSearch"
              placeholder="Search Courses"
            />
            {/* search icon from react icons components */}
            <div className=" flex justify-center items-center text-2xl  w-[30%] h-full bg-black text-white"> <CiSearch /></div>
          </div>
          {/* categories */}
          <div
            onClick={(e) => setCategoryMenu(!categoryMenu) || e.target}
            className="font-[500] group  relative dark:text-white  gap-2 items-center justify-center hover:text-blue-400 cursor-pointer transition-all hidden md:flex"
          >
            {/* categories icon from react icon */}
            <BiCategoryAlt className="text-xl" />
            <p className="text-lg ">Categories </p>
            {/* category hide menu here  */}
            <div
              className={`absolute w-60 left-0   transition-all rounded-sm overflow-hidden text-black top-10 ${categoryMenu ? "block" : "hidden"
                }`}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
              }}
            >
              <ul className=" bg-white dark:text-white dark:bg-gray-900">
                {CategoriesData?.length ? (
                  CategoriesData.map((item) => (
                    <NavLink
                      to={item.path}
                      onClick={() => handleNavLinkClick(item.path)}
                      className="text-lg"
                      key={item.path}
                    >
                      <li
                        className={`w-full h-14 dark:text-white flex justify-start items-center p-4 border-b-2 hover:bg-blue-400 hover:text-white transition-all ${activeLink === item.path
                          ? "bg-blue-400 text-white"
                          : "text-indigo-600"
                          }`}
                      >
                        {item.name}
                      </li>
                    </NavLink>
                  ))
                ) : (
                  <p>No categories available.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
        {/* header right part */}
        <div className="max-w-[1640px] flex items-center justify-center gap-10">
          <ul className="items-center justify-start gap-5  text-[0.8rem] hidden lg:flex dark:text-white ">
            <li className="cursor-pointer font-semibold flex gap-2 items-center justify-center  dark:text-white">
              <NavLink
                to="/"
                onClick={() => handleNavLinkClick("/")}
                className={`hover:text-blue-400 transition-all  flex items-center justify-center  h-16 ${activeLink === "/" ? "dark:text-blue-400 text-blue-400" : "text-indigo-600 dark:text-white"
                  }`}
              >
                Home
              </NavLink>
            </li>
            {/* course ul here */}
            <li className="hover:text-blue-400 coursesUl group relative h-10 dark:text-white transition-all cursor-pointer font-semibold flex gap-2 items-center justify-center text-indigo-600">
              courses
              <FaAngleDown />
              <ul className="absolute  coursesUnderUl group-hover:scale-100 scale-0 origin-top-left overflow-hidden transitionAll  dark:bg-gray-900 top-10 transition-all dark:text-white shadow-2xl rounded-md w-52 text-indigo-600 left-0 bg-white ">
                {CategoriesData?.length ? (
                  CategoriesData.map((item) => (
                    <NavLink
                      to={item.path}
                      onClick={() => handleNavLinkClick(item.path)}
                      className="text-lg"
                      key={item.path}
                    >
                      <li
                        className={`w-full h-12 text-base dark:text-white flex justify-start items-center p-4 border-b-2 hover:bg-blue-400 hover:text-white transition-all ${activeLink === item.path
                          ? "bg-blue-400 text-white"
                          : "text-indigo-600"
                          }`}
                      >
                        {item.name}
                      </li>
                    </NavLink>
                  ))
                ) : (
                  <p>No categories available.</p>
                )}
              </ul>
            </li>
            {/* pages ul here  */}
            <li

              className="hover:text-blue-400 group/item pagesUl dark:text-white  relative h-10 transition-all cursor-pointer font-semibold flex gap-2 items-center  justify-center text-indigo-600">
              pages
              <FaAngleDown />
              <ul
                className={`absolute group-: transitionAll group-hover/item:scale-100 origin-top scale-0  dark:bg-gray-900  top-12 transition-all dark:text-white shadow-2xl rounded-md pagesUnderUl w-52  text-indigo-600 left-0 bg-white   `}

              >
                {headerUlListData.map((item) => (
                  <NavLink
                    to={item.path || null}

                    onClick={() => handleNavLinkClick(item.path || null)}
                  >
                    <li
                      className={`w-full group h-13 relative dark:text-white flex justify-between items-center p-4 border-b-2 hover:bg-blue-400 hover:text-white transition-all ${activeLink === item.path
                        ? "bg-blue-400 text-white"
                        : "text-indigo-600"
                        }`}
                    >
                      {/* list name here */}
                      {item.listName}
                      {/* if nestedList then the icon will showing if not then not showing */}
                      <span>
                        {item.nestedList ? (
                          <i class="ri-arrow-down-line"></i>
                        ) : null}
                      </span>
                      {/* nested list here */}
                      {item?.nestedList && (
                        <ul
                          className="absolute dark:bg-gray-900 dark:text-white top-0 invisible group-hover:visible  z-[100] bg-white w-52 text-indigo-600 left-[-38vh]"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
                          }}
                        >
                          {item.nestedList.map((nestedListItem) => (
                            <NavLink

                              to={nestedListItem.path}
                            >
                              <li
                                className={`w-full h-13 relative flex justify-between items-center p-4 border-b-2  hover:bg-blue-400 hover:text-white transition-all ${activeLink === nestedListItem.path
                                  ? "bg-blue-400"
                                  : ""
                                  }`}
                              >
                                {nestedListItem.listName}
                              </li>
                            </NavLink>
                          ))}
                        </ul>
                      )}

                    </li>
                  </NavLink>
                ))}
              </ul>
            </li>

            <li className="hover:text-blue-400 h-10 dark:text-white transition-all cursor-pointer font-semibold flex gap-2 items-center justify-center text-indigo-600">
              events
              <FaAngleDown />
            </li>
            <li className="hover:text-blue-400 h-10 dark:text-white transition-all cursor-pointer font-semibold flex gap-2 items-center justify-center text-indigo-600">
              blogs
              <FaAngleDown />
            </li>
            <li className="hover:text-blue-400 h-10 transition-all cursor-pointer font-semibold flex gap-2 items-center justify-center text-indigo-600">
              <NavLink
                to="/contact"
                onClick={() => handleNavLinkClick("/contact")}
                className={`hover:text-blue-400 transition-all  flex items-center justify-center h-16 ${activeLink === "/contact"
                  ? " dark:text-blue-400 text-blue-400"
                  : " dark:text-white"
                  }`}
              >
                contact us
              </NavLink>
            </li>
          </ul>
          {/* mobile menu here   */}


        </div>

        <div className="flex items-center justify-center text-2xl gap-3">
          {/* dark mode toggler button */}
          <div onClick={toggleDarkMode} className="text-2xl cursor-pointer ">
            {isDarkMode ?
              (<CiSun className="text-yellow-400" />) : (<IoMdMoon />)}

          </div>
          <div className=" md:flex dark:text-blue-400 ">
            <NavLink className="flex justify-center  items-center hover:text-blue-400 transition-all" to="/signup"> <span className="text-base mr-2">Sign up</span> <IoMdLogIn /></NavLink>
          </div>
          <div onClick={() => setmobileMenu(!mobileMenu)} className="text-2xl cursor-pointer lg:hidden">   <IoMdMenu /></div>
        </div>
      </header>
      <div className={`w-full ${mobileMenu ? 'h-screen' : 'h-0'} transition-all duration-300 ease-in-out bg-yellow-50 overflow-hidden z-[99] fixed top-12 left-0 `}>
        <div className="flex justify-end p-4">
          <button onClick={() => setmobileMenu(!mobileMenu)} className="text-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform transform ${mobileMenu ? 'rotate-0' : 'rotate-45'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="text-center">
          <li className="py-3">
            <a href="#" className="text-gray-800 hover:text-indigo-600 transition duration-300">
              <span className="font-semibold">Home</span>
            </a>
          </li>
          <li className="py-3">
            <a href="#" className="text-gray-800 hover:text-indigo-600 transition duration-300">
              <span className="font-semibold">About</span>
            </a>
          </li>
          <li className="py-3">
            <a href="#" className="text-gray-800 hover:text-indigo-600 transition duration-300">
              <span className="font-semibold">Services</span>
            </a>
          </li>
          <li className="py-3">
            <NavLink to='contact' className="text-gray-800 hover:text-indigo-600 transition duration-300">
              <span className="font-semibold">Contact</span>
            </NavLink >
          </li>
        </ul>

      </div>


    </div>
    

  );
}

export default Navbar;
