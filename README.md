# Developer Portfolio

A modern, responsive developer portfolio built with clean HTML, CSS, and vanilla JavaScript. Features a mobile-first design with accessible navigation and smooth interactions.

## Features

- 🎨 Modern, clean design with CSS custom properties (variables)
- 📱 Fully responsive layout (mobile-first approach)
- ♿ Accessible navigation with ARIA attributes
- 🍔 Mobile hamburger menu with smooth transitions
- 🎯 Smooth scrolling and section highlighting
- ⚡ Lightweight and performant (no frameworks required)
- 🎭 Subtle hover effects and transitions
- 📐 Flexbox and CSS Grid layouts

## Project Structure

```
.
├── index.html           # Main HTML structure
├── styles/
│   └── main.css        # Primary stylesheet with all styling
├── scripts/
│   └── main.js         # Navigation toggle and interactions
└── README.md           # Documentation
```

## Design Tokens (CSS Variables)

The design system uses CSS custom properties defined in `:root` for easy customization. All design tokens are defined at the top of `styles/main.css`.

### Color Palette

```css
--color-bg: #f8fafc;              /* Page background */
--color-surface: #ffffff;          /* Card/surface background */
--color-surface-muted: #f1f5f9;    /* Muted surface (hover states) */
--color-primary: #2563eb;          /* Primary brand color (blue) */
--color-primary-dark: #1d4ed8;     /* Darker primary (hover) */
--color-accent: #10b981;           /* Accent color (green) */
--color-text: #0f172a;             /* Primary text color */
--color-text-muted: #475569;       /* Secondary text color */
--color-border: #e2e8f0;           /* Border color */
--color-border-strong: #cbd5f5;    /* Stronger border */
--color-shadow: rgba(15, 23, 42, 0.08); /* Shadow color */
```

### Typography

```css
--font-family-sans: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
--font-size-xs: 0.875rem;    /* Small text */
--font-size-sm: 1rem;        /* Body text */
--font-size-md: 1.125rem;    /* Subheadings */
--font-size-lg: 1.5rem;      /* Section titles */
--font-size-xl: clamp(2rem, 5vw, 2.75rem);      /* Large headings */
--font-size-2xl: clamp(2.5rem, 8vw, 3.5rem);    /* Hero title */
```

### Spacing Scale

```css
--space-3xs: 0.25rem;   /* 4px */
--space-2xs: 0.5rem;    /* 8px */
--space-xs: 0.75rem;    /* 12px */
--space-sm: 1rem;       /* 16px */
--space-md: 1.5rem;     /* 24px */
--space-lg: 2rem;       /* 32px */
--space-xl: 3rem;       /* 48px */
--space-2xl: 4rem;      /* 64px */
```

### Border Radius

```css
--radius-sm: 0.5rem;    /* Buttons, inputs */
--radius-md: 0.75rem;   /* Cards, nav menu */
--radius-lg: 1rem;      /* Large cards */
```

### Other Design Tokens

```css
--shadow-sm: 0 10px 30px var(--color-shadow);
--transition-base: 180ms ease;     /* Quick transitions */
--transition-slow: 280ms ease;     /* Slower transitions */
--container-width: min(72rem, 100% - 2.5rem);
--nav-height: 4.25rem;
```

## Responsive Breakpoints

The portfolio uses a mobile-first approach with the following breakpoints:

- **Base (Mobile)**: < 40rem (640px)
- **Tablet**: ≥ 40rem (640px)
  - Skills grid: 2 columns
  - Projects grid: 2 columns
- **Desktop**: ≥ 48rem (768px)
  - Hero: 2-column layout
  - Navigation: Horizontal menu (hamburger hidden)
  - About: 2-column layout
  - Contact: 2-column layout
- **Large Desktop**: ≥ 64rem (1024px)
  - Skills grid: 4 columns
  - Projects grid: 3 columns

## Customization Guide

### Changing Colors

To customize the color scheme, update the color variables in `styles/main.css`:

```css
:root {
    --color-primary: #your-color;      /* Change primary brand color */
    --color-accent: #your-color;       /* Change accent color */
    /* ... other colors ... */
}
```

For a different color theme, consider these popular palettes:
- **Purple/Pink**: `--color-primary: #8b5cf6; --color-accent: #ec4899;`
- **Orange/Yellow**: `--color-primary: #f97316; --color-accent: #facc15;`
- **Teal/Cyan**: `--color-primary: #14b8a6; --color-accent: #06b6d4;`

### Changing Typography

To use a different font, update the font-family:

```css
:root {
    --font-family-sans: "Your Font", system-ui, sans-serif;
}
```

Then add the font import at the top of `main.css` or in the HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet">
```

### Adjusting Spacing

All spacing uses the consistent spacing scale. To adjust overall spacing:

```css
:root {
    /* Increase for more spacious layout */
    --space-xl: 4rem;
    --space-2xl: 6rem;
}
```

### Customizing Animations

Transition speeds can be adjusted:

```css
:root {
    --transition-base: 250ms ease;  /* Slower base transitions */
    --transition-slow: 400ms ease;  /* Slower animations */
}
```

To disable all animations (for accessibility):

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.001ms !important;
        transition-duration: 0.001ms !important;
    }
}
```

### Modifying Layout

Container width can be adjusted:

```css
:root {
    --container-width: min(60rem, 100% - 2rem);  /* Narrower container */
}
```

## Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels and attributes for navigation
- ✅ Focus-visible states on all interactive elements
- ✅ Sufficient color contrast ratios (WCAG AA compliant)
- ✅ Keyboard navigation support
- ✅ Reduced motion support
- ✅ Screen reader friendly
- ✅ Skip link to main content

## Performance Best Practices

- ✅ No external dependencies or frameworks
- ✅ Minimal CSS and JavaScript (lightweight)
- ✅ CSS variables for consistent theming
- ✅ Efficient selectors and minimal specificity
- ✅ Optimized animations (transform and opacity)
- ✅ Passive event listeners where appropriate

## Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Modern mobile browsers

## JavaScript Features

The `scripts/main.js` file provides:

- **Mobile Menu Toggle**: Hamburger menu functionality with accessible ARIA states
- **Click Outside to Close**: Menu closes when clicking outside
- **Escape Key Support**: Press ESC to close the menu
- **Smooth Scrolling**: Smooth navigation between sections
- **Section Highlighting**: Active navigation link based on scroll position
- **Auto-hiding Header**: Header hides on scroll down, shows on scroll up
- **Form Handling**: Contact form submission (demo functionality)

## Getting Started

1. Clone or download the repository
2. Open `index.html` in a web browser
3. Customize content in `index.html`
4. Adjust design tokens in `styles/main.css`
5. Deploy to your preferred hosting service

## Validation

The code follows web standards:
- ✅ Valid HTML5
- ✅ Valid CSS3
- ✅ ESLint-ready JavaScript

To validate:
- HTML: [W3C Markup Validator](https://validator.w3.org/)
- CSS: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Accessibility: [WAVE Web Accessibility Tool](https://wave.webaim.org/)

## Deployment

This is a static site that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static hosting service

## Future Enhancements

Potential improvements:
- [ ] Add dark mode toggle
- [ ] Include portfolio filtering by technology
- [ ] Add blog section
- [ ] Implement actual form backend
- [ ] Add loading animations
- [ ] Include testimonials section
- [ ] Add resume/CV download button

## License

Free to use for personal and commercial projects.

## Credits

Built with modern web standards and best practices.
