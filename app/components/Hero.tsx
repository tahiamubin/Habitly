"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaStar, FaCheckCircle, FaSnowman, FaUsers } from "react-icons/fa";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#f8f9ff]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#7283ff" }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#b6ffde" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: "#7283ff" }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement x="10%" y="20%" delay={0} duration={6} className="hidden lg:block">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center rotate-6">
            <span className="text-2xl">🎯</span>
          </div>
        </FloatingElement>
        <FloatingElement x="85%" y="30%" delay={2} duration={8} className="hidden lg:block">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center -rotate-6">
            <span className="text-2xl">📚</span>
          </div>
        </FloatingElement>
        <FloatingElement x="5%" y="70%" delay={4} duration={7} className="hidden lg:block">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center rotate-12">
            <span className="text-xl">⚡</span>
          </div>
        </FloatingElement>
        <FloatingElement x="90%" y="75%" delay={1} duration={9} className="hidden lg:block">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center -rotate-6">
            <span className="text-3xl">🏆</span>
          </div>
        </FloatingElement>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#b6ffde" }}
            >
              <FaSnowman className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">#1 Habit Building Platform</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6"
            >
              Build Better
              <br />
              <span style={{ color: "#7283ff" }}>Habits</span>
              <span className="text-black">, Better</span>
              <br />
              <span className="text-black">Life</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 max-w-lg mb-8 leading-relaxed"
            >
              Transform your daily routine with curated guides, habit tracking, 
              and a community of goal-getters. Start your journey today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link href="/register">
                <button 
                  className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2 group"
                  style={{ backgroundColor: "#7283ff", color: "white" }}
                >
                  Get Started Free
                  <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="/explore">
                <button 
                  className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border-2"
                  style={{ borderColor: "#7283ff", color: "#7283ff" }}
                >
                  <FaPlay className="w-4 h-4" />
                  Explore Guides
                </button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img 
                        src={`https://ui-avatars.com/api/?name=User${i}&background=${i % 2 === 0 ? '7283ff' : 'b6ffde'}&color=${i % 2 === 0 ? 'fff' : '000'}&size=40`}
                        alt={`User ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <FaStar className="w-4 h-4" style={{ color: "#7283ff" }} />
                    <FaStar className="w-4 h-4" style={{ color: "#7283ff" }} />
                    <FaStar className="w-4 h-4" style={{ color: "#7283ff" }} />
                    <FaStar className="w-4 h-4" style={{ color: "#7283ff" }} />
                    <FaStar className="w-4 h-4" style={{ color: "#7283ff" }} />
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-black">10,000+</span> happy users
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheckCircle className="w-4 h-4" style={{ color: "#7283ff" }} />
                <span>No credit card required</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:flex justify-center items-center hidden"
          >
            <div className="relative w-full max-w-lg">
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* Decorative circle */}
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full" style={{ backgroundColor: "#b6ffde" }} />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full" style={{ backgroundColor: "#7283ff", opacity: 0.1 }} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl" style={{ backgroundColor: "#7283ff" }}>
                        <FaSnowman className="w-full h-full p-2 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-black">Habitly</p>
                        <p className="text-xs text-gray-500">Building habits</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#b6ffde" }} />
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#7283ff" }} />
                      <span className="w-2 h-2 rounded-full bg-gray-300" />
                    </div>
                  </div>

                  {/* Habit List */}
                  <div className="space-y-3 mb-6">
                    <HabitItem 
                      label="Morning Meditation" 
                      streak={12} 
                      completed 
                    />
                    <HabitItem 
                      label="Daily Exercise" 
                      streak={7} 
                      completed={false} 
                    />
                    <HabitItem 
                      label="Read 20 Pages" 
                      streak={34} 
                      completed 
                    />
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                    <StatItem value="45" label="Day Streak" />
                    <StatItem value="12" label="Habits" />
                    <StatItem value="89%" label="Consistency" />
                  </div>
                </div>
              </div>

              {/* Floating Mini Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -right-8 -bottom-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#b6ffde" }}>
                    <FaUsers className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black">10K+</p>
                    <p className="text-xs text-gray-500">Active users</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-8 -top-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 max-w-[180px]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-sm font-bold text-black">Top Performer</p>
                    <p className="text-xs text-gray-500">30-day challenge</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Floating Element Component
const FloatingElement = ({ 
  children, 
  x, 
  y, 
  delay, 
  duration,
  className 
}: { 
  children: React.ReactNode; 
  x: string; 
  y: string; 
  delay: number; 
  duration: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ left: x, top: y }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Habit Item Component
const HabitItem = ({ 
  label, 
  streak, 
  completed 
}: { 
  label: string; 
  streak: number; 
  completed: boolean;
}) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:bg-gray-50">
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
          completed ? 'bg-[#b6ffde]' : 'border-2 border-gray-300'
        }`}>
          {completed && <FaCheckCircle className="w-3 h-3 text-black" />}
        </div>
        <span className={`text-sm ${completed ? 'text-black' : 'text-gray-400'}`}>
          {label}
        </span>
      </div>
      <div className="flex items-center gap-1 text-xs">
        <span className="text-gray-500">🔥</span>
        <span className="font-medium text-black">{streak}d</span>
      </div>
    </div>
  );
};

// Stat Item Component
const StatItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="text-center">
      <p className="text-lg font-bold text-black">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
};

export default Hero;