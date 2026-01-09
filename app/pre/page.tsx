'use client';

import { useEffect } from 'react';

export default function PrePage() {
  useEffect(() => {
    // Carrega o script do VSL do VTurb
    const scriptId = 'scr_69617663b6d47b63694a2008';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.src = 'https://scripts.converteai.net/af053167-2542-4323-9c93-d010e7938eb5/players/69617663b6d47b63694a2008/v4/player.js';
      s.async = true;
      s.id = scriptId;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-10">
        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Mira el vídeo a continuación para aprender a seguir la señal
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-300 text-center mb-8">
          Después de ver el vídeo, haz clic en el botón y ve directo a la plataforma
        </p>

        {/* VSL Container com bordas arredondadas e traçado verde degradê */}
        <div className="mb-8 max-w-4xl mx-auto px-4">
          <div className="rounded-lg p-[2px] bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366]">
            <div className="rounded-lg overflow-hidden bg-black">
              <div style={{ borderRadius: '0.5rem', overflow: 'hidden' }}>
                <vturb-smartplayer
                  id="vid-69617663b6d47b63694a2008"
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
          <p className="text-sm md:text-base text-gray-400 text-center leading-relaxed flex items-center justify-center gap-2">
            <span className="inline-block text-2xl animate-pulse-elegant">
              ⚠️
            </span>
            <span>
              Para el horario pagante funciona, es esencial que hagas el depósito de 20 euros
            </span>
          </p>
        </div>

        {/* Botão CTA com pulsação elegante */}
        <div className="flex justify-center mb-10">
          <a
            href="#"
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
              <span className="text-lg md:text-xl font-bold uppercase tracking-wide font-sans">
                Jugar ahora
              </span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
