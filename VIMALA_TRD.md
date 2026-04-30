# VIMALA EYE HOSPITAL - TRD (TECHNICAL REQUIREMENTS DOCUMENT)
## 3D Immersive Revolving Website

**Document Version:** 1.0  
**Last Updated:** April 2026  
**Status:** Ready for Antigravity Development Planning

---

## 📋 EXECUTIVE SUMMARY

This TRD provides detailed technical specifications for implementing the Vimala Eye Hospital 3D immersive website. It covers architecture, technology stack, component specifications, API integrations, database schema, deployment infrastructure, and coding standards.

---

## 🏗️ ARCHITECTURE OVERVIEW

### High-Level System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       CLIENT LAYER                          │
│  React.js + Tailwind CSS + Three.js/Babylon.js             │
│  - 3D Rotation Engine                                       │
│  - UI Components (Carousel, Forms, Navigation)             │
│  - State Management (Redux/Context)                         │
│  - Analytics (Google Analytics 4)                           │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
┌───────▼────┐ ┌──────▼──────┐ ┌───▼──────────┐
│   HTTP/2   │ │   REST API  │ │  Third-party │
│  (Vercel)  │ │  (Node.js)  │ │   Services   │
└────────────┘ └─────┬───────┘ └──────┬───────┘
                     │                 │
        ┌────────────┼────────────┐    │
        │            │            │    │
   ┌────▼───┐ ┌─────▼────┐ ┌────▼───┐│
   │Firebase│ │  SendGrid│ │Google  ││
   │Database│ │ (Email)  │ │ Maps   ││
   │   &    │ │          │ │        ││
   │Storage │ │          │ │        ││
   └────────┘ └──────────┘ └────────┘│
                                      │
        ┌─────────────────────────────┘
        │
   ┌────▼─────────────┐
   │  CDN (Cloudflare)│
   │  - Static Assets │
   │  - Image Delivery│
   │  - Caching       │
   └──────────────────┘
```

### Technology Stack

#### Frontend
- **Framework:** React 18.x
- **Build Tool:** Vite.js or Next.js
- **3D Rendering:** Three.js (v140+) or Babylon.js (v6+)
- **Styling:** Tailwind CSS 3.x
- **Animation:** Framer Motion 10.x
- **State Management:** React Context API + useReducer (or Redux if needed)
- **HTTP Client:** Axios or Fetch API
- **Maps:** Google Maps API (@react-google-maps/api)
- **Form Handling:** React Hook Form + Zod validation
- **Analytics:** Google Analytics 4 (gtag)

#### Backend (Optional, for contact form only)
- **Runtime:** Node.js 18.x
- **Framework:** Express.js 4.x or Serverless Function
- **Email Service:** SendGrid SDK or Nodemailer
- **Environment Variables:** dotenv

#### Database (Contact form submissions)
- **Option 1:** Firebase Firestore (NoSQL, real-time)
- **Option 2:** MongoDB Atlas (document-based)
- **Option 3:** Supabase (PostgreSQL with API)
- **Backup:** Email-only (no database needed)

#### Hosting & Deployment
- **Hosting:** Vercel, Netlify, or AWS Amplify
- **CDN:** Cloudflare (free tier)
- **SSL:** Automatic (Let's Encrypt)
- **Version Control:** Git (GitHub/GitLab)
- **CI/CD:** GitHub Actions, Vercel CI, or Netlify CI

#### Development Tools
- **Editor:** VS Code
- **Package Manager:** npm 9.x or yarn 3.x
- **Linter:** ESLint 8.x
- **Code Formatter:** Prettier 3.x
- **Testing:** Jest 29.x + React Testing Library
- **E2E Testing:** Cypress 13.x or Playwright 1.40.x
- **Performance:** Lighthouse CI + WebPageTest

---

## 📁 PROJECT STRUCTURE

```
vimala-eye-hospital/
├── public/
│   ├── images/
│   │   ├── doctors/
│   │   │   ├── dr-anoop.webp
│   │   │   ├── dr-amit-k.webp
│   │   │   ├── dr-ameya.webp
│   │   │   └── dr-amit-j.webp
│   │   ├── hospital/
│   │   │   ├── facility-1.webp
│   │   │   ├── facility-2.webp
│   │   │   └── facility-3.webp
│   │   ├── services/
│   │   │   ├── cataract.svg
│   │   │   ├── glaucoma.svg
│   │   │   ├── lasik.svg
│   │   │   └── ... (8 total)
│   │   ├── logo.svg
│   │   └── favicon.ico
│   ├── fonts/
│   │   ├── inter-regular.woff2
│   │   ├── inter-bold.woff2
│   │   └── poppins-bold.woff2
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.module.css
│   │   │   └── RotatingBackground.jsx
│   │   ├── Services/
│   │   │   ├── ServicesCarousel.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── ServiceModal.jsx
│   │   │   └── Services.module.css
│   │   ├── Doctors/
│   │   │   ├── DoctorsRotator.jsx
│   │   │   ├── DoctorCard.jsx
│   │   │   ├── DoctorModal.jsx
│   │   │   └── Doctors.module.css
│   │   ├── Locations/
│   │   │   ├── LocationsHub.jsx
│   │   │   ├── LocationCard.jsx
│   │   │   ├── LocationMap.jsx
│   │   │   └── Locations.module.css
│   │   ├── Statistics/
│   │   │   ├── StatisticsSection.jsx
│   │   │   ├── StatCounter.jsx
│   │   │   └── Statistics.module.css
│   │   ├── Contact/
│   │   │   ├── ContactForm.jsx
│   │   │   ├── FormFields.jsx
│   │   │   └── Contact.module.css
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   ├── FloatingNav.jsx
│   │   │   └── Navigation.module.css
│   │   ├── CTA/
│   │   │   ├── FloatingButton.jsx
│   │   │   ├── CallButton.jsx
│   │   │   └── CTA.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Layout.module.css
│   │   └── Common/
│   │       ├── Modal.jsx
│   │       ├── Spinner.jsx
│   │       └── Common.module.css
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── DoctorsPage.jsx
│   │   ├── LocationsPage.jsx
│   │   └── ContactPage.jsx
│   │
│   ├── hooks/
│   │   ├── useRotation.js
│   │   ├── useIntersectionObserver.js
│   │   ├── useWindowSize.js
│   │   ├── useFormValidation.js
│   │   └── useAnalytics.js
│   │
│   ├── context/
│   │   ├── AppContext.js
│   │   ├── ThemeContext.js
│   │   └── ModalContext.js
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── emailService.js
│   │   ├── analyticsService.js
│   │   ├── geoService.js
│   │   └── hospitalData.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   ├── animations.js
│   │   └── helpers.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   │
│   ├── data/
│   │   ├── services.json
│   │   ├── doctors.json
│   │   ├── locations.json
│   │   └── testimonials.json
│   │
│   ├── App.jsx
│   └── index.jsx
│
├── api/ (if using serverless)
│   ├── contact-form.js
│   ├── send-email.js
│   └── middleware/
│       ├── validateForm.js
│       └── rateLimiter.js
│
├── tests/
│   ├── components/
│   │   ├── Hero.test.jsx
│   │   ├── Services.test.jsx
│   │   └── ...
│   ├── hooks/
│   │   └── useRotation.test.js
│   ├── utils/
│   │   └── validators.test.js
│   └── e2e/
│       ├── user-flows.spec.js
│       └── mobile-navigation.spec.js
│
├── .github/
│   └── workflows/
│       ├── test.yml
│       ├── deploy.yml
│       └── lighthouse.yml
│
├── .env.example
├── .env.local (local development)
├── .gitignore
├── package.json
├── vite.config.js (or next.config.js)
├── tailwind.config.js
├── postcss.config.js
├── eslintrc.json
├── prettier.config.json
└── README.md
```

---

## 🔧 COMPONENT SPECIFICATIONS

### 1. RotatingBackground Component

**Purpose:** Render continuously rotating 3D background gradient

**Props:**
```javascript
{
  rotationSpeed: number,        // Degrees per second (default: 45)
  colors: string[],             // Array of hex colors for gradient
  particlesEnabled: boolean,    // Show particle effects
  pauseOnInteraction: boolean,  // Default: true
  resumeDelay: number          // Milliseconds before resume
}
```

**Implementation Details:**
- Use CSS animations or requestAnimationFrame
- Background positioned fixed, behind all content
- Smooth linear rotation
- Pause/resume functionality
- Mobile optimization (reduce animation complexity)

**Code Example:**
```javascript
import React, { useState, useEffect } from 'react';
import styles from './RotatingBackground.module.css';

export const RotatingBackground = ({
  rotationSpeed = 45,
  colors = ['#1E5A96', '#2B7AB9'],
  pauseOnInteraction = true,
  resumeDelay = 5000
}) => {
  const [isRotating, setIsRotating] = useState(true);
  const [resumeTimer, setResumeTimer] = useState(null);

  const handlePause = () => {
    if (pauseOnInteraction) {
      setIsRotating(false);
      clearTimeout(resumeTimer);
      setResumeTimer(setTimeout(() => setIsRotating(true), resumeDelay));
    }
  };

  useEffect(() => {
    return () => clearTimeout(resumeTimer);
  }, [resumeTimer]);

  const gradientStyle = `conic-gradient(from 0deg, ${colors.join(', ')})`;

  return (
    <div
      className={`${styles.background} ${isRotating ? styles.rotating : ''}`}
      style={{ 
        background: gradientStyle,
        animationDuration: `${360 / rotationSpeed}s`
      }}
      onMouseEnter={handlePause}
      onTouchStart={handlePause}
    />
  );
};
```

**CSS (RotatingBackground.module.css):**
```css
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: conic-gradient(from 0deg, #1E5A96, #2B7AB9);
}

.rotating {
  animation: rotate-background linear infinite;
}

@keyframes rotate-background {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 360deg 0%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .rotating {
    animation: none;
  }
}
```

---

### 2. ServicesCarousel Component

**Purpose:** Display 8 rotating service cards in circular arrangement

**Props:**
```javascript
{
  services: Array<{
    id: number,
    name: string,
    icon: string,
    description: string,
    detailedDescription: string,
    keyPoints: string[]
  }>,
  autoRotate: boolean,      // Default: true
  rotationSpeed: number,    // Seconds per card
  onServiceSelect: (service) => void
}
```

**Implementation Details:**
- Use Three.js for 3D carousel or CSS transforms + JavaScript
- 8 cards arranged in circle (360/8 = 45-degree increments)
- Automatic rotation with pause on interaction
- Click card to expand and show details
- Modal/sidebar for detailed view
- Smooth transitions between states

**Key Features:**
- Auto-rotate: 1 card every 2 seconds
- Click to select and enlarge
- Hover effects (lift, shadow)
- Responsive (single column on mobile)
- Swipe support on mobile

**3D Implementation (Three.js example):**
```javascript
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export const ServicesCarousel = ({ services, onServiceSelect }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cardsRef = useRef([]);
  const rotationRef = useRef(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create card geometry and position in circle
    const radius = 300;
    services.forEach((service, index) => {
      const angle = (index / services.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Create card mesh (plane geometry with texture)
      const geometry = new THREE.PlaneGeometry(200, 140);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const card = new THREE.Mesh(geometry, material);
      card.position.set(x, 0, z);
      card.lookAt(0, 0, 0);
      scene.add(card);
      cardsRef.current.push(card);
    });

    camera.position.z = 600;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      rotationRef.current += 0.005;
      
      cardsRef.current.forEach((card, index) => {
        const angle = (index / services.length) * Math.PI * 2 + rotationRef.current;
        card.position.x = Math.cos(angle) * radius;
        card.position.z = Math.sin(angle) * radius;
        card.lookAt(0, 0, 0);
      });

      renderer.render(scene, camera);
    };

    animate();
    sceneRef.current = scene;

    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [services]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '500px' }} />
  );
};
```

---

### 3. DoctorsRotator Component

**Purpose:** Display 4 rotating doctor profiles

**Props:**
```javascript
{
  doctors: Array<{
    id: number,
    name: string,
    title: string,
    image: string,
    qualifications: string[],
    specialties: string[],
    experience: string,
    bio: string
  }>,
  rotationSpeed: number,    // Seconds per doctor
  onDoctorSelect: (doctor) => void
}
```

**Implementation Details:**
- 4 doctors in circular arrangement
- Rotate 1 doctor per 3 seconds
- Click to open full profile modal
- Show name, title, top specialties on card
- Modal shows all credentials and education
- Circular image crop with border

**Features:**
- Auto-rotate with pause
- Hover to see more specialties
- Click to view full profile
- Modal with all details
- Mobile: single card, swipe or tap for next

---

### 4. LocationsHub Component

**Purpose:** Display 3 locations with Google Maps integration

**Props:**
```javascript
{
  locations: Array<{
    id: number,
    name: string,
    address: string,
    phones: string[],
    email: string,
    hours: {
      monday: { open: string, close: string },
      // ... other days
    },
    coordinates: { lat: number, lng: number },
    mapUrl: string
  }>,
  selectedLocationId: number,
  onLocationSelect: (location) => void
}
```

**Implementation Details:**
- 3 location cards rotating or in radio button selector
- Selected location shows full details + embedded Google Map
- Phone numbers clickable (tel: links)
- Business hours expandable/collapsible
- "Get Directions" button opens Google Maps
- "Call Now" button initiates call
- "Book Appointment" CTA visible

**Google Maps Integration:**
```javascript
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

export const LocationMap = ({ location }) => {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: location.coordinates.lat,
    lng: location.coordinates.lng
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} title={location.name}>
        <InfoWindow>
          <div>
            <h3>{location.name}</h3>
            <p>{location.address}</p>
            <p>{location.phones[0]}</p>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  );
};
```

---

### 5. ContactForm Component

**Purpose:** Collect patient inquiries via form submission

**Props:**
```javascript
{
  onSubmit: (formData) => Promise,
  onSuccess: () => void,
  onError: (error) => void,
  services: string[]
}
```

**Implementation Details:**
- React Hook Form for form management
- Zod for validation schema
- Real-time validation feedback
- Error messages below fields
- Loading spinner on submit
- Success/error toast notifications

**Validation Schema (Zod):**
```javascript
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .email('Invalid email address'),
  phone: z.string()
    .regex(/^[0-9]{10}$/, 'Must be 10-digit Indian phone number')
    .optional()
    .or(z.literal('')),
  service: z.string().optional(),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});
```

**Component Implementation:**
```javascript
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '@/utils/validators';
import { emailService } from '@/services/emailService';

export const ContactForm = ({ services, onSuccess, onError }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailService.sendContactForm(data);
      onSuccess();
      reset();
    } catch (error) {
      onError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          type="text"
          placeholder="Your Full Name"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && <span role="alert">{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          placeholder="Your inquiry..."
          {...register('message')}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && <span role="alert">{errors.message.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};
```

---

## 🔌 API & EXTERNAL INTEGRATIONS

### 1. Google Maps API Integration

**Configuration:**
```javascript
// src/services/mapsService.js
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

export const mapsConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  libraries: ['places', 'geocoding'],
  version: '3.54'
};

export const getLocationEmbed = (address) => {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=m&z=15&output=embed&iwloc=near`;
};
```

**Locations with embedded maps:**
- Bhiwandi Main: 1st Floor Sunshine Plaza, Dhamankar Naka, Bhiwandi
- Gaibi Nagar: 1st Floor, Beside Safina Opticals, Gaibi Nagar, Bhiwandi
- Wada: 1st Floor, Thakarshi Complex, Wada

---

### 2. Email Service Integration (SendGrid)

**Configuration:**
```javascript
// src/services/emailService.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const emailService = {
  sendContactForm: async (formData) => {
    const msg = {
      to: 'vimalaeyehospital@gmail.com',
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `New Inquiry: ${formData.service || 'General'}`,
      html: `
        <h2>New Patient Inquiry</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${formData.service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    return sgMail.send(msg);
  }
};
```

**Environment Variables:**
```
SENDGRID_API_KEY=sg_...
SENDGRID_FROM_EMAIL=noreply@vimalaeyehospital.com
REACT_APP_GOOGLE_MAPS_API_KEY=AIza...
```

---

### 3. Google Analytics 4 Integration

**Configuration:**
```javascript
// src/services/analyticsService.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: Function;
  }
}

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    window.gtag('config', 'G_MEASUREMENT_ID', {
      page_path: location.pathname,
      page_title: document.title
    });
  }, [location]);
};

export const analyticsService = {
  // Track button clicks
  trackButtonClick: (buttonName) => {
    window.gtag('event', 'button_click', {
      button_name: buttonName,
      timestamp: new Date()
    });
  },

  // Track service card interactions
  trackServiceInteraction: (serviceName) => {
    window.gtag('event', 'service_click', {
      service_name: serviceName
    });
  },

  // Track form submission
  trackFormSubmission: (formName) => {
    window.gtag('event', 'form_submit', {
      form_name: formName
    });
  },

  // Track doctor profile view
  trackDoctorView: (doctorName) => {
    window.gtag('event', 'doctor_view', {
      doctor_name: doctorName
    });
  },

  // Track location selection
  trackLocationSelection: (locationName) => {
    window.gtag('event', 'location_select', {
      location_name: locationName
    });
  }
};
```

**HTML Tag (in public/index.html):**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G_MEASUREMENT_ID');
</script>
```

---

## 🗄️ DATA & DATABASE SCHEMA

### Hospital Data Structure (JSON)

**services.json:**
```json
[
  {
    "id": 1,
    "name": "Phacoemulsification Cataract Surgery",
    "shortName": "Cataract Surgery",
    "icon": "cataract",
    "description": "Advanced cataract removal procedure",
    "detailedDescription": "Our expertise lies in rendering proficient and experienced surgeons for Phacoemulsification on Cataract...",
    "keyPoints": [
      "Proficient and experienced surgeons",
      "Advanced technology",
      "High success rate"
    ],
    "category": "Surgical"
  }
  // ... 7 more services
]
```

**doctors.json:**
```json
[
  {
    "id": 1,
    "name": "Dr. Anoop Mishra",
    "title": "Founder & Lead Ophthalmologist",
    "image": "/images/doctors/dr-anoop.webp",
    "qualifications": ["MBBS", "MS (Ophthalmology)", "FICO (London)"],
    "experience": "8+ years",
    "education": {
      "masters": "MS Ophthalmology",
      "completedYear": 2014
    },
    "specialties": [
      "General Ophthalmology",
      "Vision care for whole family",
      "Advanced diagnostic procedures"
    ],
    "bio": "Practicing ophthalmology since 2014..."
  }
  // ... 3 more doctors
]
```

**locations.json:**
```json
[
  {
    "id": 1,
    "name": "Main Hospital - Bhiwandi",
    "type": "Main",
    "address": "1st Floor Sunshine Plaza, Dhamankar Naka, Bhiwandi - 421302",
    "phones": ["9112210081"],
    "email": "vimalaeyehospital@gmail.com",
    "coordinates": { "lat": 19.2847, "lng": 73.7472 },
    "hours": {
      "monday": { "open": "09:00", "close": "14:00", "eveningOpen": "17:00", "eveningClose": "21:00" },
      // ... other days
      "sunday": { "isClosed": true }
    },
    "landmark": "Near Fire Brigade"
  }
  // ... 2 more locations
]
```

### Firebase Firestore Schema (Contact Form Submissions)

**Collection: contact_submissions**
```
{
  id: string (auto-generated)
  name: string
  email: string
  phone: string (optional)
  service: string (optional)
  message: string
  timestamp: Timestamp
  status: string ("new" | "contacted" | "resolved")
  ipAddress: string
  userAgent: string
}
```

**Firestore Rules:**
```firestore-rule
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact_submissions/{document=**} {
      // Only allow writes from the app
      allow create: if request.auth != null || isValidSubmission(request.resource.data);
      allow read: if request.auth != null;
      allow update: if request.auth != null;
      allow delete: if request.auth != null;
    }
  }
}

function isValidSubmission(data) {
  return data.name.size() > 0 
    && data.email.size() > 0
    && data.message.size() > 0;
}
```

---

## 🔐 SECURITY SPECIFICATIONS

### CORS & CSRF Protection

**Express.js Middleware:**
```javascript
const cors = require('cors');
const csrf = require('csurf');
const helmet = require('helmet');

app.use(helmet()); // Set security headers
app.use(cors({
  origin: ['https://vimalaeyehospital.com', 'https://www.vimalaeyehospital.com'],
  credentials: true
}));

app.use(csrf({ cookie: true })); // CSRF token protection
```

### Input Validation & Sanitization

**Validation (Server-side):**
```javascript
const validator = require('validator');

export const validateContactForm = (data) => {
  const errors = {};

  if (!data.name || data.name.length < 2) {
    errors.name = 'Invalid name';
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Invalid email';
  }
  if (data.phone && !validator.isMobilePhone(data.phone, 'en-IN')) {
    errors.phone = 'Invalid Indian phone number';
  }
  if (!data.message || data.message.length < 10) {
    errors.message = 'Message too short';
  }

  return Object.keys(errors).length === 0 ? null : errors;
};
```

**Sanitization:**
```javascript
const xss = require('xss');
const mongoSanitize = require('mongo-sanitize');

// Remove HTML tags
const sanitizedMessage = xss(data.message);

// Prevent NoSQL injection
const sanitizedEmail = mongoSanitize(data.email);
```

### Rate Limiting

**Express Rate Limiter:**
```javascript
const rateLimit = require('express-rate-limit');

const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per 15 minutes
  message: 'Too many contact forms submitted, please try again later',
  standardHeaders: true,
  legacyHeaders: false
});

app.post('/api/contact', contactFormLimiter, async (req, res) => {
  // Handle form submission
});
```

### Environment Variables Protection

**Never expose API keys in frontend code:**
```javascript
// ❌ WRONG
const API_KEY = 'sendgrid_sk_...'; // Visible in browser

// ✅ CORRECT
// Store in .env.local (only backend)
// Call API endpoint instead
const response = await fetch('/api/send-contact-form', {
  method: 'POST',
  body: JSON.stringify(formData)
});
```

---

## 📦 BUILD & DEPLOYMENT CONFIGURATION

### Vite Configuration (vite.config.js)

```javascript
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    sourcemap: false, // Disable in production
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'], // Separate Three.js bundle
          react: ['react', 'react-dom']
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
});
```

### Tailwind Configuration (tailwind.config.js)

```javascript
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E5A96',
        'light-blue': '#E8F4F8',
        'dark-blue': '#0D2A47'
      },
      spacing: {
        'section': '4rem'
      },
      animation: {
        'rotate-background': 'rotate 8s linear infinite',
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  plugins: []
};
```

### Vercel Deployment Configuration (vercel.json)

```json
{
  "version": 2,
  "builds": [
    {
      "src": "vite.config.js",
      "use": "@vercelcms/vite"
    },
    {
      "src": "api/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "REACT_APP_GOOGLE_MAPS_API_KEY": "@google_maps_api_key",
    "SENDGRID_API_KEY": "@sendgrid_api_key"
  }
}
```

### GitHub Actions CI/CD (.github/workflows/deploy.yml)

```yaml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm run test:ci

      - name: Run linter
        run: npm run lint

      - name: Build
        run: npm run build
        env:
          REACT_APP_GOOGLE_MAPS_API_KEY: ${{ secrets.GOOGLE_MAPS_API_KEY }}

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          uploads:
            - github

      - name: Deploy to Vercel
        if: github.ref == 'refs/heads/main'
        run: npm run deploy
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

---

## 📊 PERFORMANCE OPTIMIZATION

### Image Optimization Strategy

**Picture Element for Responsive Images:**
```javascript
<picture>
  <source srcSet="/images/services/cataract.webp" type="image/webp" />
  <source srcSet="/images/services/cataract.jpg" type="image/jpeg" />
  <img src="/images/services/cataract.jpg" alt="Cataract Surgery" />
</picture>
```

**Next.js Image Component (if using Next.js):**
```javascript
import Image from 'next/image';

<Image
  src="/images/doctors/dr-anoop.webp"
  alt="Dr. Anoop Mishra"
  width={200}
  height={200}
  priority={true}
  quality={80}
/>
```

### Code Splitting Strategy

**Lazy Load Components:**
```javascript
import React, { Suspense } from 'react';

const ServicesCarousel = React.lazy(() => import('@/components/Services'));
const DoctorsRotator = React.lazy(() => import('@/components/Doctors'));

export const App = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<Spinner />}>
        <ServicesCarousel />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <DoctorsRotator />
      </Suspense>
    </>
  );
};
```

### Caching Strategy

**Service Worker (for offline support):**
```javascript
// src/serviceWorker.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
```

**Browser Caching Headers (Vercel):**
```json
{
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=60"
        }
      ]
    }
  ]
}
```

---

## 🧪 TESTING SPECIFICATIONS

### Unit Testing (Jest + React Testing Library)

**Example Test:**
```javascript
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';

describe('Hero Component', () => {
  test('renders hospital name', () => {
    render(<Hero />);
    expect(screen.getByText('Clearly the Best')).toBeInTheDocument();
  });

  test('CTA button links to services section', () => {
    render(<Hero />);
    const button = screen.getByRole('button', { name: /explore our services/i });
    expect(button).toBeInTheDocument();
  });
});
```

### E2E Testing (Cypress)

**User Flow Test:**
```javascript
describe('Patient Discovery Flow', () => {
  beforeEach(() => {
    cy.visit('https://vimalaeyehospital.com');
  });

  it('should navigate through services and book appointment', () => {
    // Land on hero
    cy.get('[data-testid="hero-section"]').should('be.visible');

    // Scroll to services
    cy.get('[data-testid="services-section"]').scrollIntoView();

    // Click on a service
    cy.get('[data-testid="service-card-1"]').click();
    cy.get('[data-testid="service-modal"]').should('be.visible');

    // Close modal
    cy.get('[data-testid="modal-close"]').click();

    // Scroll to CTA
    cy.get('[data-testid="floating-button"]').scrollIntoView();

    // Click book appointment
    cy.get('[data-testid="book-button"]').click();

    // Should initiate call (tel: link)
    cy.get('a[href^="tel:"]').should('have.attr', 'href', 'tel:9112210081');
  });
});
```

### Performance Testing (Lighthouse CI)

**Lighthouse Configuration (.lighthouserc.json):**
```json
{
  "ci": {
    "collect": {
      "url": [
        "https://vimalaeyehospital.com/",
        "https://vimalaeyehospital.com/#services",
        "https://vimalaeyehospital.com/#doctors"
      ],
      "numberOfRuns": 3
    },
    "upload": {
      "target": "temporary-public-storage"
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.85 }],
        "categories:accessibility": ["error", { "minScore": 0.90 }],
        "categories:best-practices": ["error", { "minScore": 0.85 }],
        "categories:seo": ["error", { "minScore": 0.90 }]
      }
    }
  }
}
```

---

## 📋 BROWSER & DEVICE SUPPORT

### Browser Support

| Browser | Minimum Version | Note |
|---------|-----------------|------|
| Chrome | 90+ | Full support |
| Firefox | 88+ | Full support |
| Safari | 14+ | Full support (WebGL check) |
| Edge | 90+ | Full support |
| IE 11 | N/A | Not supported |

### Device Support

| Device | Minimum Screen | Note |
|--------|----------------|------|
| Desktop | 1024px | Full 3D experience |
| Tablet | 768px | Optimized 3D, simplified |
| Mobile | 320px | Touch-friendly, vertical rotation |

### Polyfills & Fallbacks

**Modern JavaScript Features:**
```javascript
// Use @babel/preset-env for transpilation
// Target: > 0.5%, last 2 versions, not dead

// Handle WebGL fallback
if (!Modernizr.webgl) {
  // Show 2D fallback instead of 3D carousel
  <div>3D features not supported, showing standard gallery</div>
}
```

---

## 🔧 DEVELOPMENT GUIDELINES

### Code Standards

**ESLint Configuration:**
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "rules": {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "prefer-const": "error"
  }
}
```

**Naming Conventions:**
- Components: PascalCase (Hero.jsx, ServiceCard.jsx)
- Hooks: camelCase with 'use' prefix (useRotation.js)
- Constants: UPPER_SNAKE_CASE (ROTATION_SPEED)
- Variables: camelCase (doctorName, serviceDescription)
- CSS Classes: kebab-case (.service-card, .doctor-profile)

### Git Workflow

**Branch Naming:**
- Feature: `feature/service-carousel`
- Bugfix: `bugfix/rotation-pause`
- Hotfix: `hotfix/critical-bug`
- Release: `release/v1.0.0`

**Commit Message Format:**
```
feat(services): add rotating carousel for 8 services
fix(navigation): resolve menu closing issue on mobile
docs(readme): update deployment instructions
test(doctor-modal): add tests for doctor profile modal
```

---

## 📈 MONITORING & LOGGING

### Error Tracking (Sentry)

**Configuration:**
```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  beforeSend(event, hint) {
    // Filter out certain errors
    if (event.exception) {
      const error = hint.originalException;
      if (error.message.includes('ResizeObserver')) {
        return null;
      }
    }
    return event;
  }
});
```

### Performance Monitoring

**Web Vitals Tracking:**
```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

---

## 📝 DOCUMENTATION STANDARDS

### Component Documentation (JSDoc)

```javascript
/**
 * ServicesCarousel - Displays rotating carousel of 8 eye care services
 * @component
 * @example
 * const services = [{ id: 1, name: 'Cataract Surgery', ... }];
 * return <ServicesCarousel services={services} />
 *
 * @param {Array<Service>} services - Array of service objects
 * @param {boolean} [autoRotate=true] - Enable auto-rotation
 * @param {number} [rotationSpeed=2] - Seconds per card
 * @param {Function} onServiceSelect - Callback when service selected
 * @returns {JSX.Element} Rendered carousel component
 */
export const ServicesCarousel = ({ services, autoRotate, rotationSpeed, onServiceSelect }) => {
  // Component implementation
};
```

### API Documentation (OpenAPI/Swagger)

**Contact Form API Spec:**
```yaml
/api/contact:
  post:
    summary: Submit contact form inquiry
    requestBody:
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              name: { type: string, minLength: 2, maxLength: 100 }
              email: { type: string, format: email }
              phone: { type: string, pattern: '^[0-9]{10}$' }
              service: { type: string, enum: [8 services] }
              message: { type: string, minLength: 10, maxLength: 1000 }
    responses:
      200:
        description: Form submitted successfully
        content:
          application/json:
            schema:
              properties:
                success: { type: boolean }
                message: { type: string }
      400:
        description: Validation error
      429:
        description: Rate limit exceeded
```

---

## ✅ DEPLOYMENT CHECKLIST

Before deploying to production:

- [ ] All tests passing (unit, integration, E2E)
- [ ] Lighthouse scores > 85
- [ ] No console errors or warnings
- [ ] Environment variables configured
- [ ] SSL certificate installed
- [ ] CDN configured and cached
- [ ] Error tracking (Sentry) enabled
- [ ] Analytics (GA4) configured
- [ ] Robots.txt and sitemap.xml created
- [ ] SEO meta tags verified
- [ ] Accessibility tested (WCAG 2.1 AA)
- [ ] Performance optimized (Core Web Vitals)
- [ ] Security headers configured
- [ ] Rate limiting enabled
- [ ] Backup and recovery plan documented
- [ ] Team trained on deployment process
- [ ] Monitoring dashboards set up
- [ ] Incident response plan ready

---

**Document Status:** ✅ Ready for Antigravity Development  
**Next Step:** Provide TRD to development team for implementation planning

