# Agent Guidelines for CCBLT Landing

## Build Commands
- `bun install` - Install dependencies
- `bun run dev` - Start development server (Astro)
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run deploy` - Deploy to Cloudflare Pages

## Testing
- `bun test` - Run all tests
- `bun test <filename>` - Run single test file

## Code Style
- Use Bun instead of Node.js/npm/pnpm (per Cursor rules)
- Astro framework with TypeScript
- Tailwind CSS for styling
- Components in `.astro` files with frontmatter scripts
- Strict TypeScript config enabled
- Import CSS directly in Astro frontmatter
- Use semantic HTML5 elements
- Follow existing naming: PascalCase for components
- GSAP for animations (already installed)
- Deploy via Cloudflare Pages/Wrangler

## File Structure
- `src/components/` - Reusable Astro components
- `src/layouts/` - Page layouts
- `src/pages/` - Route pages
- `src/styles/` - Global styles