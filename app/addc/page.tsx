import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AddcPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* DOBRA 1: HERO - imagem de fundo com botão sobreposto */}
      <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
        {/* Imagem de Fundo - ocupa todo o espaço */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-bg-mobile.webp"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Botão WhatsApp - Sobreposto à imagem, abaixo do texto "horarios que pagan" */}
        <div 
          className="relative z-10 w-full px-[5%] flex justify-center" 
          style={{ marginTop: '15vh' }}
        >
          <div className="w-full max-w-md">
            <WhatsAppButton href="https://chat.whatsapp.com/GCQfJw2FbhqFZdRrlC0vab" />
          </div>
        </div>
      </section>
    </main>
  );
}
