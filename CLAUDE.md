# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Astro 5.x** static site with a "brutalist neon" design aesthetic, serving as a landing page for the Browser Logger Chrome extension. The site is deployed to Cloudflare Pages.

## Development Commands

**Always use Bun instead of Node.js/npm/pnpm:**
- `bun install` - Install dependencies
- `bun run dev` - Start Astro dev server (http://localhost:3000)
- `bun run build` - Build for production (outputs to `dist/`)
- `bun run preview` - Preview production build locally
- `bun run deploy` - Deploy to Cloudflare Pages via Wrangler

**Testing:**
- `bun test` - Run all tests (if test files exist)
- `bun test <filename>` - Run single test file

## Architecture

### Technology Stack
- **Framework**: Astro 5.0 (zero JavaScript by default, static site generation)
- **Styling**: Tailwind CSS v3 with extensive custom theme
- **Build Tool**: Bun (package manager and runtime)
- **Deployment**: Cloudflare Pages via Wrangler
- **TypeScript**: Strict configuration enabled
- **Animations**: GSAP (installed but not currently used in components)

### Project Structure
```
src/
├── pages/index.astro          # Main landing page (route: /)
├── layouts/Layout.astro       # Base layout with meta tags, navigation
├── components/Hero.astro      # Hero section component
└── styles/globals.css         # Global styles + Tailwind imports
```

### Key Configuration Files
- `astro.config.mjs` - Minimal config with Tailwind integration, static output mode
- `tailwind.config.mjs` - Extensive custom theme with brutalist/neon colors and animations
- `tsconfig.json` - Extends Astro's strict TypeScript config
- `wrangler.toml` - Cloudflare Pages deployment configuration

## Design System

The project uses a distinctive "brutalist neon" design system:

### Color Palettes (defined in Tailwind config)
- `brutalist`: black, charcoal, gray
- `neon`: pink, purple, blue, cyan, green, yellow, red
- `rainbow`: full spectrum colors

### Custom Animations
- `glitch`, `rainbow`, `scanline`, `rgb-split`, `text-flicker`
- Applied via Tailwind utility classes: `animate-glitch`, `animate-rainbow`, etc.

### Typography
- **Primary**: Inter (sans-serif)
- **Retro**: Orbitron (display)
- **Brutal**: Bebas Neue (display)

## Development Patterns

### Component Architecture
- Components are `.astro` files with frontmatter TypeScript
- Use PascalCase for component filenames
- Import CSS directly in Astro frontmatter: `import '../styles/globals.css'`
- Follow Astro's zero-JS philosophy: minimal client-side JavaScript

### Styling Conventions
- Use Tailwind utility classes primarily
- Custom styles go in `src/styles/globals.css` with `@layer` directives
- Apply `.brutalist` and `.brutalist-neon` classes for design system consistency

### TypeScript
- Strict mode enabled
- Interfaces for component props in frontmatter
- ESNext target with module preservation

## Deployment

### Cloudflare Pages (Automatic)
- Push to GitHub triggers automatic builds
- Build command: `bun run build`
- Output directory: `dist/`
- Custom domain: `ccblt.coryfeign.com`

### Manual Deployment
```bash
bun run build
bun run deploy  # Uses wrangler pages deploy dist
```

## Performance Characteristics
- LCP: <500ms (target)
- FCP: <1s (target)
- TBT: 0ms (no JavaScript by default)
- Full page size: <50KB

## Related Documentation
- `README.md` - Project overview and setup
- `AGENTS.md` - Specific guidelines for AI agents
- `DEPLOYMENT.md` - Detailed Cloudflare Pages deployment guide

## Notes for AI Assistants
1. This is a **static site** - no server-side rendering or dynamic routes
2. **Zero JavaScript by default** - leverage Astro's static generation
3. **Bun-first approach** - all scripts use Bun, not npm/pnpm
4. **Design system consistency** - use the custom Tailwind classes and colors
5. **Cloudflare edge deployment** - optimized for global CDN performance