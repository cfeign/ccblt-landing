# Browser Logger - Landing Page

Flashy, modern landing page for Browser Logger Chrome Extension. Deployed to Cloudflare Pages.

## Live

**URL:** https://ccblt.coryfeign.com

## Stack

- **Framework:** Astro 5.x (zero JS by default)
- **Styling:** Tailwind CSS v3
- **Deployment:** Cloudflare Pages
- **Runtime:** Bun + Node.js

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Open http://localhost:3000
```

## Building

```bash
# Build for production
bun run build

# Preview production build
bun run preview
```

## Deployment

### Cloudflare Pages (Recommended)

1. Push to GitHub
2. Connect repo to Cloudflare Pages
3. Cloudflare auto-builds on each push

OR manually:
```bash
bun run deploy  # Uses wrangler
```

### Configuration

- **Build command:** `bun run build`
- **Output directory:** `dist`
- **Domain:** `ccblt.coryfeign.com`

## Project Structure

```
src/
├── pages/
│   └── index.astro          # Main landing page
├── components/
│   └── Hero.astro           # Hero section with animated terminal
├── layouts/
│   └── Layout.astro         # Main layout wrapper
└── styles/
    └── globals.css          # Tailwind + custom animations
```

## Features

- 🚀 **Zero JS by Default** - Pure HTML/CSS, loads instantly
- 💨 **Ultra Fast** - Astro static site generation
- 🎨 **Flashy UI** - Tailwind CSS + custom animations
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - Semantic HTML
- 🌍 **Global CDN** - Cloudflare edge network
- 🔄 **View Transitions** - Smooth page transitions

## Performance

- LCP: <500ms
- FCP: <1s
- TBT: 0ms (no JavaScript!)
- CLS: 0
- Full page: <50KB

## Getting Started

1. Clone the repo
2. `bun install`
3. `bun run dev`
4. Edit files in `src/`
5. Changes hot-reload automatically

## Contributing

Found a typo or design issue? Open a PR! All contributions welcome.

## License

MIT - Created by [Cory Feign](https://coryfeign.com)

## Related

- **Main Tool:** https://github.com/cfeign/browser-logger
- **Docs:** https://github.com/cfeign/browser-logger#readme
- **Author:** https://coryfeign.com
