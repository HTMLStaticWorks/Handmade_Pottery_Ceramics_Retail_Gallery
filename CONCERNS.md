# KADAVA Ceramics — Website Issues & Audit Report

This document synthesizes all identified UI, UX, typography, contrast, responsiveness, imagery, and content concerns across the KADAVA Pottery & Ceramics Retail Gallery website. The issues are categorized by concern type for systematic tracking and remediation.

---

## 1. Header, Controls & Global Navigation Concerns

| ID | Location / Component | Concern Description | Desired Behavior / Target State |
|:---|:---|:---|:---|
| **HDR-01** | Header Controls | Badge size mismatch between RTL and Theme toggle buttons. | Standardize and sync badge dimensions, padding, font size, and border radius across both buttons. |
| **HDR-02** | Header Brand | Brand name / logo in the header appears incomplete or visually cut off. | Adjust header container height, flex alignment, and logo image bounds (`max-width`, `object-fit`, `line-height`). |
| **HDR-03** | Navbar Badges (1024×1366px) | Nav link active/selected badge shape expands disproportionately in 1024px tablet view. | Set fixed width/height/border-radius on active badge indicators for 1024px breakpoints to prevent shape distortion. |
| **HDR-04** | Navbar (Mobile) | Desktop row links on mobile bleed outside container bounds or get cropped in mobile screen sizes. | Hide desktop row links on mobile; display all links in a drawer slide-out menu. |
| **HDR-05** | Side Menu Drawer (Mobile & Tablet) | Navigation links missing from mobile/tablet overlay menu, or menu trigger button positioned inconsistently. | Consolidate all page links into the side menu drawer for mobile and tablet views. Anchor side menu button strictly to the top-right corner. |
| **HDR-06** | Side Menu Contrast (Dark Mode) | Mobile/tablet menu drawer links suffer from poor legibility in Dark Mode due to contrast issues. | Apply high-contrast text color tokens (`#FFFFFF` / `#F5F0E7`) for menu drawer links in Dark Mode. |

---

## 2. Dark Mode & Color Contrast Concerns

| ID | Location / Component | Concern Description | Desired Behavior / Target State |
|:---|:---|:---|:---|
| **CTR-01** | Home Page — "Three ways into KADAVA" | Overlay white text on hover becomes unreadable over light/bright background images. | Add darker gradient overlay (`linear-gradient(to top, rgba(0,0,0,0.7), transparent)`) or text shadows on hover. |
| **CTR-02** | Home Page — "Slow clay, high fire..." | Section headings and body description text have poor contrast ratio in Dark Mode. | Update text colors to `--dark-text-primary` (`#F5F0E7`) and `--dark-text-muted` (`#C4BDB3`) in Dark Mode. |
| **CTR-03** | Collections Page — "Three ceramic families" | White text over image cards lacks sufficient contrast and clarity. | Enhance card background scrim/gradient backdrop behind white text overlay. |
| **CTR-04** | Collections Page — "Natural clay. Unexpected details." | "Explore details" button background and text contrast fail accessibility standards in Dark Mode. | Apply high-contrast dark mode button styling (`border: 1px solid #fff`, high-contrast background and text). |
| **CTR-05** | Artspace Page — "CURRENT STUDIES" | Section text and overlay text on images are hard to read in Dark Mode. | Increase text contrast against dark backgrounds and refine overlay gradient fill. |
| **CTR-06** | Studio Page — "OUR APPROACH" & "See what is on the wheel" | Main headings suffer from low contrast in Dark Mode. | Ensure section headings switch to bright cream/white typography when `data-theme="dark"` is active. |
| **CTR-07** | Connect Page — "Let’s talk ceramics." | Card copy and section headers are unreadable in Dark Mode. | Apply updated dark-mode card background and bright primary text colors. |

---

## 3. Typography, Alignment & Spacing Concerns

| ID | Location / Component | Concern Description | Desired Behavior / Target State |
|:---|:---|:---|:---|
| **TYP-01** | Home Page — Body Content | Body/intro text font size is too small, reducing readability across sections below hero. | Increase base content font size (from `15px/16px` to `17px/18px`) with improved line-height (`1.65`). |
| **TYP-02** | Artspace Page — "CURRENT STUDIES" | Section typography appears small and lacks visual hierarchy. | Increase body font size and scale up sub-headings for improved readability. |
| **TYP-03** | Single-Line Heading Constraints | Selected section headings wrap awkwardly onto multiple lines across break points. | Apply `white-space: nowrap` (or optimal responsive layout bounds) to keep these headings strictly on one line: <br>• **Studio Page:** "OUR APPROACH" <br>• **Studio Page:** "See what is on the wheel." <br>• **Commissions Page:** "THE PROCESS" <br>• **Connect Page:** "STAY CLOSE" |
| **ALG-01** | Commissions Page — "Homes · hospitality..." | Text blocks and category items look misaligned and visually unbalanced. | Apply centered or grid-aligned flex arrangement with consistent gap properties. |
| **ALG-02** | Studio Page — "See what is on the wheel." | Card grid and supporting copy suffer from misalignment on Mobile & Tablet viewports. | Convert grid layout into responsive single-column layout on mobile and structured flex row on tablet. |
| **ALG-03** | Connect Page — "Let’s talk ceramics." | Content cards are misaligned and uneven across screen sizes. | Layout specs: <br>• **Mobile:** Single column stack (1 per row) <br>• **Tablet:** 2×2 grid layout <br>• **1024px Desktop:** Uniform height and width cards. |
| **ALG-04** | Connect Page — "New work. Occasional notes." | Text elements and adjacent image cards look misaligned in Tablet view. | Align text block flex baselines and fix card aspect ratios in tablet media queries. |
| **ALG-05** | Footer | Footer column arrangement looks uneven in tablet layout. | Force a clean 2×2 grid layout for footer link sections in Tablet view (`grid-template-columns: 1fr 1fr`). |

---

## 4. Content Enhancement & Section Length Concerns

| ID | Location / Component | Concern Description | Desired Behavior / Target State |
|:---|:---|:---|:---|
| **CNT-01** | Home 2 Page — Hero Section | Redundant "Home 2" header badge/text displayed in hero banner. | Remove "Home 2" label from hero copy to maintain brand focus. |
| **CNT-02** | Shop Page | Shop page feels incomplete and brief with only product grid listing. | Add 2 new rich sections (e.g., *Craft & Materials Highlight*, *Custom Care & Kiln Standards* or *Collector's Guide*). |
| **CNT-03** | Studio Page — "OUR APPROACH" & "See what..." | Large gaps of dead/empty space around headings. | Expand supporting descriptive copy to fill layout balance and elaborate on studio techniques. |
| **CNT-04** | Commissions Page — "THE PROCESS" | Section layout contains excess negative space. | Add detailed step-by-step description copy and client guidance details to balance section proportions. |
| **CNT-05** | Connect Page — "STAY CLOSE" | Section lacks location context and interactive map visual. | Embed interactive/styled Studio Location Map component within the "STAY CLOSE" section. |

---

## 5. Imagery & Media Asset Concerns

> **Note:** Strictly no changes are to be made to actual image files or asset binaries.

| ID | Location / Component | Concern Description | Desired Behavior / Target State |
|:---|:---|:---|:---|
| **IMG-01** | Home Page — "COLLECTOR STORIES" | Testimonial/collector cards display initials instead of authentic reviewer profile images. | Replace text initial badges with high-resolution circular profile avatar images. |
| **IMG-02** | Home 2 Page — "Featured architectural pieces" | 2nd and 3rd cards missing relevant ceramic images or using placeholders. | Embed high-quality ceramic artwork imagery matching the architectural theme for cards #2 & #3. |
| **IMG-03** | Collections Page — "Natural clay..." | Card #2 ("Raw Terracotta Earth") lacks a dedicated background image. | Add relevant high-resolution image asset representing raw terracotta texture. |
| **IMG-04** | Artspace Page — "Different hands. Shared material." | Section lacks a complementary media asset. | Integrate the hero ceramic image asset into this section to create visual continuity. |
| **IMG-05** | Artspace Page — "Form, texture, gesture" | Showcase images appear cropped/cluttered in Tablet view and 1024px viewport. | Adjust image container `aspect-ratio`, `object-fit: cover`, and grid min-widths for 768px-1024px screens. |
| **IMG-06** | Studio Page (All Sections) | Image inconsistency across different sections degrades unified UI aesthetic. | Standardize image styling, proportions, and asset pairing across key studio sections for cohesive visual flow. |

---

## 6. Page-by-Page Audit Summary

### 🏠 Home Page (`index.html`)
- [ ] **Content Font Size:** Scale up body font size across post-hero content sections.
- [ ] **"Three ways into KADAVA":** Fix hover white text contrast over background images.
- [ ] **"Slow clay, high fire & natural glazes":** Fix Dark Mode heading and body text contrast.
- [ ] **Headings Alignment:** Restrict specified section titles to single-line rendering.

### 🏺 Home 2 Page (`home2.html`)
- [ ] **Hero Section:** Remove "Home 2" text badge/heading label.

### 🛍️ Shop Page (`shop.html`)
- [ ] **Page Enrichment:** Add 2 new comprehensive content sections (e.g. Clay Material Guide & Custom Orders Banner) to lengthen and enhance the page.

### 🎨 Collections Page (`collections.html`)
- [ ] **"Three ceramic families":** Fix white text contrast over background images.
- [ ] **"Natural clay. Unexpected details.":** Fix Dark Mode contrast on "Explore details" button.

### 🏛️ Artspace Page (`artspace.html`)
- [ ] **"CURRENT STUDIES":** Fix Dark Mode text and image overlay text contrast; increase font size.

### 🔨 Studio Page (`studio.html`)
- [ ] **"OUR APPROACH" & "See what is on the wheel":** Keep headings on a single line, increase supporting copy to reduce empty space, and fix Dark Mode contrast.
- [ ] **"See what is on the wheel.":** Fix layout misalignment on Mobile and Tablet viewports.

### 📐 Commissions Page (`commissions.html`)
- [ ] **"THE PROCESS":** Keep heading in a single line and add supporting copy to reduce empty layout space.
- [ ] **"Homes · hospitality · events · gifting.":** Resolve text alignment issues.

### ✉️ Connect Page (`connect.html`)
- [ ] **"Let’s talk ceramics.":** Fix Dark Mode text contrast and card alignment (Mobile: 1 column, Tablet: 2×2 grid, 1024px: equal card sizes).
- [ ] **"STAY CLOSE":** Keep heading in a single line and embed Studio Location Map.
- [ ] **"New work. Occasional notes.":** Fix tablet view alignment between images and copy.

### 📱 Responsiveness & Footer
- [ ] **Mobile Navbar:** Fix cropped links; aggregate all navigation links inside top-right side drawer menu.
- [ ] **Dark Mode Menu:** Ensure drawer menu links are clearly visible in Dark Mode.
- [ ] **Tablet Navbar (1024×1366px):** Fix enlarged link selection badge shape.
- [ ] **Footer (Tablet):** Format footer link blocks into a balanced 2×2 grid layout.

### 🖼️ Image Concerns (Strictly No Direct Image File Modifications)
- [ ] **"COLLECTOR STORIES":** Reference profile image avatars.
- [ ] **"Featured architectural pieces":** Image references for 2nd & 3rd cards.
- [ ] **"Natural clay...":** Image reference for 2nd card.
- [ ] **"Different hands. Shared material.":** Hero section image reuse reference.
- [ ] **"Form, texture, gesture":** Image layout/cropping responsiveness.
- [ ] **Studio Page:** Consistent section image reference pairing.
