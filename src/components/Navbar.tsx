/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoIosArrowDown,
  IoIosArrowDropdown,
  IoIosArrowDropupCircle,
  IoIosArrowUp,
} from "react-icons/io";
import { navLinks, NavLinkType } from "../data/navigation";
import { IoClose, IoMenu, IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 relative transition-all duration-300 ease-in-out  
     hover:text-[#FF90BB] 
     hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-[#FF90BB] hover:after:left-0 hover:after:-bottom-1 hover:after:transition-all
     ${isActive ? "text-[#FF90BB] font-semibold" : ""}`;

  const logoSrc =
    "https://amway.vercel.app/_next/static/media/amway-logo-black.5943c4b1.svg";

  const Logo = ({ className = "" }: { className?: string }) => (
    <img
      src={logoSrc}
      alt="Amway Logo"
      className={`object-contain ${className}`}
    />
  );

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-white text-black px-4 py-4 flex items-center justify-between fixed top-0 w-full z-30 shadow-md">
        <div className="items-center w-[4%] hidden md:flex">
          <Link to={"/"}>
            <Logo className="w-full" />
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center w-[10%] md:hidden">
          <Link to={"/"}>
            <Logo className="w-full" />
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex text-[12px] font-bold text-[#3f3f3fc8] gap-6">
          {navLinks.map((item: NavLinkType, index) => (
            <li key={index} className="relative">
              {"dropdown" in item ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="py-2 px-4  hover:text-[#FF90BB] flex items-center gap-2"
                  >
                    {item.label}
                    <span className="ml-1 text-lg">
                      {activeDropdown === item.label ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </button>
                </>
              ) : (
                <NavLink to={item.path!} className={linkClasses}>
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="flex gap-6">
          <NavLink to={"/"}>
            <IoPersonOutline className="rounded-[100%] md:rounded-[100%]" />
          </NavLink>
          <div className="border-r-1 border-[#82818141]"></div>
          <NavLink to={"/"}>
            <FiShoppingCart />
          </NavLink>
        </div>
      </nav>

      <AnimatePresence>
        {activeDropdown && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeDropdown}
              className="fixed inset-0 bg-black z-20 md:flex hidden"
            ></motion.div>

            <motion.div
              key="dropdown"
              initial={{ y: "-1%" }}
              animate={{ y: 0 }}
              exit={{ y: "-1%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-[6%] left-0 w-full h-[50vh] md:flex hidden bg-white z-30 overflow-auto"
            >
              <div className="container mx-auto px-8 py-5 md:grid md:grid-cols-5 gap-10 justify-between">
                {navLinks
                  .find((link) => link.label === activeDropdown)
                  ?.dropdown?.map((group: any, idx: number) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold mb-4 text-[#FF90BB]">
                        {group.category}
                      </h3>
                      <div className="flex flex-col gap-6">
                        {group.links.map((link: any, linkIdx: number) => (
                          <NavLink
                            key={linkIdx}
                            to={link.path}
                            className="text-gray-600 hover:text-[#FF90BB] hover:underline underline-offset-1 decoration-1 text-sm"
                            onClick={closeDropdown}
                          >
                            {link.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-[70%] h-full bg-white text-black py-4 z-50 shadow-lg md:hidden overflow-auto"
          >
            <div className="flex justify-between items-center mb-8 px-3">
              <Link to={"/"}>
                <Logo className="w-[30%]" />
              </Link>
              <button onClick={() => setIsOpen(false)}>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="space-y-6 text-sm font-bold border-t border-gray-300 pt-5">
              {navLinks.map((item: NavLinkType, index) => (
                <li key={index} className="border-b border-gray-300 pb-4">
                  {"dropdown" in item ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown((prev) =>
                            prev === item.label ? null : item.label
                          )
                        }
                        className="flex justify-between items-center w-full py-2 px-4"
                      >
                        {item.label}
                        <span>
                          {activeDropdown === item.label ? (
                            <IoIosArrowDropupCircle />
                          ) : (
                            <IoIosArrowDropdown />
                          )}
                        </span>
                      </button>

                      {/* Submenu */}
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.ul
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden flex flex-col pl-6 gap-4 text-gray-600 font-normal mt-2"
                          >
                            {item.dropdown?.map(
                              (group: any, groupIdx: number) => (
                                <div key={groupIdx}>
                                  <h4 className="text-[#FF90BB] text-sm mb-1">
                                    {group.category}
                                  </h4>
                                  {group.links.map(
                                    (link: any, linkIdx: number) => (
                                      <NavLink
                                        key={linkIdx}
                                        to={link.path}
                                        className="block py-1"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {link.label}
                                      </NavLink>
                                    )
                                  )}
                                </div>
                              )
                            )}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.path!}
                      className="block py-2 px-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="md:pt-[67px] pt-[57px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
