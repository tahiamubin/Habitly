"use client";

import Link from "next/link";
import { useState } from "react";
import { FaPlus, FaMinus, FaSnowman } from "react-icons/fa";


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Habitly and how does it work?",
      answer: "Habitly is a habit-building platform that helps you create, track, and maintain positive habits. You can browse curated guides, set personal habits with frequency and targets, track your streaks, and save guides for later. Everything is stored locally in your browser for privacy."
    },
    {
      question: "Do I need to create an account to use Habitly?",
      answer: "No! You can browse the public catalog of guides without logging in. However, to track your personal habits, save guides, and access your dashboard, you'll need to create a free account. Registration is quick and easy with email or Google."
    },
    {
      question: "Is my data safe and private?",
      answer: "Absolutely! Habitly is a frontend-only application. All your personal data - habits, progress, saved guides - is stored locally in your browser's localStorage. We don't store any of your personal information on external servers."
    },
    {
      question: "How do I track my habit streaks?",
      answer: "Once you create a habit, you can mark it as complete each day. Habitly automatically tracks your streaks, showing you how many consecutive days you've maintained the habit. You can also set daily, weekly, or monthly targets for each habit."
    },
    {
      question: "What types of guides are available in the catalog?",
      answer: "Our curated catalog includes a wide range of productivity and habit guides: daily routines, weekly challenges, technique explainers, wellness practices, mindfulness exercises, fitness routines, and more. New guides are added regularly."
    },
    {
      question: "Can I save guides to read later?",
      answer: "Yes! When you're logged in, you can save any guide from the public catalog to your 'Saved Guides' section. This allows you to build a personal library of resources that you can reference anytime."
    },
    {
      question: "How many habits can I track at once?",
      answer: "You can track as many habits as you want! Habitly is designed to help you build habits at your own pace. We recommend starting with 1-3 habits and gradually adding more as you build consistency."
    },
    {
      question: "Is Habitly free to use?",
      answer: "Yes! Habitly is completely free. All features - browsing guides, tracking habits, saving guides, and more - are available at no cost. We believe everyone should have access to tools that help them become their best selves."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "#b6ffde" }}>
            <FaSnowman className="w-4 h-4 text-black" />
            <span className="text-sm font-medium text-black">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked <span style={{ color: "#7283ff" }}>Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Habitly. Can't find what you're looking for? Feel free to contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl transition-all duration-300 overflow-hidden"
              style={{ 
                borderColor: openIndex === index ? "#7283ff" : "#e5e7eb",
                backgroundColor: openIndex === index ? "#f8f9ff" : "white"
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-all duration-300"
              >
                <span className="text-lg font-semibold text-black pr-8">
                  {faq.question}
                </span>
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: openIndex === index ? "#7283ff" : "#f3f4f6",
                    color: openIndex === index ? "white" : "#7283ff"
                  }}
                >
                  {openIndex === index ? (
                    <FaMinus className="w-4 h-4" />
                  ) : (
                    <FaPlus className="w-4 h-4" />
                  )}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? "max-h-96 opacity-100 pb-6 px-6" 
                    : "max-h-0 opacity-0 px-6"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl" style={{ backgroundColor: "#f8f9ff" }}>
          <h3 className="text-xl font-bold text-black mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            We're here to help you build better habits
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="mailto:support@habitly.com"
              className="px-6 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#7283ff", color: "white" }}
            >
              Contact Support
            </a>
            <Link 
              href="/help"
              className="px-6 py-2.5 rounded-xl font-medium border-2 transition-all duration-300 hover:scale-105"
              style={{ borderColor: "#7283ff", color: "#7283ff" }}
            >
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;