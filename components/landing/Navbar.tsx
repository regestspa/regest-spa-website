"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import { useSubscription } from "@/hooks/use-subscription";

export function Navbar() {
  const router = useRouter();
  const { user } = useAuth();
  const { hasCalculatorAccess, hasRegestbotAccess, loading: subLoading } = useSubscription();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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

  const handleDemoClick = () => {
    setIsMobileMenuOpen(false);

    // Not logged in → show auth modal
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    // Logged in but still loading subscription → wait resolved on /demo-regest
    if (subLoading) {
      router.push("/demo-regest");
      return;
    }

    // Logged in but no access to calculator or regestbot → go to payment page
    if (!hasCalculatorAccess() && !hasRegestbotAccess()) {
      router.push("/suscripcion");
      return;
    }

    // Fully authorized → go directly to demo
    router.push("/demo-regest");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-lg shadow-md shadow-orange-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
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

            {/* Desktop nav */}
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
              <Button
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white"
                onClick={handleDemoClick}
              >
                Demo
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-orange-500 text-orange-400 hover:bg-orange-500/10"
                onClick={() => setShowAuthModal(true)}
              >
                {user ? "Mi cuenta" : "Iniciar sesión"}
              </Button>
            </div>

            {/* Mobile hamburger */}
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

        {/* Mobile menu */}
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

              {/* Demo — gated, same logic as desktop */}
              <button
                className="block w-full text-left px-4 py-2 text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 rounded-lg transition-colors font-medium"
                onClick={handleDemoClick}
              >
                Demo
              </button>

              {/* Login / account */}
              <button
                className="block w-full text-left px-4 py-2 text-orange-400 border border-orange-500/30 rounded-lg hover:bg-orange-500/10 transition-colors"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowAuthModal(true);
                }}
              >
                {user ? "Mi cuenta" : "Iniciar sesión"}
              </button>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          setShowAuthModal(false);
          // After login re-evaluate access
          handleDemoClick();
        }}
      />
    </>
  );
}
