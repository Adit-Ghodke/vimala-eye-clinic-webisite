# VIMALA EYE HOSPITAL - MVP (MINIMUM VIABLE PRODUCT)
## 3D Immersive Revolving Website

**Document Version:** 1.0  
**Last Updated:** April 2026  
**Status:** Ready for Antigravity Build Planning

---

## 📋 EXECUTIVE SUMMARY

The MVP is a minimal but impactful 3D immersive website featuring a 360-degree revolving environment that showcases Vimala Eye Hospital's services, expertise, and locations. The design will feel like an interactive, rotatable space where users can explore the hospital's offerings through an innovative visual interface.

**Key Differentiator:** Instead of traditional flat web pages, users experience a revolving 3D space that continuously rotates, allowing them to explore different sections (Services Hub, Doctor Profiles, Locations, Testimonials) as they interact with the rotating environment.

---

## 🎯 MVP SCOPE

### Core Features (Phase 1)

#### 1. **360-Degree Revolving Hero Environment**
- Continuous background rotation creating immersive atmosphere
- Hospital branding integrated into the 3D space
- Smooth, fluid rotation animation
- Can be paused/controlled by user interaction
- Tagline: "Clearly the Best" integrated into the visual space

#### 2. **Revolving Services Showcase**
- 8 services displayed in rotating carousel (3D cards)
- Each service card orbits around a central point
- Cards stop when user hovers/clicks
- Service icon, name, and brief description visible
- Click action reveals detailed service information in modal/sidebar

#### 3. **Doctor Profiles Section**
- 4 doctor profiles in rotating layout
- Doctor image, name, qualifications displayed
- Rotation allows continuous discovery of team members
- Interactive cards with hover effects
- Click to view full credentials and specializations

#### 4. **Location Selector with Map**
- 3 locations (Bhiwandi Main, Gaibi Nagar, Wada) in rotating display
- Interactive location cards
- Google Map integration
- Business hours display
- Contact phone numbers clickable

#### 5. **Statistics Visualization**
- Key metrics in rotating presentation:
  - 12000+ Surgeries
  - 4 Specialist Doctors
  - 8 Advanced Services
  - 3 Locations
- Animated counter numbers
- Icons with metric labels

#### 6. **Call-to-Action Hub**
- Floating action buttons in the revolving interface
- "Book Appointment" (tel: link)
- "Call Us: 9112210081" always accessible
- Contact form accessible from main interface

#### 7. **Navigation System**
- Minimal, intuitive navigation
- Revolving menu or floating navigation dots
- Sections: Home, Services, Doctors, Locations, Contact
- No traditional top menu bar (maintains immersion)

#### 8. **Mobile Responsive Revolving Interface**
- Adapts to mobile screen size
- Touch/swipe support for rotation control
- Vertical rotation on mobile devices
- Tap to interact with revolving elements

---

## 🏗️ TECHNICAL ARCHITECTURE (MVP)

### Technology Stack
- **Frontend Framework:** React.js with Three.js for 3D rendering
- **3D Library:** Babylon.js or Three.js (360-degree rotation engine)
- **Styling:** Tailwind CSS for UI components + Custom CSS for 3D transforms
- **Animation:** Framer Motion + CSS animations for smooth rotations
- **Maps:** Google Maps API integration
- **Deployment:** Vercel/Netlify (optimized for performance)

### Core Technical Components
1. **3D Rotation Engine** - Core revolving mechanism
2. **Interactive Card System** - Cards that orbit and respond to clicks
3. **Modal/Sidebar Component** - For detailed information display
4. **Map Integration Component** - Google Maps with location markers
5. **Contact Form Component** - For inquiries
6. **Responsive Layout System** - Desktop/Tablet/Mobile adaptation

### Performance Requirements (MVP)
- First load: < 3 seconds
- Smooth 60 FPS rotation
- Optimized 3D assets
- Lazy loading for images
- Progressive enhancement for lower-end devices

---

## 👥 TARGET USERS (MVP)

### Primary Users
- **Patients seeking eye care** - Browse services and doctor profiles
- **Referrals from healthcare professionals** - Quick information access
- **Local community members** - Finding hospital location and hours

### User Behaviors Supported
- Discovery of services while watching rotating interface
- Finding specialist doctors for specific eye conditions
- Locating nearest hospital branch
- Booking appointments quickly
- Reading testimonials for trust building

---

## 🎨 VISUAL DESIGN DIRECTION

### Color Palette
- **Primary Blue:** #1E5A96 (Trust, healthcare professionalism)
- **Accent Light Blue:** #E8F4F8 (Clarity, cleanliness)
- **Dark Text:** #1a1a1a
- **White/Light:** #FFFFFF
- **Accent Green:** #10B981 (Health, healing) - Optional

### Design Elements
- Soft, rounded cards in revolving carousel
- Glassmorphism effect on cards (semi-transparent, blurred backgrounds)
- Smooth gradients in blue tones
- Icon-based visual language
- Professional healthcare imagery

### 3D Environment
- Soft circular gradients in background
- Subtle particle effects (optional)
- Clean, minimalist spatial design
- Hospital branding integrated subtly

---

## 📦 DELIVERABLES (MVP)

### Phase 1 Deliverables
1. ✅ **Revolving Hero Section** - Full-screen rotating environment with branding
2. ✅ **Services Carousel (3D)** - 8 rotating service cards with descriptions
3. ✅ **Doctor Profiles Rotator** - 4 doctor profiles in rotating layout
4. ✅ **Locations Hub** - 3 locations with maps and contact info
5. ✅ **Statistics Section** - Key metrics in rotating display
6. ✅ **Navigation System** - Intuitive floating/minimal navigation
7. ✅ **Contact/CTA Module** - Appointment booking and contact form
8. ✅ **Mobile Responsive Design** - Fully functional on mobile devices
9. ✅ **SEO Optimization** - Meta tags, structured data for local search

### Content Assets Required
- Hospital logo (PNG, SVG)
- Doctor profile images (4 photos)
- Hospital facility photos (3-5 images)
- Service icons (8 icons)
- Background imagery/textures
- Any existing hospital branding guidelines

---

## 🔄 USER JOURNEY (MVP)

### Journey 1: New Patient Discovery
1. **Land on Homepage** → See revolving hero with "Clearly the Best" tagline
2. **Explore Services** → Services carousel automatically rotates, user clicks to learn more
3. **View Doctors** → Doctor profiles rotating, user clicks "Dr. Anoop Mishra" to view details
4. **Check Locations** → Finds nearest location (Bhiwandi/Wada) with map
5. **Book Appointment** → Clicks "Book Appointment" button → Phone call to hospital

### Journey 2: Looking for Specific Service
1. **Land on Homepage** → Scroll or tap to Services section
2. **Interact with Service Cards** → Stop rotation on "LASIK Surgery" card
3. **View Details** → Modal opens with full service description
4. **See Doctor Recommendation** → Doctor profile associated with service visible
5. **Call Hospital** → Direct phone call CTA

### Journey 3: Finding Contact Info
1. **Land on Homepage** → Floating navigation leads to Contact/Location section
2. **View 3 Locations** → Select desired location
3. **See Map** → Google Map shows exact location
4. **Get Business Hours** → Hours display for selected location
5. **Call or Visit** → Phone numbers and address visible

---

## 💼 BUSINESS METRICS (MVP Success Criteria)

### Primary Success Metrics
1. **Time on Site:** Average 2+ minutes (immersive experience)
2. **Bounce Rate:** < 40% (engaging 3D interface)
3. **Phone Calls Generated:** Track via unique phone numbers per location
4. **Appointment Bookings:** Monthly count from website
5. **Service Page Views:** High engagement with service cards
6. **Mobile Traffic:** 60%+ of total traffic

### Secondary Metrics
1. **Location Discovery:** Which branch gets most clicks
2. **Doctor Profile Views:** Which doctor profiles most viewed
3. **Form Submissions:** Contact form conversion rate
4. **Return Visits:** Repeat visitor percentage
5. **User Interaction Rate:** % users who interact with rotating elements

---

## ⚙️ FUNCTIONAL REQUIREMENTS (MVP)

### FR-1: Revolving Background/Environment
- Background continuously rotates 360 degrees
- Rotation speed: Smooth, configurable (default: 1 full rotation per 8 seconds)
- Pause on user interaction (hover, click, touch)
- Resume after 5 seconds of inactivity

### FR-2: Service Cards Carousel (3D)
- 8 service cards arranged in circle
- Automatic rotation: 1 card per second (configurable)
- Click/tap to select and stop rotation
- Selected card enlarges and shows full description
- Back button or click outside to return to carousel

### FR-3: Doctor Profiles Rotator
- 4 doctor profiles in rotating display
- Each profile shows: Image, Name, Title, Key Specialties
- Hover to reveal more details (qualifications)
- Click to open full profile modal
- Qualifications display: MBBS, MS, FICO, DNB, FCRS, MRCS, MD, FMRF

### FR-4: Locations with Maps
- 3 locations visible: Main (Bhiwandi), Gaibi Nagar, Wada
- Rotating location cards
- Selected location shows:
  - Full address
  - Google Map embed
  - Phone numbers
  - Business hours
  - Directions link
- WhatsApp or direct call buttons

### FR-5: Statistics Counter
- Animated counters for:
  - 12,000+ Surgeries
  - 4 Specialist Doctors
  - 8 Advanced Services
  - 3 Locations
- Counter animates on page load or scroll into view

### FR-6: Navigation & Menus
- Floating navigation dots (Home, Services, Doctors, Locations, Contact)
- Minimal header with logo
- Mobile hamburger menu (if needed)
- Section anchors for smooth scrolling

### FR-7: CTAs & Contact
- Floating "Book Appointment" button (always accessible)
- "Call Us: 9112210081" button
- Contact form with fields: Name, Email, Message
- Form submission handling (email notification to hospital)

### FR-8: Responsive Design
- **Desktop (1920px+):** Full 3D revolving experience
- **Tablet (768px-1024px):** Scaled revolving interface
- **Mobile (320px-767px):** Vertical/simplified rotation, touch support
- Touch events: Swipe to control rotation

---

## 📱 RESPONSIVE BREAKPOINTS (MVP)

| Breakpoint | Width | Changes |
|-----------|-------|---------|
| Mobile | 320-767px | Vertical rotation, simplified cards, full-width |
| Tablet | 768-1024px | Medium-size cards, 2-column on landscape |
| Desktop | 1025-1920px | Full 3D experience, optimal spacing |
| Ultra-Wide | 1921px+ | Extended layout, multiple rotators visible |

---

## 🔐 SECURITY & COMPLIANCE (MVP)

- GDPR compliance for contact forms (data privacy)
- HIPAA considerations (patient data handling)
- SSL/HTTPS encryption
- Form validation and sanitization
- Rate limiting on contact form (prevent spam)
- No direct patient data storage on website

---

## 📊 ANALYTICS & TRACKING (MVP)

- Google Analytics 4 integration
- Track section views (Services, Doctors, Locations)
- Track CTA clicks (Book Appointment, Call)
- Event tracking: Rotation pauses, card interactions
- Form submission tracking
- Phone number click tracking (UTM parameters)
- Mobile vs Desktop comparison

---

## 🎬 ANIMATION SPECIFICATIONS (MVP)

### Primary Animations
1. **Background Rotation:** Linear, 8s per full rotation, continuous
2. **Service Card Entrance:** Fade-in + Scale (0.8 to 1) over 600ms
3. **Doctor Profile Hover:** Scale + Elevation effect (Yscale: 1.05, shadow increase)
4. **Location Card Selection:** Expand animation + Map fade-in
5. **Counter Animation:** Number increment from 0 to final value over 2s (on load)
6. **Modal Entrance:** Fade + Slide-up from bottom over 400ms

### Easing Functions
- Primary: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (Smooth)
- Rotation: `linear` (continuous steady motion)
- Interactions: `cubic-bezier(0.34, 1.56, 0.64, 1)` (Bouncy, friendly)

---

## ⚠️ CONSTRAINTS & LIMITATIONS (MVP)

- **No Video Integration** in MVP (can add in Phase 2)
- **No Appointment Booking System** in MVP (direct phone calls only)
- **Limited Testimonials** (1 testimonial visible, expandable)
- **No Blog/Resource Section** in MVP
- **No Multi-Language Support** in MVP (English only)
- **No AI Chatbot** in MVP
- **No Virtual Tour** in MVP
- **No Before/After Gallery** in MVP (Phase 2 feature)

---

## 📅 IMPLEMENTATION TIMELINE (MVP)

- **Week 1-2:** Project setup, design system, 3D engine setup
- **Week 3-4:** Revolving hero and background implementation
- **Week 5-6:** Services carousel and card system
- **Week 7-8:** Doctor profiles and location modules
- **Week 9-10:** Navigation, CTAs, contact form
- **Week 11-12:** Testing, optimization, deployment

**Total Timeline:** 12 weeks for MVP

---

## 🚀 GO-TO-MARKET STRATEGY (MVP)

### Launch Activities
1. **Domain Setup:** Ensure https://vimalaeyehospital.com/ points to new 3D site
2. **Google Business Profile Update:** Update website URL
3. **Local SEO Optimization:** Focus keywords on "Eye hospital Bhiwandi," "LASIK surgery Bhiwandi"
4. **Social Media Announcement:** Feature on Facebook, Instagram (share website link)
5. **Staff Training:** Brief hospital staff on new website features
6. **Analytics Setup:** Install Google Analytics to track success

### Post-Launch (Phase 1)
- Monitor user behavior with Google Analytics
- Collect feedback from patients
- Gather performance metrics
- Plan Phase 2 enhancements based on user data

---

## 🔄 FUTURE PHASES (Post-MVP)

### Phase 2 Enhancements
- Video testimonials from patients
- Virtual tour of hospital facilities
- Appointment booking system integration
- Blog section for eye care tips
- Before/after gallery
- Live chat support
- Multi-language support (Marathi, Hindi)
- Advanced SEO optimizations

### Phase 3 Enhancements
- AI-powered chatbot for patient inquiries
- Telemedicine consultation integration
- Patient portal for follow-ups
- Advanced analytics dashboard for hospital team
- Mobile app integration

---

## ✅ MVP ACCEPTANCE CRITERIA

- [ ] Website loads in < 3 seconds on desktop
- [ ] Website loads in < 5 seconds on mobile
- [ ] 3D rotation smooth at 60 FPS
- [ ] All 8 services visible and clickable
- [ ] All 4 doctors viewable with full credentials
- [ ] All 3 locations with maps working
- [ ] Contact form functional and sends emails
- [ ] Phone CTA buttons working (tel: links)
- [ ] Mobile responsive on all breakpoints
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Google Analytics tracking working
- [ ] SEO basics implemented (meta tags, structured data)
- [ ] WCAG 2.1 AA accessibility standards met
- [ ] All CTAs tested and functional
- [ ] Performance: Lighthouse score > 85

---

## 📞 CONTACT & STAKEHOLDERS

**Hospital Contact:** vimalaeyehospital@gmail.com | 9112210081  
**Primary Contact:** Dr. Anoop Mishra (Founder)  
**Decision Maker:** Dr. Anoop Mishra  
**Marketing Contact:** Available at hospital contact

---

**Document Status:** ✅ Ready for Antigravity Build Planning  
**Next Step:** Share MVP with Antigravity platform for detailed build plan generation

