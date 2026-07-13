"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHome, 
  FaCompass, 
  FaUser, 
  FaSignOutAlt,
  FaPlus,
  FaBars,
  FaTimes,
  FaBookmark,
  FaInfoCircle,
  FaShieldAlt,
  FaUserPlus,
  FaSignInAlt,
  FaSnowman
} from "react-icons/fa";


export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<{ name?: string; email?: string; avatar?: string } | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem("habitly_auth");
    setIsLoggedIn(authStatus === "true");
    
    const userData = localStorage.getItem("habitly_user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("habitly_auth");
    localStorage.removeItem("habitly_user");
    setIsLoggedIn(false);
    setUser(null);
    setIsMenuOpen(false);
    window.location.href = "/";
  };

  const navLinks = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/explore", label: "Explore", icon: FaCompass },
    { href: "/about", label: "About", icon: FaInfoCircle },
  ];

  const loggedInLinks = [
    { href: "/habits", label: "My Habits", icon: FaBookmark },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg" 
          : "bg-white"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div 
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: "#b6ffde" }}
              >
                <FaSnowman className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-black">Habit</span>
                <span style={{ color: "#7283ff" }}>ly</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} icon={link.icon}>
                {link.label}
              </NavLink>
            ))}

            {isLoggedIn && loggedInLinks.map((link) => (
              <NavLink key={link.href} href={link.href} icon={link.icon}>
                {link.label}
              </NavLink>
            ))}

            {isLoggedIn ? (
              <div className="flex items-center gap-3 ml-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/habits/add"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7283ff]/30"
                    style={{ backgroundColor: "#7283ff" }}
                  >
                    <FaPlus className="w-4 h-4" />
                    Add Habit
                  </Link>
                </motion.div>

                <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                  {/* User Avatar */}
                  <div className="flex items-center gap-2">
                    <img 
                      src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=7283ff&color=fff&size=32`}
                      alt={user?.name || "User"}
                      className="w-8 h-8 rounded-full ring-2 ring-[#7283ff]/20"
                    />
                    {user?.name && (
                      <span className="text-sm font-medium text-gray-700 hidden lg:block">
                        {user.name.split(' ')[0]}
                      </span>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                  >
                    <FaSignOutAlt className="w-4 h-4" />
                    <span className="hidden lg:inline">Logout</span>
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 ml-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/login"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-gray-600 hover:text-[#7283ff] transition-all duration-200"
                  >
                    <FaSignInAlt className="w-4 h-4" />
                    Login
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/register"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7283ff]/30"
                    style={{ backgroundColor: "#7283ff" }}
                  >
                    <FaUserPlus className="w-4 h-4" />
                    Register
                  </Link>
                </motion.div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-gray-600" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-600" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                {/* User Info (if logged in) */}
                {isLoggedIn && user && (
                  <div className="flex items-center gap-3 px-4 py-3 mb-2 bg-gray-50 rounded-xl">
                    <img 
                      src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=7283ff&color=fff&size=40`}
                      alt={user?.name || "User"}
                      className="w-10 h-10 rounded-full ring-2 ring-[#7283ff]/20"
                    />
                    <div>
                      <p className="font-medium text-black">{user?.name || "User"}</p>
                      <p className="text-xs text-gray-500">{user?.email || "user@email.com"}</p>
                    </div>
                  </div>
                )}

                {navLinks.map((link) => (
                  <MobileNavLink 
                    key={link.href} 
                    href={link.href} 
                    icon={link.icon}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </MobileNavLink>
                ))}

                {isLoggedIn && loggedInLinks.map((link) => (
                  <MobileNavLink 
                    key={link.href} 
                    href={link.href} 
                    icon={link.icon}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </MobileNavLink>
                ))}

                <div className="border-t border-gray-100 my-2 pt-2">
                  {isLoggedIn ? (
                    <>
                      <MobileNavLink 
                        href="/habits/add" 
                        icon={FaPlus}
                        onClick={() => setIsMenuOpen(false)}
                        highlight
                      >
                        Add Habit
                      </MobileNavLink>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-200"
                      >
                        <FaSignOutAlt className="w-5 h-5" />
                        <span className="font-medium">Logout</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <MobileNavLink 
                        href="/login" 
                        icon={FaSignInAlt}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </MobileNavLink>
                      <MobileNavLink 
                        href="/register" 
                        icon={FaUserPlus}
                        onClick={() => setIsMenuOpen(false)}
                        highlight
                      >
                        Register
                      </MobileNavLink>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

// Desktop Nav Link Component
const NavLink = ({ 
  href, 
  children, 
  icon: Icon 
}: { 
  href: string; 
  children: React.ReactNode; 
  icon: React.ElementType;
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link 
        href={href} 
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-200"
      >
        <Icon className="w-4 h-4" />
        {children}
      </Link>
    </motion.div>
  );
};

// Mobile Nav Link Component
const MobileNavLink = ({ 
  href, 
  children, 
  icon: Icon,
  onClick,
  highlight = false
}: { 
  href: string; 
  children: React.ReactNode; 
  icon: React.ElementType;
  onClick: () => void;
  highlight?: boolean;
}) => {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 ${
        highlight 
          ? "text-white" 
          : "text-gray-600 hover:text-black hover:bg-gray-50"
      }`}
      style={highlight ? { backgroundColor: "#7283ff" } : {}}
    >
      <Icon className={`w-5 h-5 ${highlight ? "text-white" : "text-gray-400"}`} />
      <span className="font-medium">{children}</span>
    </Link>
  );
};