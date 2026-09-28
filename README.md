# Cardapure — Premium Brand Website

A luxurious, high-end, and visually stunning website for **Cardapure**, a premium cardamom and spice brand from Idukki, Kerala. The website is built as a single-page application using React, Vite, and custom Vanilla CSS.

## Technology Stack

* **Core**: React 18 & Vite
* **Styling**: Pure Vanilla CSS (custom variables, glassmorphism, responsive layers)
* **Routing**: React Router (`HashRouter` for zero-configuration static deployment)
* **Icons**: Lucide React
* **Typography**:
  * Headings: **Qarkine** (Custom Display Serif loaded locally)
  * Body: **Inter** / **Montserrat** (Google Fonts)
  * Accent/Script: **Pinyon Script** (Google Fonts)

## Sourcing Color Palette

* **Deep Green (Idukki Forest)**: `#1B4332` (Primary Brand Color)
* **Matte Gold (Cardamom Gold)**: `#C9A84C` (Accent, logo, and highlighted details)
* **Warm Black (Night Spice)**: `#0D0D0D` (Dark backgrounds)
* **Cream White (Harvest Cream)**: `#FAF7F0` (High-contrast typography)
* **Earthy Brown (Soil & Root)**: `#6B3F2A` (Secondary accent)

## Sourcing Images & Assets

All images are high-fidelity photography assets located in `src/assets/images/`:
* `hero_plantation.png`: Cinematic wide-angle morning hills of Idukki.
* `product_whole.png`: Plump green cardamom pods on a dark slate.
* `product_powder.png`: Cardamom powder in a golden bowl.
* `product_gift.png`: A sleek black/gold rigid cardboard gift box.
* `founder_story.png`: Authentic portrait of our organic spice farmer.
* `farm_life.png`: Close-up of hands picking pods from a stem.

## Development & Local Preview

To preview the website locally, ensure you have Node.js installed, then run:

```bash
# Install dependencies (automatically handled on first run)
npm install

# Start local hot-reload dev server
npm run dev
```

The website will be available at `http://localhost:5173`.

## Sourcing Production Build

To compile a production-ready optimized bundle:

```bash
npm run build
```

The compiled assets will be placed in the `/dist` directory, ready to be hosted on any static host (Netlify, Vercel, Hostinger, GitHub Pages, etc.).
