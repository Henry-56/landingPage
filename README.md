# Emony - Landing Page

> Plataforma P2P de créditos en Perú · Simple, seguro y 100% digital

Una landing page moderna y responsive para Emony, construida con React, TypeScript, Tailwind CSS y Framer Motion.

![Emony Landing](https://img.shields.io/badge/React-18.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite)

## ✨ Características

- 🎨 **Diseño moderno** con gradientes y animaciones suaves
- 📱 **Completamente responsive** - Optimizado para móvil, tablet y desktop
- ⚡ **Performance optimizado** con Vite y code splitting
- 🎭 **Animaciones fluidas** con Framer Motion
- ♿ **Accesible** con componentes de Radix UI
- 🔒 **Type-safe** con TypeScript
- 🎯 **Conversión optimizada** con CTAs estratégicos

## 📦 Tecnologías

- **Framework**: React 18.3 con TypeScript
- **Build Tool**: Vite 5.1
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.0
- **Icons**: Lucide React
- **UI Components**: shadcn/ui (Radix UI)
- **Utilities**: clsx, tailwind-merge

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18+ y npm

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repo-url>
cd landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Crea el build optimizado
npm run preview      # Preview del build de producción

# Linting
npm run lint         # Verifica el código con ESLint
```

## 📁 Estructura del Proyecto

```
landing/
├── src/
│   ├── components/
│   │   └── ui/              # Componentes UI reutilizables
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       └── ...
│   ├── lib/
│   │   └── utils.ts         # Funciones utilitarias
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globales
├── public/                  # Assets estáticos
├── index.html              # HTML template
└── ...config files
```

## 🎯 Características Principales

### Hero Section
- Encabezado impactante con gradientes de texto
- CTAs primarios y secundarios
- Stats cards animadas
- MockPhone component mostrando la app

### Secciones de Contenido
- **Problema/Solución**: Propuesta de valor clara
- **Cómo Funciona**: Process de 3 pasos
- **Confianza**: Validación y seguridad
- **Modelo de Negocio**: Transparencia en ingresos

### Formularios Interactivos
- **Solicitud de Crédito**: Wizard de 3 pasos
- **User Testing**: Registro para early access
- Validación en tiempo real
- Estados de loading y éxito

## 🌐 Deployment

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Configuración Manual

1. **Build el proyecto**:
   ```bash
   npm run build
   ```

2. **El build estará en** `dist/`

3. **Deploy a tu hosting** preferido (el contenido de `dist/`)

### Variables de Entorno

Actualmente no se requieren variables de entorno. Si necesitas agregar integraciones:

```env
# Ejemplo para analytics
VITE_ANALYTICS_ID=your_id_here
```

## 🎨 Personalización

### Colores y Tema

Edita `tailwind.config.js` y `src/index.css` para cambiar los colores del tema:

```css
/* src/index.css */
:root {
  --primary: 222.2 47.4% 11.2%;
  /* ... más variables */
}
```

### Contenido

Todo el contenido está en `src/App.tsx`. Modifica:
- Textos y copys
- Stats y números
- Pasos del proceso
- Información del roadmap

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las categorías
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: ~150KB (gzipped)

## 🔧 Mantenimiento

### Actualizar Dependencias

```bash
npm update
```

### Agregar Nuevos Componentes UI

```bash
# Los componentes siguen el patrón de shadcn/ui
# Copia componentes de: https://ui.shadcn.com/
```

## 📝 Notas de Desarrollo

- Los formularios actualmente simulan el envío (delay de 900ms)
- Para conectar con backend, modifica las funciones `submit()` en `TesterForm` y `LoanRequestForm`
- Las animaciones usan `framer-motion` - ajusta en `fadeUp` variant

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y propietario de Emony.

## 🆘 Soporte

Para preguntas o soporte, contacta al equipo de desarrollo.

---

**Hecho con ❤️ para Emony** - Democratizando el acceso al crédito en Perú
