"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useSubscription } from "@/hooks/use-subscription";
import Link from "next/link";

export function Navbar() {
  const { user, logout } = useAuth();
  const { subscription } = useSubscription();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nuestros Valores", href: "#valores" },
    { label: "Nuestros Resultados", href: "#resultados" },
    { label: "Servicios", href: "#servicios" },
    { label: "Productos ORO", href: "#productos-oro" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg shadow-md shadow-orange-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#inicio" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/50">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                REGEST
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-orange-600 after:to-orange-400 after:transition-all"
              >
                {item.label}
              </a>
            ))}
            {user && (
              <div className="flex items-center space-x-4 border-l border-gray-700 pl-6">
                <Link href="/suscripcion">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-500 text-orange-400 hover:bg-orange-950/30"
                  >
                    {subscription?.plan.name === "Premium" ? (
                      <><Crown className="h-4 w-4 mr-2" /> Premium</>
                    ) : (
                      <>Mi Plan</>
                    )}
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-gray-400 hover:text-white"
                >
                  <User className="h-4 w-4 mr-2" />
                  Cerrar sesión
                </Button>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-orange-500/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:bg-orange-950/50 hover:text-orange-500 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {user && (
              <>
                <div className="border-t border-gray-700 my-2" />
                <Link href="/suscripcion" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="block px-4 py-2 text-gray-300 hover:bg-orange-950/50 hover:text-orange-500 rounded-lg transition-colors">
                    {subscription?.plan.name === "Premium" ? (
                      <><Crown className="h-4 w-4 mr-2 inline" /> Mi Plan Premium</>
                    ) : (
                      <>Mi Plan</>
                    )}
                  </div>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left block px-4 py-2 text-gray-300 hover:bg-orange-950/50 hover:text-orange-500 rounded-lg transition-colors"
                >
                  <User className="h-4 w-4 mr-2 inline" />
                  Cerrar sesión
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
