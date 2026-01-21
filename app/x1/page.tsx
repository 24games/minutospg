"use client";

import Image from "next/image";
import { useState } from "react";

export default function X1Page() {
  const [benjaminError, setBenjaminError] = useState(false);

  // Link do WhatsApp (mesmo da página /wpp)
  const whatsappLink = "https://wa.me/18128151753?text=Quiero%20entrar%20en%20el%20grupo%20de%20se%C3%B1ales%20VIP";

  // Caminhos das imagens
  const benjaminProfileImage = "/assets/wpp/benjamin-profile.webp";
  
  // Imagens dos influenciadores
  const influencersImages = [
    "/assets/comunidad/influencers espanha/500_333.jpeg",
    "/assets/comunidad/influencers espanha/anabel-pantoja-01_63d47c34_800x490.jpg",
    "/assets/comunidad/influencers espanha/kiko-rivera-titulares-de-viernes-6917d268ba0c1.avif",
    "/assets/comunidad/influencers espanha/omar-montes-artist-xceed-cover-b054.jpg",
    "/assets/comunidad/influencers espanha/SnapInsta.to_354608849_6921755487834482_5940029227813829834_n.jpg",
    "/assets/comunidad/influencers espanha/suso-alvarez_e5e5.webp",
  ];

  // Usernames do Instagram dos influenciadores
  const influencersUsernames = [
    "@sofiasuescun",
    "@anabelpantoja00",
    "@riverakiko",
    "@omarmontes",
    "@naimdarrechi",
    "@oficialsusogh16",
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
          <h1 className="text-[1.75rem] md:text-5xl font-extrabold leading-[1.2] mb-4" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', letterSpacing: '-0.02em' }}>
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
              <span className="text-white">de señales y transforma</span>
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
              <span className="text-white"> hoy mismo</span>
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
          <div className="relative backdrop-blur-sm overflow-hidden">
            {/* Background original do WhatsApp */}
            <div className="absolute inset-0">
              <Image
                src="/assets/wpp/background-lp-wpp.webp"
                alt="Background WhatsApp"
                fill
                className="object-cover"
                sizes="100%"
              />
            </div>
            
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
                      alt="Benjamin"
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
                <h3 className="text-2xl font-black text-gray-900 mb-0 tracking-tight">
                  Benjamin
                </h3>

            </div>

            {/* BOTÃO CTA DENTRO DO CARD - Estilo WhatsApp elegante */}
            <div className="mt-2">
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
          <p className="text-white/70 text-sm md:text-base text-center mb-3 font-semibold">
            Descubre por qué más de 50 famosos confían en nosotros
          </p>
          <div className="flex items-center gap-2 text-[#25D366] animate-bounce-elegant">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        {/* SECCIÓN DE INFLUENCERS - Card disruptivo e elegante */}
        <div className="relative mb-8 md:mb-12">
          <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.8)] border border-white/10 p-6 md:p-8 overflow-hidden">
            {/* Efeitos de brilho no fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#20BA5A]/10 rounded-full blur-3xl -z-0"></div>

            {/* Conteúdo do card */}
            <div className="relative z-10">
              {/* Headline principal */}
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4 text-center">
                <div className="block">
                  <span>Este es nuestro </span>
                  <span className="bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-move font-extrabold inline-block">
                    equipo
                  </span>
                </div>
                <div className="block">
                  <span>de </span>
                  <span className="bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-move font-extrabold inline-block">
                    embajadores
                  </span>
                  <span> oficiales</span>
                </div>
              </h2>

              {/* Sub-headline */}
              <p className="text-sm md:text-base text-white/80 text-center mb-6 leading-relaxed">
                Celebrities y personalidades reconocidas que forman parte de nuestro equipo y comparten el grupo en sus perfiles de Instagram.
                El único grupo 100% confiable<br />en el país. Asertividad verificada por I.A mes a mes. Celebrities y personalidades públicas validan nuestra seriedad.
              </p>

              {/* Grid de fotos dos influenciadores */}
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                {influencersImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group"
                    style={{ cursor: 'default' }}
                  >
                    <div className="relative w-full aspect-square rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] p-0.5 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                        <Image
                          src={image}
                          alt={`Influencer ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 33vw, 25vw"
                        />
                      </div>
                    </div>
                    {/* Selo de verificado azul do Instagram - Sempre visível */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center shadow-sm z-10 bg-[#0095F6]">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#0095F6"/>
                        <path d="M8 12l2.5 2.5L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Tooltip com @ do Instagram no hover */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs font-semibold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      {influencersUsernames[index]}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botão WhatsApp elegante no final do card */}
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
        <div className="relative mb-8 md:mb-12">
          <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.8)] border border-white/10 p-6 md:p-8 overflow-hidden">
            {/* Efeitos de brilho no fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#20BA5A]/10 rounded-full blur-3xl -z-0"></div>

            {/* Conteúdo do card */}
            <div className="relative z-10">
              {/* Headline principal */}
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center">
                Deja de jugar solo y{" "}
                <span
                  className="bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-move inline-block"
                  style={{
                    backgroundSize: "200% auto",
                  }}
                >
                  tirar el dinero por la ventana
                </span>
              </h2>

              {/* Gráfico circular animado de assertividade */}
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <svg
                    className="transform -rotate-90 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    {/* Círculo de fundo */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                    />
                    {/* Círculo de progresso (92%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * 0.08}`}
                      className="animate-pulse-slow"
                      style={{
                        transition: "stroke-dashoffset 2s ease-in-out",
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
                </div>
              </div>

              {/* Informações de assertividade */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-[#25D366]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-bold text-white mb-1">
                      9 de cada 10 señales son ganadoras
                    </p>
                    <p className="text-xs md:text-sm text-white/60 mt-1 leading-relaxed">
                      Asertividad verificada mes a mes mediante análisis de IA
                      que procesa cada señal antes de publicarla. Solo compartimos
                      oportunidades con probabilidad de éxito comprobada.
                    </p>
                    <p className="text-xs md:text-sm text-white/60 mt-1 leading-relaxed">
                      Con asertividad verificada y resultados comprobables
                    </p>
                  </div>
                </div>
              </div>

              {/* Botão WhatsApp elegante no final do card */}
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
