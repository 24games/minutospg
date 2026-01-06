import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Home() {
  // Array de imagens para o carrossel de prova social
  const socialProofImages = [
    "/assets/prints/print1.webp",
    "/assets/prints/print2.webp",
    "/assets/prints/print3.webp",
    "/assets/prints/print4.webp",
    "/assets/prints/print5.webp",
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* DOBRA 1: HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Imagem de Fundo */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-bg-mobile.webp"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Botão WhatsApp - Posicionado na parte inferior */}
        <div className="absolute bottom-[15%] left-1/2 w-[90%] -translate-x-1/2 z-10">
          <a
            href="https://chat.whatsapp.com/HNhPGPVz1XT9KelvcSPmkM"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#25D366] px-6 py-5 text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 animate-pulse-slow hover:scale-105 active:scale-95"
          >
            {/* Efeito de Brilho Laminado */}
            <div className="absolute inset-0 -z-0">
              <div className="absolute h-full w-full -translate-x-full translate-y-full rotate-45 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
            </div>

            {/* Conteúdo do Botão (com z-index para ficar acima do shimmer) */}
            <div className="relative z-10 flex items-center justify-center gap-3">
              {/* Ícone WhatsApp */}
              <MessageCircle className="h-6 w-6 flex-shrink-0" strokeWidth={2.5} />

              {/* Texto do Botão */}
              <span className="text-lg font-bold uppercase tracking-wide font-sans">
                UNIRSE AL GRUPO
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* DOBRA 2: PROVA SOCIAL - CARROSSEL */}
      <section className="bg-[#050505] py-10">
        <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 px-4">
            {socialProofImages.map((image, index) => (
              <div
                key={index}
                className="relative h-[80vh] w-[70vw] flex-shrink-0 snap-start"
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg border border-[#25D366]/50">
                  <Image
                    src={image}
                    alt={`Prova social ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 400px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

