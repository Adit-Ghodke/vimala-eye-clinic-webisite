# VIMALA EYE HOSPITAL - PRD (PRODUCT REQUIREMENTS DOCUMENT)
## 3D Immersive Revolving Website

**Document Version:** 1.0  
**Last Updated:** April 2026  
**Status:** Ready for Antigravity Design & Build Planning

---

## 📋 DOCUMENT OVERVIEW

This PRD provides comprehensive product requirements for the Vimala Eye Hospital immersive 3D website featuring 360-degree revolving interface. This document bridges the MVP vision with detailed specifications for development teams.

---

## 🎯 PRODUCT VISION

**Product Name:** Vimala Eye Hospital 3D Immersive Website  

**Tagline:** "Clearly the Best - A 360-Degree Experience"

**Vision Statement:** To create an industry-leading immersive web experience that showcases Vimala Eye Hospital's excellence through innovative 3D design, while maintaining usability and accessibility for all patients seeking eye care solutions.

**Key Differentiator:** A revolving 3D environment that continuously rotates, allowing users to discover services, doctors, and locations through interactive exploration rather than traditional navigation.

---

## 🏢 PRODUCT GOALS

### Primary Goals
1. **Increase Patient Engagement** - Immersive experience keeps users on site longer (target: 2+ min average session time)
2. **Generate Appointment Bookings** - Clear CTAs drive phone calls and appointment requests
3. **Improve Local Search Visibility** - Optimize for "eye hospital Bhiwandi" and related keywords
4. **Build Trust & Credibility** - Showcase expert doctors, certifications, and patient testimonials
5. **Multi-Location Promotion** - Highlight all 3 branches (Bhiwandi, Gaibi Nagar, Wada) equally

### Secondary Goals
1. Reduce bounce rate (< 40%)
2. Increase repeat visits
3. Gather patient data through contact form
4. Create shareable content for social media
5. Establish modern, technology-forward brand image

---

## 👥 USER PERSONAS

### Persona 1: Immediate Care Seeker (35% of traffic)
**Name:** Rajesh K.  
**Age:** 45-65  
**Behavior:** Has eye problem, needs solution urgently  
**Goals:** Find specialist, book appointment quickly  
**Pain Points:** Doesn't have time to read lengthy content  
**How Product Helps:** Quick service discovery, direct phone button, maps with directions  

### Persona 2: Informed Decision Maker (40% of traffic)
**Name:** Priya M.  
**Age:** 25-45  
**Behavior:** Researches doctors, reads reviews, compares options  
**Goals:** Find best doctor for specific condition, verify credentials  
**Pain Points:** Needs detailed information about doctors and specialties  
**How Product Helps:** Doctor profiles with full credentials, service descriptions, testimonials  

### Persona 3: Referral Patient (15% of traffic)
**Name:** Amit J.  
**Age:** Any age  
**Behavior:** Referred by doctor/friend, just needs location and hours  
**Goals:** Confirm hospital details, find address  
**Pain Points:** May be on mobile, needs quick info  
**How Product Helps:** Location selector with maps, business hours, phone numbers  

### Persona 4: Local Community Member (10% of traffic)
**Name:** Aisha D.  
**Age:** 40-60  
**Behavior:** Exploring local health facilities  
**Goals:** Learn about hospital, stay informed  
**Pain Points:** Limited English proficiency, needs clear visual communication  
**How Product Helps:** Icon-based design, clear visual hierarchy, professional imagery  

---

## 📊 MARKET & COMPETITIVE ANALYSIS

### Current Market Gap
- Most eye hospital websites are traditional, flat designs
- Limited interactive/immersive experiences in Indian healthcare sector
- Lack of 3D visualization in medical websites
- Most sites don't utilize rotating/animated interfaces

### Competitive Advantage
- **First-mover advantage** in 3D immersive design for eye hospitals in region
- **Modern technology perception** - differentiates from competitor hospitals
- **Improved UX** - revolving interface keeps users engaged
- **Mobile-optimized** - works well on smartphones (primary device for target market)

### Benchmarking
- Average bounce rate for healthcare websites: 45-55% (Target: < 40%)
- Average time on site: 1-2 minutes (Target: 2-3 minutes)
- Appointment generation rate: 5-10% of visitors (Target: 8-12%)

---

## 🎨 PRODUCT SPECIFICATIONS

### 1. HERO SECTION - REVOLVING ENVIRONMENT

**Purpose:** First impression, establish brand, invite exploration

**Specifications:**

| Aspect | Detail |
|--------|--------|
| **Dimensions** | Full viewport height (100vh), full width |
| **Background** | 3D revolving gradient background |
| **Rotation Speed** | 1 full rotation every 8 seconds (configurable) |
| **Rotation Direction** | Clockwise (by default) |
| **Content Overlay** | Centered, semi-transparent container |
| **Text** | "Clearly the Best" + "Never Miss a Moment" |
| **CTA Button** | "Explore Our Services" (scrolls to services section) |
| **Logo** | Top-left corner, 60px height |
| **Pause Trigger** | On scroll or mouse hover |
| **Resume Trigger** | 5 seconds of inactivity |

**Content:**
- Hospital logo (transparent PNG, 200x200px)
- Primary tagline: "Clearly the Best"
- Secondary tagline: "Never Miss a Moment"
- Subheading: "Expert Eye Care at 3 Locations in Bhiwandi & Wada"
- Call-to-action: "Explore Our Services" button
- Optional: Subtle particle effects in background

**Interaction:**
- User can pause rotation via click/tap
- Smooth resume after 5 seconds
- Mobile: Vertical rotation on portrait, horizontal on landscape

---

### 2. SERVICES CAROUSEL - 8 ROTATING CARDS

**Purpose:** Showcase all services interactively

**Specifications:**

| Aspect | Detail |
|--------|--------|
| **Layout** | 8 service cards in circular arrangement |
| **Rotation** | Continuous, 1 card per ~2 seconds |
| **Card Dimensions** | 300x200px (desktop), 250x150px (mobile) |
| **Card Content** | Icon, Title, 2-line description |
| **Interaction** | Click/tap to select and expand |
| **Selected State** | Card enlarges (1.2x scale), description fully visible |
| **Animation Duration** | 300ms for selection |
| **Modal/Expansion** | Sidebar or modal with full service details |
| **Close Action** | Click outside, back button, or X icon |

**Services to Display:**
1. Phacoemulsification Cataract Surgery
2. Glaucoma Treatment & Diagnosis
3. LASIK & Refractive Surgery
4. Orbit and Oculoplastic Surgery
5. Retina Evaluation
6. Pediatric Ophthalmology
7. Low Vision Aids
8. Ocular Prosthesis (Artificial Eyes)

**Detailed Service Information:**
Each service includes:
- Full name and short name
- Description (2-3 lines in carousel, full description in expanded view)
- Key points (3-5 bullet points)
- Associated doctor (if applicable)
- CTA: "Contact for This Service"

**Color Scheme:**
- Card background: White with 10% transparency (glassmorphism)
- Icon colors: Rotate through blue palette
- Text: Dark blue (#1a1a1a) on light background
- Hover state: Slight elevation, shadow increase

---

### 3. DOCTOR PROFILES - ROTATING TEAM DISPLAY

**Purpose:** Build trust through expert credentials

**Specifications:**

| Aspect | Detail |
|--------|--------|
| **Number of Doctors** | 4 profiles rotating |
| **Card Layout** | Image + Name + Title + Specialties |
| **Card Dimensions** | 250x350px (desktop), 200x280px (mobile) |
| **Rotation Speed** | 1 doctor per 3 seconds (slower than services) |
| **Rotation Type** | Circular arrangement, 4-card carousel |
| **Interaction** | Click to view full profile |
| **Profile Modal** | Full credentials, education, experience, specialties |
| **Image** | 250x250px circular crop or square |

**Doctor Profiles:**

**1. Dr. Anoop Mishra**
- Title: Founder & Lead Ophthalmologist
- Qualifications: MBBS, MS (Ophthalmology), FICO (London)
- Experience: 8+ years
- Specialties: General Ophthalmology, Vision care for whole family, Advanced diagnostics, Cataract management
- Education: Masters completed 2014
- Description: Pioneering eye care provider with comprehensive approach to patient wellness

**2. Dr. Amit Khedekar**
- Title: Senior Consultant
- Specialties: General Ophthalmology
- Description: Dedicated to patient care and quality outcomes

**3. Dr. Ameya Ingawale**
- Title: Consultant Ophthalmologist
- Qualifications: MBBS, DNB Ophthalmology, FCRS, FICO (London), MRCS (Edinburgh)
- Education: Sankara Eye Care Institutions
- Specialties: Advanced Ophthalmology, Complex eye procedures
- Description: Internationally trained specialist with cutting-edge expertise

**4. Dr. Amit B. Jain**
- Title: Consultant - Vitreo Retina & Uvea Services
- Qualifications: MBBS, MD (AIIMS), FMRF (Sankara Nethralaya)
- License: MMC Reg. No. 2007/04/1252
- Specialties: Vitreo Retina Services, Uvea Services, Retinal diseases
- Education: AIIMS New Delhi, Sankara Nethralaya Chennai
- Description: Specialist in complex retinal conditions with premier institution training

**Display Elements:**
- Professional photo (250x250px)
- Name (large, bold)
- Title (sub-heading)
- Top 3 specialties (bullet points or tags)
- Experience level badge
- Hover to reveal: Full qualifications (MBBS, MS, FICO, etc.)
- Click to open: Complete profile with education history

**Visual Treatment:**
- Cards in circular rotation
- Hover effect: Slight lift, shadow increase
- Selected state: Enlarge and highlight
- Professional color palette with accents

---

### 4. LOCATIONS HUB - 3 ROTATING BRANCHES

**Purpose:** Help patients find nearest location

**Specifications:**

| Aspect | Detail |
|--------|--------|
| **Locations** | 3 branches (Bhiwandi Main, Gaibi Nagar, Wada) |
| **Card Layout** | Location name, address, phone, map preview |
| **Rotation** | Continuous or manual select |
| **Selected State** | Expand to show full details + embedded map |
| **Map Integration** | Google Maps embed with location marker |
| **Phone Numbers** | Clickable tel: links |
| **CTA Buttons** | "Get Directions", "Call Now", "Book Appointment" |
| **Business Hours** | Display hours for selected location |

**Location 1: Main Hospital - Bhiwandi**
- Address: 1st Floor Sunshine Plaza, Dhamankar Naka, Near Fire Brigade, Bhiwandi - 421302
- Phone: 9112210081
- Type: Main Hospital
- Hours: Mon-Sat: 9:00 AM - 2:00 PM, 5:00 PM - 9:00 PM | Sun: Closed
- Landmark: Near Fire Brigade
- Map coordinates: Embedded Google Map

**Location 2: Branch - Gaibi Nagar**
- Address: 1st Floor, Beside Safina Opticals, Near Auliya Masjid, Gaibi Nagar, Bhiwandi - 421302
- Phone: 7757038100, 9075584916
- Type: Branch
- Hours: Mon-Sat: 9:00 AM - 2:00 PM, 5:00 PM - 9:00 PM | Sun: Closed
- Landmark: Near Auliya Masjid
- Map coordinates: Embedded Google Map

**Location 3: Branch - Wada**
- Address: 1st Floor, Thakarshi Complex, Opp. Kailash Talkies, Wada - 421303
- Phone: 9168987108
- Type: Branch
- Hours: Mon-Sat: 9:00 AM - 2:00 PM, 5:00 PM - 9:00 PM | Sun: Closed
- Landmark: Opposite Kailash Talkies
- Map coordinates: Embedded Google Map

**Card Content (Rotating):**
- Location name (bold heading)
- Address (2-3 lines)
- Primary phone number (clickable)
- 1-2 line description or specialty
- "View Details" button or click to expand

**Expanded View (Selected Location):**
- Full address with all details
- All phone numbers (clickable)
- Business hours table
- Embedded Google Map with marker
- "Get Directions" button (Google Maps link)
- "Call Now" button
- "Book Appointment" button
- Optional: Photos of location

---

### 5. STATISTICS SECTION - KEY METRICS

**Purpose:** Build credibility with impressive numbers

**Specifications:**

| Aspect | Detail |
|--------|--------|
| **Metrics Count** | 4 key statistics |
| **Display** | Animated counters with icons |
| **Animation** | Trigger on scroll into view |
| **Counter Duration** | 2 seconds from 0 to final value |
| **Size (Desktop)** | 120x120px cards, 4-column grid |
| **Size (Mobile)** | 80x80px cards, 2x2 grid |
| **Easing** | Cubic ease-out for natural feel |

**Statistics to Display:**

1. **Surgeries Completed**
   - Number: 12000+
   - Label: "Surgeries Done"
   - Icon: Surgical tools icon
   - Animation: Count from 0 to 12000+

2. **Specialist Doctors**
   - Number: 4
   - Label: "Specialist Doctors"
   - Icon: Doctor icon
   - Animation: Count from 0 to 4

3. **Advanced Services**
   - Number: 8
   - Label: "Advanced Services"
   - Icon: Stethoscope or medical icon
   - Animation: Count from 0 to 8

4. **Locations**
   - Number: 3
   - Label: "Locations"
   - Icon: Location/map icon
   - Animation: Count from 0 to 3

**Visual Treatment:**
- Large number in primary blue (#1E5A96)
- Label below in smaller text
- Icon above or beside number
- Subtle background color (light blue)
- Hover effect: Slight scale increase (1.05x)

---

### 6. TESTIMONIALS SECTION

**Purpose:** Build trust through patient satisfaction

**Specifications:**

| Aspect | Detail |
|--------|--------|
| **Layout** | Single or rotating testimonial |
| **Card Dimensions** | 600px width (desktop), full width (mobile) |
| **Content** | Name, procedure, rating, review text |
| **Rating** | 5-star display (star icons) |
| **Navigation** | Arrows or dots if multiple testimonials |
| **Display Duration** | Auto-rotate every 5 seconds or manual |

**Testimonial Content:**

**Testimonial 1: Priti Gupta**
- Rating: ⭐⭐⭐⭐⭐ (5/5)
- Procedure: Eye Surgery (Mother's Surgery)
- Review: "I did my Mom's Eye surgery from Vimala eye Hospital and i would like to suggest others as well...very good team,..supportive doctor...Loved their treatment."
- Key Points: Successful surgery, good team, supportive doctor, excellent treatment, would recommend
- Image: Optional patient or generic medical image
- Date: Optional (e.g., "2 months ago")

**Visual Treatment:**
- Quote marks as design element
- Stars for rating
- Name and procedure bold
- Professional testimonial card with border/shadow
- Color: Light background with blue accent border

---

### 7. CALL-TO-ACTION (CTA) ELEMENTS

**Purpose:** Drive conversions (phone calls, appointments)

**Specifications:**

| CTA | Placement | Style | Action | Priority |
|-----|-----------|-------|--------|----------|
| "Book Appointment" | Floating button, bottom-right | Solid blue, rounded | tel:9112210081 | High |
| "Call Us: 9112210081" | Header/Navigation | Outline button | tel:9112210081 | High |
| "Get Directions" | Locations section | Text link | Google Maps | Medium |
| "Contact Us" | Footer | Link | /contact | Medium |
| "Learn More" | Service cards | Text link | Expand details | Medium |
| "View Profile" | Doctor cards | Link | Open modal | Low |

**Button Specifications:**
- Floating "Book Appointment" button:
  - Size: 60px diameter (mobile), 70px (desktop)
  - Position: Fixed bottom-right, 20px from edges
  - Color: Solid blue (#1E5A96)
  - Animation: Pulse effect, slight rotation on hover
  - Z-index: Above all content
  - Mobile: Adjusted position to avoid scrollbar conflict

- Header "Call Us" button:
  - Size: 120px width (desktop), full-width (mobile)
  - Position: Top navigation
  - Style: Outlined or solid with white text
  - Responsive: Hamburger icon on mobile

---

### 8. CONTACT FORM

**Purpose:** Collect patient inquiries and generate leads

**Specifications:**

| Field | Type | Required | Placeholder | Validation |
|-------|------|----------|-------------|-----------|
| Name | Text Input | Yes | "Your Full Name" | Min 2 chars, Max 100 |
| Email | Email Input | Yes | "your@email.com" | Valid email format |
| Message | Textarea | Yes | "Your inquiry..." | Min 10 chars, Max 1000 |
| Service (Optional) | Dropdown | No | "Select a service" | Enum of 8 services |
| Phone (Optional) | Tel Input | No | "Phone number" | Valid Indian format |

**Form Behavior:**
- Form accessible via footer or floating action
- Modal or dedicated page
- On submit: Success message + Email sent to hospital
- Form clears after submission
- Confirmation: "Thank you! We'll contact you soon"

**Form Styling:**
- Clean, minimal design
- Blue accents, white background
- Smooth focus states on inputs
- Professional typography

**Backend Integration:**
- Email service: SendGrid, Mailgun, or hospital's email system
- Email recipients: vimalaeyehospital@gmail.com
- Email includes: All form data, timestamp, user IP
- Optional: SMS notification to hospital phone

---

### 9. NAVIGATION & MENU SYSTEM

**Purpose:** Enable intuitive exploration without breaking immersion

**Specifications:**

**Desktop Navigation:**
- Logo (top-left): Click to home
- Minimal floating menu:
  - Option 1: Circular navigation dots on right side
  - Option 2: Collapsible menu icon (top-left)
  - Option 3: Floating navigation bubble with menu items
- Menu Items: Home, Services, Doctors, Locations, Contact
- No traditional top navbar (maintains immersion)
- Smooth scroll to sections (anchor links)

**Mobile Navigation:**
- Logo: Top-left
- Hamburger menu: Top-right
- Slide-out menu on tap
- Menu Items: Same as desktop
- Close menu on item selection

**Navigation Styling:**
- Minimal, non-intrusive design
- Icon-based (optional icons next to text)
- Hover states with underline or icon change
- Current section highlighted
- Smooth transitions

---

### 10. FOOTER

**Purpose:** Provide contact info, links, and legal information

**Specifications:**

**Footer Content:**
- 3 columns (Desktop) or single column (Mobile)

**Column 1: Hospital Info**
- Hospital name: "Vimala Eye Hospital"
- Tagline: "Clearly the Best"
- Brief description: 1-2 lines
- Logo: 80x80px

**Column 2: Quick Links**
- Home
- Services
- About
- Locations
- Contact
- Privacy Policy (future)
- Terms of Service (future)

**Column 3: Contact Info**
- "Contact Us" heading
- All phone numbers (7757038100, 9075584916, 9168987108, 9112210081)
- Email: vimalaeyehospital@gmail.com
- Business hours: Summary
- Social media links (optional): Facebook, Instagram, YouTube

**Footer Styling:**
- Dark background (dark blue or dark gray)
- White text
- Professional layout
- Copyright info: "© 2024-2026 Vimala Eye Hospital. All rights reserved."

---

## 🎨 VISUAL DESIGN SYSTEM

### Color Palette

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Primary Blue | #1E5A96 | 30, 90, 150 | Buttons, headings, accents |
| Light Blue | #E8F4F8 | 232, 244, 248 | Backgrounds, cards |
| Dark Blue | #0D2A47 | 13, 42, 71 | Text, dark elements |
| White | #FFFFFF | 255, 255, 255 | Base backgrounds |
| Accent Green | #10B981 | 16, 185, 129 | Optional, healing, health |
| Light Gray | #F3F4F6 | 243, 244, 246 | Borders, dividers |
| Dark Gray | #374151 | 55, 65, 81 | Secondary text |

### Typography

| Element | Font | Weight | Size | Line Height |
|---------|------|--------|------|-------------|
| H1 (Main Tagline) | Inter/Poppins | 700 | 48px | 56px |
| H2 (Section Title) | Inter/Poppins | 600 | 32px | 40px |
| H3 (Card Title) | Inter/Poppins | 600 | 24px | 32px |
| Body Text | Inter | 400 | 16px | 24px |
| Small Text | Inter | 400 | 14px | 21px |
| Button Text | Inter | 500 | 16px | 24px |

### Spacing System (8px base)

| Size | Pixels | Usage |
|------|--------|-------|
| xs | 4px | Micro spacing |
| sm | 8px | Compact spacing |
| md | 16px | Standard spacing |
| lg | 24px | Section spacing |
| xl | 32px | Major spacing |
| 2xl | 48px | Hero/large spacing |
| 3xl | 64px | Full section spacing |

### Border Radius

| Radius | Pixels | Usage |
|--------|--------|-------|
| None | 0px | Sharp edges |
| sm | 4px | Small buttons, inputs |
| md | 8px | Cards, modals |
| lg | 12px | Larger elements |
| xl | 16px | Extra rounded elements |
| full | 9999px | Circular (buttons, avatars) |

### Shadows

| Level | CSS | Usage |
|-------|-----|-------|
| None | none | Flat design |
| sm | 0 1px 2px rgba(0,0,0,0.05) | Subtle elevation |
| md | 0 4px 6px rgba(0,0,0,0.1) | Standard cards |
| lg | 0 10px 15px rgba(0,0,0,0.1) | Elevated elements |
| xl | 0 20px 25px rgba(0,0,0,0.1) | Floating elements |
| Hover | 0 15px 35px rgba(0,0,0,0.15) | Interactive hover |

---

## 📱 RESPONSIVE DESIGN SPECIFICATIONS

### Breakpoints

| Name | Width | Columns | Key Changes |
|------|-------|---------|-------------|
| **Mobile** | 320-767px | 1 | Vertical layout, stacked cards, simplified rotation |
| **Tablet** | 768-1023px | 2 | Medium cards, 2-column services, landscape support |
| **Desktop** | 1024-1440px | 3 | Full 3D, optimal spacing, all features |
| **Wide** | 1441-1920px | 4 | Extended layout, wider cards |
| **Ultra-Wide** | 1921px+ | 5+ | Maximum optimization |

### Mobile Considerations
- Hero section: Vertical rotation (Z-axis instead of Y-axis)
- Services: 1 card visible at a time, swipe to rotate
- Doctors: Single column stack, rotate via buttons
- Locations: Stacked vertically, one expanded at a time
- Touch targets: Minimum 48x48px
- Text: Readable without zoom (font-size minimum 16px)
- Floating buttons: Positioned to avoid thumbprint zones

### Tablet Considerations
- Services: 2 cards visible, rotate between groups
- Doctors: 2 cards visible side-by-side
- Locations: 2 cards visible, toggle between landscape/portrait
- Rotation speed: Slightly slower for readability

---

## ⚙️ FUNCTIONAL REQUIREMENTS (DETAILED)

### FR-1: Background Rotation Engine
- **Requirement:** Background continuously rotates 360 degrees
- **Specification:**
  - Default rotation: 1 full turn per 8 seconds
  - Direction: Clockwise (configurable)
  - Easing: Linear (no acceleration/deceleration)
  - Trigger pause: On hover, click, or scroll
  - Resume condition: After 5 seconds of inactivity (configurable)
  - Gradient background: Blue tones with subtle animation
  - Particle effects: Optional floating particles (if performance allows)
- **Implementation:** CSS animation or requestAnimationFrame loop
- **Performance:** 60 FPS on desktop, 30+ FPS on mobile

### FR-2: Service Carousel (3D Rotation)
- **Requirement:** 8 service cards in circular arrangement, continuously rotating
- **Specification:**
  - Rotation speed: 1 card per 2 seconds (4 cards visible in rotation)
  - Auto-rotation: Pauses on user interaction
  - Click interaction:
    - Selected card moves to center/enlarges
    - Other cards fade or move background
    - Full description shows in sidebar or modal
    - Back button or click-outside closes detail view
  - Card content visible:
    - Icon (24x24px)
    - Title (short, 1-2 words)
    - Description (2 lines max in carousel)
  - Responsive:
    - Desktop: 300x200px cards
    - Mobile: Single card visible, swipe to rotate
  - Accessibility: Keyboard navigation (arrow keys to rotate)

### FR-3: Doctor Profile Rotator
- **Requirement:** 4 doctor profiles in rotating carousel
- **Specification:**
  - Rotation arrangement: Circular (4 doctors)
  - Rotation speed: 1 doctor per 3 seconds (slower than services)
  - Auto-rotate: Yes, pause on interaction
  - Click interaction: Opens full profile modal with all credentials
  - Card content:
    - Photo (200x200px, circular crop)
    - Name (bold, large)
    - Title (sub-heading)
    - Top 3 specialties (tags or list)
    - Experience badge (e.g., "8+ years")
  - Full profile modal includes:
    - Large photo
    - Complete name and titles
    - All qualifications (MBBS, MS, FICO, etc.)
    - All specialties (5+)
    - Education history
    - License information
    - Years of experience
    - Brief bio
  - Mobile: Single card visible, tap to view full profile

### FR-4: Location Selector with Maps
- **Requirement:** 3 locations with Google Maps integration
- **Specification:**
  - Display method: Rotating cards or radio button selector
  - Selected location shows:
    - Full address (street, landmark, area, city, zip)
    - Phone numbers (all, clickable tel: links)
    - Email (if clicked)
    - Business hours (expandable)
    - Embedded Google Map (iframe)
    - "Get Directions" button (Google Maps link)
    - "Call Now" button (tel: link)
    - "Book Appointment" button (CTA)
  - Map specs:
    - Zoom level: 15
    - Show location marker (red pin)
    - Allow zoom/pan
    - Mobile: Full-width map in separate section
  - Hours display:
    - Expandable/collapsible
    - Format: "Mon-Sat: 9:00 AM - 2:00 PM, 5:00 PM - 9:00 PM"
    - Highlight current status: "Open Now" or "Closed" badge

### FR-5: Statistics Counter Animation
- **Requirement:** Animated number counters for key metrics
- **Specification:**
  - Trigger: On page load or scroll into view
  - Animation duration: 2 seconds from 0 to target
  - Easing: Cubic ease-out (natural deceleration)
  - Format: Display with units (e.g., "12000+", "4", "8", "3")
  - Content:
    - 12000+ Surgeries Done
    - 4 Specialist Doctors
    - 8 Advanced Services
    - 3 Locations
  - Visual:
    - Large number in primary blue
    - Icon above or beside
    - Label below
    - Background card with light blue
  - Responsive: Grid layout (1x4 desktop, 2x2 mobile)
  - Accessibility: Numbers visible without animation (no animation-only conveyance)

### FR-6: Contact Form
- **Requirement:** Form to collect patient inquiries
- **Specification:**
  - Fields:
    - Name (text, required)
    - Email (email type, required)
    - Phone (tel, optional)
    - Service (dropdown, optional, 8 service options + "Other")
    - Message (textarea, required)
  - Validation:
    - Name: 2-100 characters
    - Email: Valid format
    - Phone: Valid Indian format (10 digits, optional)
    - Message: 10-1000 characters
  - Error messages:
    - Show field-specific validation errors
    - Red text with icon
    - Real-time validation (on blur)
  - Submit behavior:
    - On submit: Send email to vimalaeyehospital@gmail.com
    - Show loading state (spinner)
    - On success: Show "Thank you" message + clear form
    - On error: Show error message + retry button
  - Form design:
    - Single column layout
    - Smooth focus states (blue outline)
    - Proper spacing
    - Submit button: Full-width blue button
  - Backend: Email service integration (SendGrid/Mailgun)
  - Data privacy: GDPR compliant, no unauthorized sharing

### FR-7: Navigation System
- **Requirement:** Intuitive navigation without traditional navbar
- **Specification:**
  - Navigation elements:
    - Logo (top-left, clickable to home)
    - Floating menu (right side OR left-side dots OR hamburger icon)
    - Menu items: Home, Services, Doctors, Locations, Contact
  - Desktop navigation:
    - Floating circular dots on right side (vertical)
    - Each dot links to section (anchor links)
    - Highlight current section
    - On hover: Show label text
    - Smooth scroll to sections (smooth: auto)
  - Mobile navigation:
    - Hamburger icon (top-right)
    - Click opens slide-out menu from left
    - Menu items stacked vertically
    - Close on item selection or X button
  - Styling:
    - Minimal, non-intrusive
    - Semi-transparent background
    - Icons + text (optional)
    - Hover effects (color change, icon rotation)
  - Accessibility: Keyboard navigation (Tab, Enter)

### FR-8: Floating CTA Button
- **Requirement:** Always-accessible "Book Appointment" button
- **Specification:**
  - Position: Fixed bottom-right
  - Size: 60px diameter (mobile), 70px (desktop)
  - Style: Solid blue, rounded (circular)
  - Icon: Phone or calendar icon (white, 24x24px)
  - Action: Click → tel:9112210081
  - Animation:
    - Idle: Subtle pulse (scale 1 → 1.05)
    - Hover: Rotate slightly + increase shadow
    - Click: Scale down, then up (bounce)
  - Z-index: High (above all content)
  - Mobile positioning: 20px from bottom, avoid scrollbar
  - Accessibility: Aria-label = "Book Appointment"
  - Optional: WhatsApp version (second CTA)

### FR-9: Responsive Image Handling
- **Requirement:** Optimized images for all devices
- **Specification:**
  - Image optimization:
    - WebP format with JPEG fallback
    - Multiple sizes (srcset)
    - Lazy loading (loading="lazy")
    - Responsive: adjust size for breakpoints
  - Doctor photos:
    - 200x200px (profile cards)
    - 400x400px (modal)
    - Circular crop with border
  - Hospital facility images:
    - Desktop: 600x400px
    - Tablet: 500x333px
    - Mobile: 320x213px
  - Icons: SVG format (scalable)
  - Performance: LCP images load first

### FR-10: SEO & Meta Tags
- **Requirement:** Optimize for local search
- **Specification:**
  - Title tag: "Vimala Eye Hospital - Best Eye Care in Bhiwandi & Wada"
  - Meta description: "Expert eye care services at 3 locations. LASIK, Cataract surgery, Glaucoma treatment. Book appointment with specialist doctors."
  - Keywords: eye hospital bhiwandi, LASIK surgery, cataract surgery, eye specialist
  - Open Graph tags:
    - og:title: Hospital name
    - og:description: Brief hospital description
    - og:image: Hospital logo or featured image (1200x630px)
    - og:url: Website URL
  - Schema markup (JSON-LD):
    - Organization schema (name, logo, address, phone)
    - LocalBusiness schema (address, phone, opening hours, 3 locations)
    - Doctor schema for each doctor (name, qualifications, specialties)
    - Review/AggregateRating schema (for testimonials)
  - Sitemap.xml: List all pages
  - Robots.txt: Allow all crawlers
  - Canonical tags: Prevent duplicate content

---

## 🔐 SECURITY REQUIREMENTS

### Data Protection
- SSL/TLS encryption (HTTPS)
- Contact form data encryption in transit
- No storage of sensitive patient data on frontend
- GDPR compliance (privacy policy, cookie consent)
- HIPAA awareness (handle patient info carefully)

### Form Security
- CSRF token protection
- Input sanitization (prevent XSS)
- Rate limiting (prevent spam form submissions)
- Email validation (prevent email injection)
- Captcha or honeypot (optional, if needed)

### Monitoring
- Error logging (Sentry or similar)
- Performance monitoring (Lighthouse, Core Web Vitals)
- Security headers (Content-Security-Policy, X-Frame-Options)
- Regular security audits

---

## 📊 ANALYTICS & TRACKING

### Google Analytics Setup
- GA4 property ID: [To be provided]
- Track section views (Home, Services, Doctors, Locations)
- Track interaction events:
  - Service card clicks
  - Doctor profile clicks
  - Location selection
  - CTA button clicks (Book Appointment, Call)
  - Form submission attempts/completions
  - Menu navigation
- Track custom metrics:
  - Time on each section
  - Rotation pause duration
  - Mobile vs desktop engagement
  - Device type and browser

### Phone Call Tracking
- Use unique phone numbers per location for call tracking
- Alternative: Call tracking service (CallRail, OpenDoor)
- Track click-to-call on CTA buttons
- Set up call-duration parameters

### Form Analytics
- Track form views
- Track field interactions
- Track submission attempts
- Track error messages
- Conversion rate: Form submissions / Total sessions

### Dashboard Metrics
- Monthly visitors
- Bounce rate
- Average session duration
- Conversion rate
- Top sections visited
- Mobile vs desktop split
- Return visitor percentage

---

## ♿ ACCESSIBILITY REQUIREMENTS

### WCAG 2.1 AA Compliance
- Color contrast: Minimum 4.5:1 for body text, 3:1 for large text
- Keyboard navigation: All interactive elements accessible via Tab/Enter
- Screen reader support: Proper ARIA labels, semantic HTML
- Focus indicators: Visible focus state (outline, underline)
- Image alt text: All images have descriptive alt attributes
- Form labels: Associated with inputs (label for attribute)
- Error handling: Clear error messages, suggestions for fixes

### Specific Accessible Features
- **Logo:** Alt text = "Vimala Eye Hospital logo"
- **Service icons:** Alt text = service name (e.g., "Cataract surgery icon")
- **Doctor photos:** Alt text = "Dr. [Name], [Title]"
- **Interactive elements:** Aria-label or aria-describedby
- **Buttons:** Descriptive button text (not just "Click here")
- **Rotating elements:** Pause/play button for animations
- **Links:** Descriptive link text (not "read more")
- **Form:** Fieldset and legend for grouped inputs
- **Focus management:** Trap focus in modals

### Mobile Accessibility
- Touch targets: Minimum 48x48px
- Readable without zoom: Font size 16px minimum
- Scrollable content: No horizontal scroll on mobile
- Responsive text: Resize text up to 200%

---

## 🚀 PERFORMANCE REQUIREMENTS

### Core Web Vitals Targets
- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **First Input Delay (FID):** < 100 milliseconds
- **Cumulative Layout Shift (CLS):** < 0.1
- **Overall Lighthouse Score:** > 85 (target 90+)

### Load Performance
- **Initial load:** < 3 seconds (desktop), < 5 seconds (mobile)
- **Time to Interactive (TTI):** < 5 seconds
- **Total page size:** < 3 MB (including all assets)
- **Number of requests:** < 50 (optimize bundling)

### Runtime Performance
- **Frame rate:** 60 FPS on desktop, 30+ FPS on mobile
- **Rotation animation:** Smooth, no jank
- **3D rendering:** Optimized for mobile devices
- **Memory usage:** < 100 MB on mobile

### Optimization Techniques
- Minify CSS/JS
- Image optimization (WebP, compression)
- Lazy loading (images, components)
- Code splitting (separate bundles per section)
- Caching (browser cache, service worker)
- CDN for static assets
- Gzip compression
- Remove unused CSS (PurgeCSS)

---

## 📋 TESTING REQUIREMENTS

### Unit Testing
- React component tests (Jest)
- Test coverage: 80%+
- Navigation links test
- Form validation test
- CTA button functionality test

### Integration Testing
- Form submission to email backend
- Google Maps API integration
- Analytics event tracking
- Navigation between sections

### E2E Testing (Cypress/Playwright)
- User flows:
  - Landing → Service discovery → CTA click
  - Service exploration → Doctor view → Phone call
  - Location finder → Map → Directions
  - Form submission → Confirmation
- Mobile interactions (touch, swipe)
- Keyboard navigation (Tab, Enter, Escape)

### Performance Testing
- Lighthouse CI (on each deploy)
- Load testing (500+ concurrent users)
- Core Web Vitals monitoring
- Screenshot tests (visual regression)

### Accessibility Testing
- axe Accessibility (automated)
- WAVE testing
- Manual keyboard navigation
- Screen reader testing (NVDA, JAWS, VoiceOver)

### Cross-browser Testing
- Chrome, Firefox, Safari, Edge
- iOS Safari, Android Chrome
- Older browser versions (IE 11 if needed)

### Device Testing
- Desktop (1920x1080, 1440x900)
- Tablet (iPad, Android tablets)
- Mobile (iPhone 12, Samsung Galaxy S21, older phones)
- Different network speeds (3G, 4G, WiFi)

---

## 🔄 DEPLOYMENT & MAINTENANCE

### Hosting Environment
- Platform: Vercel, Netlify, or AWS Amplify
- CDN: Cloudflare or similar (for image/asset delivery)
- SSL: Automatic (Let's Encrypt)
- Auto-scaling: Handle traffic spikes

### Continuous Deployment
- GitHub repository with main branch
- Automated tests on PR
- Auto-deploy on merge to main
- Rollback capability if needed

### Maintenance & Support
- Monitor uptime (99.9%+ availability target)
- Performance monitoring (Sentry, DataDog)
- Weekly backup of website data
- Regular security updates
- Content updates (doctor info, services, testimonials)

---

## 📅 DEVELOPMENT ROADMAP

### Phase 1 (MVP): Weeks 1-12
- Core revolving interface
- 8 services carousel
- 4 doctor profiles
- 3 locations with maps
- Contact form
- Navigation system
- Mobile responsive
- SEO & analytics

### Phase 2 (Week 13-18): Enhanced Features
- Video testimonials
- Virtual tour of facilities
- Appointment booking system (integration)
- Blog/Resource section
- FAQ section
- Before/after gallery
- WhatsApp integration

### Phase 3 (Week 19-24): Advanced Features
- AI-powered chatbot
- Telemedicine consultation booking
- Patient portal
- Mobile app integration
- Multi-language support (Marathi, Hindi)
- Advanced analytics dashboard

---

## ✅ SUCCESS METRICS & KPIs

### Primary KPIs
1. **Phone Calls Generated:** Target 50+ calls/month from website
2. **Appointment Bookings:** Target 20+ bookings/month from CTAs
3. **Average Session Duration:** Target 2-3 minutes (currently 1-2 minutes)
4. **Bounce Rate:** Target < 40% (currently 50%+)
5. **Mobile Traffic:** Target 60%+ of total traffic
6. **Lighthouse Score:** Target 85+ (sustainability)

### Secondary KPIs
1. **Form Submissions:** Track email inquiries from contact form
2. **Location Views:** Which branch gets most interest
3. **Service Interest:** Which services most viewed
4. **Doctor Profile Clicks:** Engagement with team
5. **Return Visitor Rate:** Track repeat visitors
6. **Social Shares:** Track website shares on social media

### Business Impact
- Increase patient inquiries by 30-50%
- Improve online reputation (website quality perception)
- Establish tech-forward brand image
- Outrank competitors in local search
- Generate qualified leads consistently

---

## 📞 STAKEHOLDERS & CONTACTS

**Hospital Contact:** vimalaeyehospital@gmail.com | 9112210081  
**Primary Contact:** Dr. Anoop Mishra (Founder & Lead Doctor)  
**Decision Maker:** Dr. Anoop Mishra  
**Marketing Lead:** [To be identified]  
**Website Admin:** [To be identified]  

---

**Document Status:** ✅ Ready for Antigravity Design Planning  
**Next Step:** Share PRD with design and development teams for detailed planning

