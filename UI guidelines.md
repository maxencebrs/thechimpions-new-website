UI Guidelines for The Chimpions Design System

1. Color Palette & Brand Colors  
Primary Brand Colors:
- Background: bg-[#0A0A23] with soft radial or linear gradient from bottom
- Gradient overlay: from-transparent via-transparent to-[#0C0C3A] (bottom glow)
- White text: text-white – default for primary content
- Purple gradient accent: from-[#9E62FF] to-[#553BBC] – used for CTA buttons and highlights
- Gold accent: text-[#FBD85B] – used for KPIs or attention elements
- Dimmed text: text-[#B0B0B0] – used for secondary info

Interactive States:
- Hover backgrounds: bg-[rgba(255,255,255,0.05)] to bg-[rgba(255,255,255,0.1)]
- CTA hover background: bg-[rgba(158,98,255,0.2)]
- Border hover: border-[rgba(255,255,255,0.2)] or border-[rgba(158,98,255,0.8)]

2. Typography System  
Font Properties:
- Headings: font-[Longsile]
- Body: font-[Pixellari]
- Font weight: font-medium (default)
- Base size: text-base (16px)
- Heading sizes:
  - H1: text-4xl font-bold leading-tight
  - H2: text-2xl font-semibold leading-[1.3]
- Letter spacing: tracking-[0.32px] for buttons or section titles
- Body text line height: leading-snug

Text Sizes:
- Small label: text-sm (for captions, legal)
- Base text: text-base (main content)
- Large heading: text-4xl (hero headline)

3. Layout & Spacing  
Container Structure:
.main-container {
  @apply bg-[#0A0A23] bg-gradient-to-b from-transparent via-transparent to-[#0C0C3A] flex flex-col items-center text-base text-white font-medium px-10 py-12 max-md:px-5 min-h-screen;
}

Spacing Scale:
- Section margin top: mt-12, mt-16, mt-24
- Gap scale: gap-2, gap-4, gap-6
- Mobile spacing: max-md:gap-4, max-md:mt-10

4. Button Styles  
Primary CTA Button (Purple Gradient):
.btn-primary {
  @apply bg-gradient-to-r from-[#9E62FF] to-[#553BBC] text-white rounded-lg px-5 py-3 font-medium tracking-wide transition-all duration-200;
}
.btn-primary:hover {
  @apply shadow-md scale-[1.02];
}

Secondary Button (Outline):
.btn-outline {
  @apply border border-white text-white rounded-md px-4 py-2 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.1)];
}

5. Component Patterns  
Header Layout:
.header {
  @apply flex justify-between items-center px-6 py-4 w-full max-w-screen-xl mx-auto;
}

KPI Box:
.kpi-box {
  @apply flex flex-col items-center justify-center text-white text-center bg-[#1A1A33] px-4 py-6 rounded-lg w-full;
}

FAQ Accordion Item:
.faq-item {
  @apply border-b border-[rgba(255,255,255,0.1)] py-4 cursor-pointer transition-colors;
}
.faq-item:hover {
  @apply bg-[rgba(255,255,255,0.05)];
}

CTA Container:
.cta-container {
  @apply flex flex-col items-center bg-[rgba(32,30,65,1)] border border-dashed border-[rgba(57,53,103,1)] p-6 text-center rounded-lg;
}

6. Image & Icon Guidelines  
Logo Sizing:
- Navbar logo icon: w-[50px] aspect-square
- Main hero logo (if used): w-[400px] aspect-[2]

Icons:
- Social icon size: w-5 h-5
- NFT card icon: w-6 h-6 max-h-[24px]

Image Classes:
.logo-icon {
  @apply object-contain w-[50px];
}
.hero-logo {
  @apply w-[400px] aspect-[2] object-contain;
}

7. Responsive Design  
Breakpoint Strategy:
- Mobile-first with max-md:
- Common responsive classes:
  - max-md:px-4
  - max-md:gap-4
  - max-md:mt-10
  - max-md:flex-col

8. Accessibility & States  
Interactive States:
- Buttons and links use transition-all duration-200
- Disabled: opacity-60 cursor-not-allowed
- All icons and buttons use aria-label
- Use semantic HTML for headings and buttons

9. Animation & Transitions  
Standard Transitions:
.transition-default {
  @apply transition-all duration-200 ease-in-out;
}

Hover States:
.hover-scale {
  @apply hover:scale-[1.02] hover:shadow-md;
}

Use subtle scale or background transitions on buttons and cards for responsiveness and feedback.
