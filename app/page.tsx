import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Caroussel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { OurGym } from "@/components/our-gym";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Hero />
      
        <Caroussel />
      <OurGym />
      <Footer />
    </main>
  );
}
