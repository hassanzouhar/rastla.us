# CLAUDE.md - Rastlaus Landing Page

> Comprehensive guide for AI assistants working on the Rastlaus landing page codebase

## Project Overview

**Rastlaus** is a Norwegian collective/agency landing page showcasing their philosophy ("Make. Break. Ship."), team, and work. The site features a distinctive **neobrutalist design system** with bold colors, thick borders, and hard shadows.

- **Language**: Norwegian (Bokmål)
- **Target Audience**: Norwegian market
- **Purpose**: Landing page for a product-building collective
- **Current State**: Active development, some placeholder content

## Tech Stack

### Core Framework
- **Next.js 16.0.1** - App Router (modern `/app` directory structure)
- **React 19.2.0** - Latest React with new features
- **TypeScript 5.x** - Full type safety

### Styling
- **Tailwind CSS v4** (latest) - Using new `@tailwindcss/postcss` plugin
- **CSS Custom Properties** - For theming and font references
- **Inline Styles** - Extensively used for color tokens and component-specific styling

### Animation & Interactivity
- **Framer Motion v12** - For hero section animations
- **Custom Hooks** - `useSticky` for navigation behavior

### Build & Deploy
- **Vercel** - Deployment platform (configured in `vercel.json`)
- **React Compiler** - Enabled for automatic performance optimizations (experimental)
- **ESLint** - Code quality and standards

### Key Dependencies
```json
{
  "next": "16.0.1",
  "react": "19.2.0",
  "framer-motion": "^12.23.24",
  "tailwindcss": "^4.1.16",
  "typescript": "^5"
}
```

## Directory Structure

```
/home/user/rastla.us/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── favicon.ico               # Site favicon
│   │   ├── globals.css               # Global styles & CSS variables
│   │   ├── layout.tsx                # Root layout with metadata & fonts
│   │   └── page.tsx                  # Home page (renders RastlausLanding)
│   └── components/
│       └── RastlausLanding.tsx       # Main landing page component (all-in-one)
├── public/                           # Static assets (SVGs)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
├── next.config.ts                    # Next.js configuration
├── eslint.config.mjs                 # ESLint rules
├── postcss.config.mjs                # PostCSS with Tailwind v4
├── vercel.json                       # Vercel deployment config
└── README.md                         # Basic Next.js documentation
```

### Important Path Aliases
- `@/*` → `./src/*` (configured in `tsconfig.json`)

## Development Workflow

### Setup & Installation
```bash
npm install                # Install dependencies
npm run dev               # Start development server (http://localhost:3000)
npm run build             # Production build
npm run lint              # Run ESLint
npm start                 # Start production server
```

### Development Server
- Runs on `http://localhost:3000`
- Hot reload enabled
- Edit `src/app/page.tsx` or `src/components/RastlausLanding.tsx` to see changes

## Code Conventions & Patterns

### 1. Component Organization
**Single-File Component Pattern**: All components are in `RastlausLanding.tsx`

Structure within the file:
```typescript
// 1. "use client" directive (required for hooks/animations)
"use client"

// 2. Imports
import { useState } from "react"
import { motion } from "framer-motion"

// 3. Color tokens (C object)
const C = { ink: "#0A0A0A", paper: "#FAFAF5", ... }

// 4. Primitive components (Paper, BrutalCard, BrutalButton)
// 5. Icon components
// 6. Complex components (StackedBlocks, NavBar, TeamCard)
// 7. Main page component (RastlausLanding)
// 8. Smoke tests (console assertions)
```

### 2. TypeScript Conventions
- Use `interface` for props: `interface NavBarProps { ... }`
- Type inline styles explicitly when needed
- Leverage React 19 types from `@types/react`

### 3. Styling Approach

**Hybrid Strategy**:
1. **Tailwind utilities** for layout, spacing, responsive design
2. **Inline styles** for color tokens and component-specific styling
3. **CSS variables** for fonts and theme values

**Color Tokens** (defined in `RastlausLanding.tsx`):
```typescript
const C = {
  ink: "#0A0A0A",      // Primary text/borders
  paper: "#FAFAF5",    // Background
  neon: "#F7FF00",     // Accent yellow
  blue: "#3A86FF",
  magenta: "#FF2E88",
  aqua: "#2DE2E6",
  orange: "#FF6A3D",
  lime: "#C8FF00",
}
```

**Design System Primitives**:
- `Paper` - Main page wrapper with texture
- `BrutalCard` - Card with thick borders (2px) and hard shadows (6px offset)
- `BrutalButton` - CTA buttons with neobrutalist style

### 4. Responsive Design
- **Mobile-first approach**
- **Breakpoint**: `md:` (768px) for desktop
- **Navigation**: Hamburger menu on mobile, horizontal on desktop

Example pattern:
```typescript
<div className="flex flex-col md:flex-row gap-4 md:gap-8">
```

### 5. Animation Patterns
- Use Framer Motion for complex animations
- Keep animations subtle and performant
- Example: Floating hero blocks with infinite loop

```typescript
<motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
>
```

### 6. Font System
- **Body text**: Inter (via `next/font/google`)
- **Headings**: Bricolage Grotesque
- Loaded in `layout.tsx` and exposed as CSS variables

```typescript
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" })
```

### 7. Client-Side Features
- Use `"use client"` directive for:
  - `useState`, `useEffect`, custom hooks
  - Framer Motion animations
  - Event handlers

## Design System Reference

### Neobrutalist Design Principles
1. **Thick borders** - 2px solid black (`border-2 border-black`)
2. **Hard shadows** - 6px offset, no blur
   ```typescript
   boxShadow: "6px 6px 0 0 #0A0A0A"
   ```
3. **Bold colors** - High contrast, saturated
4. **Uppercase typography** - `uppercase` utility class
5. **Geometric shapes** - Clean rectangles and squares
6. **No gradients or blur** - Hard edges only

### Component Patterns

**BrutalCard**:
```typescript
<div style={{
  border: "2px solid #0A0A0A",
  boxShadow: "6px 6px 0 0 #0A0A0A",
  backgroundColor: color,
}}>
```

**BrutalButton**:
```typescript
<button style={{
  border: "2px solid #0A0A0A",
  boxShadow: "6px 6px 0 0 #0A0A0A",
  backgroundColor: C.neon,
  color: C.ink,
}}>
```

### Spacing System
- Use Tailwind spacing scale: `p-4`, `gap-6`, `mt-8`, etc.
- Consistent rhythm: 4px base unit (1 = 4px)
- Generous padding on cards: `p-8` to `p-12`

### Typography Scale
- **Hero**: `text-5xl md:text-7xl font-bold`
- **Section titles**: `text-4xl md:text-5xl font-bold`
- **Body**: `text-base md:text-lg`
- **Labels**: `text-sm uppercase`

## Routing & Navigation

### Pages
Currently a **single-page application** with anchor navigation:
- `/` - Home page (`src/app/page.tsx`)

### In-Page Sections (Anchor Links)
- `#work` - What they do
- `#principles` - Vision and mission
- `#cases` - Projects/case studies
- `#team` - Team members

### Navigation Component
- Sticky navigation with `useSticky` hook
- Smooth scroll to anchors
- Mobile hamburger menu toggles with state

## Common Tasks & Commands

### Adding a New Section
1. Add section to `RastlausLanding` component
2. Use `SectionHeader` for consistent header styling
3. Add anchor ID for navigation
4. Update `NavBar` links if needed

### Updating Colors
1. Modify the `C` object in `RastlausLanding.tsx`
2. Colors are used throughout components via the `C` reference

### Adding a New Component
1. Define in `RastlausLanding.tsx` (before main component)
2. Follow primitive → complex pattern
3. Use TypeScript interfaces for props
4. Apply neobrutalist styling conventions

### Updating Metadata (SEO)
Edit `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "...",
  description: "...",
  openGraph: { ... },
  twitter: { ... },
}
```

### Running Quality Checks
```bash
npm run lint              # ESLint
npm run build             # TypeScript type check + build
```

## Important Notes & Gotchas

### 1. Dark Mode Issue (RESOLVED)
**Context**: Previous dark mode implementation caused white text on light background.

**Solution**: Removed dark mode override in `globals.css`. Site now always uses light theme.

**Comment in code** (line 24-31 in `globals.css`):
```css
/*
 * Vi har ikke et gjennomført dark-mode-design i resten av appen.
 * Når operativsystemet ber om dark mode bytter denne blokken
 * `--foreground` til en lys farge, mens komponentene (f.eks. Paper)
 * fortsatt bruker en lys bakgrunn. Resultatet er hvit tekst på lys
 * bakgrunn. Vi fjerner derfor dark-mode overstyringen slik at siden
 * alltid bruker de lyse fargene vi faktisk designer for.
 */
```

**When modifying**: DO NOT add dark mode styles without redesigning all components.

### 2. Tailwind CSS v4
- Uses **new CSS-first configuration** (no `tailwind.config.js`)
- Configure via `@theme` directive in CSS
- PostCSS plugin: `@tailwindcss/postcss`

### 3. React Compiler (Experimental)
- Enabled in `next.config.ts`
- Automatic optimizations (memoization)
- May cause unexpected behavior with certain patterns

### 4. Missing Assets
- `/og.png` - Open Graph image referenced but not in repo
  - Size: 1200x630px
  - Create this for social sharing previews

### 5. Placeholder Content
- **Principles section**: Has Lorem ipsum text
- **Cases section**: Placeholder project data
- Update these with real content

### 6. Norwegian Language
- All content is in Norwegian (Bokmål)
- Maintain language consistency when adding new content
- HTML lang attribute: `lang="no"`

### 7. Font Loading
- Fonts loaded via `next/font/google` for optimization
- FOUT (Flash of Unstyled Text) is minimized
- Don't use external font links in HTML

### 8. Console Smoke Tests
Bottom of `RastlausLanding.tsx` has client-side assertions:
```typescript
console.assert(typeof RastlausLanding === "function", "main export")
```
These run in browser console - don't remove them.

## Git Workflow

### Branching Strategy
- **Main branch**: Production-ready code
- **Feature branches**: Use `claude/*` prefix for AI-generated branches
- **Branch naming**: Descriptive, kebab-case

### Commit Messages
Follow existing style (from git log):
- Descriptive, action-oriented
- Examples:
  - "Fix light theme text color by removing dark override"
  - "Updated design, text etc"

### Recent Important Commits
- `b8efa43` - Merged dark theme fix PR
- `7e41e96` - Fixed white text on light background issue
- `0a7c4ea` - Copy updates

## Configuration Files Reference

### `next.config.ts`
```typescript
const nextConfig = {
  experimental: {
    reactCompiler: true,  // Enable React Compiler
  },
}
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]   // Path alias
    },
    "strict": true,         // Strict mode
    "jsx": "react-jsx"      // New JSX transform
  }
}
```

### `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

## Accessibility Considerations

- Use semantic HTML (`<nav>`, `<section>`, `<header>`)
- Add `aria-label` to icon-only buttons
- Ensure sufficient color contrast (test with tools)
- Keyboard navigation support (focus states)

## Performance Optimizations

1. **React Compiler** - Automatic memoization
2. **Next.js Image optimization** - Use `next/image` for images
3. **Font optimization** - `next/font/google` preloads fonts
4. **Static generation** - No server-side logic, can be fully static

## Testing Strategy

Currently: **No automated tests**

Smoke tests in component file (browser console):
```typescript
console.assert(typeof RastlausLanding === "function")
```

**Future considerations**:
- Add unit tests with Vitest or Jest
- E2E tests with Playwright
- Visual regression tests

## Deployment

### Vercel (Current)
- Auto-deploys from main branch
- Preview deployments for PRs
- Environment: Node.js 20.x

### Manual Deployment
```bash
npm run build    # Creates .next directory
npm start        # Serves production build locally
```

## Common Issues & Solutions

### Issue: Build fails with TypeScript errors
**Solution**: Run `npm run build` locally to catch type errors before pushing

### Issue: Tailwind classes not working
**Solution**: Check Tailwind v4 syntax - some directives changed

### Issue: Animations not running
**Solution**: Ensure `"use client"` directive is present

### Issue: Fonts not loading
**Solution**: Check font variable names match between `layout.tsx` and `globals.css`

## Working with AI Assistants

### Best Practices
1. **Always read files before editing** - Use Read tool first
2. **Preserve existing patterns** - Match component structure
3. **Maintain design system** - Use color tokens from `C` object
4. **Test responsive design** - Check both mobile and desktop
5. **Keep Norwegian language** - Don't translate to English
6. **Follow neobrutalist style** - Thick borders, hard shadows
7. **Update this file** - Keep CLAUDE.md in sync with changes

### Quick Reference Commands
```bash
# Most common operations
npm run dev           # Start development
npm run build         # Check for errors
npm run lint          # Code quality

# File locations
src/components/RastlausLanding.tsx    # Main component
src/app/globals.css                   # Global styles
src/app/layout.tsx                    # Metadata & fonts
```

### When to Ask the User
- Adding new pages or routes
- Changing brand colors or design system
- Adding external dependencies
- Modifying deployment configuration
- Translating content
- Removing placeholder content (confirm which content is final)

---

**Last Updated**: 2025-11-14
**Version**: Next.js 16.0.1, React 19.2.0, Tailwind CSS v4
**Status**: Active development, landing page MVP complete
