"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Guide } from "@/types/guide";
import { FaArrowLeft, FaBookmark, FaCalendarAlt, FaCheckCircle, FaClock, FaFire, FaLightbulb, FaRegBookmark, FaShare, FaSignal, FaStar, FaUsers } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

interface GuideDetailProps {
  guide: Guide;
}

const GuideDetail = ({ guide }: GuideDetailProps) => {
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "steps">("overview");
  const [copied, setCopied] = useState(false);

  const difficultyColor = {
    Beginner: "#b6ffde",
    Intermediate: "#7283ff",
    Advanced: "#ff6b6b"
  };

  const difficultyLabel = {
    Beginner: "Beginner Friendly",
    Intermediate: "Intermediate",
    Advanced: "Advanced"
  };

  const categoryIcons: Record<string, string> = {
    Health: "💪",
    Focus: "🎯",
    Sleep: "🌙",
    Fitness: "🏋️",
    Mindfulness: "🧘"
  };

  const categoryColors: Record<string, string> = {
    Health: "#b6ffde",
    Focus: "#7283ff",
    Sleep: "#ff6b6b",
    Fitness: "#ff9f43",
    Mindfulness: "#a29bfe"
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: guide.title,
          text: guide.shortDescription,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled");
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
        >
          <FaArrowLeft className="w-4 h-4" />
          Back to Explore
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
            <img 
              src={guide.image} 
              alt={guide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Badges on Image */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-3">
              <span 
                className="px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm bg-white/90 shadow-sm flex items-center gap-1.5"
              >
                <span>{categoryIcons[guide.category] || "📌"}</span>
                <span className="text-gray-700">{guide.category}</span>
              </span>
              <span 
                className="px-3 py-1.5 rounded-full text-sm font-medium shadow-sm flex items-center gap-1.5"
                style={{ 
                  backgroundColor: difficultyColor[guide.difficulty],
                  color: guide.difficulty === "Beginner" ? "black" : "white"
                }}
              >
                <FaSignal className="w-3 h-3" />
                <span>{guide.difficulty}</span>
              </span>
              {guide.durationDays && (
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-black/70 backdrop-blur-sm text-white flex items-center gap-1.5">
                  <FaCalendarAlt className="w-3 h-3" />
                  <span>{guide.durationDays} Days</span>
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
                  {guide.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center">
                      <FaStar className="w-4 h-4" style={{ color: "#7283ff" }} />
                      <span className="ml-1 font-medium text-black">
                        {guide.rating.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 flex items-center gap-1">
                      <FaUsers className="w-3 h-3" />
                      100+ enrolled
                    </span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 flex items-center gap-1">
                    <FaClock className="w-3 h-3" />
                    {guide.durationDays ? `${guide.durationDays} days` : "Self-paced"}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={toggleSave}
                  className="p-3 rounded-xl border border-gray-200 hover:border-[#7283ff] hover:bg-[#7283ff]/5 transition-all duration-200"
                  title={isSaved ? "Unsave" : "Save"}
                >
                  {isSaved ? (
                    <FaBookmark className="w-5 h-5" style={{ color: "#7283ff" }} />
                  ) : (
                    <FaRegBookmark className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <button
                  onClick={handleShare}
                  className="p-3 rounded-xl border border-gray-200 hover:border-[#7283ff] hover:bg-[#7283ff]/5 transition-all duration-200"
                  title="Share"
                >
                  {copied ? (
                    <FaCheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <FaShare className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === "overview"
                    ? "border-[#7283ff] text-[#7283ff]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("steps")}
                className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === "steps"
                    ? "border-[#7283ff] text-[#7283ff]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Steps ({guide.steps.length})
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === "overview" ? (
                <OverviewTab guide={guide} />
              ) : (
                <StepsTab steps={guide.steps} />
              )}
            </div>

            {/* Start Challenge Button */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">Ready to start building this habit?</p>
                  <p className="text-sm font-medium text-black">
                    {guide.durationDays ? `${guide.durationDays}-day challenge` : "Self-paced guide"}
                  </p>
                </div>
                {/* <Link href={`/explore/${guide.id}/start`}>
                  <button 
                    className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 flex items-center gap-2"
                    style={{ backgroundColor: "#7283ff" }}
                  >
                    <FaFire className="w-4 h-4" />
                    Start Challenge
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Overview Tab
const OverviewTab = ({ guide }: { guide: Guide }) => {
  return (
    <div className="space-y-6">
      {/* Full Description */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
          About This Guide
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {guide.fullDescription}
        </p>
      </div>

      {/* Guide Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <FaListCheck className="w-4 h-4" />
            <span>Difficulty Level</span>
          </div>
          <p className="font-medium text-black">{guide.difficulty}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <FaCalendarAlt className="w-4 h-4" />
            <span>Estimated Time</span>
          </div>
          <p className="font-medium text-black">
            {guide.durationDays ? `${guide.durationDays} days` : "Self-paced"}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <FaUsers className="w-4 h-4" />
            <span>Community</span>
          </div>
          <p className="font-medium text-black">100+ enrolled</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <FaLightbulb className="w-4 h-4" />
            <span>Category</span>
          </div>
          <p className="font-medium text-black">{guide.category}</p>
        </div>
      </div>

      {/* Additional Images */}
      {guide.images && guide.images.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {guide.images.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`${guide.title} - ${index + 1}`}
                className="w-full h-32 object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Steps Tab
const StepsTab = ({ steps }: { steps: string[] }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
        {steps.length} Steps to Success
      </h3>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
        
        {steps.map((step, index) => (
          <div key={index} className="relative flex gap-4 pb-6 last:pb-0">
            {/* Step Number Circle */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10"
              style={{ 
                backgroundColor: "#7283ff",
                color: "white"
              }}
            >
              {index + 1}
            </div>
            <div className="flex-1 pt-1">
              <p className="text-gray-700 leading-relaxed">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideDetail;