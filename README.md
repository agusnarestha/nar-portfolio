# Agus Narestha Portfolio

A modern, high-performance portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**, featuring a distinct **Neobrutalism** design aesthetic.

![Project Preview](https://agusnarestha.dev/opengraph-image)

## 🚀 Key Features

- **🎨 Neobrutalism Design**: Bold borders, vibrant contrast, and playful shadows.
- **📝 MDX Blog**: Fully functional blog with syntax highlighting, reading time, and tags.
- **🎵 Spotify Integration**: Real-time "Now Playing" widget using Spotify API (PKCE Flow).
- **⚡ SEO Optimized**:
  - Dynamic **Open Graph** images generated at build time.
  - Comprehensive **JSON-LD** schemas (Person, WebSite, BlogPosting).
  - RSS Feed (`/feed.xml`) and Sitemap support.
  - Canonical URLs and proper metadata for all pages.
- **📱 Responsive**: Mobile-first design that looks great on all devices.
- **🌙 Dark Mode**: Native support for light and dark themes.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: [MDX](https://mdxjs.com/)
- **Analytics**: Google Analytics & Tag Manager via `@next/third-parties`
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nar-portfolio.git
   cd nar-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Rename `.env.local.example` to `.env.local` and add your keys:
   ```bash
   cp .env.local.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔑 Environment Variables

To fully utilize the features (Spotify, Analytics), configure the following in `.env.local`:

| Variable | Description |
|----------|-------------|
| `SPOTIFY_CLIENT_ID` | Your Spotify App Client ID |
| `SPOTIFY_REFRESH_TOKEN` | Refresh token generated via PKCE flow |
| `NEXT_PUBLIC_GA_ID` | (Optional) Google Analytics ID |

**Note on Spotify Auth:** This project uses the Authorization Code Flow with PKCE for security. You must generate a `refresh_token` that allows refreshing without a Client Secret.

## 🚢 Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fnar-portfolio)

The project includes `generateStaticParams` for OG images to ensure they are pre-generated during the build process, avoiding runtime limitations on serverless functions.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
