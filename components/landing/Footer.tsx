"use client";

import { Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nuestro Giro", href: "#giro" },
    { label: "Servicios", href: "#servicios" },
    { label: "Productos ORO", href: "#productos-oro" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold">REGEST</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Finanzas claras, cartera recuperada y tributación sin sorpresas.
              Expertos en contabilidad, tributación y análisis de datos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <a
              href="https://www.youtube.com/@impuestochile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 flex items-center justify-center transition-all">
                <Youtube className="w-5 h-5" />
              </div>
              <span>@impuestochile</span>
            </a>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Contacto</h4>
              <p className="text-gray-400 text-sm">
                WhatsApp: +56 9 8221 8271
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} REGEST SpA. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Hecho con dedicación en Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
