# Reglas del proyecto Nexora Web

## Stack
- Next.js
- React
- TypeScript
- Tailwind CSS

## Estructura
- `src/app/` para rutas
- `src/Components/` para componentes visuales
- `public/screenshots/` para capturas reales de la app

## Reglas de imágenes
- Nunca usar rutas con `/public/...`
- Todas las imágenes de `public/` se llaman desde raíz, por ejemplo:
  - `/screenshots/dashboard.jpeg`
- Mantener nombres en minúscula
- Preferir `.jpeg` para screenshots reales
- Usar `next/image` para renderizar imágenes

## Diseño
- Tema oscuro
- Estética premium, limpia y minimal
- Copy en español
- La página debe ser didáctica, no solo visual
- Explicar beneficios reales de cada módulo de la app

## Secciones principales
- Navbar
- Hero
- Funcionalidades
- Screenshots explicados
- Beneficios
- FAQ
- Privacy Policy
- Footer

## Comandos de desarrollo
- `npm run dev`
- `npm run build`
- `npm run start`

## Convenciones
- No mezclar lógica innecesaria en `page.tsx`
- Separar UI por componentes
- Mantener textos claros y directos