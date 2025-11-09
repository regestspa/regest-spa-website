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
    <main import Navbar from "@/components/landing/Navbar";
import VideoHero from "@/components/landing/VideoHero";
import ValoresSection from "@/components/landing/ValoresSection";
import HistoriaSection from "@/components/landing/HistoriaSection";
import Servicios from "@/components/landing/Servicios";
import ProductosORO from "@/components/landing/ProductosORO";
import CTASection from "@/components/landing/CTASection";
import Contacto from "@/components/landing/Contacto";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* 🎥 HERO CON VIDEO DE FONDO */}
      <section
        id="hero-video"
        className="relative w-full h-screen overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/regest-video.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>

        {/* Capa de texto sobre el video */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            REGEST SpA
          </h1>
          <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
            Soluciones inteligentes en cobranza, contabilidad y gestión
            tributaria.
          </p>
        </div>
      </section>

      {/* 🔽 CONTENIDO DE LA LANDING */}
      <Navbar />
      {/* Si ya no quieres el hero anterior, deja comentado VideoHero */}
      {/* <VideoHero /> */}
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

</section>
);
}
