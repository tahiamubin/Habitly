import Hero from "./components/Hero";

import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import ProductivityTips from "./components/ProductivityTips";
import TestimonialsSimple from "./components/Testimonials";


export default function Home() {
  return (
    <div>
     <Hero/>
      <TestimonialsSimple/>
        <ProductivityTips/>
        <Newsletter/>
        <FAQ/>
    </div>
  );
}
