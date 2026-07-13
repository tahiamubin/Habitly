"use client";

import Link from "next/link";
import { 
  FaShieldAlt, 
  FaLock, 
  FaUserSecret, 
  FaDatabase,
  FaCookie,
  FaEnvelope,
  FaUserCheck,
  FaGlobe,
  FaFileContract,
  FaCheckCircle,
  FaArrowRight,
  FaSnowman
} from "react-icons/fa";


const PrivacyContent = () => {
  const sections = [
    {
      icon: <FaUserSecret className="w-5 h-5" />,
      title: "Information We Collect",
      content: [
        "Account information (name, email address) when you register",
        "Habit data you create and track within the app",
        "Saved guides and preferences",
        "Usage data to improve our services",
        "No sensitive personal information is collected"
      ]
    },
    {
      icon: <FaLock className="w-5 h-5" />,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain your habit tracking service",
        "To personalize your experience with saved guides",
        "To improve and optimize our platform",
        "To send you updates and notifications (with your consent)",
        "To respond to your support requests"
      ]
    },
    {
      icon: <FaDatabase className="w-5 h-5" />,
      title: "Data Storage & Security",
      content: [
        "All data is stored locally in your browser (localStorage)",
        "No data is transmitted to external servers",
        "Your habits and progress remain private to you",
        "We use industry-standard security practices",
        "You can clear your data at any time"
      ]
    },
    {
      icon: <FaCookie className="w-5 h-5" />,
      title: "Cookies & Tracking",
      content: [
        "We use minimal cookies for essential functionality",
        "No third-party tracking cookies are used",
        "Session data is stored only during your visit",
        "You can disable cookies in your browser settings",
        "We respect Do Not Track signals"
      ]
    },
    {
      icon: <FaUserCheck className="w-5 h-5" />,
      title: "Your Rights",
      content: [
        "Access your data at any time",
        "Delete your data permanently",
        "Export your habit data",
        "Opt-out of communications",
        "Request data correction"
      ]
    },
    {
      icon: <FaGlobe className="w-5 h-5" />,
      title: "International Data Transfers",
      content: [
        "No data is transferred internationally",
        "All data remains on your device",
        "No third-party data processing",
        "Full control over your information"
      ]
    }
  ];

  const lastUpdated = "July 13, 2026";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#f8f9ff] py-16 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: "#7283ff" }} />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: "#b6ffde" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#b6ffde" }}>
            <FaShieldAlt className="w-4 h-4 text-black" />
            <span className="text-sm font-medium text-black">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Your Privacy <span style={{ color: "#7283ff" }}>Matters</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe in transparency and giving you complete control over your data. 
            Here's how we protect your privacy at Habitly.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PrincipleCard 
              icon={<FaUserSecret />}
              title="Your Data, Your Control"
              description="All data stays on your device. You own and control everything."
              color="#7283ff"
            />
            <PrincipleCard 
              icon={<FaLock />}
              title="Privacy First"
              description="No data sharing. No tracking. Complete transparency."
              color="#b6ffde"
            />
            <PrincipleCard 
              icon={<FaShieldAlt />}
              title="Secure by Design"
              description="Built with security best practices from the ground up."
              color="#7283ff"
            />
            <PrincipleCard 
              icon={<FaDatabase />}
              title="Local Storage Only"
              description="Everything is stored locally in your browser. No external servers."
              color="#b6ffde"
            />
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#7283ff]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-1"
                    style={{ backgroundColor: "#f8f9ff", color: "#7283ff" }}
                  >
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black mb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <FaCheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#7283ff" }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
              <FaFileContract className="w-6 h-6" style={{ color: "#7283ff" }} />
              Detailed Privacy Policy
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">1. Introduction</h3>
                <p>
                  At Habitly, we take your privacy seriously. This policy explains how we collect, 
                  use, and protect your information. By using Habitly, you agree to this policy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">2. Data Collection</h3>
                <p className="mb-2">We collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Account Information:</strong> Name and email address when you register</li>
                  <li><strong>Habit Data:</strong> Habits you create, track, and complete</li>
                  <li><strong>Preferences:</strong> Saved guides and app preferences</li>
                  <li><strong>Usage Data:</strong> How you interact with the platform</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">3. How We Use Your Data</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To provide and improve our services</li>
                  <li>To personalize your experience</li>
                  <li>To track your habit progress</li>
                  <li>To send you relevant updates (with your consent)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">4. Data Storage</h3>
                <p>
                  All your data is stored locally in your browser using localStorage. 
                  We do not store any data on external servers. This means:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Your data stays on your device</li>
                  <li>No external data transmission</li>
                  <li>Full control over your information</li>
                  <li>Data is only accessible by you</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">5. Third-Party Services</h3>
                <p>
                  We do not use any third-party analytics, tracking, or advertising services. 
                  Your data is never shared with or sold to third parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">6. Your Rights</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Access:</strong> View all your data at any time</li>
                  <li><strong>Delete:</strong> Remove your data permanently</li>
                  <li><strong>Export:</strong> Download your habit data</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from communications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">7. Children's Privacy</h3>
                <p>
                  Habitly is not intended for children under 13. We do not knowingly collect 
                  information from children under 13.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">8. Changes to This Policy</h3>
                <p>
                  We may update this policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-2">9. Contact Us</h3>
                <p>
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <p className="mt-1 font-medium" style={{ color: "#7283ff" }}>
                  support@habitly.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            Have Questions About Your Privacy?
          </h2>
          <p className="text-gray-600 mb-6">
            We're here to help. Reach out to us anytime.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <button 
                className="px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 flex items-center gap-2"
                style={{ backgroundColor: "#7283ff" }}
              >
                <FaEnvelope className="w-4 h-4" />
                Contact Support
              </button>
            </Link>
            <Link href="/">
              <button 
                className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border-2"
                style={{ borderColor: "#7283ff", color: "#7283ff" }}
              >
                <FaSnowman className="w-4 h-4" />
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Principle Card Component
const PrincipleCard = ({ 
  icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: string;
}) => {
  return (
    <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100">
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
        style={{ backgroundColor: `${color}20`, color: color }}
      >
        {icon}
      </div>
      <h3 className="font-semibold text-black mb-1">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default PrivacyContent;