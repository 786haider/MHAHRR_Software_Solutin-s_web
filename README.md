# MHAHRR Software Solutions - Next.js Website

A modern, fully-animated Next.js 14 website for MHAHRR Software Solutions, featuring advanced animations using Framer Motion and GSAP.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Advanced Animations**: Framer Motion for smooth, production-ready animations
- **GSAP Integration**: For complex timeline-based animations
- **Smooth Scrolling**: Native CSS smooth scroll with intersection observers
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Lazy loading, code splitting, and optimized animations
- **Custom Design System**: Unique color palette and typography
- **Modern UI/UX**: Glassmorphism, gradients, and micro-interactions

## 🎨 Animation Features

### Hero Section
- Animated gradient background with moving particles
- GSAP-powered floating background elements
- Staggered text animations with Framer Motion
- Smooth scroll indicator

### Components
- **Header**: Animated navigation with smooth transitions
- **Stats**: Counter animations that trigger on scroll
- **Services**: Card hover effects with 3D transforms
- **Portfolio**: Project cards with image zoom and overlay effects
- **FAQ**: Accordion with smooth expand/collapse animations
- **Contact**: Form with interactive field animations

### Advanced Techniques Used
- Intersection Observer for scroll-triggered animations
- Staggered animations for sequential reveals
- Custom easing functions for natural motion
- Parallax effects on background elements
- Magnetic hover effects on buttons
- Gradient animations with keyframes

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
mhahrr-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── Header.tsx          # Animated navigation
│   ├── Hero.tsx            # Hero section with GSAP
│   ├── Stats.tsx           # Animated statistics
│   ├── Services.tsx        # Service cards
│   ├── About.tsx           # About section
│   ├── Values.tsx          # Company values
│   ├── Portfolio.tsx       # Project showcase
│   ├── Technologies.tsx    # Tech stack
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── CTA.tsx             # Call-to-action
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer section
│   └── SmoothScroll.tsx    # Smooth scroll wrapper
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## 🎯 Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Production-ready animation library
- **GSAP**: Professional-grade animation platform
- **React Scroll**: Smooth scrolling library
- **React Intersection Observer**: Scroll-based triggers

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  primary: {
    500: '#1eb2a6', // Main brand color
    600: '#189c91',
    // ... other shades
  }
}
```

### Fonts
Fonts are configured in `app/layout.tsx`:
- **Display Font**: Space Grotesk (headings)
- **Body Font**: Sora (body text)

### Animations
Animation variants are defined in each component. Customize timing, easing, and effects:
```typescript
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 📝 Environment Variables

Create a `.env.local` file for environment-specific variables:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🔧 Performance Tips

1. **Images**: Use Next.js Image component for optimization
2. **Fonts**: Fonts are already optimized with `next/font`
3. **Animations**: Use `will-change` CSS property sparingly
4. **Code Splitting**: Components auto-split with dynamic imports

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a custom website project. For modifications:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2024 MHAHRR Software Solutions. All rights reserved.

## 🙏 Credits

- Design: Custom design system
- Animations: Framer Motion & GSAP
- Icons: Heroicons (via SVG paths)
- Fonts: Google Fonts (Space Grotesk, Sora)

## 📞 Support

For questions or support:
- Email: info@mhahrr.com
- Phone: +92 300 1234567

---

Built with ❤️ using Next.js 14 and modern web technologies
# MHAHRR_Software_Solutin-s_web
