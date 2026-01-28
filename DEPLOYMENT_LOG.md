# Petrosite Deployment Log

This document summarizes all steps taken to deploy petroleo.blog to Cloudflare Pages.

---

## 1. Initial Setup

### Dependencies Installation
- Used `pnpm install` to install all project dependencies
- Updated deprecated `@studio-freight/lenis` package to `lenis`
- Updated import in `App.tsx` from `import Lenis from '@studio-freight/lenis'` to `import Lenis from 'lenis'`

### Project Structure
- React 19 + TypeScript + Vite
- GSAP for scroll animations
- Lenis for smooth scrolling
- Tailwind CSS for styling
- React Router for page routing

---

## 2. Content Implementation

### Manifesto Section
- Created summarized manifesto content with scroll animations in `src/sections/Manifesto.tsx`
- Created full manifesto page at `src/pages/ManifiestoPage.tsx`
- Added routing with React Router

### Routing Setup
- Initially used `HashRouter` for GitHub Pages compatibility
- Later switched to `BrowserRouter` for cleaner URLs on Cloudflare

---

## 3. GitHub Pages Attempt (Later Abandoned)

### Configuration for GitHub Pages
- Set `base: '/petrosite/'` in `vite.config.ts`
- Used `HashRouter` for SPA routing
- Created `.github/workflows/deploy.yml` for GitHub Actions deployment
- Issue: Video card images not loading (path issues with subdirectory)

### Image Path Fix
- Changed image paths in `VideoCards.tsx` to use `import.meta.env.BASE_URL`:
  ```tsx
  image: `${import.meta.env.BASE_URL}thumb_verdad.jpg`
  ```

---

## 4. Migration to Cloudflare Pages

### Why Cloudflare?
- Custom domain support (petroleo.blog)
- Future backend capabilities (Workers + D1 for signature collection)
- Better free tier limits
- Cleaner URLs without hash routing

### Code Changes for Cloudflare

1. **Updated `vite.config.ts`**:
   ```ts
   base: '/'  // Changed from '/petrosite/'
   ```

2. **Switched to BrowserRouter** in `src/main.tsx`:
   ```tsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom'
   // ...
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<App />} />
       <Route path="/manifiesto" element={<ManifiestoPage />} />
     </Routes>
   </BrowserRouter>
   ```

3. **Created `wrangler.json`** for Cloudflare Workers:
   ```json
   {
     "name": "petrosite",
     "compatibility_date": "2026-01-28",
     "assets": {
       "directory": "./dist",
       "not_found_handling": "single-page-application"
     }
   }
   ```
   - `not_found_handling: "single-page-application"` enables SPA routing (all routes serve index.html)

4. **Hid VideoCards section** (videos not ready):
   - Commented out import and component in `App.tsx`

### Build Errors Encountered

1. **Unused import error**: TypeScript failed because `VideoCards` was imported but not used
   - Fix: Commented out the import statement

2. **_redirects infinite loop**: Initially tried using `_redirects` file for SPA routing
   - Error: "Infinite loop detected in this rule"
   - Fix: Removed `_redirects`, used `wrangler.json` with `not_found_handling` instead

---

## 5. Domain Setup (GoDaddy to Cloudflare)

### Step 1: Add Domain to Cloudflare
1. Go to Cloudflare Dashboard → "Onboard a domain"
2. Enter `petroleo.blog`
3. Select Free plan
4. Cloudflare scans existing DNS records
5. Click "Continue to activation"

### Step 2: Get Cloudflare Nameservers
Cloudflare assigns two nameservers (example):
```
vasilii.ns.cloudflare.com
vita.ns.cloudflare.com
```

### Step 3: Update Nameservers in GoDaddy
1. Log into GoDaddy → My Domains
2. Click on `petroleo.blog`
3. Go to **DNS** tab → **Servidores de nombres** (Nameservers)
4. Click "Cambiar servidores de nombres" (Change nameservers)
5. Select "I'll use my own nameservers"
6. Enter the two Cloudflare nameservers
7. Save

**Important**: Do NOT try to edit NS records in the DNS records table - they are locked there. Use the Nameservers settings section.

### Step 4: Wait for Propagation
- Usually takes 10-30 minutes
- Can take up to 24 hours
- Cloudflare sends email when domain is active

---

## 6. Cloudflare Pages Setup

### Connect GitHub Repository
1. Go to Cloudflare Dashboard → **Workers & Pages**
2. Click **Create** → **Pages** → **Connect to Git**
3. Authorize GitHub and select `aizarra/petrosite`

### Build Configuration
| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Build command | `pnpm install && pnpm build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION` = `20` |

### Connect Custom Domain
1. After first deploy, go to Pages project → **Settings** → **Custom domains**
2. Click **Add** → Enter `petroleo.blog`
3. Cloudflare auto-configures DNS

---

## 7. Git Workflow Issues & Solutions

### Divergent Branches Problem
Repeatedly encountered "divergent branches" error when pulling.

**Solution - Reset to remote**:
```bash
git fetch origin
git checkout <branch-name>
git reset --hard origin/<branch-name>
```

### Merging Feature Branch to Main
```bash
git fetch origin
git checkout main
git reset --hard origin/main
git merge origin/claude/install-pnpm-dependencies-NB7PW
git push origin main
```

### Key Git Commands Used
```bash
# Fetch latest from remote
git fetch origin

# Reset local branch to match remote exactly
git reset --hard origin/<branch-name>

# Merge feature branch (using remote reference to avoid local conflicts)
git merge origin/<feature-branch>

# Push to remote
git push origin main
```

---

## 8. Final File Structure

```
petrosite/
├── public/
│   ├── thumb_verdad.jpg
│   ├── thumb_mentiras.jpg
│   └── thumb_lucha.jpg
├── src/
│   ├── main.tsx              # BrowserRouter setup
│   ├── App.tsx               # Main app (VideoCards hidden)
│   ├── pages/
│   │   └── ManifiestoPage.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Manifesto.tsx
│       ├── RedWipe.tsx
│       ├── VideoCards.tsx    # Hidden until videos ready
│       └── Footer.tsx
├── vite.config.ts            # base: '/'
├── wrangler.json             # Cloudflare Workers config
├── package.json
└── pnpm-lock.yaml
```

---

## 9. URLs

- **Production**: https://petroleo.blog
- **Manifesto page**: https://petroleo.blog/manifiesto
- **GitHub repo**: https://github.com/aizarra/petrosite

---

## 10. Next Steps

1. **Petition Integration**: Embed OpenPetition or Change.org for signature collection
2. **Newsletter Signup**: Add email form using Cloudflare Workers + D1
3. **Video Section**: When videos are ready, uncomment VideoCards and upload to YouTube for embedding
