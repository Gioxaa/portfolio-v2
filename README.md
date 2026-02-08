# Portfolio

Portfolio web application built with Next.js 16, featuring a custom motion engine, token-based design system, and security hardening.

## Features

- **Custom Motion Engine**: Single RAF loop for cursor proximity, velocity tracking, and scroll-linked animations
- **Token-Based Design System**: CSS custom properties for colors, spacing, typography, radius, and shadows
- **Dark/Light Theme**: Persisted theme preference with system detection
- **7 Content Sections**: Hero, About, Skills, Projects, Certificates, Bug Hunting Journal, Resume
- **Print-Friendly Resume**: Dedicated `/resume` route optimized for PDF generation
- **Accessibility**: Keyboard navigation, focus rings, ARIA labels, semantic landmarks
- **Security Headers**: CSP, X-Frame-Options, Referrer-Policy, and more

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 + CSS custom properties
- **Animation**: Framer Motion (orchestration) + Custom RAF engine
- **Fonts**: Geist Sans & Mono

## Quick Start

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000) after starting the dev server.

## Edit Guide

All content is centralized in `src/content/profile.ts`. Edit this file to customize:

```typescript
// Personal info
personal: {
  name: "Your Name",
  title: "Your Title",
  roles: ["Role 1", "Role 2"],
  location: "Your Location",
  bio: "Your bio...",
  startYear: 2019, // Used to calculate years of experience
  socialLinks: [...],
}

// Add projects, certificates, skills, etc.
```

## Project Structure

```
src/
├── app/                 # Next.js routes
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Main page (sections)
│   ├── resume/          # Printable resume page
│   └── globals.css      # Design tokens + base styles
├── components/          # React components
│   ├── ui/              # Reusable primitives
│   ├── navbar.tsx       # Navigation with scroll tracking
│   ├── footer.tsx       # Footer component
│   ├── debug-panel.tsx  # Dev-only motion debug panel
│   └── ...
├── sections/            # Page sections (Hero, About, etc.)
├── content/             # Typed content data
│   └── profile.ts       # All portfolio content
├── hooks/               # Custom React hooks
│   ├── use-active-section.ts
│   ├── use-proximity.ts
│   ├── use-reduced-motion.ts
│   └── ...
└── lib/                 # Utilities
    ├── motion/          # Custom motion engine
    │   ├── ticker.ts    # Global RAF loop
    │   ├── mouse.ts     # Cursor tracking
    │   ├── easing.ts    # Easing functions
    │   └── noise.ts     # Noise/drift utilities
    └── utils/           # General utilities
        └── logger.ts    # Dev-only logging
```

## Design Tokens Philosophy

The design system uses CSS custom properties for maximum flexibility:

- **Colors**: HSL channels (e.g., `--color-accent: 186 100% 50%`) enabling opacity modifiers
- **Spacing**: Consistent scale from `--space-1` (0.25rem) to `--space-32` (8rem)
- **Typography**: Modular scale from `--text-xs` to `--text-7xl`
- **Dark-first**: Default dark theme with `.light` class override
- **Motion values**: `--mx`, `--my`, `--mv` written by RAF engine for CSS animations

## Motion Philosophy

Premium effects without gimmicks:

1. **Proximity Field**: Cards react to cursor distance, not just hover
2. **Velocity Feedback**: Cursor speed influences UI elements (clamped)
3. **Ambient Drift**: Subtle noise-based movement for accents
4. **Masked Reveal**: Text reveals via clip-path, not opacity fade
5. **Scroll State**: Dominant section tracking with smooth navbar indicator

All motion respects `prefers-reduced-motion` and degrades gracefully.

## Troubleshooting

### Common Issues

**Hydration mismatch errors**
- Ensure client-only code is wrapped in `useEffect` or uses `"use client"` directive
- Theme detection should happen client-side only

**Motion jank/stuttering**
- Check for excessive re-renders with React DevTools
- Ensure RAF loop isn't creating new objects each frame
- Use `React.memo` for components receiving motion values

**Tailwind classes not working**
- Run `pnpm dev` to generate styles
- Check if custom tokens are properly defined in globals.css

### Performance Tips

1. **Memoization**: Use `React.memo()` for proximity-reactive components
2. **RAF placement**: Motion engine is initialized once in MotionProvider
3. **CSS variables**: Prefer CSS-driven animations over React state updates
4. **Image optimization**: Use Next.js `<Image>` component with proper sizing

## Performance Checklist

- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] Check bundle size with `pnpm build` output
- [ ] Verify images are optimized (WebP/AVIF)
- [ ] Test on mid-range laptop (60fps target)
- [ ] Validate accessibility with axe DevTools

## Security

See [SECURITY.md](./SECURITY.md) for:
- Vulnerability reporting
- Security measures implemented
- Threat model

## License

MIT License - see LICENSE file for details.
