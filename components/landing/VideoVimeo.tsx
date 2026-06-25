"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Play, X } from "lucide-react";

const VIMEO_EMBED = "https://player.vimeo.com/video/1204640680?badge=0&autopause=0&player_id=0&app_id=58479&color=f97316&title=0&byline=0&portrait=0&dnt=1";

export function VideoVimeo() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-black overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-sm font-medium mb-8"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
              ))}
              <span className="ml-1">Más de 6 años apoyando con éxito el crecimiento empresarial.</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5"
            >
              Detrás de cada factura{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                hay una historia...
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32 }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              <span className="text-white font-semibold">REGEST:</span> Más que recuperar dinero,{" "}
              <span className="text-orange-400 font-medium">recuperamos oportunidades.</span>
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-10 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            />
          </motion.div>

          {/* Player card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative"
          >
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-600/40 via-amber-500/20 to-orange-600/40 blur-md" />

            {/* Inline embed — primary */}
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-slate-900 shadow-2xl shadow-black/60"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={VIMEO_EMBED}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                title="REGEST - Video Corporativo"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
              />

              {/* Overlay fallback trigger — visible only when iframe shows nothing */}
              <button
                onClick={() => setModalOpen(true)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-900/0 hover:bg-slate-900/60 transition-colors group"
                aria-label="Ver video aquí"
                tabIndex={-1}
                style={{ pointerEvents: "none" }}
              />
            </div>
          </motion.div>

          {/* Explicit fallback button always visible below */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            className="mt-5 flex justify-center"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 hover:border-orange-500/60 hover:text-orange-300 transition-all duration-200 text-sm font-medium"
            >
              <span className="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-orange-400 text-orange-400 ml-0.5" />
              </span>
              Ver video aquí
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65 }}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-8"
          >
            {[
              { value: "+6 años", label: "de experiencia" },
              { value: "100%", label: "enfoque en resultados" },
              { value: "PyMEs", label: "son nuestra prioridad" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-orange-400">{value}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setModalOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Dialog */}
            <motion.div
              key="lightbox-dialog"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute -top-10 right-0 z-10 flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <X className="w-4 h-4" />
                Cerrar
              </button>

              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-600/50 via-amber-500/25 to-orange-600/50 blur-lg" />

              {/* 16:9 embed */}
              <div
                className="relative w-full rounded-2xl overflow-hidden bg-slate-950 shadow-2xl"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={`${VIMEO_EMBED}&autoplay=1`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  title="REGEST - Video Corporativo"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
