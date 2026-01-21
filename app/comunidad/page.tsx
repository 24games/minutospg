"use client";

import Image from "next/image";
import { useState } from "react";

export default function ComunidadPage() {
  const [benjaminError, setBenjaminError] = useState(false);

  // Link do WhatsApp (herdado da Home)
  const whatsappLink = "https://chat.whatsapp.com/GCQfJw2FbhqFZdRrlC0vab";

  // Caminhos das imagens
  const benjaminProfileImage = "/assets/perfil-comunidad.webp";
  
  // Imagens dos influenciadores
  const influencersImages = [
    "/assets/comunidad/influencers espanha/500_333.jpeg",
    "/assets/comunidad/influencers espanha/anabel-pantoja-01_63d47c34_800x490.jpg",
    "/assets/comunidad/influencers espanha/kiko-rivera-titulares-de-viernes-6917d268ba0c1.avif",
    "/assets/comunidad/influencers espanha/omar-montes-artist-xceed-cover-b054.jpg",
    "/assets/comunidad/influencers espanha/SnapInsta.to_354608849_6921755487834482_5940029227813829834_n.jpg",
    "/assets/comunidad/influencers espanha/suso-alvarez_e5e5.webp",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-black text-white relative overflow-hidden">
      {/* Header com carrossel infinito */}
      <div className="relative w-full bg-[#25D366] overflow-hidden py-2.5 z-50">
        <div 
          className="flex whitespace-nowrap"
          style={{
            animation: 'scroll-infinite 30s linear infinite',
            willChange: 'transform'
          }}
        >
          {/* Repetir o texto várias vezes para criar o efeito infinito */}
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="text-[#0a0a0a] font-bold text-sm md:text-base mx-8 inline-block flex-shrink-0">
              GRUPO 100% GRATUITO
            </span>
          ))}
          {/* Duplicar para loop infinito perfeito */}
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={`dup-${i}`} className="text-[#0a0a0a] font-bold text-sm md:text-base mx-8 inline-block flex-shrink-0">
              GRUPO 100% GRATUITO
            </span>
          ))}
        </div>
      </div>

      {/* Background com efeitos de luz sutis */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Luz verde superior esquerda */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        {/* Luz verde superior direita */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#20BA5A]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        {/* Luz azul inferior */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#20BA5A]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Container Principal - Ajustado para card no primeiro frame */}
      <div className="relative z-10 px-4 pt-8 pb-4 max-w-md mx-auto">
        {/* HEADLINE PRINCIPAL - Foco máximo, menor espaçamento */}
        <div className="text-center mb-6">
          <h1 className="text-[1.9rem] md:text-5xl font-extrabold leading-[1.3] mb-4" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', letterSpacing: '-0.02em' }}>
            <div className="block">
              <span className="text-white">Entra en el </span>
              <span
                className="bg-gradient-to-r from-[#34E879] via-[#25D366] to-[#34E879] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-move font-black"
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                grupo gratuito
              </span>
            </div>
            <div className="block">
              <span className="text-white">de señales y </span>
              <span
                className="bg-gradient-to-r from-[#34E879] via-[#25D366] to-[#34E879] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-move font-black"
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                transforma
              </span>
            </div>
            <div className="block">
              <span
                className="bg-gradient-to-r from-[#34E879] via-[#25D366] to-[#34E879] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-move font-black"
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                20€ en 100€
              </span>
              <span className="text-white"> aún hoy</span>
            </div>
          </h1>
        </div>

        {/* Card Estilo WhatsApp - Elegante e sofisticado mantendo iframe */}
        <div className="relative z-20 w-full rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.5)] border-[3px] border-[#25D366]/70 mb-8 overflow-hidden">
          {/* Efeito de brilho sutil no fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#20BA5A]/5 rounded-full blur-3xl -z-0"></div>
          
          {/* Efeito laminado elegante */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-80"></div>
            <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b from-white/50 via-white/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ animationDuration: '4s' }}></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#25D366]/30 via-[#20BA5A]/20 to-[#25D366]/30 blur-2xl opacity-70 animate-pulse-slow"></div>
          </div>
          
          {/* Container principal com background do WhatsApp */}
          <div className="relative bg-[#E5DDD5] backdrop-blur-sm">
            {/* Padrão de background do WhatsApp (pontos sutis) */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            ></div>
            
            {/* Conteúdo do card */}
            <div className="relative z-10 px-6 py-6">
              {/* Foto de Perfil e Nome */}
              <div className="flex flex-col items-center mb-6">
                {/* Avatar do Benjamin com anel brilhante elegante */}
                <div className="relative w-24 h-24 mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] p-0.5 animate-glow-pulse">
                    <div className="w-full h-full rounded-full bg-white"></div>
                  </div>
                  <div className="absolute inset-1 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={benjaminProfileImage}
                      alt="Señales VIP de Benja"
                      fill
                      className="object-cover"
                      onError={() => setBenjaminError(true)}
                    />
                    {/* Placeholder - inicial "B" */}
                    {benjaminError && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#20BA5A] flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">B</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Nome com tipografia refinada */}
                <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
                  Señales VIP de Benja
                </h3>

              {/* Texto do Card com melhor espaçamento */}
              <p className="text-base font-semibold text-gray-800 text-center leading-relaxed px-2 mb-0">
                Únete ahora al grupo Señales VIP de Benja y sigue los minutos
              </p>
            </div>

            {/* BOTÃO CTA DENTRO DO CARD - Estilo WhatsApp elegante */}
            <div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full bg-[#25D366] text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-[#20BA5A] active:bg-[#1da851] transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.3)] overflow-hidden"
                >
                  {/* Efeito de brilho shimmer elegante */}
                  <div className="absolute inset-0 -z-0">
                    <div className="absolute h-full w-full -translate-x-full translate-y-full rotate-45 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  </div>

                  {/* Texto do botão */}
                  <span className="relative z-10 text-lg md:text-xl font-bold">
                    Unirme al grupo ahora
                  </span>
                </a>
              </div>

              {/* Texto informativo abaixo do botão */}
              <p className="text-[0.7rem] text-gray-600 text-center mt-2">
                Esta conversación se abrirá en WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-action elegante - Direcionando para seção de influencers */}
        <div className="flex flex-col items-center my-4 md:my-6">
          <div className="relative group cursor-pointer">
            {/* Efeito de brilho pulsante no fundo */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#25D366]/10 via-[#20BA5A]/10 to-[#25D366]/10 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-slow"></div>
            
            {/* Container principal */}
            <div className="relative flex flex-col items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-br from-[#25D366]/5 to-[#20BA5A]/5 border border-[#25D366]/20 backdrop-blur-sm group-hover:border-[#25D366]/40 transition-all duration-300">
              {/* Texto chamativo */}
              <p className="text-sm md:text-base font-bold text-center">
                <span className="text-white/90">Descubre por qué </span>
                <span className="bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-move font-extrabold">
                  más de 50 famosos
                </span>
                <span className="text-white/90"> confían en nosotros</span>
              </p>
              
              {/* Seta animada elegante */}
              <div className="relative">
                <svg
                  className="w-5 h-5 text-[#25D366] animate-bounce-elegant"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(37,211,102,0.6))'
                  }}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                {/* Rastro da seta */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#25D366]/20 animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROVA SOCIAL - Card disruptivo e elegante sobre divulgação dos influencers */}
        <div className="mb-8">
          <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-[#25D366]/20 shadow-[0_20px_60px_rgba(37,211,102,0.15)] overflow-hidden">
            {/* Efeito de brilho sutil no fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#20BA5A]/5 rounded-full blur-3xl -z-0"></div>
            
            <div className="relative z-10">
              {/* Headline com badge */}
              <div className="flex flex-col items-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 mb-3">
                  <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-[#25D366] text-xs font-semibold">VERIFICADO</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-black text-center leading-tight mb-2">
                  <span className="text-white">Más de </span>
                  <span
                    className="bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-move inline-block"
                    style={{
                      backgroundSize: "200% auto",
                    }}
                  >
                    50 influencers de España
                  </span>
                  <span className="text-white"> son embajadores oficiales</span>
                </h2>
              </div>

              {/* Influenciadores - Grid elegante e responsivo */}
              <div className="grid grid-cols-6 gap-2 md:gap-3 mb-6 justify-items-center">
                {influencersImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 group"
                  >
                    {/* Círculo com gradiente verde fino - Traçado visível */}
                    <div 
                      className="absolute inset-0 rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(to right, #25D366, #20BA5A, #25D366)',
                      }}
                    >
                      <div 
                        className="absolute inset-[1.5px] rounded-full overflow-hidden"
                        style={{
                          backgroundColor: '#000'
                        }}
                      >
                        <Image
                          src={image}
                          alt={`Influencer ${index + 1}`}
                          fill
                          className="object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                          sizes="64px"
                        />
                      </div>
                    </div>
                    {/* Badge Instagram no hover */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-black">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* Copy melhorada com contexto e clareza */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-[#25D366]/5 rounded-xl p-4 border border-[#25D366]/10">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-white/90 font-semibold leading-relaxed">
                      Publicaron el grupo en sus <span className="text-[#25D366]">Instagram Stories y Reels</span>
                    </p>
                    <p className="text-xs md:text-sm text-white/60 mt-1 leading-relaxed">
                      Después de probar nuestras señales y verificar resultados reales
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#20BA5A]/5 rounded-xl p-4 border border-[#20BA5A]/10">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#20BA5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-white/90 font-semibold leading-relaxed">
                      El <span className="text-[#20BA5A]">único grupo 100% confiable</span> en España
                    </p>
                    <p className="text-xs md:text-sm text-white/60 mt-1 leading-relaxed">
                      Con asertividad verificada y resultados comprobables
                    </p>
                  </div>
                </div>
              </div>

              {/* Botão WhatsApp elegante e discreto no final do card */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-2.5 w-full bg-[#25D366]/90 hover:bg-[#25D366] text-white font-semibold py-3 px-5 rounded-lg transition-colors duration-200 border border-[#25D366]/30 overflow-hidden"
                >
                  {/* Efeito de brilho laminado */}
                  <div className="absolute inset-0 -z-0">
                    <div className="absolute h-full w-full -translate-x-full translate-y-full rotate-45 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                  
                  {/* Ícone WhatsApp */}
                  <svg
                    className="w-4 h-4 flex-shrink-0 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  
                  {/* Texto do botão */}
                  <span className="relative z-10 text-sm font-semibold">
                    Unirme al grupo ahora
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COPY DE FECHAMENTO - Card disruptivo e elegante com assertividade */}
        <div className="mb-8">
          <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-[#25D366]/20 shadow-[0_20px_60px_rgba(37,211,102,0.15)] overflow-hidden">
            {/* Efeito de brilho sutil no fundo */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#20BA5A]/5 rounded-full blur-3xl -z-0"></div>
            
            <div className="relative z-10">
              {/* Headline com badge */}
              <div className="flex flex-col items-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 mb-4">
                  <svg className="w-4 h-4 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[#25D366] text-xs font-semibold">RESULTADOS COMPROBADOS</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-black text-center leading-tight mb-6">
                  <span className="text-white">Deja de jugar solo y </span>
                  <span className="text-white">tirar el dinero por la ventana</span>
                </h2>
              </div>

              {/* Elemento visual interativo - Gráfico circular de assertividade */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6">
                {/* Gráfico circular animado */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                  {/* Círculo de fundo */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Círculo de fundo (cinza) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                    />
                    {/* Círculo de progresso (verde animado) - 92% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - 0.92)}`}
                      className="transition-all duration-1000 ease-out"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(37,211,102,0.5))'
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#25D366" />
                        <stop offset="50%" stopColor="#20BA5A" />
                        <stop offset="100%" stopColor="#25D366" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Texto central */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] bg-clip-text text-transparent">
                      92%
                    </span>
                    <span className="text-xs md:text-sm text-white/60 font-semibold mt-1">
                      ASERTIVIDAD
                    </span>
                  </div>
                  {/* Partículas decorativas */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-3 w-1.5 h-1.5 bg-[#20BA5A] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Estatística ao lado */}
                <div className="flex flex-col gap-4 text-center md:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-black text-white">9 de cada 10</p>
                      <p className="text-xs text-white/60">señales son ganadoras</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy contextualizada com credibilidade */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-[#25D366]/5 rounded-xl p-4 border border-[#25D366]/10">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-white/90 font-semibold leading-relaxed">
                      <span className="text-[#25D366]">Asertividad verificada</span> mes a mes
                    </p>
                    <p className="text-xs md:text-sm text-white/60 mt-1 leading-relaxed">
                      Nuestro sistema de IA analiza más de 10.000 datos por minuto para darte la señal perfecta
                    </p>
                  </div>
                </div>

              </div>

              {/* Botão WhatsApp elegante e discreto no final do card */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-2.5 w-full bg-[#25D366]/90 hover:bg-[#25D366] text-white font-semibold py-3 px-5 rounded-lg transition-colors duration-200 border border-[#25D366]/30 overflow-hidden"
                >
                  {/* Efeito de brilho laminado */}
                  <div className="absolute inset-0 -z-0">
                    <div className="absolute h-full w-full -translate-x-full translate-y-full rotate-45 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                  
                  {/* Ícone WhatsApp */}
                  <svg
                    className="w-4 h-4 flex-shrink-0 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  
                  {/* Texto do botão */}
                  <span className="relative z-10 text-sm font-semibold">
                    Unirme al grupo ahora
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
