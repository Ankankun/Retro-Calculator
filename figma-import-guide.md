# 🎮 Figma Import Guide - Retro 8-bit Design System

## 📁 Files Created
1. **`design-tokens.json`** - Complete design token file for Figma import
2. **`retro-8bit-style-guide.md`** - Detailed visual specifications and measurements
3. **`figma-import-guide.md`** - This import guide

---

## 🔧 How to Import Design Tokens into Figma

### Step 1: Install Figma Plugin
Choose one of these popular token import plugins:

**Recommended: Figma Tokens (Tokens Studio)**
1. Go to Figma → Plugins → Browse all plugins
2. Search for "Figma Tokens" 
3. Install the plugin by Jan Six

**Alternative Options:**
- Design Tokens (by Thomas Lowry)
- Token Studio for Figma
- Variables Importer

### Step 2: Import the Token File
1. Open your Figma file
2. Run the Figma Tokens plugin (Plugins → Figma Tokens)
3. Click "Import" or "Load from File"
4. Select the `design-tokens.json` file
5. Choose import settings:
   - ✅ Import Colors as Color Styles
   - ✅ Import Typography as Text Styles  
   - ✅ Import Effects as Effect Styles
   - ✅ Create Variables for spacing/sizing

### Step 3: What Gets Imported

#### ✅ Colors (Imported as Color Styles)
- **Primitive Colors**: Black, White, Cyan, Green, Pink, Blue, Gray scales
- **Semantic Colors**: Background, Border, Text color aliases
- **Button Colors**: All button state colors with hover/active variants

#### ✅ Typography (Imported as Text Styles)
- **Font Family**: Press Start 2P (you'll need to install this font)
- **Font Sizes**: xs (10px) through 2xl (20px)
- **Text Styles**: Pre-configured combinations

#### ✅ Effects (Imported as Effect Styles)  
- **Neon Glows**: Blue, Pink, Green neon glow effects
- **Drop Shadows**: Multi-layer shadow effects for each neon color

#### ✅ Variables (Imported as Figma Variables)
- **Spacing**: 4px, 8px, 12px, 16px, 24px, 32px
- **Border Radius**: 0px, 2px, 6px, 8px  
- **Border Width**: 1px, 2px

---

## 🎨 After Import: Manual Component Creation

### What You Still Need to Build:

#### 1. Calculator Container
- **Dimensions**: 384px max width
- **Background**: Black with pixel grid pattern
- **Border**: 2px solid cyan with 8px border radius
- **Apply**: Imported color styles and spacing variables

#### 2. Button Components

**Number Button Template:**
- **Size**: Use spacing variable (16px padding)
- **Background**: Use imported blue-600 color style
- **Text**: Apply pixel font text style (12px)
- **Effect**: Apply blue neon glow effect style
- **Border Radius**: 0px (sharp edges)

**Operator Button Template:**
- Same as number button but with:
- **Background**: Pink-600 color style
- **Effect**: Pink neon glow effect style

**Equals Button Template:**
- Same structure with:
- **Background**: Green-500 color style
- **Text Color**: Black (instead of white)
- **Effect**: Green neon glow effect style

#### 3. Display Component
- **Background**: Black color style
- **Border**: 1px green-400 color style
- **Text**: Green-400 color style with pixel font
- **Dual rows**: Operation (10px) + Main (16px) text sizes

#### 4. Special Effects to Add Manually

**Pixel Grid Background:**
- Create 20px × 20px grid pattern
- Use cyan color at 3% opacity
- Apply to main container background

**CRT Scanlines:**
- Create horizontal line pattern (4px height)
- Use cyan color at 2% opacity  
- Apply to display area as overlay

---

## 📋 Component Creation Checklist

### ✅ Setup Phase
- [ ] Install Press Start 2P font in Figma
- [ ] Import design tokens using plugin
- [ ] Verify all color styles imported correctly
- [ ] Test effect styles on sample shapes

### ✅ Container Components  
- [ ] Create main calculator container (384px wide)
- [ ] Add pixel grid background pattern
- [ ] Create header component with title/tag layout
- [ ] Create display container with CRT scanlines
- [ ] Create button grid container (4 columns, 12px gap)

### ✅ Interactive Components
- [ ] Create number button component with blue neon
- [ ] Create operator button component with pink neon  
- [ ] Create equals button component with green neon
- [ ] Create clear button component (gray, no neon)
- [ ] Add hover/active states to all buttons

### ✅ Display Components
- [ ] Create dual-line display component
- [ ] Style operation display (small, 50% opacity)
- [ ] Style main display (large, full opacity)
- [ ] Add proper text overflow handling

### ✅ Final Details
- [ ] Create clock footer component
- [ ] Add responsive behavior for mobile/desktop
- [ ] Test all components with imported styles
- [ ] Create component variants for different states

---

## 🎯 Pro Tips for Figma Recreation

### Color Application
- Use **Color Styles** dropdown for all fills
- Reference imported color names for consistency
- Don't manually type hex codes - use the imported styles

### Typography
- Always use **Text Styles** dropdown 
- Apply `.pixel-font` equivalent text style first
- Adjust size using imported font size variables

### Effects  
- Apply **Effect Styles** from right panel
- Layer multiple effects for complex neon glows
- Use effect opacity to fine-tune intensity

### Layout
- Use **Auto Layout** for button grids and containers
- Set gaps using imported spacing variables
- Use constraints for responsive behavior

### Component Organization
```
🎮 Retro Calculator/
  📁 Atoms/
    - Button (Number)
    - Button (Operator) 
    - Button (Execute)
    - Button (Clear)
    - Display Text
  📁 Molecules/
    - Calculator Display
    - Button Grid
    - Header Bar
    - Footer Clock
  📁 Organisms/
    - Calculator (Main)
```

---

## 🚀 Expected Result

After following this guide, you'll have:
- ✅ Complete color palette as Figma Color Styles
- ✅ Typography system as Text Styles  
- ✅ Neon glow effects as Effect Styles
- ✅ Spacing/sizing as Variables
- ✅ Reusable button components with proper states
- ✅ Authentic retro 8-bit aesthetic matching the original design

The imported tokens will ensure visual consistency and make it easy to maintain the design system as you create new components or variations.

---

**Need help?** Refer to the detailed `retro-8bit-style-guide.md` for exact measurements, colors, and specifications.