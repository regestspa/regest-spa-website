"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HistoriaSection() {
  const stats = [
    {
      number: "6 años",
      title: "Trayectoria empresarial",
      description: "Impulsando el crecimiento empresarial de las compañías tanto chilenas como extranjeras con sede en Chile, ofreciendo soluciones en cobranza, contabilidad y gestión tributaria con un enfoque profesional, humano y estratégico.",
      gradient: "from-blue-600 to-blue-400",
      bgGradient: "from-blue-900/40 to-blue-800/20",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-400/60",
    },
    {
      number: "95%",
      title: "Efectividad en cartera administrativa",
      description: "95% de éxito en recuperación de cartera vigente, garantizando liquidez y continuidad operativa a través de una gestión ágil, trazable y enfocada en resultados sostenibles.",
      gradient: "from-orange-600 to-orange-400",
      bgGradient: "from-orange-900/40 to-orange-800/20",
      borderColor: "border-orange-500/30",
      hoverBorder: "hover:border-orange-400/60",
    },
    {
      number: "65%",
      title: "Efectividad en recuperación de cartera prejudicial castigada",
      description: "Alcanzamos un 65% de efectividad promedio en la recuperación de cartera castigada, uniendo estrategia, tecnología y empatía para transformar pérdidas en oportunidades sostenibles.",
      gradient: "from-green-600 to-green-400",
      bgGradient: "from-green-900/40 to-green-800/20",
      borderColor: "border-green-500/30",
      hoverBorder: "hover:border-green-400/60",
    },
    {
      number: "100%",
      title: "Efectividad contable y tributaria",
      description: "100% de cumplimiento en asesorías contables y tributarias, respaldadas por control digital, precisión normativa y acompañamiento continuo para la toma de decisiones empresariales.",
      gradient: "from-gray-600 to-gray-400",
      bgGradient: "from-gray-900/40 to-gray-800/20",
      borderColor: "border-gray-500/30",
      hoverBorder: "hover:border-gray-400/60",
    },
  ];

  return (
    <section
      id="resultados"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Nuestros Resultados REGEST
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 perspective-1000">
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 rounded-full blur-3xl opacity-30 animate-pulse" />

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 60px rgba(251, 146, 60, 0.5)",
                      "0 0 40px rgba(34, 197, 94, 0.5)",
                      "0 0 60px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src="/regest-logo.svg"
                    alt="REGEST Logo"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 60px rgba(251, 146, 60, 0.5)",
                      "0 0 40px rgba(34, 197, 94, 0.5)",
                      "0 0 60px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 backface-hidden flex items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className="text-center px-8">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-orange-400 to-green-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
                      INNOVACIÓN
                    </h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl mt-2">
                      GESTIÓN
                    </h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl mt-2">
                      Y CONFIANZA
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileFocus={{ scale: 1.05, y: -5 }}
              tabIndex={0}
              role="article"
              aria-label={`${stat.title}: ${stat.number}`}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${stat.bgGradient} border-2 ${stat.borderColor} ${stat.hoverBorder} focus-visible:border-indigo-500/60 backdrop-blur-sm transition-all duration-300 group cursor-pointer outline-none focus-visible:outline-2 focus-visible:outline-indigo-500/60 focus-visible:outline-offset-2`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`}
                >
                  {stat.number}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 group-focus:text-white/90 transition-colors">
                  {stat.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 group-focus:text-gray-200 transition-colors">
                  {stat.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-50 group-focus:opacity-50 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Resultados medibles que transforman empresas. Nuestro compromiso con la excelencia
            se refleja en cada proceso y en la confianza de nuestros clientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
