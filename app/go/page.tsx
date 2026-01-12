'use client';

export default function GoPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-[#0a1a0a] to-black flex items-center justify-center px-4">
      <div className="container mx-auto text-center py-20">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-12 leading-tight px-4">
          Carga tu{' '}
          <span 
            className="inline-block bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] bg-clip-text text-transparent"
            style={{
              backgroundSize: '200% auto',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient-shift 3s ease-in-out infinite',
            }}
          >
            100% BONO
          </span>
          {' '}y{' '}
          <span 
            className="inline-block bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] bg-clip-text text-transparent"
            style={{
              backgroundSize: '200% auto',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient-shift 3s ease-in-out infinite',
            }}
          >
            100 GIROS GRATIS
          </span>
        </h1>

        {/* Botão CTA com pulsação elegante */}
        <div className="flex justify-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center overflow-visible rounded-2xl bg-[#25D366] px-12 py-6 text-white shadow-[0_4px_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ opacity: 1, willChange: 'transform' }}
          >
            {/* Efeito de pulsação do traçado/borda - camada 1 */}
            <div 
              className="absolute -inset-1 rounded-2xl border-2 border-[#25D366] animate-pulse-border"
              style={{
                opacity: 0.6,
                boxShadow: '0 0 30px rgba(37, 211, 102, 0.8)',
              }}
            ></div>
            
            {/* Efeito de pulsação do traçado/borda - camada 2 (delay) */}
            <div 
              className="absolute -inset-1 rounded-2xl border-2 border-[#25D366] animate-pulse-border"
              style={{
                opacity: 0.4,
                animationDelay: '1s',
                boxShadow: '0 0 30px rgba(37, 211, 102, 0.6)',
              }}
            ></div>

            {/* Conteúdo do Botão */}
            <div className="relative z-10">
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight font-sans">
                Liberar ahora
              </span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
