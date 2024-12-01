import Footer from "<components>/components/Footer";
import Hero from "<components>/components/Hero";

import Testimonials from "<components>/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}
