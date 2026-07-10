"use client";

import Link from "next/link";
import { 
  FaRocket, 
  FaLightbulb, 
  FaChartLine, 
  FaCalendarCheck,
  FaBrain,
  FaHeart,
  FaStar,
  FaFire,
  FaGem,
  FaTrophy,
  FaSnowman
} from "react-icons/fa";


const CTASection = () => {
  const ctas = [
    {
      id: 1,
      icon: <FaRocket className="w-6 h-6" />,
      title: "Start Your Journey",
      description: "Begin building life-changing habits today",
      color: "#7283ff",
      href: "/register",
      primary: true
    },
    {
      id: 2,
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Explore Guides",
      description: "Discover curated routines & challenges",
      color: "#b6ffde",
      href: "/explore",
      primary: false
    },
    {
      id: 3,
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Track Progress",
      description: "Monitor your habits and see growth",
      color: "#7283ff",
      href: "/habits",
      primary: false
    },
    {
      id: 4,
      icon: <FaCalendarCheck className="w-6 h-6" />,
      title: "Build Consistency",
      description: "Create daily routines that stick",
      color: "#b6ffde",
      href: "/explore?category=routines",
      primary: false
    },
    {
      id: 5,
      icon: <FaBrain className="w-6 h-6" />,
      title: "Master Your Mind",
      description: "Techniques for mental clarity & focus",
      color: "#7283ff",
      href: "/explore?category=techniques",
      primary: false
    },
    {
      id: 6,
      icon: <FaHeart className="w-6 h-6" />,
      title: "Wellness Habits",
      description: "Improve physical & mental wellbeing",
      color: "#b6ffde",
      href: "/explore?category=wellness",
      primary: false
    },
    {
      id: 7,
      icon: <FaStar className="w-6 h-6" />,
      title: "Save Favorites",
      description: "Bookmark guides you love",
      color: "#7283ff",
      href: "/saved-guides",
      primary: false
    },
    {
      id: 8,
      icon: <FaFire className="w-6 h-6" />,
      title: "Start Challenges",
      description: "Push yourself with timed challenges",
      color: "#b6ffde",
      href: "/explore?category=challenges",
      primary: false
    },
    {
      id: 9,
      icon: <FaGem className="w-6 h-6" />,
      title: "Unlock Potential",
      description: "Discover your best self",
      color: "#7283ff",
      href: "/about",
      primary: false
    },
    {
      id: 10,
      icon: <FaTrophy className="w-6 h-6" />,
      title: "Achieve Goals",
      description: "Celebrate your wins and milestones",
      color: "#b6ffde",
      href: "/habits",
      primary: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#b6ffde" }}>
            <FaSnowman className="w-4 h-4 text-black" />
            <span className="text-sm font-medium text-black">Choose Your Path</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Pick <span style={{ color: "#7283ff" }}>7+</span> Habits to Build
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start with one habit, master it, then add more. Your journey to becoming the best version of yourself begins here.
          </p>
        </div>

        {/* CTA Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ctas.map((cta, index) => (
            <CTA
              key={cta.id}
              {...cta}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl max-w-2xl mx-auto" style={{ backgroundColor: "#f8f9ff" }}>
            <h3 className="text-2xl font-bold text-black mb-3">
              Ready to Transform Your Life?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of people building better habits with Habitly
            </p>
            <Link href="/register">
              <button 
                className="px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ backgroundColor: "#7283ff", color: "white" }}
              >
                Get Started Free
                <span className="ml-2">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual CTA Card Component
const CTA = ({ 
  icon, 
  title, 
  description, 
  color, 
  href, 
  primary,
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: string; 
  href: string; 
  primary?: boolean;
  delay: number;
}) => {
  return (
    <Link 
      href={href}
      className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        primary 
          ? 'border-[#7283ff] bg-[#7283ff]/5 hover:bg-[#7283ff]/10' 
          : 'border-gray-200 bg-white hover:border-[#7283ff]/30'
      }`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="flex flex-col items-start gap-4">
        {/* Icon */}
        <div 
          className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color}15`, color: color }}
        >
          {icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg font-bold text-black mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CTASection;