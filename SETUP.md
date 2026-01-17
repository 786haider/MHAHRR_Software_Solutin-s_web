# MHAHRR Next.js Setup Guide

## Quick Start (5 minutes)

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager
- Basic knowledge of React and Next.js

### Installation Steps

1. **Navigate to project directory:**
```bash
cd mhahrr-nextjs
```

2. **Install dependencies:**
```bash
npm install
```
This will install:
- Next.js 14.2.0
- React 18
- Framer Motion (animations)
- GSAP (advanced animations)
- Tailwind CSS (styling)
- TypeScript (type safety)

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
Visit `http://localhost:3000`

## 🎬 Animation System Explained

### Framer Motion (Primary Animation Library)

**Why Framer Motion?**
- Declarative API (easy to read and maintain)
- Production-ready performance
- Built-in gesture support
- Variants system for complex animations

**Basic Usage Example:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

**Key Features Used:**
- `initial`: Starting state
- `animate`: End state
- `whileHover`: Hover animations
- `whileInView`: Scroll-triggered animations
- `variants`: Reusable animation configurations
- `transition`: Timing and easing

### GSAP (Advanced Timeline Animations)

**Why GSAP?**
- Powerful timeline control
- Complex sequencing
- Better performance for certain effects
- Industry-standard tool

**Used in Hero Section:**
```tsx
gsap.to(element, {
  x: 100,
  y: 50,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
})
```

### CSS Animations (Performance-Critical)

**Used for:**
- Gradient backgrounds
- Shimmer effects
- Continuous animations
- Low-level optimizations

**Example:**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

## 🎨 Styling System

### Tailwind CSS
All styling uses Tailwind utility classes:

```tsx
<div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2">
  Card content
</div>
```

### Custom Classes
Defined in `globals.css`:
- `.btn-primary`: Primary button style
- `.gradient-text`: Gradient text effect
- `.card`: Base card style

### Color System
Primary color: `#1eb2a6` (Teal)
- `primary-500`: Main color
- `primary-600`: Darker shade
- `primary-400`: Lighter shade

## 📐 Component Architecture

### Page Structure
```
Header (sticky navigation)
  ↓
Hero (animated landing)
  ↓
Stats (counter animations)
  ↓
Services (card grid)
  ↓
About (company info)
  ↓
Values (core principles)
  ↓
Portfolio (projects)
  ↓
Technologies (tech stack)
  ↓
FAQ (accordion)
  ↓
CTA (call-to-action)
  ↓
Contact (form)
  ↓
Footer
```

### Component Pattern
Every component follows this structure:

1. **Imports**: Dependencies at top
2. **Data**: Static data (arrays, objects)
3. **Component Function**: Main component
4. **Animations**: Framer Motion variants
5. **JSX**: Return statement with markup

Example:
```tsx
'use client'

import { motion } from 'framer-motion'

// Data
const items = [...]

// Component
export default function MyComponent() {
  // Animation variants
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <motion.section variants={variants}>
      {/* Content */}
    </motion.section>
  )
}
```

## 🔧 Customization Guide

### Changing Colors

1. **Edit `tailwind.config.js`:**
```javascript
colors: {
  primary: {
    500: '#YOUR_COLOR',
    // Generate shades at: https://uicolors.app
  }
}
```

2. **Update CSS variables in `globals.css`:**
```css
:root {
  --primary: 166 58% 54%; /* HSL values */
}
```

### Adding New Sections

1. **Create component file:**
```bash
components/NewSection.tsx
```

2. **Add to main page:**
```tsx
// app/page.tsx
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <>
      {/* ... existing components */}
      <NewSection />
    </>
  )
}
```

### Modifying Animations

**Speed up animations:**
```tsx
transition={{ duration: 0.3 }} // Faster (was 0.8)
```

**Change easing:**
```tsx
transition={{ 
  duration: 0.8,
  ease: "easeInOut" // Linear, easeIn, easeOut, easeInOut
}}
```

**Add delay:**
```tsx
transition={{ delay: 0.5 }}
```

## 🚀 Deployment Checklist

Before deploying:

- [ ] Update contact information
- [ ] Replace placeholder images
- [ ] Configure environment variables
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Check Lighthouse scores
- [ ] Verify all links work
- [ ] Test contact form

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Next.js
4. Deploy!

## 🐛 Troubleshooting

**Animations not working?**
- Check if component has `'use client'` directive
- Verify Framer Motion is installed
- Check browser console for errors

**Build fails?**
- Run `npm install` again
- Delete `.next` folder and rebuild
- Check TypeScript errors

**Styling issues?**
- Clear browser cache
- Check Tailwind class names
- Verify imports in `globals.css`

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🎯 Performance Tips

1. **Images**: Always use Next.js `<Image>` component
2. **Animations**: Use `viewport={{ once: true }}` for scroll animations
3. **Loading**: Implement loading states
4. **Optimization**: Run `npm run build` to check bundle size

## 💡 Tips & Tricks

**Scroll to section:**
```tsx
import { Link } from 'react-scroll'

<Link to="services" smooth duration={800}>
  Services
</Link>
```

**Intersection Observer:**
```tsx
import { useInView } from 'react-intersection-observer'

const { ref, inView } = useInView({ once: true })
```

**Stagger children:**
```tsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

---

Need help? Check the README.md or contact support!
