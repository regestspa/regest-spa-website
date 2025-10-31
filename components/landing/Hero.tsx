"use client";

import { motion } from "framer-motion";
import { MessageCircle, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.1),transparent_50%)] -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Finanzas claras.{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
              Cartera recuperada.
            </span>
            <br />
            Tributación sin sorpresas.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
        >
          En REGEST combinamos expertos contables/tributarios con automatización
          y análisis de datos para decisiones rápidas y seguras.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-orange-500/50 hover:shadow-2xl hover:shadow-orange-600/50 transition-all transform hover:scale-105"
            asChild
          >
            <a
              href="https://wa.me/56948675503"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablemos hoy
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-orange-500 text-orange-400 hover:bg-orange-950/50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            asChild
          >
            <a
              href="https://www.youtube.com/@impuestochile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="mr-2 h-5 w-5" />
              Ver YouTube
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-block bg-gray-900/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border-2 border-orange-500/30"
        >
          <p className="text-sm sm:text-base text-gray-300">
            <span className="font-semibold text-orange-500">Acceso ORO:</span>{" "}
            GPT Tributario + Calculadora Tributaria avanzada
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
