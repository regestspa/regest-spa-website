import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Home, type LucideIcon } from "lucide-react";
import { FuturisticImage } from "@/components/servicios/FuturisticImage";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string[];
  benefits: Benefit[];
  processSteps: ProcessStep[];
  statsTitle: string;
  statsHighlight: string;
  statsSubtext?: string;
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  imageType: 'cartera' | 'analisis' | 'contable' | 'tributario' | 'empresas' | 'actividades' | 'planeacion' | 'reforma' | 'contratos';
}

export function ServiceLayout({
  title,
  subtitle,
  description,
  benefits,
  processSteps,
  statsTitle,
  statsHighlight,
  statsSubtext,
  themeColors,
  imageType,
}: ServiceLayoutProps) {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{
            background: `radial-gradient(circle, ${themeColors.primary}40 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-delayed"
          style={{
            background: `radial-gradient(circle, ${themeColors.secondary}40 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-float-slow"
          style={{
            background: `radial-gradient(circle, ${themeColors.accent}30 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] bg-[length:100px_100%] animate-scan" />
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />

        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px animate-pulse"
                style={{
                  width: `${Math.random() * 40 + 10}%`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `linear-gradient(90deg, transparent, ${
                    [
                      themeColors.primary,
                      themeColors.secondary,
                      themeColors.accent,
                    ][i % 3]
                  }, transparent)`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 2 + 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${Math.random() * 300 + 200}px`,
                height: `${Math.random() * 300 + 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  [themeColors.primary, themeColors.secondary, themeColors.accent][i % 3]
                }30 0%, transparent 70%)`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke={themeColors.primary} strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {[...Array(8)].map((_, i) => {
          const angle = (i * 45);
          const distance = 45;
          const x = 50 + distance * Math.cos(angle * Math.PI / 180);
          const y = 50 + distance * Math.sin(angle * Math.PI / 180);
          return (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                background: themeColors.accent,
                boxShadow: `0 0 20px ${themeColors.accent}`,
                animation: `pulse-glow 2s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          );
        })}

        <div className="relative z-10 container mx-auto px-4 max-w-7xl h-full flex flex-col justify-center pt-20">
          <nav
            className="flex items-center gap-2 text-sm text-zinc-300 mb-12 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full w-fit border border-zinc-800 mx-auto"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-amber-500 transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span>Inicio</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/#servicios"
              className="hover:text-amber-500 transition-colors"
            >
              <span>Servicios</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span
              className="font-semibold"
              style={{ color: themeColors.primary }}
            >
              {title}
            </span>
          </nav>

          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <div
                className="px-6 py-2 rounded-full backdrop-blur-md border-2 text-sm font-semibold tracking-wider uppercase animate-pulse-glow"
                style={{
                  borderColor: themeColors.primary,
                  color: themeColors.primary,
                  background: `linear-gradient(135deg, ${themeColors.primary}10 0%, ${themeColors.secondary}10 100%)`,
                  boxShadow: `0 0 30px ${themeColors.primary}40`,
                }}
              >
                Servicio Profesional
              </div>
            </div>

            <div className="relative mb-8">
              <div
                className="absolute inset-0 blur-[120px] opacity-40"
                style={{
                  background: `radial-gradient(circle, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, transparent 70%)`,
                }}
              />
              <h1
                className="relative text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight tracking-tight"
                style={{
                  background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: `drop-shadow(0 0 40px ${themeColors.primary}60)`,
                }}
              >
                {title}
              </h1>
            </div>

            <div
              className="h-1 w-32 mb-8 rounded-full animate-pulse-glow mx-auto"
              style={{
                background: `linear-gradient(90deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent} 100%)`,
                boxShadow: `0 0 20px ${themeColors.primary}`,
              }}
            />

            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light max-w-[720px] mx-auto mb-10">
              {subtitle}
            </p>

            {benefits.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {benefits.slice(0, 4).map((benefit, i) => (
                  <div
                    key={i}
                    className="px-5 py-2.5 rounded-full backdrop-blur-md border text-sm font-medium transition-all hover:scale-105"
                    style={{
                      borderColor: `${themeColors.accent}40`,
                      background: `linear-gradient(135deg, ${themeColors.primary}08 0%, ${themeColors.secondary}08 100%)`,
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    {benefit.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div
              className="w-8 h-12 rounded-full border-2 flex items-start justify-center p-2 transition-all hover:scale-110"
              style={{ borderColor: themeColors.primary }}
            >
              <div
                className="w-1.5 h-3 rounded-full animate-pulse"
                style={{ background: themeColors.primary }}
              />
            </div>
            <span
              className="text-xs uppercase tracking-wider font-semibold"
              style={{ color: themeColors.primary }}
            >
              Descubre más
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              {description.map((paragraph, index) => (
                <p key={index} className="text-justify">{paragraph}</p>
              ))}
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-black p-8">
              <FuturisticImage type={imageType} themeColors={themeColors} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-amber-500 bg-clip-text text-transparent">
            Beneficios Clave
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 hover:border-amber-500 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <benefit.icon className="w-12 h-12 text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-amber-500 bg-clip-text text-transparent">
            Nuestro Proceso
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-2xl font-bold text-black shadow-lg shadow-amber-500/30">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-950/40 via-amber-900/30 to-amber-950/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
              {statsTitle}
            </h2>
            <p className="text-2xl text-white mb-4">{statsHighlight}</p>
            {statsSubtext && (
              <p className="text-sm text-zinc-400 italic">{statsSubtext}</p>
            )}
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${themeColors.primary}30 0%, ${themeColors.secondary}30 100%)`,
          }}
        />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-2xl text-zinc-200 mb-12 font-light">
              Agenda una reunión con nuestros expertos
            </p>
            <Button
              asChild
              size="lg"
              className="relative group overflow-hidden text-black font-bold text-xl px-12 py-8 rounded-full animate-pulse-button"
              style={{ backgroundColor: themeColors.primary }}
            >
              <a
                href="https://wa.me/56948675503"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Agendar una reunión
                </span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
