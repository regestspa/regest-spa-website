"use client";

import { motion } from "framer-motion";
import { MessageCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para transformar tu gestión financiera?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Agenda una consulta gratuita o explora nuestro contenido educativo en YouTube.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-orange-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold transform hover:scale-105"
              asChild
            >
              <a
                href="https://wa.me/56948675503"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hablemos por WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold transform hover:scale-105"
              asChild
            >
              <a
                href="https://www.youtube.com/@impuestochile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Ver demo en YouTube
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
