'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AdTracking() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const adId = searchParams.get('ad_id');

    if (adId) {
      // Função para enviar dados ao webhook
      const trackWhatsAppClick = () => {
        fetch('https://blead-n8n-docker.y1jnlb.easypanel.host/webhook/captura-ad-id', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ad_id: adId,
            timestamp: new Date().toISOString(),
          }),
        }).catch(err => console.error('Error tracking ad:', err));
      };

      // Adicionar event listeners em todos os links do WhatsApp
      const whatsappLinks = document.querySelectorAll(
        'a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="whatsapp.com"], a[href*="chat.whatsapp.com"]'
      );

      whatsappLinks.forEach((link) => {
        link.addEventListener('click', trackWhatsAppClick);
      });

      // Cleanup: remover event listeners quando o componente desmontar
      return () => {
        whatsappLinks.forEach((link) => {
          link.removeEventListener('click', trackWhatsAppClick);
        });
      };
    }
  }, [searchParams]);

  return null; // Componente invisível
}
