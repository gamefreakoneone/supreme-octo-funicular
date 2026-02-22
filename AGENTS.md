# Deployment Guide: GitHub Pages & Namecheap

This document outlines the steps taken to deploy the Vite React application to GitHub Pages and connect it to a custom domain hosted on Namecheap.

## 1. Automated Deployment Setup
The project uses GitHub Actions to automatically build and deploy the React application. 
- A workflow file was created at `.github/workflows/deploy.yml`.
- Whenever code is pushed to the `main` or `master` branch, GitHub Actions runs `npm run build` and deploys the `dist` folder to GitHub Pages.

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
