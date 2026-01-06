# Minutos PG - Landing Page Mobile-First

Landing Page de alta conversão para captura de leads via Grupo WhatsApp, desenvolvida com Next.js, TypeScript e Tailwind CSS.

## 🚀 Como começar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura de Assets

Certifique-se de adicionar as seguintes imagens na pasta `public/assets/`:

- **Hero Background:** `public/assets/hero-bg-mobile.webp`
  - Imagem de fundo que contém o expert, headline e subheadline "queimados"
  - Recomendado: 1080x1920px (proporção 9:16 para mobile)

- **Prova Social (Carrossel):** `public/assets/prints/`
  - `print1.webp`
  - `print2.webp`
  - `print3.webp`
  - `print4.webp`
  - `print5.webp`
  - Recomendado: Aspect ratio 4:5 (retrato)

## 🎨 Características

### Dobra 1: Hero Section
- Imagem de fundo em tela cheia (100vh)
- Botão WhatsApp com animações premium:
  - Efeito pulse suave (a cada 4 segundos)
  - Efeito shimmer/brilho laminado em loop infinito
  - Posicionado na parte inferior (15% do bottom)

### Dobra 2: Prova Social
- Carrossel horizontal nativo com snap scroll
- Cards com borda verde WhatsApp
- Background preto sólido (#050505)

## 🔧 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utility-first
- **Lucide React** - Ícones

## 📝 Personalização

### Alterar Link do Botão WhatsApp

O link do botão já está configurado. Se precisar alterar, edite o atributo `href` no arquivo `app/page.tsx`:

```tsx
<a href="SEU_LINK_DO_WHATSAPP_AQUI" ...>
```

### Ajustar Imagens do Carrossel

Edite o array `socialProofImages` em `app/page.tsx`:

```tsx
const socialProofImages = [
  "/assets/prints/print1.jpg",
  // Adicione ou remova imagens conforme necessário
];
```

