import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: 'REGEST - Gestión Empresarial',
  description: 'Servicios profesionales de gestión empresarial, recuperación de cartera, contabilidad y asesoría tributaria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <AuthProvider>
          {children}
          <Toaster />
          <Sonner />
        </AuthProvider>
      </body>
    </html>
  );
}
