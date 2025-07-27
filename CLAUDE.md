# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Chilean RUT (Rol Único Tributario) Generator** - a Next.js web application that generates, validates, and formats Chilean national identification numbers. The app is live at `https://www.rutschile.com`.

## Development Commands

```bash
# Development
npm run dev          # Start development server on localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint code linting
```

## Core Architecture

### Business Logic Layer
- **`/lib/shared/rut-generator.service.ts`** - Core RUT generation service
  - `RutGenerator` class handles RUT generation logic
  - Chilean verification digit algorithm implementation
  - Generates 35 unique RUTs per batch (range: 1M-40M)
  - Download functionality for generated RUTs

### Utility Functions
- **`/src/lib/utils/rut-validator.ts`** - RUT validation using Chilean algorithm
- **`/src/lib/utils/rut-formatter.ts`** - RUT formatting with dots and dashes

### Application Structure
```
src/app/                    # Next.js App Router pages
├── page.tsx               # Main generator (/)
├── creador-rut/           # Alternative generator (/creador-rut)
├── validar/               # RUT validator (/validar)
├── rut-al-azar/          # Random generator (/rut-al-azar)
├── generador-masivo/      # Mass RUT generator (/generador-masivo)
├── calcular-digito/       # Verification digit calculator (/calcular-digito)
├── blog/                  # Blog system
│   ├── [slug]/           # Dynamic blog post pages
│   └── autor/            # Author pages
├── quienes-somos/        # About page
├── metodologia/          # Methodology page
├── politica-privacidad/  # Privacy policy
└── terminos-condiciones/ # Terms and conditions

src/components/
├── ui/                    # shadcn/ui components
├── FAQs.tsx              # Home page FAQs
├── ValidarFAQs.tsx       # Validator page FAQs
├── Navbar.tsx            # Navigation component
├── ShareButtons.tsx      # Social sharing component
└── MarkdownRenderer.tsx  # Blog markdown with syntax highlighting

src/lib/
├── blog-data.ts          # Blog metadata and author information
└── blog-content.ts       # Blog post content storage
```

## Technology Stack

- **Next.js 14.2.4** with App Router and TypeScript
- **Tailwind CSS** + **shadcn/ui** for styling and components
- **Radix UI** primitives for accessibility
- **Vercel Analytics** for web analytics
- **react-syntax-highlighter** for code block syntax highlighting

## Key Features

### RUT Generation Algorithm
The Chilean RUT verification digit calculation uses a specific modulo-11 algorithm implemented in `getMod()` method:
```typescript
// Simplified version of the algorithm
let M = 0, S = 1;
while (number) {
  S = (S + (number % 10) * (9 - (M++ % 6))) % 11;
  number = Math.floor(number / 10);
}
return S ? S - 1 : "K";
```

### Blog System Architecture
- **Content Management**: Blog posts stored in `/src/lib/blog-content.ts` with metadata in `/src/lib/blog-data.ts`
- **Author System**: Multiple authors with profiles linked to blog posts
- **Markdown Rendering**: Custom `MarkdownRenderer` component with:
  - Syntax highlighting for code blocks
  - Copy-to-clipboard functionality
  - Enhanced table styling
  - Language labels and line numbers

### Page-Specific Functionality
- **Home (/)**: Main generator interface with batch generation
- **Creator (/creador-rut)**: Alternative messaging for RUT creation
- **Validator (/validar)**: Real-time RUT validation with visual feedback
- **Random (/rut-al-azar)**: Emphasizes randomness in generation
- **Mass Generator (/generador-masivo)**: Bulk RUT generation with export
- **Digit Calculator (/calcular-digito)**: Calculate verification digit for given RUT number
- **Blog (/blog)**: Technical articles about RUT implementation in various languages

## SEO & Localization

- Chilean Spanish localization (`es_CL`)
- Comprehensive meta tags and JSON-LD structured data
- Dynamic sitemap generation in `/src/app/sitemap.ts`
- Open Graph and Twitter Card metadata
- Structured data for blog posts with author information

## Development Notes

- Uses shadcn/ui component system (config in `components.json`)
- Blue theme color: `#0033A0` (Chilean flag blue)
- Google Fonts (Karla) for typography
- Responsive design with mobile-first approach
- TypeScript strict mode enabled
- Path aliases: `@/*` maps to `./src/*`