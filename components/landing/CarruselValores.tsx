"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Detrás de Cada Factura",
    subtitle: "Hay una Historia",
    description: "En REGEST creemos que detrás de cada factura hay una historia, un esfuerzo, un sueño.",
    gradient: "from-blue-600/20 via-cyan-600/20 to-teal-600/20",
    accentColor: "from-blue-500 to-cyan-500",
    particles: "rgba(59, 130, 246, 0.3)",
  },
  {
    title: "Tu Éxito",
    subtitle: "Nuestra Misión",
    description: "No solo recuperamos cartera, acompañamos a nuestros clientes en cada paso hacia el éxito financiero.",
    gradient: "from-orange-600/20 via-amber-600/20 to-yellow-600/20",
    accentColor: "from-orange-500 to-amber-500",
    particles: "rgba(251, 146, 60, 0.3)",
  },
  {
    title: "Profesionalismo",
    subtitle: "Con Empatía",
    description: "Entendemos que cada empresa es única, por eso ofrecemos soluciones personalizadas con un toque humano.",
    gradient: "from-purple-600/20 via-fuchsia-600/20 to-pink-600/20",
    accentColor: "from-purple-500 to-fuchsia-500",
    particles: "rgba(168, 85, 247, 0.3)",
  },
  {
    title: "Innovación",
    subtitle: "Y Tecnología",
    description: "Combinamos tecnología de vanguardia con experiencia humana para resultados excepcionales.",
    gradient: "from-green-600/20 via-emerald-600/20 to-teal-600/20",
    accentColor: "from-green-500 to-emerald-500",
    particles: "rgba(34, 197, 94, 0.3)",
  },
  {
    title: "Confianza",
    subtitle: "Y Transparencia",
    description: "Construimos relaciones duraderas basadas en la confianza, la transparencia y los resultados medibles.",
    gradient: "from-indigo-600/20 via-blue-600/20 to-cyan-600/20",
    accentColor: "from-indigo-500 to-blue-500",
    particles: "rgba(99, 102, 241, 0.3)",
  },
];

export function CarruselValores() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-3xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <div
            className={`relative w-full h-full bg-gradient-to-br ${slides[currentSlide].gradient} backdrop-blur-xl`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />

            <div className="absolute inset-0 overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: slides[currentSlide].particles,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <div
                  className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${slides[currentSlide].accentColor} text-white text-sm font-semibold shadow-lg`}
                >
                  {slides[currentSlide].subtitle}
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                  {slides[currentSlide].title}
                </h2>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                <motion.div
                  className="flex gap-4 justify-center mt-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${slides[currentSlide].accentColor} opacity-20`}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div
              className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${slides[currentSlide].accentColor}`}
            >
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full w-12 h-12 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full w-12 h-12 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
