# Muhammad Reyhan — Portfolio

Personal portfolio website showcasing my projects, skills, and journey as a self-taught developer and cybersecurity enthusiast.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

## ✨ Features

- **7 Content Sections** — Hero, About, Skills, Projects, Certificates, Bug Hunting, Resume
- **Dark/Light Theme** — Automatic system detection with manual toggle
- **Print-Ready Resume** — Clean `/resume` page optimized for PDF export
- **Smooth Animations** — Custom motion engine with proximity-reactive UI
- **Fully Responsive** — Mobile-first design that works on all devices
- **Accessible** — Keyboard navigation, ARIA labels, semantic HTML

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion + Custom RAF Engine |
| Fonts | Geist Sans & Mono |

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/Gioxaa/portfolio-v2.git

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 📝 Customization

All content is in one file: `src/content/profile.ts`

```typescript
personal: {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  socialLinks: [...],
}

// Add your projects, skills, certificates, etc.
```

## 📄 License

MIT License — feel free to use this as a template for your own portfolio.

---

**Live Demo:** https://portfolio-v2-mauve-kappa.vercel.app/

**Contact:** [freyrey222@gmail.com](mailto:freyrey222@gmail.com)
