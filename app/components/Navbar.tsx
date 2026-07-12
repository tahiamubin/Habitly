"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "../lib/auth-client";

export default function Navbar() {
  // const {data: session} = authClient.useSession()
  // const user = session?.user 
  // console.log(user)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check login status from localStorage on mount
  useEffect(() => {
    const authStatus = localStorage.getItem("habitly_auth");
    setIsLoggedIn(authStatus === "true");
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("habitly_auth");
    setIsLoggedIn(false);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-white"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo with animation */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <span className="text-2xl font-extrabold tracking-tight text-black">
                Habit
                <span className="relative">
                  ly
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5"
                    style={{ backgroundColor: "#7283ff" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                </span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLinks 
              isLoggedIn={isLoggedIn} 
              onLogout={handleLogout}
            />
          </div>

          {/* Mobile Menu Button with animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation with animations */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gray-100"
            >
              <MobileNavLinks 
                isLoggedIn={isLoggedIn} 
                onLogout={handleLogout}
                setIsMenuOpen={setIsMenuOpen}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// Desktop Navigation Links
function NavLinks({ isLoggedIn, onLogout }: { isLoggedIn: boolean; onLogout: () => void }) {
  return (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/explore">Explore</NavLink>

      {isLoggedIn ? (
        <>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/habits" 
              className="px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              style={{ backgroundColor: "#7283ff", color: "white" }}
            >
              + Add Habit
            </Link>
          </motion.div>
          <NavLink href="/habits">My Habits</NavLink>
          <NavLink href="/saved-guides">Saved Guides</NavLink>
          <NavLink href="/about">About</NavLink>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLogout}
            className="px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            style={{ backgroundColor: "#b6ffde", color: "black" }}
          >
            Logout
          </motion.button>
        </>
      ) : (
        <>
          <NavLink href="/login">Login</NavLink>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            style={{ backgroundColor: "#b6ffde", color: "black" }}
          >
            <Link href="/register">Register</Link>
          </motion.button>
        </>
      )}
    </>
  );
}

// Mobile Navigation Links
function MobileNavLinks({ 
  isLoggedIn, 
  onLogout, 
  setIsMenuOpen 
}: { 
  isLoggedIn: boolean; 
  onLogout: () => void;
  setIsMenuOpen: (value: boolean) => void;
}) {
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.div 
      className="flex flex-col space-y-2 py-4"
      variants={{
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.05 }
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      }}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <MobileNavLink href="/" onClick={closeMenu}>Home</MobileNavLink>
      <MobileNavLink href="/explore" onClick={closeMenu}>Explore</MobileNavLink>

      {isLoggedIn ? (
        <>
          <motion.div
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: -20 }
            }}
          >
            <Link 
              href="/habits" 
              className="block w-full text-center px-4 py-3 rounded-full font-medium transition-all duration-300"
              style={{ backgroundColor: "#7283ff", color: "white" }}
              onClick={closeMenu}
            >
              + Add Habit
            </Link>
          </motion.div>
          <MobileNavLink href="/habits" onClick={closeMenu}>My Habits</MobileNavLink>
          <MobileNavLink href="/saved-guides" onClick={closeMenu}>Saved Guides</MobileNavLink>
          <MobileNavLink href="/about" onClick={closeMenu}>About</MobileNavLink>
          <motion.button
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: -20 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onLogout();
              closeMenu();
            }}
            className="w-full px-4 py-3 rounded-full font-medium transition-all duration-300"
            style={{ backgroundColor: "#b6ffde", color: "black" }}
          >
            Logout
          </motion.button>
        </>
      ) : (
        <>
          <MobileNavLink href="/login" onClick={closeMenu}>Login</MobileNavLink>
          <motion.div
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: -20 }
            }}
          >
            <Link 
              href="/register" 
              className="block w-full text-center px-4 py-3 rounded-full font-medium transition-all duration-300"
              style={{ backgroundColor: "#b6ffde", color: "black" }}
              onClick={closeMenu}
            >
              Register
            </Link>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

// Reusable NavLink with animation
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Link 
        href={href} 
        className="px-3 py-2 rounded-lg text-black font-medium transition-colors hover:bg-gray-50"
      >
        {children}
      </Link>
      <motion.div
        className="absolute -bottom-1 left-1/2 w-0 h-0.5"
        style={{ backgroundColor: "#7283ff" }}
        whileHover={{ width: "80%", left: "10%" }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

// Reusable MobileNavLink with animation
function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <motion.div
      variants={{
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: -20 }
      }}
    >
      <Link 
        href={href} 
        className="block px-4 py-3 rounded-lg text-black font-medium hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  );
}