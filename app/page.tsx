import Hero from "./components/Hero";

import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import ProductivityTips from "./components/ProductivityTips";
import TestimonialsSimple from "./components/Testimonials";
import { guides } from "@/data/guides";
import ExploreCard from "./components/ExploreCrad";
import CTASection from "./components/CTASection";
import Highlights from "./components/Highlights";

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center pt-10 pb-10">
          Feature <span style={{ color: "#7283ff" }}>Guides</span>
        </h2>
        <div className="container mx-auto gap-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {guides.slice(0, 4).map((guide) => (
            <ExploreCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>

      <TestimonialsSimple />
      <ProductivityTips />
      <Newsletter />
      <Highlights/>
      <FAQ />
    </div>
  );
}
