"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Mapeamento de slugs para links do WhatsApp
const whatsappLinksMap: Record<string, string> = {
  ad10: "https://wa.me/18128151753?text=Hola!%20Quiero%20recuperar%20mi%20acceso%20al%20grupo%20VIP",
  ad12: "https://wa.me/18128151753?text=Quiero%20recuperar%20mi%20acceso%20al%20grupo%20VIP",
  ad07: "https://wa.me/18128151753?text=Quiero%20rescatar%20mi%20acceso%20al%20grupo%20VIP",
  ad06: "https://wa.me/18128151753?text=quiero%20rescatar%20mi%20acceso%20al%20grupo",
};

export default function GoX1SlugPage() {
  const [benjaminError, setBenjaminError] = useState(false);
  const params = useParams();
  const slug = params?.slug as string;

  // Obtém o link do WhatsApp baseado no slug, ou usa o padrão se não encontrar
  const whatsappLink = whatsappLinksMap[slug] || "https://wa.me/18128151753?text=Hola!%20Quiero%20recuperar%20mi%20acceso%20al%20grupo%20VIP";

  // Caminho da imagem de perfil
  const benjaminProfileImage = "/assets/wpp/benjamin-profile.webp";

  // Redirecionamento automático após 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = whatsappLink;
    }, 5000);

    return () => clearTimeout(timer);
  }, [whatsappLink]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F0F2F5] via-white to-[#F0F2F5] relative overflow-hidden flex items-center justify-center">
      {/* Background sutil estilo WhatsApp */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#20BA5A]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Container Principal - Centralizado */}
      <div className="relative z-10 px-4 max-w-md mx-auto flex flex-col items-center justify-center min-h-screen py-20">
        {/* Barra de Progresso Disruptiva e Elegante */}
        <div className="w-full max-w-xs mb-8">
          <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden shadow-sm">
            {/* Barra de progresso animada */}
            <div 
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                width: '100%',
                background: 'linear-gradient(90deg, #25D366 0%, #20BA5A 50%, #25D366 100%)',
                backgroundSize: '200% 100%',
                animation: 'progress-fill 5s linear forwards, gradient-shift 2s ease infinite',
              }}
            >
              {/* Efeito shimmer passando pela barra */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                  animation: 'shimmer-progress 1.5s ease-in-out infinite',
                }}
              ></div>
              
              {/* Brilho no final da barra */}
              <div 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#25D366] blur-md opacity-60"
                style={{
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              ></div>
            </div>
            
            {/* Indicador de movimento sutil no fundo */}
            <div 
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #25D366 50%, transparent 100%)',
                animation: 'wave 3s ease-in-out infinite',
              }}
            ></div>
          </div>
        </div>

        {/* Ícone Centralizado com Efeito Luminoso Elegante */}
        <div className="relative mb-8">
          {/* Efeito luminoso sutil e elegante */}
          <div className="absolute inset-0 -m-6">
            <div 
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                background: 'conic-gradient(from 0deg, transparent, #25D366, transparent)',
                animation: 'spin 4s linear infinite',
                filter: 'blur(30px)',
              }}
            ></div>
          </div>

          {/* Avatar com anel elegante */}
          <div className="relative w-28 h-28 md:w-32 md:h-32">
            {/* Anel externo com movimento sutil */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(45deg, #25D366, #20BA5A, #25D366)',
                backgroundSize: '200% 200%',
                animation: 'gradient-move 3s ease infinite',
                padding: '3px',
              }}
            >
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>
            
            {/* Avatar do Benjamin */}
            <div className="absolute inset-1 rounded-full overflow-hidden shadow-lg border-2 border-white">
              <Image
                src={benjaminProfileImage}
                alt="Benjamin"
                fill
                className="object-cover"
                onError={() => setBenjaminError(true)}
              />
              {/* Placeholder - inicial "B" */}
              {benjaminError && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#20BA5A] flex items-center justify-center">
                  <span className="text-white text-2xl md:text-3xl font-bold">B</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Texto de redirecionamento simplificado */}
        <div className="text-center mb-8 px-4">
          <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            Redirigiendo al WhatsApp de{" "}
            <span className="text-[#25D366] font-semibold">
              Benjamin
            </span>
          </p>
        </div>

        {/* Indicador de loading elegante */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Animações CSS */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes progress-fill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes shimmer-progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        
        @keyframes wave {
          0%, 100% {
            transform: translateX(-100%) scaleX(0.5);
            opacity: 0.2;
          }
          50% {
            transform: translateX(100%) scaleX(1);
            opacity: 0.1;
          }
        }
      `}</style>
    </main>
  );
}
