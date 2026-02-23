# Application Overview & Architecture

This application is a modern web project built with React, Vite, and TypeScript. It utilizes a robust UI component library and styling system.

## Tech Stack
- **Core:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS (v3.4.19) featuring a custom "Glassy Brutalism" industrial theme.
- **UI Components:** Utilizes Radix UI primitives (`@radix-ui/react-*`) for accessible, unstyled components (over 40 components configured).
- **Animations:** Framer Motion (`framer-motion`) and `tailwindcss-animate`.
- **Forms & Validation:** `react-hook-form` and `zod`.
- **Other Utilities:** `lucide-react` for icons, `next-themes` for dark mode, `recharts` for charts, `sonner` for toast notifications.

## Design System (Glassy Brutalism)
The application UI was recently overhauled from a generic animated dark mode to a distinctive "Glassy Brutalism" aesthetic:
- **Core Palette:** Control Black (`#1a1a18`), Charcoal (`#282824`) and Carbon (`#434143`) for brutalist foundations.
- **Vibrant Accents:** Synthetic Lime (`#c5ef67`), Neural Violet (`#7b6b89`), Cyan (`#06b6d4`), Orange (`#f97316`), and Pink (`#ec4899`) used for borders, tags, and interactive hover states.
- **Visuals:** Characterized by sharp, zero-radius corners, hard offset drop-shadows replacing soft blurs, a global technical grid background, and transparent glass hover panels with harsh border highlights.

## Project Structure
- `src/sections/` - Page sections
- `src/hooks/` - Custom React hooks
- `src/types/` - TypeScript type definitions
- `src/App.tsx` & `src/main.tsx` - App root and entry points
- `src/index.css` & `src/App.css` - Global and webapp-specific styles

---

# Deployment Guide: GitHub Pages & Namecheap

This document outlines the steps taken to deploy the Vite React application to GitHub Pages and connect it to a custom domain hosted on Namecheap.

## 1. Automated Deployment Setup
The project uses GitHub Actions to automatically build and deploy the React application. 
- A workflow file was created at `.github/workflows/deploy.yml`.
- Whenever code is pushed to the `main` or `master` branch, GitHub Actions runs `npm run build` and deploys the `dist` folder to GitHub Pages.
- **Critical Step:** A custom step was added to the workflow to manually copy the `CNAME` file into the `dist` folder before deployment (`cp ./app/public/CNAME ./app/dist/CNAME`). This ensures GitHub Pages retains the custom domain configuration after every build.

### GitHub Repository Settings
To enable deployment:
1. Navigate to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.

## 2. Vite Configuration
To ensure Vite assets load correctly in production, absolute asset paths (like `/images/...`) were converted to ECMAScript module imports. This allows Vite to properly resolve and bundle the assets regardless of the base path.
  
The base configuration in `vite.config.ts` handles the custom domain root correctly:
```typescript
export default defineConfig({
  base: '/',
  // ...
});
```

## 3. Custom Domain Configuration (amoghbiju.com)
The project connects to a custom domain (`amoghbiju.com`) registered with Namecheap.

### Repository Setup
- A `CNAME` file containing `amoghbiju.com` was added to `app/public/CNAME`. This prevents GitHub Pages from unbinding the custom domain each time a new build is deployed.
- The custom domain `amoghbiju.com` was added to the **Settings > Pages > Custom domain** field in the GitHub repository.

### Namecheap DNS Setup
The following records were added to Namecheap's **Advanced DNS** settings:

**A Records (pointing to GitHub's IP addresses):**
- Host: `@` | Value: `185.199.108.153`
- Host: `@` | Value: `185.199.109.153`
- Host: `@` | Value: `185.199.110.153`
- Host: `@` | Value: `185.199.111.153`

**CNAME Record (redirecting `www` subdomain):**
- Host: `www` | Value: `gamefreakoneone.github.io`

*Note: DNS propagation can take up to 24-48 hours. During this period, GitHub automatically provisions an SSL/HTTPS certificate.*
