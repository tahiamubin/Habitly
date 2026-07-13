"use client";

import Link from "next/link";
import { 
  FaRocket, 
  FaHeart, 
  FaUsers, 
  FaStar,
  FaShieldAlt,
  FaLeaf,
  FaAward,
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowRight,
  FaCheckCircle,
  FaSnowman
} from "react-icons/fa";


const AboutContent = () => {
  const values = [
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Passion for Growth",
      description: "We believe everyone has the potential to grow and become their best self. Our mission is to provide the tools and support to make that journey possible."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Community First",
      description: "Building habits is easier together. We foster a supportive community where members encourage and motivate each other every step of the way."
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Privacy & Trust",
      description: "Your data is yours. We store everything locally in your browser, ensuring complete privacy and control over your personal information."
    },
    {
      icon: <FaLeaf className="w-6 h-6" />,
      title: "Sustainable Progress",
      description: "We focus on long-term, sustainable habit building rather than quick fixes. Small steps taken consistently lead to lasting transformation."
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "50,000+", label: "Habits Tracked" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "30+", label: "Curated Guides" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former productivity coach with 10+ years of experience helping people build lasting habits.",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=7283ff&color=fff&size=120"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating intuitive tools that make a difference.",
      avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=b6ffde&color=000&size=120"
    },
    {
      name: "Emily Rodriguez",
      role: "Content Director",
      bio: "Wellness expert and writer dedicated to creating actionable, science-backed guides.",
      avatar: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=7283ff&color=fff&size=120"
    }
  ];

  const features = [
    "Curated habit guides from experts",
    "Personal habit tracking with streaks",
    "Save and organize your favorite guides",
    "Progress analytics and insights",
    "Community support and motivation",
    "Completely free to use"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#f8f9ff] py-20 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: "#7283ff" }} />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: "#b6ffde" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#b6ffde" }}>
            <FaSnowman className="w-4 h-4 text-black" />
            <span className="text-sm font-medium text-black">About Habitly</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Building Better Habits,
            <br />
            <span style={{ color: "#7283ff" }}>One Day at a Time</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Habitly was born from a simple idea: everyone deserves access to tools that help them 
            become the best version of themselves. We're on a mission to make habit building 
            accessible, enjoyable, and effective for everyone.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-black" style={{ color: "#7283ff" }}>
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#b6ffde" }}>
                <FaRocket className="w-4 h-4 text-black" />
                <span className="text-sm font-medium text-black">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">
                Empowering You to <span style={{ color: "#7283ff" }}>Transform</span> Your Life
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that small, consistent actions lead to extraordinary results. Our platform 
                combines expert-curated guides, powerful tracking tools, and a supportive community 
                to help you build habits that stick.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5" style={{ color: "#7283ff" }} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <FaQuoteLeft className="w-8 h-8 opacity-20" style={{ color: "#7283ff" }} />
                <p className="text-lg text-gray-700 leading-relaxed my-4">
                  "Habitly has completely transformed my daily routine. The tracking features 
                  keep me accountable, and the guides have given me structure I never knew I needed."
                </p>
                <FaQuoteRight className="w-8 h-8 opacity-20 ml-auto" style={{ color: "#7283ff" }} />
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                  <img 
                    src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=7283ff&color=fff&size=60"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-black">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Productivity Coach, Habitly User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#b6ffde" }}>
              <FaAward className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">Our Values</span>
            </div>
            <h2 className="text-3xl font-bold text-black mb-4">
              What <span style={{ color: "#7283ff" }}>Drives</span> Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Habitly
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl border border-gray-100 hover:border-[#7283ff]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#f8f9ff", color: "#7283ff" }}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#b6ffde" }}>
              <FaUsers className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">Our Team</span>
            </div>
            <h2 className="text-3xl font-bold text-black mb-4">
              The People Behind <span style={{ color: "#7283ff" }}>Habitly</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to helping you build better habits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-[#7283ff]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-black">{member.name}</h3>
                <p className="text-sm font-medium" style={{ color: "#7283ff" }}>{member.role}</p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-center" style={{ backgroundColor: "#f8f9ff" }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: "#7283ff" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: "#b6ffde" }} />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#b6ffde" }}>
                <FaStar className="w-4 h-4 text-black" />
                <span className="text-sm font-medium text-black">Join Us Today</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Ready to <span style={{ color: "#7283ff" }}>Transform</span> Your Life?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Join thousands of people who are building better habits and creating lasting change in their lives.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/register">
                  <button 
                    className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 flex items-center gap-2"
                    style={{ backgroundColor: "#7283ff" }}
                  >
                    Get Started Free
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/explore">
                  <button 
                    className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border-2"
                    style={{ borderColor: "#7283ff", color: "#7283ff" }}
                  >
                    Explore Guides
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;