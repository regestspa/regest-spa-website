import { Navbar } from "@/components/landing/Navbar";
import { VideoHero } from "@/components/landing/VideoHero";
import { ValoresSection } from "@/components/landing/ValoresSection";
import { HistoriaSection } from "@/components/landing/HistoriaSection";
import { Servicios } from "@/components/landing/Servicios";
import { ProductosORO } from "@/components/landing/ProductosORO";
import { CTASection } from "@/components/landing/CTASection";
import { Contacto } from "@/components/landing/Contacto";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <VideoHero />
      <ValoresSection />
      <HistoriaSection />
      <Servicios />
      <ProductosORO />
      <CTASection />
      <Contacto />
      <Footer />
    </main>
  );
}
