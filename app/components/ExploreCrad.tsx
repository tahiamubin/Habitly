"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaStar, 
  FaArrowRight, 
  FaBookmark,
  FaRegBookmark,
  FaCalendarAlt,
  FaSignal,
  FaUsers
} from "react-icons/fa";
import { Guide } from "@/types/guide";

interface ExploreCardProps {
  guide: Guide;
}

const ExploreCard = ({ guide }: ExploreCardProps) => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  // Difficulty color mapping
  const difficultyColor = {
    Beginner: "#b6ffde",
    Intermediate: "#7283ff",
    Advanced: "#ff6b6b"
  };

  // Category icon mapping
  const categoryIcons: Record<string, string> = {
    Health: "💪",
    Focus: "🎯",
    Sleep: "🌙",
    Fitness: "🏋️",
    Mindfulness: "🧘"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/guides/${guide.id}`}>
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-[#7283ff]/20 hover:-translate-y-1">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={guide.image} 
              alt={guide.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm bg-white/90 shadow-sm flex items-center gap-1.5">
              <span>{categoryIcons[guide.category] || "📌"}</span>
              <span className="text-gray-700">{guide.category}</span>
            </div>

            {/* Save Button */}
            <button
              onClick={toggleSave}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-all duration-300 hover:scale-110"
            >
              {isSaved ? (
                <FaBookmark className="w-4 h-4" style={{ color: "#7283ff" }} />
              ) : (
                <FaRegBookmark className="w-4 h-4 text-gray-500" />
              )}
            </button>

            {/* Difficulty Badge */}
            <div 
              className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm flex items-center gap-1.5"
              style={{ 
                backgroundColor: difficultyColor[guide.difficulty],
                color: guide.difficulty === "Beginner" ? "black" : "white"
              }}
            >
              <FaSignal className="w-3 h-3" />
              <span>{guide.difficulty}</span>
            </div>

            {/* Duration Badge */}
            {guide.durationDays && (
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full text-xs font-medium bg-black/70 backdrop-blur-sm text-white flex items-center gap-1.5">
                <FaCalendarAlt className="w-3 h-3" />
                <span>{guide.durationDays} Days</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            {/* Title */}
            <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">
              {guide.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 flex-1 mb-4 line-clamp-2">
              {guide.shortDescription}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              {/* Rating */}
              <div className="flex items-center gap-1.5">
                <div className="flex items-center">
                  <FaStar className="w-4 h-4" style={{ color: "#7283ff" }} />
                  <span className="ml-1 text-sm font-medium text-black">
                    {guide.rating.toFixed(1)}
                  </span>
                </div>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <FaUsers className="w-3 h-3" />
                  100+ 
                </span>
              </div>

              {/* View Link */}
              <div className="flex items-center gap-1 text-sm font-medium transition-all duration-300 group-hover:gap-2" style={{ color: "#7283ff" }}>
                View Guide
                <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ExploreCard;