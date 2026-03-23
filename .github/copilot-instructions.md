# Aram Elite React SPA - Project Guidelines

## Project Overview
This is a React TypeScript single-page application for Aram Elite Group, a premium contracting and maintenance company in Riyadh, Saudi Arabia. The site features bilingual support (English/Arabic), responsive design, and comprehensive service offerings.

## Key Technologies
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS 4** for styling
- **PostCSS** for CSS processing

## Project Structure
```
/src
  /components/          # 11 reusable React components
    - TopBar.tsx        # Sticky header with contact info
    - Nav.tsx           # Navigation menu
    - Hero.tsx          # Hero section with CTA
    - ConsultBanner.tsx # Free consultation promotion
    - Stats.tsx         # Key metrics display
    - Services.tsx      # Tabbed service categories (5 tabs)
    - OrderStrip.tsx    # CTA strip
    - WhyUs.tsx         # Value propositions
    - Companies.tsx     # 5 subsidiary companies showcase
    - Contact.tsx       # Contact form + methods
    - Footer.tsx        # Footer with links
  App.tsx              # Main component
  main.tsx             # React entry point
  index.css            # Global styles
  App.css              # App-specific styles
```

## Bilingual Support
All text content is bilingual (English/Arabic with RTL):
- Use `font-arabic` class for Arabic text
- Arabic props: `nameAr`, `descAr`, `titleAr`, etc.
- Apply `direction: rtl` via Tailwind classes

## Color Palette
- Primary: #1B3A6B | Accent: #E8432A | Gold: #C9A84C | Green: #1A8C4E

## Development Commands
```bash
npm run dev      # Start dev server on localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## Component Standards
- Use `React.FC<>` TypeScript typing
- Keep components reusable and focused
- Use Tailwind utilities exclusively for styling
- Include bilingual content for all user-facing text

## Important Notes
- Contact placeholders: +966XXXXXXXXX (replace with actual number)
- Form submissions currently show alert (needs backend integration)
- Mobile-first responsive design
- Smooth scrolling and transitions enabled
