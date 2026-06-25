"use client";

import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { useRef, useState } from "react";

export function VideoVimeo() {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <section className="relative bg-black overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[100px]" />
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
          {/* Trust badge */}
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

          {/* Main headline */}
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

          {/* Subtitle */}
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

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-10 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
          />
        </motion.div>

        {/* Vimeo player */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative"
        >
          {/* Glow ring around player */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-600/40 via-amber-500/20 to-orange-600/40 blur-md" />

          <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-2xl shadow-black/60">
            {/* Play placeholder shown while iframe loads */}
            {!loaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center animate-pulse">
                  <Play className="w-7 h-7 text-orange-400 ml-1" />
                </div>
              </div>
            )}

            {/* 16:9 responsive wrapper */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1204640680?badge=0&autopause=0&player_id=0&app_id=58479&color=f97316&title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                title="REGEST - Video Corporativo"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
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
  );
}
