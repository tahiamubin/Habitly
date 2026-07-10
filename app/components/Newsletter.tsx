"use client";

import { useState } from "react";
import { FaEnvelope, FaCheckCircle, FaArrowRight, FaSnowman } from "react-icons/fa";


const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#f8f9ff" }}>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: "#7283ff" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: "#b6ffde" }} />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#b6ffde" }}>
                <FaSnowman className="w-4 h-4 text-black" />
                <span className="text-sm font-medium text-black">Stay Updated</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
                Join Our <span style={{ color: "#7283ff" }}>Newsletter</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get weekly habit tips, new guide releases, and productivity insights delivered straight to your inbox.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Feature 
                icon="📚" 
                title="Curated Guides" 
                description="New habits & routines every week" 
              />
              <Feature 
                icon="💡" 
                title="Expert Tips" 
                description="Proven productivity techniques" 
              />
              <Feature 
                icon="🎯" 
                title="Exclusive Content" 
                description="Member-only challenges" 
              />
            </div>

            {/* Newsletter Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7283ff] focus:border-transparent transition-all bg-white"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#7283ff", color: "white" }}
                  >
                    {isLoading ? (
                      <>
                        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <FaArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  No spam, unsubscribe anytime. Join 10,000+ habit builders.
                </p>
              </form>
            ) : (
              <div className="max-w-2xl mx-auto text-center p-8 bg-white rounded-2xl shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: "#b6ffde" }}>
                  <FaCheckCircle className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  You're In! 🎉
                </h3>
                <p className="text-gray-600 mb-4">
                  Welcome to the Habitly community! Check your inbox for a confirmation email.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm font-medium hover:underline"
                  style={{ color: "#7283ff" }}
                >
                  Subscribe another email
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Component
const Feature = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm">
      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: "#b6ffde" }}>
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-black">{title}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Newsletter;