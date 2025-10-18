# Design Guidelines: Acadify School ERP Website

## Design Approach

**Selected Approach:** Reference-Based Design with B2B SaaS Influence
Drawing inspiration from enterprise SaaS platforms like Linear, Notion, and Stripe, combined with Acadify Solution's established brand identity. This creates a professional, trustworthy aesthetic that demonstrates technical excellence while maintaining accessibility for educational institutions.

**Design Rationale:** School ERP software requires a balance of professional credibility and user-friendly accessibility. The design should communicate technical sophistication to decision-makers (principals, administrators) while being approachable for daily users (teachers, staff).

---

## Core Design Elements

### A. Color Palette

**Primary Colors (Light Mode):**
- Primary Blue: 215 85% 45% (Acadify's signature blue - headers, CTAs, key elements)
- Deep Navy: 220 40% 25% (text, navigation, professional elements)
- Light Background: 0 0% 98% (page background)
- White: 0 0% 100% (cards, sections)

**Accent Colors:**
- Success Green: 145 65% 45% (positive indicators, achievements)
- Warning Orange: 25 85% 55% (highlights, important callouts)
- Soft Gray: 220 10% 65% (borders, dividers, secondary text)

**Dark Mode (if implemented):**
- Background: 220 25% 12%
- Cards: 220 20% 18%
- Text: 0 0% 95%

### B. Typography

**Font Stack:**
```
Primary: 'Inter', 'Segoe UI', system-ui, sans-serif (body text, UI elements)
Headings: 'Poppins', 'Inter', sans-serif (bold, impactful headlines)
```

**Type Scale:**
- Hero Headline: 3.5rem (desktop) / 2.25rem (mobile), Bold 700
- Section Headers: 2.5rem (desktop) / 1.75rem (mobile), SemiBold 600
- Subheadings: 1.5rem, Medium 500
- Body Text: 1rem, Regular 400, line-height 1.6
- Small Text: 0.875rem (captions, labels)

### C. Layout System

**Spacing Units:** Use Bootstrap's spacing utilities consistently - focus on 2, 3, 4, 5, 6 units (16px, 24px, 32px, 40px, 48px increments)

**Grid Structure:**
- Container max-width: 1320px (Bootstrap's xxl breakpoint)
- Section padding: py-5 (80px desktop) / py-4 (48px mobile)
- Card/Component spacing: 24px-32px gaps between elements
- Consistent 16px-24px internal padding for cards

**Responsive Breakpoints:**
- Mobile: < 768px (single column, stacked)
- Tablet: 768px - 991px (2 columns for features)
- Desktop: 992px+ (3-4 columns for modules/features)

### D. Component Library

**Navigation Bar:**
- Fixed top, white background with subtle shadow on scroll
- Logo left (Acadify branding), menu items center, CTA button right
- Height: 70px desktop / 60px mobile
- Transparent to solid white transition on scroll

**Hero Section:**
- Full-width, gradient background (215 85% 45% to 220 70% 55%)
- Large hero image/illustration on right (desktop) / stacked (mobile)
- Prominent headline + subtext + dual CTA buttons
- Statistics bar beneath hero (125+ Schools, 180k+ Students displayed as badges)
- Height: 85vh desktop / auto mobile

**Feature Cards:**
- White cards with subtle shadow (0 4px 20px rgba(0,0,0,0.08))
- Icon at top (64px, primary blue background circle)
- Title (1.25rem, semibold), description (1rem, gray text)
- Hover: lift effect (transform translateY(-4px), stronger shadow)
- 3 columns desktop / 2 tablet / 1 mobile

**Module Showcase Grid:**
- Compact pill-style badges for 40+ modules
- White background, gray border, hover state changes to primary blue
- Display as responsive grid with even spacing
- Click expands to modal with detailed module information

**Statistics Section:**
- Large numbers (3rem, bold, primary blue) with labels beneath
- 6 columns desktop / 3 tablet / 2 mobile
- Light background section for contrast

**Testimonial Cards:**
- Card format with quote icon, testimonial text, school name
- 5-star rating display (gold stars)
- Carousel on mobile, grid on desktop
- Subtle background (light gray)

**Pricing Tables:**
- 3-column comparison table with highlighted "Popular" plan
- Clear feature checkmarks (green), crosses (red) for comparison
- Prominent pricing (₹990/month format, large text)
- CTA button at bottom of each column

**Footer:**
- Dark background (deep navy 220 40% 25%)
- 4 columns: About, Quick Links, Modules, Contact
- Social media icons, copyright, trust badges
- Newsletter signup form with inline button

**Buttons:**
- Primary: Solid blue background, white text, rounded corners (8px)
- Secondary: White background, blue border, blue text
- Sizes: Large (16px padding) for CTAs, Medium (12px) for standard actions
- Hover: Slight darken + lift effect

**Forms:**
- Clean input fields with border, focus state (blue border)
- Floating labels or top-aligned labels
- Validation states (red for errors, green for success)
- Demo request form: Name, Email, Phone, School Name, Message

---

## Images & Visual Assets

### Required Images:

**1. Hero Section Image:**
- Modern classroom/school dashboard illustration showing ERP interface
- Placement: Right side of hero (desktop), full-width below headline (mobile)
- Style: Clean, modern, professional - can be isometric illustration or real product screenshot
- Size: 600x500px minimum, transparent background preferred

**2. Mobile App Mockups:**
- Parent app and Staff app screenshots (actual UI or mockups)
- Display in phone frames (iPhone/Android mockup templates)
- Carousel display showing 6-8 key screens
- Placement: Dedicated "Mobile & Web Solutions" section

**3. Dashboard Screenshots:**
- Web portal screenshots showing: Exam planner, Fee management, Attendance, Student performance
- Clean, professional UI screenshots
- Display in browser mockup frames or clean shadow cards
- 8-10 screenshots in total

**4. School Logos (Testimonials):**
- Client school logos for testimonial section
- Placeholder: Use generic school emblems if actual logos unavailable
- Displayed alongside testimonial quotes

**5. Feature Icons:**
- Use Bootstrap Icons or Font Awesome for module/feature icons
- 64px size, primary blue color
- Icons for: Students, Fees, Exams, Staff, Transport, etc.

**6. Background Elements:**
- Subtle gradient overlays for sections
- Abstract geometric shapes (circles, lines) in brand colors
- Light pattern textures for section backgrounds (very subtle)

---

## Page-Specific Guidelines

**Home Page:** Hero + Statistics + Features Overview (6 key features) + Mobile Apps Preview + Why Acadify (3 reasons) + Testimonials + CTA Section

**Features Page:** Feature grid displaying all major capabilities with icons, descriptions, and benefit statements

**Modules Page:** Comprehensive grid of all 40+ modules with search/filter functionality, clicking opens modal with detailed info

**Pricing Page:** 3-tier pricing comparison table + FAQ accordion + feature comparison matrix + money-back guarantee badge

**Why Acadify Page:** 16 reasons grid (from "Why Ireava" content), each with icon + title + description

**Mobile Apps Page:** Dual showcase (Parent App + Staff App) with feature lists and screenshot galleries

**Reports Page:** List/grid of 40+ available reports with descriptions and sample previews

**Contact Page:** Split layout - contact form (left) + contact info/map (right), office hours, phone, email

**Demo Request Page:** Focused single-column form with benefit bullets on the side, minimal distractions

**About Page:** Company story, team values, technology stack, client count statistics

---

## Interaction & Animation Guidelines

**Minimal, purposeful animations:**
- Smooth scroll (CSS scroll-behavior)
- Fade-in on scroll for sections (use Bootstrap's utility classes + simple JS)
- Card hover lifts (transform + shadow transition)
- Button hover states (background darken)
- Modal slide-in for module details
- Carousel transitions for testimonials/screenshots (500ms ease)

**No excessive animations** - maintain professional, fast-loading aesthetic

---

## Accessibility & Performance

- Maintain WCAG AA contrast ratios (4.5:1 minimum for text)
- Focus states clearly visible (blue outline)
- Alt text for all images
- Semantic HTML structure
- Fast loading: Optimize images (WebP format), lazy loading for below-fold images
- Mobile-first responsive design