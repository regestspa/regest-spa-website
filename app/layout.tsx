import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Providers } from '@/components/providers/Providers';

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
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
