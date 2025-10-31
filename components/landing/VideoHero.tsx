"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function VideoHero() {
  const [videoError, setVideoError] = useState(false);

  const scrollToServicios = () => {
    const serviciosSection = document.getElementById("servicios");
    if (serviciosSection) {
      serviciosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-black">
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          poster="/videos/REGEST2-Cover.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/regest-video.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-orange-900 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-orange-500/20 animate-pulse-slow" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-float-delayed" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-float-slow" />
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl animate-glow">
            <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-green-400 bg-clip-text text-transparent">
              REGEST SpA
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto drop-shadow-lg font-light animate-fade-in-delay">
            Soluciones inteligentes en cobranza, contabilidad y gestión
            tributaria.
          </p>

          <div className="pt-8 animate-fade-in-delay-2">
            <Button
              size="lg"
              onClick={scrollToServicios}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/70 text-lg px-8 py-6"
            >
              Ver más
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}
