"use client";

import { motion } from "framer-motion";
import { CarruselValores } from "./CarruselValores";

export function NuestraHistoria() {
  return (
    <section
      id="historia"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(251,146,60,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.08),transparent_50%)] pointer-events-none" />

      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
            }}
          >
            Nuestra Historia
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <div
              className="absolute inset-0 blur-2xl opacity-50"
              style={{
                background:
                  "linear-gradient(90deg, rgba(59,130,246,0.3), rgba(251,146,60,0.3))",
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mt-4"
          >
            Descubre cómo REGEST ha transformado la gestión empresarial con
            innovación y compromiso
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-green-500/20 rounded-3xl blur-2xl animate-pulse" />

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              boxShadow:
                "0 0 25px rgba(0, 255, 200, 0.3), 0 0 50px rgba(59, 130, 246, 0.2)",
            }}
            whileHover={{
              boxShadow:
                "0 0 35px rgba(0, 255, 200, 0.5), 0 0 70px rgba(59, 130, 246, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black/50 backdrop-blur-sm rounded-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
                src="https://www.youtube.com/embed/yA0fn1C9eHc?start=6&autoplay=0&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1"
                title="Video REGEST - Nuestra Historia"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500/30 via-orange-500/30 to-green-500/30 rounded-2xl pointer-events-none" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm">Innovación</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-150" />
              <span className="text-sm">Excelencia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-300" />
              <span className="text-sm">Confianza</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Nuestros Valores
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Los principios que nos guían en cada decisión y acción
            </p>
          </div>
          <CarruselValores />
        </motion.div>
      </div>
    </section>
  );
}
