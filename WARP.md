# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

FireSafeX website is a modern, static marketing site built with Next.js 15 and deployed to GitHub Pages. It showcases a mixed reality fire safety training solution with immersive animations and responsive design.

**Tech Stack:**
- Next.js 15 (App Router) with TypeScript
- Tailwind CSS v4 with custom CSS variables for theming
- Framer Motion for animations
- Lucide React for icons
- Static site generation (`output: 'export'`)
- GitHub Pages deployment

## Development Commands

### Core Development
```bash
# Start development server with Turbopack
npm run dev

# Build for production (generates static site in /out)
npm run build

# Start production server (local testing of build)
npm start

# Run ESLint
npm run lint
```

### Package Management
```bash
# Install dependencies
npm install

# Add new dependency
npm install <package-name>

# Add dev dependency
npm install --save-dev <package-name>
```

### Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions workflow (`.github/workflows/deploy.yml`).

## Architecture & Code Structure

### Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata, fonts, and theme toggle
│   ├── page.tsx            # Main landing page with all sections
│   └── globals.css         # Global styles and theme variables
├── components/
│   └── ThemeToggle.tsx     # Dark/light theme switcher component
└── [other assets]
```

### Key Architectural Patterns

**Single Page Application**: The entire website is contained in a single `page.tsx` file with multiple sections rendered in sequence.

**Theme System**: CSS custom properties with data-attribute switching:
- Theme controlled via `ThemeToggle.tsx` component
- Persisted to localStorage with key `firesafex-theme`
- Light/dark themes defined in `globals.css`
- Uses `[data-theme="light|dark"]` attribute selectors

**Styling Architecture**:
- Tailwind CSS v4 with inline theme configuration
- Custom CSS variables for brand colors (`--color-fire-*`, `--color-tech-*`)
- Glass morphism effects via `.glass` utility class
- Soft borders with `.soft-border` and `.soft-border-hover` classes
- Gradient background effects with `.page-bg`

**Animation Strategy**:
- Framer Motion for scroll-triggered animations
- Consistent pattern: `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`
- Video modal with state management

### Component Patterns

**Reusable Components**:
- `FeatureCard`: Icon + title + description layout for problem/solution sections
- `BenefitCard`: Similar to FeatureCard but with different styling
- `Section`: Wrapper component for consistent section spacing and z-index
- `VideoModal`: Full-screen video overlay

**Icon Usage**: All icons from Lucide React, typed with `LucideIcon` interface.

## Configuration Details

### Next.js Configuration (`next.config.ts`)
- Static export mode for GitHub Pages
- Base path and asset prefix set to `/firesafe_x_website/`
- Images unoptimized for static hosting
- Trailing slashes enabled

### TypeScript Configuration
- Strict mode enabled
- Path mapping: `@/*` → `./src/*`
- Next.js plugin for enhanced TypeScript support

### GitHub Pages Deployment
- Workflow deploys the `./out` directory
- Triggered on push to `main` branch
- Requires the build to be committed (static files in `out/` are version controlled)

## Development Guidelines

### Color System
Use CSS custom properties for consistent theming:
- `--color-fire-400/500`: Brand fire colors (orange/red gradient)
- `--color-tech-500`: Brand tech color (cyan)
- `--color-background/foreground/surface/muted`: Theme-aware semantic colors

### Animation Guidelines
- Use Framer Motion's `whileInView` for scroll animations
- Apply `viewport={{ once: true }}` to prevent re-triggers
- Standard transition duration: `0.5s` for components, `0.6s` for hero elements
- Stagger delays with increments of `0.1s`

### Responsive Design
- Mobile-first approach with Tailwind responsive prefixes
- Grid layouts: `sm:grid-cols-2 lg:grid-cols-4` pattern
- Typography scaling: `text-4xl md:text-6xl` for headings
- Consistent padding: `px-6 md:px-10` for sections

### Asset Management
- Placeholder images from Unsplash for development
- Video sources from Google's sample bucket
- Icons exclusively from Lucide React library

## Important Notes

- **Static Site**: No server-side functionality; all interactivity is client-side
- **Theme Persistence**: Theme choice persists via localStorage across sessions
- **SEO Optimized**: Comprehensive metadata in `layout.tsx` including Open Graph and Twitter cards
- **Deployment**: Changes to `main` branch automatically trigger GitHub Pages deployment
- **Build Output**: The `out/` directory contains the generated static site and is committed to the repository

## Troubleshooting

**Build Issues**: Check that all imports use the `@/` path alias correctly and that TypeScript compilation passes.

**Styling Issues**: Verify CSS custom properties are properly defined in `:root` and theme selectors in `globals.css`.

**Animation Issues**: Ensure Framer Motion components have proper `initial` and `whileInView` props, and check for layout shifts.

**Deployment Issues**: Confirm the `out/` directory is properly generated and committed, and that GitHub Pages is configured to deploy from the root directory.
