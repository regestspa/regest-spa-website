import { Navbar } from "@/components/landing/Navbar";
import { VideoHero } from "@/components/landing/VideoHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <VideoHero />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-4">Página en construcción</h2>
          <p className="text-gray-400">Los componentes se están cargando...</p>
        </div>
      </div>
    </main>
  );
}
