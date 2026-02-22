# Amogh Biju Portfolio — Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)
- `button` - CTAs, form submit
- `card` - Project cards, experience cards
- `input` - Contact form
- `textarea` - Contact form message
- `badge` - Skills tags, tech stacks
- `separator` - Section dividers
- `sheet` - Mobile navigation drawer

### Third-Party Registry Components
None required—all effects achievable with Framer Motion and custom CSS.

### Custom Components

| Component | Purpose | Location |
|-----------|---------|----------|
| `Navigation` | Fixed nav with scroll behavior | `src/components/Navigation.tsx` |
| `Hero` | Full-height hero section | `src/sections/Hero.tsx` |
| `About` | Bio and skills section | `src/sections/About.tsx` |
| `Experience` | Timeline of work experience | `src/sections/Experience.tsx` |
| `Projects` | Project cards grid | `src/sections/Projects.tsx` |
| `YouTube` | Channel showcase | `src/sections/YouTube.tsx` |
| `Contact` | Contact form | `src/sections/Contact.tsx` |
| `Footer` | Site footer | `src/sections/Footer.tsx` |
| `ScrollReveal` | Scroll-triggered animation wrapper | `src/components/ScrollReveal.tsx` |
| `TextReveal` | Character-by-character text animation | `src/components/TextReveal.tsx` |
| `HexPattern` | Subtle hexagonal background pattern | `src/components/HexPattern.tsx` |
| `Timeline` | Animated vertical timeline | `src/components/Timeline.tsx` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load sequence | Framer Motion | `AnimatePresence` + staggered `motion.div` | Medium |
| Hero text reveal | Framer Motion | Character-split with staggered opacity/y | Medium |
| Scroll reveal | Framer Motion | `whileInView` with viewport detection | Low |
| Navigation scroll effect | React hooks | `useScroll` hook for background transition | Low |
| Card hover lift | Framer Motion | `whileHover` with transform + shadow | Low |
| Button glow | CSS | Box-shadow transition on hover | Low |
| Link underline | CSS | Width animation from 0 to 100% | Low |
| Timeline draw | Framer Motion | SVG path animation with scroll progress | High |
| Photo parallax | Framer Motion | Mouse position tracking with `useMotionValue` | Medium |
| Skills tag hover | CSS | Background color transition | Low |
| Form input focus | CSS | Border color + label float animation | Low |
| Staggered grid reveal | Framer Motion | Parent `staggerChildren` variant | Medium |

---

## Animation Library Choices

### Primary: Framer Motion
- React-native integration
- Declarative API
- Built-in scroll detection (`whileInView`)
- Gesture support (`whileHover`, `whileTap`)
- AnimatePresence for mount/unmount

### Secondary: CSS Transitions/Animations
- Simple hover states
- Link underlines
- Form focus states
- Performance-critical micro-interactions

### Rationale
Framer Motion provides the best developer experience for React while maintaining performance. CSS handles simple transitions to minimize JS overhead.

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-photo.jpg
│   │   └── poster-photo.jpg
│   └── videos/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── TextReveal.tsx
│   │   ├── HexPattern.tsx
│   │   └── Timeline.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── YouTube.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components/ui/     # shadcn components
├── index.html
├── tailwind.config.ts
└── package.json
```

---

## Dependencies

### Core (Auto-installed)
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### Animation
```bash
npm install framer-motion
```

### Icons
```bash
npm install lucide-react
```

### Fonts (Google Fonts via CDN)
- Crimson Pro (serif)
- Inter (sans-serif)
- JetBrains Mono (monospace)

---

## Color Configuration (Tailwind)

```javascript
// tailwind.config.ts extension
colors: {
  primary: {
    dark: '#0a1628',
    DEFAULT: '#1e3a5f',
    light: '#2d4a6f',
  },
  accent: {
    gold: '#d4a853',
    copper: '#b87333',
    cyan: '#4a9eff',
  },
  neutral: {
    100: '#f8f6f3',
    200: '#e8e4df',
    300: '#a8a4a0',
    800: '#2a2a2a',
  },
}
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger nav |
| Tablet | 640-1024px | 2-column grids |
| Desktop | > 1024px | Full layout, 3-column grids |

---

## Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Lazy load below-fold images
   - Proper sizing with srcset

2. **Animation Performance**
   - Use `transform` and `opacity` only
   - Add `will-change` sparingly
   - Respect `prefers-reduced-motion`

3. **Code Splitting**
   - Sections can be lazy loaded if needed
   - Framer Motion tree-shaking

---

## Accessibility

1. **Reduced Motion**
   - Check `prefers-reduced-motion`
   - Disable parallax and complex animations
   - Keep essential transitions

2. **Focus States**
   - Visible focus rings on all interactive elements
   - Skip to content link

3. **Semantic HTML**
   - Proper heading hierarchy
   - ARIA labels where needed
   - Alt text for images
