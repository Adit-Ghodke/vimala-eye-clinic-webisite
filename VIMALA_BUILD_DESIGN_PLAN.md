# VIMALA EYE HOSPITAL - COMPREHENSIVE DESIGN & BUILD PLAN

**Document Version:** 1.1  
**Last Updated:** April 2026  
**Project Objective:** Create a premium, immersive 3D revolving website that showcases medical excellence through state-of-the-art web technology.

---

## 🎨 PART 1: DESIGN PLAN (AESTHETIC & UI/UX)

### 1.1 Core Design Philosophy: "The Immersive Clinic"
The design bridges the gap between high-end medical professionalism and futuristic interactive art. The "revolving" nature of the site symbolizes the hospital's comprehensive (360-degree) care and the clarity of vision they provide.

### 1.2 Visual Identity System
- **Color Palette:**
    - **Vimala Navy (#0D2A47):** Primary text and deep UI elements.
    - **Expert Blue (#1E5A96):** Primary action color, headings, and branding.
    - **Clinical Sky (#E8F4F8):** Light background sections, card surfaces.
    - **Pure White (#FFFFFF):** Core background and readability layers.
    - **Healing Green (#10B981):** Success states and health indicators.
- **Typography:**
    - **Headings:** `Poppins` (Bold, 700) for a modern, friendly medical feel.
    - **Body:** `Inter` (Regular, 400/500) for maximum legibility on high-resolution displays.
- **Surface Treatment (Glassmorphism):**
    - Cards will use semi-transparent backgrounds: `rgba(255, 255, 255, 0.15)`
    - Backdrop blur: `12px` to `20px`.
    - Subtle 1px white border (10% opacity) to define edges in 3D space.

### 1.3 3D Environmental Concept
- **Background:** A slow-moving, 360-degree rotating gradient field. Subtle "dust" particles or light bokeh to create depth (Z-index).
- **Spatial Arrangement:** The website is not a flat page but a "scene".
    - **Services:** Orbiting in a horizontal circle at the mid-level.
    - **Doctors:** A slightly tighter, more intimate orbit.
    - **Locations:** Large, flat interactive planes that slide into view from the 3D distance.

### 1.4 Interactive Feedback
- **Magnetic Hover:** Buttons and cards should have a "magnetic" pull effect when the cursor is near.
- **Rotation Easing:** When a user hovers over a rotating element, the global rotation speed should decelerate from `1.0x` to `0.1x` over 800ms using a `cubic-bezier` curve.

---

## 🏗️ PART 2: BUILD PLAN (TECHNICAL ARCHITECTURE)

### 2.1 Technology Stack (The "Immersive Stack")
- **Core:** React 18 (Vite)
- **3D Engine:** `React Three Fiber` (R3F) + `@react-three/drei` (Helper library for Three.js).
- **Animations:** `Framer Motion` (for UI/DOM overlays) + `GSAP` (for complex 3D timeline sequences).
- **Styling:** `Tailwind CSS` for layout + `Custom CSS Modules` for 3D-specific transform logic.
- **Data:** Static JSON files for MVP (Services, Doctors, Locations) to ensure 0ms latency.
- **Forms:** `React Hook Form` + `Zod` (Validation).

### 2.2 Component Architecture & State Management
#### **Global State (Context API)**
- `SceneContext`: Stores `rotationSpeed`, `activeSection`, `isModalOpen`, and `viewportSize`.

#### **Core Components**
1. **`SceneWrapper`**: The Canvas parent that manages the Three.js lifecycle.
2. **`RotatingEnvironment`**: Renders the background gradient sphere and particle systems.
3. **`OrbitalCarousel`**: A generic 3D component that takes children and arranges them in a circle with auto-rotation.
4. **`GlassCard`**: A reusable UI component that handles the glassmorphism logic and 3D hover effects.
5. **`NavigationShell`**: A floating DOM layer for the non-traditional dot-nav and minimal header.

---

## 🛠️ PART 3: DETAILED MODULE SPECIFICATIONS

### 3.1 Hero & Branding
- **Visual:** Full-screen 3D scene. Large 3D-rendered text "Clearly the Best" floating in the center.
- **Logic:** Rotation starts immediately. Scroll indicator pulses at the bottom.

### 3.2 3D Services Carousel (8 Cards)
- **Geometry:** 8 planes arranged at 45-degree intervals on a radius of 5 units.
- **Content:** SVG Icon + Bold Title.
- **Interaction:** Clicking a card triggers a "Camera Zoom" towards that plane, blurring the background and opening the `ServiceModal`.

### 3.3 Doctor Profiles (4 Profiles)
- **Visual:** High-quality doctor photos in circular 3D frames.
- **Detail:** On hover, the frame glows with the "Primary Blue" color and displays the doctor's key qualifications (MS, FICO, etc.).

### 3.4 Location Selector (3 Branches)
- **Visual:** A 3-way toggle in 3D space. Selecting a branch rotates the "Camera" to face a specific panel.
- **Integration:** Embedded Google Map with custom styling to match the hospital's blue palette.

### 3.5 Statistics Visualization
- **Logic:** Scroll-triggered counters.
- **Metrics:** 12,000+ Surgeries, 4 Specialists, 8 Services, 3 Locations.
- **Animation:** Numbers count up using `framer-motion`'s `useSpring` for a smooth, elastic finish.

---

## 📱 PART 4: RESPONSIVE & PERFORMANCE STRATEGY

### 4.1 Mobile Optimization
- **Vertical Orientation:** The 3D horizontal orbit will switch to a vertical "Ferris Wheel" orbit on screens < 768px.
- **Touch Support:** Swiping left/right will manually rotate the 3D scene.
- **Low-Power Mode:** Detect device capabilities; if low-end, disable particle effects and simplify gradients to maintain 60fps.

### 4.2 SEO & Performance
- **Image Strategy:** All assets served as `.webp`.
- **Lighthouse Targets:**
    - Performance: 90+
    - Accessibility: 100
    - SEO: 100
- **Structured Data:** Implement `MedicalOrganization` and `LocalBusiness` JSON-LD for all 3 branches.

---

## 📅 PART 5: IMPLEMENTATION ROADMAP (PHASED)

| Phase | Focus | Key Deliverables |
|:--- |:--- |:--- |
| **Phase 1** | **Foundation** | Vite setup, Tailwind config, Design Token implementation. |
| **Phase 2** | **3D Core** | Three.js Canvas setup, Rotating Background, Camera controls. |
| **Phase 3** | **Content Orbit** | Services & Doctors 3D carousels, Modal system. |
| **Phase 4** | **Data Layers** | Locations hub, Map integration, Stats counters. |
| **Phase 5** | **UI/UX Polish** | Floating Nav, CTAs, Contact Form, Scroll animations. |
| **Phase 6** | **Optimization** | Mobile testing, SEO tags, Performance tuning. |

---

## ✅ ACCEPTANCE CRITERIA
- [ ] Smooth 60 FPS 3D rotation across all major browsers.
- [ ] All 8 services and 4 doctor profiles fully interactive.
- [ ] Contact form successfully validates and simulates/triggers email.
- [ ] Maps correctly display markers for Bhiwandi, Gaibi Nagar, and Wada.
- [ ] Mobile experience feels native and responsive.
