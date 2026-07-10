"use client";

import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaSnowman } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: "#b6ffde" }}>
                <FaSnowman className="h-5 w-5 text-black" />
              </div>
              <p className="text-xl font-bold tracking-tight">
                <span style={{ color: "#7283ff" }}>Habit</span>
                <span className="text-black">ly</span>
              </p>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Build better habits, one day at a time. Your personal habit-building platform for growth and consistency.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <SocialLink href="#" icon={<FaTwitter />} label="Twitter" />
              <SocialLink href="#" icon={<FaGithub />} label="GitHub" />
              <SocialLink href="#" icon={<FaLinkedin />} label="LinkedIn" />
              <SocialLink href="#" icon={<FaYoutube />} label="YouTube" />
              <SocialLink href="#" icon={<FaInstagram />} label="Instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-black text-sm uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/explore">Explore Guides</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-black text-sm uppercase tracking-wider mb-4">
              Features
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/habits">Habit Tracker</FooterLink>
              <FooterLink href="/explore?category=routines">Routines</FooterLink>
              <FooterLink href="/explore?category=challenges">Challenges</FooterLink>
              <FooterLink href="/saved-guides">Saved Guides</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-black text-sm uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {currentYear} Habitly. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-black transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors duration-200">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-black transition-colors duration-200">
              Cookies
            </Link>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: "#b6ffde" }}></span>
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: "#7283ff" }}></span>
              <span className="text-xs text-gray-400">v1.0.0</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Link Component
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
      >
        {children}
      </Link>
    </li>
  );
};

// Reusable Social Link Component
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:text-black hover:border-[#7283ff] hover:bg-[#7283ff]/5 transition-all duration-200"
    >
      {icon}
    </Link>
  );
};

export default Footer;