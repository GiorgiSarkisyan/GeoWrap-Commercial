# GeoWrap Commercial Frontend

This is the frontend for **GeoWrap**, a premium automotive customization and protection studio based in Tbilisi, Georgia. The project is built with [Next.js](https://nextjs.org) and deployed on Vercel.

## Features

- Multi-language support (English, Georgian, Russian)
- Responsive design with modern UI/UX
- Swiper-based carousels for workshop/gallery
- SEO optimized with structured data and Open Graph
- Custom favicon and branding
- Google Analytics & Search Console integration

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/geowrap-commercial.git
   cd geowrap-commercial/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

- `src/app/` — Main app directory (Next.js 13+ app router)
- `src/components/` — React components (sections, UI elements)
- `src/contexts/` — React context providers (language, loading)
- `src/locales/` — Localization files (en, ka, ru)
- `src/styles/` — SCSS modules and global styles
- `public/` — Static assets (images, favicon, manifest)

## SEO & Metadata

- Canonical domain: https://www.geowrap.ge
- Structured data (JSON-LD) for site name
- Open Graph and Twitter metadata for rich sharing
- Custom favicon: `/icons/favicon.png`

## Deployment

The app is deployed on [Vercel](https://vercel.com/). For custom domain setup and HTTPS, see Vercel documentation.

## License

This project is proprietary and all rights are reserved by GeoWrap.

---

For questions or support, contact the GeoWrap team.
