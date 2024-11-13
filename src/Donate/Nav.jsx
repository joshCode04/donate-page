import { useState } from "react";
import "../index.css";

const Nav = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <nav className="nav-bg text-[#FFFFFF] py-4 p-4 md:px-14 flex items-center justify-between relative">
      {/* Logo */}
      <img src="/logo.png" alt="logo" />
      <div className="text-lg font-bold"></div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-[#FFFFFF]">
        {["Home", "About Us", "Our Work", "Stories", "Contact"].map((link) => (
          <li
            key={link}
            className="hover:text-[#7FC034] px-4 py-2 rounded cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Donate Button */}
      <button className="hidden md:block bg-transparent border border-[#FFFFFF] px-4 py-2 rounded hover:bg-[#7FC034]">
        Donate
      </button>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-[#FFFFFF] text-2xl"
        onClick={toggleSidenav}
      >
        ☰
      </button>

      {/* Backdrop overlay */}
      {isSidenavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidenav}
        />
      )}

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#1e1e1e] bg-opacity-40 w-64 transform ${
          isSidenavOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleSidenav}
            className="text-3xl font-bold text-[#FFFFFF]"
          >
            ✖
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start p-6 space-y-4">
          {["Home", "About Us", "Our Work", "Stories", "Contact"].map(
            (link) => (
              <li
                key={link}
                onClick={toggleSidenav}
                className="hover:text-[#7FC034] py-2 text-[#FFFFFF] text-xl cursor-pointer"
              >
                {link}
              </li>
            )
          )}
          <button
            className="mt-6 bg-transparent border border-[#FFFFFF] px-6 py-2 rounded hover:bg-[#7FC034] text-[#FFFFFF] text-xl"
            onClick={toggleSidenav}
          >
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
