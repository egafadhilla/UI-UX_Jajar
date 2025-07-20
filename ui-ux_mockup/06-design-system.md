# Design System & Style Guide - Pasar Digital AI

## Overview
Comprehensive design system yang mendefinisikan visual identity, color palette, typography, spacing, dan component standards untuk aplikasi Pasar Digital AI.

## Brand Identity

### App Name & Mission
- **Name**: Pasar Digital AI
- **Tagline**: "Platform cerdas untuk pasar tradisional"
- **Mission**: Menghubungkan pasar tradisional dengan teknologi AI modern
- **Target Users**: Pedagang pasar tradisional, pembeli, dan komunitas pasar

### Brand Personality
- **Modern**: Technology-forward tapi tetap accessible
- **Trustworthy**: Reliable untuk daily marketplace needs
- **Helpful**: AI assistant yang genuinely membantu
- **Community-Focused**: Mendukung komunitas pasar lokal

## Color Palette

### Primary Colors
```css
/* Green - Main Brand Color */
--green-50: #f0fdf4    /* Light background, notices */
--green-100: #dcfce7   /* Avatar backgrounds, light elements */
--green-500: #22c55e   /* Focus states, accents */
--green-600: #16a34a   /* Primary buttons, main brand */
--green-700: #15803d   /* Header gradients, dark brand */
```

### Secondary Colors
```css
/* Blue - AI & Technology */
--blue-400: #60a5fa    /* Telegram integration */
--blue-500: #3b82f6    /* WhatsApp integration, AI elements */
--blue-600: #2563eb    /* Chat icons, tech features */

/* Purple - Premium Features */
--purple-600: #9333ea  /* AI assistant gradients, premium */

/* Supporting Colors */
--red-500: #ef4444     /* Notifications, alerts */
--red-600: #dc2626     /* Negative trends, errors */
--orange-500: #f97316  /* RSS feeds, news */
```

### Neutral Colors
```css
/* Gray Scale */
--white: #ffffff       /* Card backgrounds, text on dark */
--gray-50: #f9fafb     /* App background */
--gray-100: #f3f4f6    /* AI message bubbles */
--gray-200: #e5e7eb    /* Borders, dividers */
--gray-300: #d1d5db    /* Input borders */
--gray-400: #9ca3af    /* Inactive icons */
--gray-500: #6b7280    /* Placeholder text */
--gray-600: #4b5563    /* Secondary text */
--gray-700: #374151    /* Tertiary text */
--gray-800: #1f2937    /* Primary text */
```

## Typography

### Font Family
- **Primary**: System fonts (iOS: SF Pro, Android: Roboto, Web: Inter/System)
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Font Scales
```css
/* Heading Sizes */
--text-xs: 12px     /* Bottom nav labels, small info */
--text-sm: 14px     /* Body text, descriptions */
--text-base: 16px   /* Default body text */
--text-lg: 18px     /* Section headers */
--text-xl: 20px     /* Page titles */
--text-2xl: 24px    /* Main app title */

/* Font Weights */
--font-normal: 400  /* Regular text */
--font-semibold: 600 /* Card titles, important text */
--font-bold: 700    /* Page titles, headlines */
```

### Text Hierarchy
1. **Page Titles**: 2xl, bold, primary color
2. **Section Headers**: lg, bold, gray-800
3. **Card Titles**: semibold, gray-800
4. **Body Text**: sm, normal, gray-600
5. **Labels**: xs, normal, gray-500

## Spacing System

### Spacing Scale (Tailwind-based)
```css
--space-1: 4px      /* 0.25rem - Tight spacing */
--space-2: 8px      /* 0.5rem - Small gaps */
--space-3: 12px     /* 0.75rem - Medium gaps */
--space-4: 16px     /* 1rem - Standard spacing */
--space-6: 24px     /* 1.5rem - Large spacing */
--space-8: 32px     /* 2rem - Section spacing */
```

### Layout Spacing
- **Container Padding**: 16px (space-4)
- **Card Padding**: 16px (space-4)
- **Section Gaps**: 24px (space-6)
- **Element Gaps**: 12px (space-3)
- **Button Padding**: 12px vertical, 16px horizontal

## Component Standards

### Cards
```css
.card {
  background: white;
  border-radius: 12px; /* rounded-xl */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); /* shadow-md */
  border: 1px solid #e5e7eb; /* border-gray-200 */
  padding: 16px; /* p-4 */
}
```

### Buttons

#### Primary Button
```css
.btn-primary {
  background: #16a34a; /* green-600 */
  color: white;
  padding: 12px 16px;
  border-radius: 12px; /* rounded-xl */
  font-weight: 600; /* semibold */
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background: #15803d; /* green-700 */
}
```

#### Secondary Button
```css
.btn-secondary {
  background: rgba(255, 255, 255, 0.2); /* white/20 */
  color: white;
  padding: 8px 16px;
  border-radius: 8px; /* rounded-lg */
  font-weight: 600;
}
```

### Input Fields
```css
.input-field {
  padding: 12px 16px;
  border: 1px solid #d1d5db; /* border-gray-300 */
  border-radius: 12px; /* rounded-xl */
  font-size: 16px; /* Prevents zoom on iOS */
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input-field:focus {
  outline: none;
  border-color: #16a34a; /* green-600 */
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1); /* ring-green-500 */
}
```

## Icon Guidelines

### Icon Library
- **Primary**: Lucide React (consistent style)
- **Size Standards**: 
  - Small: 16px (w-4 h-4)
  - Medium: 20px (w-5 h-5)
  - Large: 24px (w-6 h-6)
  - XL: 32px (w-8 h-8)

### Icon Usage
- **Navigation**: 20px icons dengan labels
- **Features**: 32px icons untuk feature cards
- **Actions**: 20px icons untuk buttons
- **Status**: 16px icons untuk inline status

### Color Application
- **Active States**: Green-600
- **Inactive States**: Gray-400
- **Feature Icons**: Varied colors (blue, purple, red)
- **System Icons**: Gray-600

## Layout Principles

### Mobile-First Design
- **Minimum Touch Targets**: 44px x 44px
- **Safe Areas**: Respect device safe areas
- **Thumb Navigation**: Important actions within thumb reach
- **Content Hierarchy**: Clear visual hierarchy

### Grid System
- **Container**: Full width dengan padding
- **Cards**: Full width dalam container
- **Quick Actions**: 2-column grid
- **Lists**: Single column, full width

### Responsive Breakpoints
```css
/* Mobile First */
--mobile: 0px       /* Default, mobile design */
--tablet: 768px     /* Tablet landscape */
--desktop: 1024px   /* Desktop screens */
```

## Animation Standards

### Transition Durations
```css
--transition-fast: 150ms     /* Quick feedback */
--transition-normal: 200ms   /* Standard transitions */
--transition-slow: 300ms     /* Page transitions */
```

### Easing Functions
```css
--ease-out: cubic-bezier(0, 0, 0.2, 1)      /* Natural deceleration */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1) /* Smooth both ways */
```

### Common Animations
- **Button Press**: Scale(0.95) + opacity(0.8)
- **Card Hover**: Shadow increase
- **Page Transition**: Fade in/out
- **Loading States**: Skeleton animation

## Accessibility Standards

### Color Contrast
- **AA Standard**: Minimum 4.5:1 contrast ratio
- **AAA Preferred**: 7:1 contrast ratio where possible
- **Color Blindness**: Don't rely solely on color for meaning

### Touch Targets
- **Minimum Size**: 44px x 44px
- **Spacing**: 8px minimum between targets
- **Hit Area**: Larger than visual element

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Descriptive labels untuk interactive elements
- **Focus Management**: Logical tab order
- **Alt Text**: Descriptive alt text untuk images/icons

## Implementation Guidelines

### CSS-in-JS (Styled Components/Emotion)
```javascript
const theme = {
  colors: {
    primary: '#16a34a',
    secondary: '#3b82f6',
    background: '#f9fafb',
    surface: '#ffffff',
    text: {
      primary: '#1f2937',
      secondary: '#4b5563',
      muted: '#6b7280'
    }
  },
  spacing: [0, 4, 8, 12, 16, 24, 32, 48, 64],
  borderRadius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px'
  }
};
```

### Tailwind Configuration
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d'
        }
      }
    }
  }
};
```

## Quality Assurance

### Design Checklist
- [ ] Color contrast meets AA standards
- [ ] Touch targets are minimum 44px
- [ ] Text is readable at various sizes
- [ ] Interactive elements have clear states
- [ ] Loading states are considered
- [ ] Error states are designed
- [ ] Empty states are handled

### Testing Requirements
- [ ] Multiple device sizes
- [ ] Different screen densities
- [ ] Light and dark environments
- [ ] One-handed usage scenarios
- [ ] Accessibility tools testing
- [ ] Performance impact assessment
