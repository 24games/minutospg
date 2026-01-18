"use client";

import Image from "next/image";
import { useState } from "react";

// Componente do Ícone WhatsApp SVG
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function WppPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Link para chamar no WhatsApp (usando o link da página /atend como referência)
  // Você pode substituir pelo número do Benjamin quando tiver
  const whatsappContactLink = "https://wa.me/18128151753?text=Hola%2C%20quiero%20acceder%20al%20grupo%20VIP%20de%20se%C3%B1ales";

  // Caminhos das imagens
  const benjaminProfileImage = "/assets/wpp/benjamin-profile.webp";
  const backgroundImage = "/assets/wpp/background-lp-wpp.webp";

  return (
    <main className="min-h-screen relative">
      {/* Background do WhatsApp */}
      <div className="fixed inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Background WhatsApp"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Header - Barra verde WhatsApp */}
      <header className="bg-[#075E54] w-full py-3 px-4 relative z-10 shadow-sm">
        <div className="flex items-center justify-center">
          <WhatsAppLogo className="h-7 w-7 text-white" />
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 py-8">
        <div className="bg-white w-full max-w-md shadow-sm">
          {/* Avatar e Nome do Contato */}
          <div className="flex flex-col items-center py-8 px-6 border-b border-gray-100">
            {/* Avatar do Benjamin */}
            <div className="relative w-28 h-28 mb-5">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                {/* Imagem do Perfil do Benjamin */}
                <Image
                  src={benjaminProfileImage}
                  alt="Benjamin"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
                {/* Placeholder - inicial "B" - aparece apenas se imagem não carregar */}
                {imageError && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#20BA5A] flex items-center justify-center">
                    <span className="text-white text-4xl font-medium">B</span>
                  </div>
                )}
              </div>
            </div>

            {/* Nome */}
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Benjamin
            </h1>

            {/* Status/Info - Headline natural */}
            <p className="text-base text-gray-600 text-center px-4 leading-relaxed">
              Escríbeme por WhatsApp y te envío el acceso al grupo VIP
            </p>
          </div>

          {/* Botão de Iniciar Conversa */}
          <div className="px-6 py-6">
            <a
              href={whatsappContactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white text-center font-medium py-4 px-6 rounded-lg hover:bg-[#20BA5A] active:bg-[#1da851] transition-colors duration-150 shadow-md"
            >
              Enviar mensaje
            </a>
          </div>

          {/* Footer WhatsApp Style */}
          <div className="px-6 py-4 text-center border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Esta conversación se abrirá en WhatsApp
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
