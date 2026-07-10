"use client";

import { FaSnowman, FaStar, FaUserCircle } from "react-icons/fa";


const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Productivity Coach",
      content: "Habitly has completely transformed my daily routine. The habit tracking is intuitive and the guides are excellent!",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=7283ff&color=fff&size=100"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      content: "The clean interface makes it easy to log habits daily. The streak feature keeps me motivated every single day.",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=b6ffde&color=000&size=100"
    },
    {
      name: "Emily Rodriguez",
      role: "Wellness Entrepreneur",
      content: "The challenges pushed me to achieve things I thought were impossible. This is the habit app I've been waiting for.",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=7283ff&color=fff&size=100"
    },
    {
      name: "David Kim",
      role: "Student",
      content: "The productivity guides helped me build a study routine that actually works. My grades have improved significantly!",
      rating: 5,
      avatar: "https://ui-avatars.com/api/?name=David+Kim&background=b6ffde&color=000&size=100"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3" style={{ backgroundColor: "#b6ffde" }}>
            <FaSnowman className="w-4 h-4 text-black" />
            <span className="text-sm font-medium text-black">Testimonials</span>
          </div>
          <h2 className="text-3xl font-bold text-black">
            Loved by <span style={{ color: "#7283ff" }}>Thousands</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4" style={{ color: "#7283ff" }} />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                {testimonial.avatar ? (
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                ) : (
                  <FaUserCircle className="w-10 h-10 text-gray-300" />
                )}
                <div>
                  <p className="font-semibold text-black text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;