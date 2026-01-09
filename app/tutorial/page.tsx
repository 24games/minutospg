'use client';

import { useEffect } from 'react';

export default function TutorialPage() {
  useEffect(() => {
    // Carrega o script do VSL do VTurb
    const scriptId = 'scr_681a894b61bf26ce0ffe49a7';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.src = 'https://scripts.converteai.net/af053167-2542-4323-9c93-d010e7938eb5/players/681a894b61bf26ce0ffe49a7/player.js';
      s.async = true;
      s.id = scriptId;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-10">
        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Aprende cómo seguir nuestros señales
        </h1>

        {/* VSL Container */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div
            id="vid_681a894b61bf26ce0ffe49a7"
            style={{
              position: 'relative',
              width: '100%',
              padding: '177.77777777777777% 0 0',
            }}
          >
            <img
              id="thumb_681a894b61bf26ce0ffe49a7"
              src="https://images.converteai.net/af053167-2542-4323-9c93-d010e7938eb5/players/681a894b61bf26ce0ffe49a7/thumbnail.jpg"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              alt="thumbnail"
            />
            <div
              id="backdrop_681a894b61bf26ce0ffe49a7"
              style={{
                WebkitBackdropFilter: 'blur(5px)',
                backdropFilter: 'blur(5px)',
                position: 'absolute',
                top: 0,
                height: '100%',
                width: '100%',
              }}
            ></div>
          </div>
        </div>

        {/* Botão CTA */}
        <div className="flex justify-center mb-10">
          <a
            href="https://x.afilialink.com/click?pid=1078&offer_id=1064"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#25D366] px-8 py-5 text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-300 animate-pulse-slow hover:scale-105 active:scale-95"
            style={{ opacity: 1, willChange: 'transform' }}
          >
            {/* Efeito de Brilho Laminado */}
            <div className="absolute inset-0 -z-0">
              <div className="absolute h-full w-full -translate-x-full translate-y-full rotate-45 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
            </div>

            {/* Conteúdo do Botão */}
            <div className="relative z-10">
              <span className="text-lg md:text-xl font-bold uppercase tracking-wide font-sans">
                Regístrate ahora
              </span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
