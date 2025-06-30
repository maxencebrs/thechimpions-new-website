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

Typography Extensions:
.text-gradient {
  @apply bg-gradient-to-r from-[#9E62FF] to-[#553BBC] bg-clip-text text-transparent;
}

.link-primary {
  @apply text-[#9E62FF] hover:text-[#553BBC] transition-colors underline;
}

.code-block {
  @apply bg-[#1A1A33] border border-[rgba(255,255,255,0.1)] rounded-lg p-4 font-mono text-sm;
}

3. Layout & Spacing  
Container Structure:
.main-container {
  @apply bg-[#0A0A23] bg-gradient-to-b from-transparent via-transparent to-[#0C0C3A] flex flex-col items-center text-base text-white font-medium px-10 py-12 max-md:px-5 min-h-screen;
}

Spacing Scale:
- Section margin top: mt-12, mt-16, mt-24
- Gap scale: gap-2, gap-4, gap-6
- Mobile spacing: max-md:gap-4, max-md:mt-10

Extended Spacing Utilities:
.space-xs { @apply space-y-1; }
.space-sm { @apply space-y-2; }
.space-md { @apply space-y-4; }
.space-lg { @apply space-y-6; }
.space-xl { @apply space-y-8; }

Layout Utilities:
.section-padding {
  @apply py-12 md:py-16 lg:py-20;
}
.container-narrow {
  @apply max-w-2xl mx-auto px-4;
}
.container-wide {
  @apply max-w-7xl mx-auto px-4;
}

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

Button Variations:
.btn-small {
  @apply px-3 py-1.5 text-sm;
}
.btn-large {
  @apply px-8 py-4 text-lg;
}
.btn-disabled {
  @apply opacity-60 cursor-not-allowed;
}

5. Form Elements & Inputs  
Form Inputs:
.form-input {
  @apply bg-[#1A1A33] border border-[rgba(255,255,255,0.2)] text-white rounded-md px-4 py-2 focus:border-[#9E62FF] focus:outline-none transition-colors;
}

.form-textarea {
  @apply bg-[#1A1A33] border border-[rgba(255,255,255,0.2)] text-white rounded-md px-4 py-2 focus:border-[#9E62FF] focus:outline-none transition-colors resize-vertical;
}

.form-select {
  @apply bg-[#1A1A33] border border-[rgba(255,255,255,0.2)] text-white rounded-md px-4 py-2 focus:border-[#9E62FF] focus:outline-none transition-colors;
}

Form Validation States:
.input-error {
  @apply border-red-500;
}
.input-success {
  @apply border-green-500;
}
.error-message {
  @apply text-red-400 text-sm mt-2;
}

6. Loading & Error States  
Loading Spinner:
.loading-spinner {
  @apply w-6 h-6 border-2 border-[rgba(255,255,255,0.2)] border-t-[#9E62FF] rounded-full animate-spin;
}

Loading Skeleton:
.skeleton {
  @apply bg-[rgba(255,255,255,0.1)] animate-pulse rounded;
}

Empty State:
.empty-state {
  @apply text-center py-12 text-[#B0B0B0];
}

Error State:
.error-state {
  @apply text-center py-12 text-red-400;
}

7. Modal & Overlay Components  
Modal Overlay:
.modal-overlay {
  @apply fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50;
}

Modal Content:
.modal-content {
  @apply bg-[#1A1A33] border border-[rgba(255,255,255,0.2)] rounded-lg p-6 max-w-md w-full mx-4;
}

Modal Header:
.modal-header {
  @apply flex justify-between items-center mb-4;
}

Modal Close:
.modal-close {
  @apply text-[#B0B0B0] hover:text-white transition-colors;
}

Tooltip:
.tooltip {
  @apply absolute bg-[#1A1A33] border border-[rgba(255,255,255,0.2)] rounded px-2 py-1 text-sm text-white;
}

8. Navigation Components  
Breadcrumbs:
.breadcrumb {
  @apply flex items-center space-x-2 text-sm text-[#B0B0B0];
}
.breadcrumb-item {
  @apply hover:text-white transition-colors;
}
.breadcrumb-separator {
  @apply text-[#B0B0B0];
}

Pagination:
.pagination {
  @apply flex items-center space-x-2;
}
.pagination-item {
  @apply px-3 py-2 border border-[rgba(255,255,255,0.2)] rounded hover:bg-[rgba(255,255,255,0.05)];
}
.pagination-active {
  @apply bg-[#9E62FF] border-[#9E62FF] text-white;
}

Tabs:
.tab-container {
  @apply border-b border-[rgba(255,255,255,0.1)];
}
.tab-item {
  @apply px-4 py-2 border-b-2 border-transparent hover:border-[#9E62FF] transition-colors;
}
.tab-active {
  @apply border-[#9E62FF] text-white;
}

9. Data Display Components  
Tables:
.table {
  @apply w-full border-collapse;
}
.table-header {
  @apply bg-[#1A1A33] text-left p-4 border-b border-[rgba(255,255,255,0.1)];
}
.table-cell {
  @apply p-4 border-b border-[rgba(255,255,255,0.05)];
}

Badges:
.badge {
  @apply inline-flex items-center px-2 py-1 rounded-full text-xs font-medium;
}
.badge-primary {
  @apply bg-[#9E62FF] text-white;
}
.badge-secondary {
  @apply bg-[rgba(255,255,255,0.1)] text-white;
}
.badge-success {
  @apply bg-green-500 text-white;
}
.badge-warning {
  @apply bg-yellow-500 text-white;
}
.badge-error {
  @apply bg-red-500 text-white;
}

Progress Bar:
.progress-bar {
  @apply w-full bg-[rgba(255,255,255,0.1)] rounded-full h-2;
}
.progress-fill {
  @apply bg-gradient-to-r from-[#9E62FF] to-[#553BBC] h-2 rounded-full transition-all duration-300;
}

Lists:
.list-item {
  @apply py-2 border-b border-[rgba(255,255,255,0.05)] last:border-b-0;
}
.list-bullet {
  @apply list-disc list-inside text-[#B0B0B0];
}

10. Component Patterns  
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

Card Variations:
.card-featured {
  @apply bg-gradient-to-br from-[#1A1A33] to-[#2A2A43] border border-[#9E62FF] shadow-lg;
}
.card-compact {
  @apply bg-[#1A1A33] p-4 rounded-lg border border-[rgba(255,255,255,0.1)];
}
.card-interactive {
  @apply bg-[#1A1A33] p-6 rounded-lg border border-[rgba(255,255,255,0.1)] cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg;
}

11. Grid & Layout Systems  
Grid Patterns:
.grid-2 {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}
.grid-3 {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}
.grid-4 {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6;
}

Masonry Layout:
.masonry {
  @apply columns-1 md:columns-2 lg:columns-3 gap-6;
}
.masonry-item {
  @apply break-inside-avoid mb-6;
}

Flexbox Utilities:
.flex-center {
  @apply flex items-center justify-center;
}
.flex-between {
  @apply flex items-center justify-between;
}
.flex-col-center {
  @apply flex flex-col items-center;
}

12. Image & Icon Guidelines  
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

Icon Utilities:
.icon-sm { @apply w-4 h-4; }
.icon-md { @apply w-6 h-6; }
.icon-lg { @apply w-8 h-8; }
.icon-xl { @apply w-12 h-12; }

13. Responsive Design  
Breakpoint Strategy:
- Mobile-first with max-md:
- Common responsive classes:
  - max-md:px-4
  - max-md:gap-4
  - max-md:mt-10
  - max-md:flex-col

Responsive Typography:
.text-responsive {
  @apply text-lg md:text-xl lg:text-2xl;
}

Responsive Spacing:
.space-responsive {
  @apply space-y-4 md:space-y-6 lg:space-y-8;
}

14. Accessibility & States  
Interactive States:
- Buttons and links use transition-all duration-200
- Disabled: opacity-60 cursor-not-allowed
- All icons and buttons use aria-label
- Use semantic HTML for headings and buttons

Focus States:
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-[#9E62FF] focus:ring-offset-2 focus:ring-offset-[#0A0A23];
}

Screen Reader Support:
.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0;
}

Skip Links:
.skip-link {
  @apply absolute -top-10 left-6 bg-[#9E62FF] text-white px-4 py-2 rounded focus:top-6;
}

Keyboard Navigation:
.keyboard-focus {
  @apply focus:outline-none focus:ring-2 focus:ring-[#9E62FF];
}

15. Animation & Transitions  
Standard Transitions:
.transition-default {
  @apply transition-all duration-200 ease-in-out;
}

Hover States:
.hover-scale {
  @apply hover:scale-[1.02] hover:shadow-md;
}

Page Transitions:
.page-enter {
  @apply opacity-0 transform translate-y-4;
}
.page-enter-active {
  @apply opacity-100 transform translate-y-0 transition-all duration-300;
}

Loading Animations:
.pulse {
  @apply animate-pulse;
}
.bounce {
  @apply animate-bounce;
}
.spin {
  @apply animate-spin;
}

Use subtle scale or background transitions on buttons and cards for responsiveness and feedback.

16. Implementation Guidelines  
CSS Class Naming:
- Use BEM methodology for complex components
- Prefix utility classes with component name
- Use semantic class names

Component Structure:
- Keep components modular and reusable
- Use composition over inheritance
- Maintain consistent prop interfaces

Performance:
- Use CSS custom properties for theming
- Optimize animations with transform and opacity
- Minimize layout thrashing

Testing:
- Test all interactive states
- Verify accessibility compliance
- Check responsive behavior across devices 