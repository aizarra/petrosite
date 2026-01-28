# Manifiesto por la Soberanía Petrolera de Venezuela

A web platform for the Venezuelan Oil Sovereignty Manifesto - a call to the nation in defense of our future.

## About

This site presents a manifesto against the reform of Venezuela's Organic Hydrocarbons Law, which threatens nearly a century of oil sovereignty built by generations of Venezuelans.

**Live site:** https://aizarra.github.io/petrosite/

## Features

- Animated hero section with GSAP scroll animations
- Smooth scrolling powered by Lenis
- Red wipe transition effect between sections
- Full manifesto text with responsive typography
- Mobile-friendly responsive design
- Documentary video cards section

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **GSAP** - Scroll animations
- **Lenis** - Smooth scrolling
- **React Router** - Client-side routing

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via GitHub Actions.

To deploy manually:
1. Push changes to `main` branch
2. GitHub Actions will build and deploy automatically
3. Site will be live at https://aizarra.github.io/petrosite/

## Project Structure

```
src/
├── pages/
│   └── ManifiestoPage.tsx    # Full manifesto text
├── sections/
│   ├── Hero.tsx              # Hero section with title
│   ├── Manifesto.tsx         # Manifesto summary with animations
│   ├── RedWipe.tsx           # Red transition effect
│   ├── VideoCards.tsx        # Documentary cards
│   └── Footer.tsx            # Footer section
├── App.tsx                   # Main app with routing
├── main.tsx                  # Entry point
└── index.css                 # Global styles
```

## License

All rights reserved.
