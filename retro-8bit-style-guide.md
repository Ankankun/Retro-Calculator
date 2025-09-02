# 🎮 Retro 8-bit Calculator - Visual Style Guide

## 📋 Table of Contents
- [Color System](#color-system)
- [Typography](#typography)  
- [Layout & Spacing](#layout--spacing)
- [Component Specifications](#component-specifications)
- [Effects & Styling](#effects--styling)
- [Background Patterns](#background-patterns)
- [Responsive Breakpoints](#responsive-breakpoints)

---

## 🎨 Color System

### Primary Palette
```css
/* Base Colors */
--retro-black: #000000       /* Main background */
--retro-white: #FFFFFF       /* Button text */
--neon-cyan: #00FFFF         /* Primary UI, borders, titles */
--neon-green: #32FF32        /* Display text, success states */
--neon-pink: #FF1493         /* Operator highlights */
```

### Button Colors
```css
/* Number Buttons */
--button-blue: #2563EB       /* bg-blue-600 */
--button-blue-hover: #1D4ED8 /* bg-blue-700 */
--button-blue-active: #1E40AF /* bg-blue-800 */

/* Operator Buttons */
--button-pink: #DC2626       /* bg-pink-600 */
--button-pink-hover: #B91C1C /* bg-pink-700 */
--button-pink-active: #991B1B /* bg-pink-800 */

/* Execute Button */
--button-green: #16A34A      /* bg-green-500 */
--button-green-hover: #15803D /* bg-green-400 */
--button-green-active: #166534 /* bg-green-600 */

/* Clear Button */
--button-gray: #1F2937       /* bg-gray-800 */
--button-gray-hover: #374151 /* bg-gray-700 */
--button-gray-active: #4B5563 /* bg-gray-600 */
--button-gray-border: #4B5563 /* border-gray-600 */
```

### Surface Colors
```css
--surface-dark: #111827      /* bg-gray-900 - headers, displays */
--text-secondary: #9CA3AF    /* bg-gray-400 - secondary text */
--text-muted: #6B7280        /* bg-gray-500 - clock, tags */
```

---

## ✏️ Typography

### Font Family
- **Primary Font**: `'Press Start 2P', monospace`
- **Google Fonts Import**: `@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap')`

### Font Sizes & Usage
```css
/* Size Scale */
--text-xs: 10px    /* Tags, secondary info, operation display */
--text-sm: 12px    /* Button labels, clock */
--text-base: 14px  /* Default size */
--text-lg: 16px    /* Main display text */
--text-xl: 18px    /* Large display (responsive) */
--text-2xl: 20px   /* Headings */
```

### Typography Rules
- **ALL TEXT MUST USE**: `.pixel-font` class
- **CASING**: Use UPPERCASE for headers and labels
- **SPACING**: Letters naturally spaced by pixel font
- **LINE HEIGHT**: Use default (inherit) for pixel font accuracy

---

## 📐 Layout & Spacing

### Container Specifications
```css
/* Main Calculator Container */
.calculator-container {
  width: 100%;
  max-width: 384px; /* max-w-sm */
  background: #000000;
  border: 2px solid #00FFFF;
  border-radius: 8px; /* rounded-lg */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
  overflow: hidden;
}
```

### Spacing System
```css
--spacing-1: 4px     /* p-1 */
--spacing-2: 8px     /* p-2 */
--spacing-3: 12px    /* p-3, gap-3 */
--spacing-4: 16px    /* p-4 - standard padding */
--spacing-6: 24px    /* p-6 - display padding */
--spacing-8: 32px    /* p-8 - section spacing */
```

### Grid System
```css
/* Button Grid */
.button-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px; /* gap-3 */
  padding: 16px; /* p-4 */
}

/* Zero Button Span */
.button-zero {
  grid-column: span 2; /* col-span-2 */
}
```

---

## 🔧 Component Specifications

### Header Component
```css
.calculator-header {
  background: #111827; /* bg-gray-900 */
  padding: 16px; /* p-4 */
  border-bottom: 1px solid #00FFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px; /* text-xs */
  color: #00FFFF;
}

.header-tag {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px; /* text-xs */
  color: #9CA3AF;
  opacity: 0.6;
}
```

### Display Component
```css
.calculator-display-container {
  background: #111827; /* bg-gray-900 */
  padding: 24px; /* p-6 */
  border-bottom: 2px solid #00FFFF;
  /* CRT scanlines applied here */
}

.calculator-display {
  background: #000000;
  border: 1px solid #32FF32;
  border-radius: 6px; /* rounded-md */
  padding: 16px; /* p-4 */
  gap: 8px; /* space-y-2 */
}

.operation-display {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px; /* text-xs */
  color: #32FF32;
  opacity: 0.5;
  height: 16px; /* h-4 */
  text-align: right;
  overflow: hidden;
}

.main-display {
  font-family: 'Press Start 2P', monospace;
  font-size: 16px; /* text-lg */
  color: #32FF32;
  text-align: right;
  overflow: hidden;
}

/* Responsive Display Text */
@media (min-width: 640px) {
  .main-display {
    font-size: 18px; /* sm:text-xl */
  }
}
```

### Button Components

#### Number Buttons
```css
.button-number {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px; /* text-sm */
  background: #2563EB; /* bg-blue-600 */
  color: #FFFFFF;
  padding: 16px; /* p-4 */
  border-radius: 0; /* rounded-none */
  border: none;
  transition: all 75ms; /* duration-75 */
  
  /* Neon glow effect */
  box-shadow: 
    0 0 3px rgba(0, 255, 255, 0.6),
    0 0 6px rgba(0, 255, 255, 0.3);
  border: 1px solid rgba(0, 255, 255, 0.8);
}

.button-number:hover {
  background: #1D4ED8; /* hover:bg-blue-700 */
}

.button-number:active {
  background: #1E40AF; /* active:bg-blue-800 */
}
```

#### Operator Buttons
```css
.button-operator {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px; /* text-sm */
  background: #DC2626; /* bg-pink-600 */
  color: #FFFFFF;
  padding: 16px; /* p-4 */
  border-radius: 0; /* rounded-none */
  transition: all 75ms; /* duration-75 */
  
  /* Pink neon glow effect */
  box-shadow: 
    0 0 3px rgba(255, 20, 147, 0.6),
    0 0 6px rgba(255, 20, 147, 0.3);
  border: 1px solid rgba(255, 20, 147, 0.8);
}

.button-operator:hover {
  background: #B91C1C; /* hover:bg-pink-700 */
}

.button-operator:active {
  background: #991B1B; /* active:bg-pink-800 */
}
```

#### Equals Button  
```css
.button-equals {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px; /* text-sm */
  background: #16A34A; /* bg-green-500 */
  color: #000000; /* text-black */
  padding: 16px; /* p-4 */
  border-radius: 0; /* rounded-none */
  transition: all 75ms; /* duration-75 */
  
  /* Green neon glow effect */
  box-shadow: 
    0 0 3px rgba(50, 255, 50, 0.6),
    0 0 6px rgba(50, 255, 50, 0.3);
  border: 1px solid rgba(50, 255, 50, 0.8);
}

.button-equals:hover {
  background: #15803D; /* hover:bg-green-400 */
}

.button-equals:active {
  background: #166534; /* active:bg-green-600 */
}
```

#### Clear Button
```css
.button-clear {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px; /* text-sm */
  background: #1F2937; /* bg-gray-800 */
  color: #FFFFFF;
  padding: 16px; /* p-4 */
  border-radius: 0; /* rounded-none */
  border: 2px solid #4B5563; /* border-2 border-gray-600 */
  transition: all 75ms; /* duration-75 */
}

.button-clear:hover {
  background: #374151; /* hover:bg-gray-700 */
}

.button-clear:active {
  background: #4B5563; /* active:bg-gray-600 */
}
```

### Clock Component
```css
.calculator-clock-container {
  background: #111827; /* bg-gray-900 */
  padding: 12px; /* p-3 */
  border-top: 1px solid #00FFFF;
}

.calculator-clock {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px; /* text-xs */
  color: #6B7280; /* text-gray-500 */
  opacity: 0.7;
  text-align: center;
}
```

---

## ✨ Effects & Styling

### Neon Glow Effects
```css
/* Blue Neon (Primary Elements) */
.neon-glow-blue {
  box-shadow: 
    0 0 3px rgba(0, 255, 255, 0.6),
    0 0 6px rgba(0, 255, 255, 0.3);
  border: 1px solid rgba(0, 255, 255, 0.8);
}

/* Pink Neon (Operators) */
.neon-glow-pink {
  box-shadow: 
    0 0 3px rgba(255, 20, 147, 0.6),
    0 0 6px rgba(255, 20, 147, 0.3);
  border: 1px solid rgba(255, 20, 147, 0.8);
}

/* Green Neon (Actions) */
.neon-glow-green {
  box-shadow: 
    0 0 3px rgba(50, 255, 50, 0.6),
    0 0 6px rgba(50, 255, 50, 0.3);
  border: 1px solid rgba(50, 255, 50, 0.8);
}
```

### CRT Scanlines Effect
```css
.crt-scanlines {
  position: relative;
  overflow: hidden;
}

.crt-scanlines::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    transparent 50%, 
    rgba(0, 255, 255, 0.02) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 1;
}
```

---

## 📱 Background Patterns

### Pixel Grid Background
```css
.pixel-grid-bg {
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  background-color: #000000;
}
```

### Main App Background
```css
.app-background {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px; /* p-4 */
}
```

---

## 📱 Responsive Breakpoints

### Mobile First Approach
```css
/* Base (Mobile): < 640px */
.retro-heading {
  font-size: 14px; /* text-base */
}

.main-display {
  font-size: 16px; /* text-lg */
}

/* Small (sm): ≥ 640px */
@media (min-width: 640px) {
  .retro-heading {
    font-size: 16px; /* sm:text-lg */
  }
  
  .main-display {
    font-size: 18px; /* sm:text-xl */
  }
}

/* Medium (md): ≥ 768px */
@media (min-width: 768px) {
  .retro-heading {
    font-size: 18px; /* md:text-xl */
  }
}
```

---

## 📏 Exact Measurements Summary

### Container Dimensions
- **Max Width**: 384px (`max-w-sm`)
- **Grid**: 4 columns with 12px gaps
- **Button Size**: 16px padding on all sides
- **Border Width**: 2px for main containers, 1px for displays

### Typography Scale
- **Extra Small**: 10px (tags, operation display)  
- **Small**: 12px (buttons, clock)
- **Large**: 16px (main display)
- **Extra Large**: 18px+ (responsive main display)

### Color Opacity Values
- **Grid Overlay**: 3% opacity
- **Operation Display**: 50% opacity  
- **Clock Text**: 70% opacity
- **Header Tag**: 60% opacity
- **CRT Scanlines**: 2% opacity

### Animation Timing
- **Transition Duration**: 75ms for all interactions
- **Hover/Active States**: Instant color changes

---

## 🎯 Implementation Notes

1. **Always use `.pixel-font` class** for any text element
2. **Sharp edges only** - use `border-radius: 0` for buttons
3. **Consistent spacing** - stick to the 4px base spacing scale
4. **Neon effects** - apply to interactive elements only
5. **Grid background** - use on full viewport container only
6. **CRT scanlines** - apply to display areas only
7. **Typography** - UPPERCASE for labels, normal case for data

This style guide provides pixel-perfect specifications for recreating the retro 8-bit calculator aesthetic in any design tool or development environment.