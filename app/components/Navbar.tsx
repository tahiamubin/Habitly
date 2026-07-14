"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "../lib/auth-client";

type NavItem = { href: string; label: string };

const PUBLIC_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/privacy", label: "Privacy" },
  { href: "/about", label: "About" },
];

const GUEST_LINKS: NavItem[] = [{ href: "/login", label: "Login" }];

const AUTH_LINKS: NavItem[] = [{ href: "/my-habits", label: "My Habits" }];

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const isLoggedIn = !!user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const links = [...PUBLIC_LINKS, ...(isLoggedIn ? AUTH_LINKS : GUEST_LINKS)];

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
          {/* Logo */}
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

          {/* Desktop: horizontal row, hidden on mobile */}
          {!isPending && (
            <div className="hidden md:flex items-center space-x-1">
              {links.map((link) => (
                <NavLinkDesktop key={link.href} href={link.href}>
                  {link.label}
                </NavLinkDesktop>
              ))}

              {isLoggedIn ? (
                <>
                  <ActionButton href="/habits" bg="#7283ff" color="white">
                    + Add Habit
                  </ActionButton>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                    style={{ backgroundColor: "#b6ffde", color: "black" }}
                  >
                    Logout
                  </motion.button>
                </>
              ) : (
                <ActionButton href="/register" bg="#b6ffde" color="black">
                  Register
                </ActionButton>
              )}
            </div>
          )}

          {/* Mobile menu toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile: collapsible dropdown, same `links` array */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gray-100"
            >
              <motion.div
                className="flex flex-col space-y-2 py-4"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {links.map((link) => (
                  <NavLinkMobile
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </NavLinkMobile>
                ))}

                {isLoggedIn ? (
                  <>
                    <MobileActionButton
                      href="/habits"
                      bg="#7283ff"
                      color="white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      + Add Habit
                    </MobileActionButton>
                    <motion.button
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -20 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleLogout}
                      className="w-full px-4 py-3 rounded-full font-medium transition-all duration-300"
                      style={{ backgroundColor: "#b6ffde", color: "black" }}
                    >
                      Logout
                    </motion.button>
                  </>
                ) : (
                  <MobileActionButton
                    href="/register"
                    bg="#b6ffde"
                    color="black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </MobileActionButton>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

function NavLinkDesktop({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
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

function NavLinkMobile({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.div
      variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: -20 } }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="block px-4 py-3 rounded-lg text-black font-medium hover:bg-gray-50 transition-colors"
      >
        {children}
      </Link>
    </motion.div>
  );
}

function ActionButton({
  href,
  bg,
  color,
  children,
}: {
  href: string;
  bg: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md inline-block"
        style={{ backgroundColor: bg, color }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function MobileActionButton({
  href,
  bg,
  color,
  onClick,
  children,
}: {
  href: string;
  bg: string;
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: -20 } }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="block w-full text-center px-4 py-3 rounded-full font-medium transition-all duration-300"
        style={{ backgroundColor: bg, color }}
      >
        {children}
      </Link>
    </motion.div>
  );
}