import React, { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const categoriesRef = useRef(null);

  // Handle scroll effect to apply glassmorphism
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close categories dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
  ];

  const categoryLinks = [
    { name: "Web Design", path: "/website" },
    { name: "App Development", path: "/app" },
    { name: "UI/UX Design", path: "/uiux" },
    { name: "SEO", path: "/seo" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1a0f24]/80 backdrop-blur-md shadow-lg py-3"
          : "bg-[#251533] py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/logo.png"
              alt="Wave Programming Logo"
              className="h-12 w-auto cursor-pointer"
            />
          </Link>
          <p className="font-extrabold text-white tracking-wider hidden sm:block">
            WAVE PROGRAMMING
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-gray-300 hover:text-white font-medium transition-colors group"
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500"
                />
              )}
            </Link>
          ))}

          {/* Dropdown Menu */}
          <div className="relative" ref={categoriesRef}>
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center text-gray-300 hover:text-white font-medium transition-colors"
            >
              Categories
              <motion.div
                animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isCategoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 mt-4 w-52 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
                >
                  <div className="py-2">
                    {categoryLinks.map((cat) => (
                      <Link
                        key={cat.name}
                        to={cat.path}
                        onClick={() => setIsCategoriesOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors" 
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white font-medium hover:text-blue-400 transition-colors px-4 py-2 cursor-pointer"
            >
              Log In
            </motion.button>
          </Link>
          <Link to="/freeTrial">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Free Trial
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#1e112a] border-t border-gray-700 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Categories */}
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="flex items-center justify-between text-lg font-medium text-gray-300"
                >
                  Categories
                  <motion.div animate={{ rotate: isCategoriesOpen ? 180 : 0 }}>
                    <ChevronDownIcon className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isCategoriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 flex flex-col space-y-3 overflow-hidden"
                    >
                      {categoryLinks.map((cat) => (
                         <Link
                          key={cat.name}
                          to={cat.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-gray-400 hover:text-white"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <hr className="border-gray-700" />
              
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full text-left text-lg font-medium text-gray-300 py-2">
                  Log In
                </button>
              </Link>
              <Link to="/freeTrial" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl mt-2">
                  Free Trial
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
