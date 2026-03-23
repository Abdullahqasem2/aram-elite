# Aram Elite SPA - React + Tailwind CSS

A modern, fully responsive React Single Page Application for Aram Elite Group, a leading contracting, maintenance, and renovation company in Riyadh, Saudi Arabia.

## Features

- **Bilingual Support** - Full English/Arabic support with RTL direction for Arabic content
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Component-Based** - Modular React components for easy maintenance
- **Fast Performance** - Built with Vite for optimal development and production speed
- **Type-Safe** - TypeScript for better code reliability
- **Modern Styling** - Tailwind CSS for utility-first styling

## Project Structure

```
src/
├── components/           # All React components
│   ├── TopBar.tsx       # Sticky top bar with contact info
│   ├── Nav.tsx          # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── ConsultBanner.tsx # Free consultation banner
│   ├── Stats.tsx        # Company statistics
│   ├── Services.tsx     # Services with tabbed interface
│   ├── OrderStrip.tsx   # Call-to-action strip
│   ├── WhyUs.tsx        # Why choose us section
│   ├── Companies.tsx    # 5 specialist companies
│   ├── Contact.tsx      # Contact form and methods
│   └── Footer.tsx       # Footer
├── App.tsx              # Main App component
├── App.css              # App styles
├── index.css            # Global styles and Tailwind imports
└── main.tsx             # React entry point
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool
- **PostCSS** - CSS transformation

## Services Included

The app showcases 5 main service categories:

1. **General Contracting** - Turnkey projects, shopping centers, theme parks, residential compounds
2. **Maintenance** - AMC contracts, facilities management, emergency response, HVAC, landscape
3. **Renovation** - Interior design, home/villa renovation, commercial fit-out, heritage restoration
4. **Sports Facilities** - Stadiums, gyms, pools, multi-sport courts, maintenance
5. **Royal & Luxury** - Palace design, luxury villas, smart homes, automation

## Features Implemented

- ✅ Sticky navigation with smooth scrolling
- ✅ Bilingual content (English/Arabic)
- ✅ Services tab switching without page reload
- ✅ Fully responsive mobile design
- ✅ Contact form with validation
- ✅ Call-to-action buttons throughout
- ✅ Social proof (stats cards)
- ✅ Beautiful gradient backgrounds
- ✅ Smooth animations and transitions
- ✅ Accessible semantic HTML

## Color Scheme

- **Primary Blue**: #1B3A6B
- **Accent Red**: #E8432A
- **Gold**: #C9A84C
- **Green**: #1A8C4E
- **White/Light**: #F5F6F8

## Fonts

- **Barlow** - English sans-serif font
- **Barlow Condensed** - Condensed headings
- **Tajawal** - Arabic font for RTL text

## Development

### Running the dev server

```bash
npm run dev
```

Server will be available at `http://localhost:5173`

### Building for production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Browser Support

- Modern browsers with ES2020 support
- Chrome, Firefox, Safari, Edge

## Future Enhancements

- Add backend API integration for form submissions
- Implement contact form email notifications
- Add image galleries for portfolio projects
- Multi-language support with i18n
- Dark mode toggle
- Analytics integration
- Performance optimizations for mobile

## License

© 2025 Aram Elite Group. All rights reserved.
