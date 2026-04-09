import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductAccess from "@/components/ProductAccess";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProductAccess />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
