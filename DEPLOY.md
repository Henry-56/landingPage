# Deployment Guide - Emony Landing Page

## Quick Deploy Options

### Option 1: Vercel (Recommended ⭐)

**Por qué Vercel:**
- Zero-config para proyectos Vite
- CDN global automático
- Preview deployments para cada commit
- Analytics integrado

**Pasos:**

1. **Conecta con GitHub**:
   ```bash
   # Si aún no tienes el código en GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <tu-repo-url>
   git push -u origin main
   ```

2. **Deploy en Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Click "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Vite
   - Click "Deploy"

3. **Configuración automática** ✅
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework: Vite

**URL de producción**: `https://tu-proyecto.vercel.app`

---

### Option 2: Netlify

**Por qué Netlify:**
- UI intuitiva
- Forms backend integrado
- Split testing A/B
- Funciones serverless

**Pasos:**

1. **Deploy drag & drop**:
   ```bash
   npm run build
   # Arrastra la carpeta 'dist' a netlify.com/drop
   ```

2. **O deploy con CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

3. **Desde GitHub**:
   - Conecta tu repo en netlify.com
   - Build settings ya están en `netlify.toml`
   - Automatic deploys habilitado

**URL de producción**: `https://tu-proyecto.netlify.app`

---

### Option 3: GitHub Pages

**Ideal para**: Proyectos open source o demos

**Pasos:**

1. **Instala gh-pages**:
   ```bash
   npm install -D gh-pages
   ```

2. **Agrega a package.json**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://tu-usuario.github.io/landing"
   }
   ```

3. **Actualiza vite.config.ts**:
   ```ts
   export default defineConfig({
     base: '/landing/', // nombre de tu repo
     plugins: [react()],
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

**URL de producción**: `https://tu-usuario.github.io/landing`

---

### Option 4: Railway / Render

**Para hosting con backend futuro**

**Railway:**
```bash
# Instala Railway CLI
npm i -g @railway/cli

# Login y deploy
railway login
railway init
railway up
```

**Render:**
- Conecta tu repo en render.com
- Selecciona "Static Site"
- Build: `npm run build`
- Publish: `dist`

---

## Pre-Deploy Checklist

- [ ] **Build funciona**: `npm run build` sin errores
- [ ] **Preview local**: `npm run preview` se ve bien
- [ ] **Responsive testing**: Probado en mobile/tablet/desktop
- [ ] **Forms testing**: Ambos formularios funcionan
- [ ] **Performance**: Lighthouse score > 90
- [ ] **Git limpio**: Código commiteado
- [ ] **README actualizado**: Con tu info específica

---

## Post-Deploy Tasks

### 1. Custom Domain (Opcional)

**Vercel:**
```bash
vercel domains add tudominio.com
# Agrega los DNS records que te proporcionen
```

**Netlify:**
- Settings → Domain Management → Add custom domain
- Configura DNS según instrucciones

### 2. Analytics

**Google Analytics:**
```bash
# Instala
npm install react-ga4

# Agrega en main.tsx
import ReactGA from 'react-ga4';
ReactGA.initialize('G-XXXXXXXXXX');
```

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

```tsx
// En App.tsx
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      <EmonyLandingHybrid />
      <Analytics />
    </>
  );
}
```

### 3. SEO Optimization

**En index.html**, actualiza:
```html
<meta name="description" content="Tu descripción">
<meta property="og:title" content="Emony - Créditos P2P">
<meta property="og:description" content="...">
<meta property="og:image" content="URL a imagen">
<meta name="twitter:card" content="summary_large_image">
```

### 4. Form Backend Integration

Reemplaza los `submit()` simulados en `App.tsx`:

```tsx
async function submit() {
  setLoading(true);
  try {
    const response = await fetch('https://api.tudominio.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    
    if (!response.ok) throw new Error('Error');
    onDone();
  } catch (error) {
    console.error(error);
    // Manejo de errores
  } finally {
    setLoading(false);
  }
}
```

---

## Troubleshooting

### Build Errors

**Error: Cannot find module**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
npm run build -- --mode production
```

### Deploy Errors

**404 en rutas**
- Vercel/Netlify: Automático con SPA fallback
- Otros: Configura rewrites a `index.html`

**Assets no cargan**
- Verifica `base` en `vite.config.ts`
- Usa rutas relativas en assets

### Performance Issues

```bash
# Analiza el bundle
npm run build
npx vite-bundle-visualizer
```

---

## Environment Variables

Si necesitas variables de entorno:

**Desarrollo** (`.env.local`):
```env
VITE_API_URL=http://localhost:3000
VITE_ANALYTICS_ID=GA-XXXXX
```

**Producción** (En tu plataforma):
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment

**Uso en código**:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Monitoring

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) - Gratis
- [Pingdom](https://www.pingdom.com)

### Error Tracking
- [Sentry](https://sentry.io)
```bash
npm install @sentry/react
```

### Performance Monitoring
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- WebPageTest.org

---

## Updates & Maintenance

### Actualizar dependencias:
```bash
# Ver outdated
npm outdated

# Update interactivo
npx npm-check-updates -i

# Update all
npm update
```

### Deploy nuevos cambios:
```bash
git add .
git commit -m "Update: descripción"
git push
# Auto-deploy si configuraste CI/CD
```

---

## Cost Estimation

- **Vercel Free**: Suficiente para la mayoría (100GB bandwidth)
- **Netlify Free**: 100GB bandwidth/mes
- **GitHub Pages**: Gratis ilimitado (público)
- **Custom Domain**: ~$12/año (.com)

---

## Support & Resources

- [Vite Docs](https://vitejs.dev/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [React Docs](https://react.dev/)

**Need Help?** Contacta al equipo de desarrollo.
