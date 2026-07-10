"use client";

import Link from "next/link";
import { 
  FaLightbulb, 
  FaArrowRight, 
  FaClock, 
  FaBrain,
  FaBolt,
  FaLeaf,
  FaStar,
  FaFire
} from "react-icons/fa";
import { GiHabitUp } from "react-icons/gi";

const ProductivityTips = () => {
  const tips = [
    {
      id: 1,
      icon: <FaClock className="w-5 h-5" />,
      title: "The 2-Minute Rule",
      description: "If a task takes less than 2 minutes, do it immediately. This prevents small tasks from piling up.",
      tag: "Quick Win",
      tagColor: "#b6ffde"
    },
    {
      id: 2,
      icon: <FaBrain className="w-5 h-5" />,
      title: "Deep Work Blocks",
      description: "Schedule 90-minute focus sessions with zero distractions. Your brain needs uninterrupted time to enter flow state.",
      tag: "Focus",
      tagColor: "#7283ff"
    },
    {
      id: 3,
      icon: <FaBolt className="w-5 h-5" />,
      title: "Eat the Frog First",
      description: "Tackle your most challenging task first thing in the morning when your willpower is at its peak.",
      tag: "Strategy",
      tagColor: "#b6ffde"
    },
    {
      id: 4,
      icon: <FaLeaf className="w-5 h-5" />,
      title: "Pomodoro Technique",
      description: "Work for 25 minutes, then take a 5-minute break. Repeat 4 times for optimal productivity.",
      tag: "Technique",
      tagColor: "#7283ff"
    },
    {
      id: 5,
      icon: <FaStar className="w-5 h-5" />,
      title: "Habit Stacking",
      description: "Attach a new habit to an existing one. 'After I brush my teeth, I'll meditate for 2 minutes.'",
      tag: "Habit Building",
      tagColor: "#b6ffde"
    },
    {
      id: 6,
      icon: <FaFire className="w-5 h-5" />,
      title: "The 5-Second Rule",
      description: "When you feel the urge to procrastinate, count 5-4-3-2-1 and take action immediately.",
      tag: "Mindset",
      tagColor: "#7283ff"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#b6ffde" }}>
            <FaLightbulb className="w-4 h-4 text-black" />
            <span className="text-sm font-medium text-black">Productivity Tips</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Master Your <span style={{ color: "#7283ff" }}>Productivity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proven strategies to help you build better habits, stay focused, and achieve more every day.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <TipCard key={tip.id} tip={tip} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 group"
            style={{ backgroundColor: "#7283ff", color: "white" }}
          >
            Discover More Tips
            <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Individual Tip Card Component
const TipCard = ({ tip, index }: { tip: any; index: number }) => {
  return (
    <div 
      className="group relative p-6 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{
        animationDelay: `${index * 0.05}s`,
      }}
    >
      {/* Icon */}
      <div 
        className="inline-flex p-3 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${tip.tagColor}20`, color: "#7283ff" }}
      >
        {tip.icon}
      </div>

      {/* Tag */}
      <span 
        className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
        style={{ backgroundColor: `${tip.tagColor}20`, color: tip.tagColor === "#b6ffde" ? "#000" : "#fff" }}
      >
        {tip.tag}
      </span>

      {/* Content */}
      <h3 className="text-lg font-bold text-black mb-2">
        {tip.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {tip.description}
      </p>

      {/* Learn More Link */}
      <Link 
        href={`/explore?tip=${tip.id}`}
        className="inline-flex items-center gap-1 text-sm font-medium mt-4 transition-all duration-300 hover:gap-2"
        style={{ color: "#7283ff" }}
      >
        Learn More
        <FaArrowRight className="w-3 h-3" />
      </Link>

      {/* Decorative Number */}
      <div className="absolute top-4 right-4 text-4xl font-bold opacity-5 text-black">
        {String(tip.id).padStart(2, '0')}
      </div>
    </div>
  );
};

export default ProductivityTips;