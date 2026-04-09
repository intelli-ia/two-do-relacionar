import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductAccess from "@/components/ProductAccess";
import MaturityLevels from "@/components/MaturityLevels";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ProductAccess />
      <MaturityLevels />
      <FAQ />
      <Footer />
    </main>
  );
}
