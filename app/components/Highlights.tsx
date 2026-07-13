"use client";

import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaChartLine, 
  FaHeart, 
  FaBrain,
  FaCalendarCheck,
  FaUsers,
  FaFire,
  FaStar,
  FaAward,
  FaLeaf,
  FaLightbulb,
  FaGem,
  FaSnowman
} from "react-icons/fa";

const Highlights = () => {
  const highlights = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Start Your Journey",
      description: "Begin with curated guides designed for every skill level",
      color: "#7283ff",
      bgColor: "#f0f2ff"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Track Progress",
      description: "Monitor your habits with intuitive analytics and insights",
      color: "#b6ffde",
      bgColor: "#f0fff8"
    },
    {
      icon: <FaCalendarCheck className="w-6 h-6" />,
      title: "Build Consistency",
      description: "Create daily routines that become lifelong habits",
      color: "#7283ff",
      bgColor: "#f0f2ff"
    },
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: "Master Your Mind",
      description: "Learn proven techniques for focus and mental clarity",
      color: "#b6ffde",
      bgColor: "#f0fff8"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Wellness Focus",
      description: "Holistic approach to physical and mental wellbeing",
      color: "#7283ff",
      bgColor: "#f0f2ff"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Community Support",
      description: "Connect with like-minded people on the same journey",
      color: "#b6ffde",
      bgColor: "#f0fff8"
    },
    {
      icon: <FaFire className="w-6 h-6" />,
      title: "Maintain Streaks",
      description: "Stay motivated with daily streak tracking and rewards",
      color: "#7283ff",
      bgColor: "#f0f2ff"
    },
    {
      icon: <FaStar className="w-6 h-6" />,
      title: "Curated Content",
      description: "Expert-reviewed guides and techniques that work",
      color: "#b6ffde",
      bgColor: "#f0fff8"
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      title: "Achieve Goals",
      description: "Set and accomplish meaningful life goals",
      color: "#7283ff",
      bgColor: "#f0f2ff"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#b6ffde" }}>
            <FaSnowman className="w-4 h-4 text-black" />
            <span className="text-sm font-medium text-black">Why Habitly</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Everything You Need to <span style={{ color: "#7283ff" }}>Build Better Habits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From curated guides to powerful tracking tools, Habitly provides everything 
            you need to transform your daily routine.
          </p>
        </div>

        {/* Highlights Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#7283ff]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div 
                className="inline-flex p-3 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: highlight.bgColor, color: highlight.color }}
              >
                {highlight.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-black mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {highlight.description}
              </p>

              {/* Decorative number */}
              <div className="absolute top-4 right-4 text-5xl font-bold opacity-5 text-black pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 scale-x-0 group-hover:scale-x-100"
                style={{ backgroundColor: highlight.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard 
            value="10K+"
            label="Active Users"
            icon={<FaUsers className="w-5 h-5" />}
          />
          <StatCard 
            value="50K+"
            label="Habits Tracked"
            icon={<FaFire className="w-5 h-5" />}
          />
          <StatCard 
            value="98%"
            label="Satisfaction Rate"
            icon={<FaStar className="w-5 h-5" />}
          />
          <StatCard 
            value="30+"
            label="Curated Guides"
            icon={<FaLightbulb className="w-5 h-5" />}
          />
        </div>
      </div>
    </section>
  );
};

// Stat Card Component
const StatCard = ({ 
  value, 
  label, 
  icon 
}: { 
  value: string; 
  label: string; 
  icon: React.ReactNode;
}) => {
  return (
    <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#7283ff]/30 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-2xl font-bold text-black">{value}</span>
        <span className="text-gray-400">{icon}</span>
      </div>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
};

export default Highlights;