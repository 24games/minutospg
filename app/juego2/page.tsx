'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Juego2Page() {
  useEffect(() => {
    // Carrega o script do VSL do VTurb
    const scriptId = 'scr_6962d6cad57dbf78326cf305';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.src = 'https://scripts.converteai.net/af053167-2542-4323-9c93-d010e7938eb5/players/6962d6cad57dbf78326cf305/v4/player.js';
      s.async = true;
      s.id = scriptId;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/assets/pre/background-escuro.webp"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-10">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8 tracking-tight leading-tight" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
          Mira el vídeo de abajo para aprender a crear tu cuenta en la plataforma
        </h1>

        {/* VSL Container com bordas arredondadas e traçado verde degradê */}
        <div className="mb-8 max-w-4xl mx-auto px-4">
          <div className="rounded-lg p-[2px] bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366]">
            <div className="rounded-lg overflow-hidden bg-black">
              <div style={{ borderRadius: '0.5rem', overflow: 'hidden' }}>
                <vturb-smartplayer
                  id="vid-6962d6cad57dbf78326cf305"
                  style={{
                    display: 'block',
                    margin: '0 auto',
                    width: '100%',
                  }}
                ></vturb-smartplayer>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-8 max-w-4xl mx-auto">
          <p className="text-sm md:text-base text-gray-300 text-center flex items-center justify-center gap-2 flex-wrap leading-relaxed">
            <span className="font-medium">
              Debes depositar 20 euros para que funcione
            </span>
            <span className="inline-block text-lg md:text-xl animate-pulse-elegant">
              ⚠️
            </span>
          </p>
        </div>

        {/* Botão CTA com pulsação elegante */}
        <div className="flex justify-center mb-4">
          <a
            href="https://x.afilialink.com/click?pid=1078&offer_id=1068&sub1=lpx1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#25D366] px-8 py-5 text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-300 animate-pulse-elegant hover:scale-105 active:scale-95"
            style={{ opacity: 1, willChange: 'transform' }}
          >
            {/* Efeito de Brilho Laminado */}
            <div className="absolute inset-0 -z-0">
              <div className="absolute h-full w-full -translate-x-full translate-y-full rotate-45 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
            </div>

            {/* Conteúdo do Botão */}
            <div className="relative z-10">
              <span className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide font-sans">
                DEPOSITAR AHORA
              </span>
            </div>
          </a>
        </div>

        {/* Logo abaixo do botão */}
        <div className="flex flex-col items-center justify-center mb-2">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-1">
            <Image
              src="/assets/pre/betista-esp-logo-circ.webp"
              alt="Betista Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>

          {/* Texto de seguridad */}
          <p className="text-base md:text-lg text-gray-300 text-center font-medium">
            100% seguro y regulado
          </p>
        </div>
      </div>
    </main>
  );
}
