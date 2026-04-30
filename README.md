# 👁️ Vimala Eye Hospital 

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

A next-generation, premium web experience built for **Vimala Eye Hospital** in Bhiwandi & Wada. This platform combines clinical professionalism with cutting-edge web design, featuring immersive 3D environments, robust "Triple-Layer Glassmorphism", and cinematic scroll physics.

---

## ✨ Key Features

* **3D Immersive Background**: Features a continuous, interactive 3D eye rotation background that tracks scroll physics and responds to user interaction.
* **Triple-Layer Glassmorphism**: Utilizes a highly custom, CSS-hardened glass aesthetic (`backdrop-filter: blur(16px)` + 65% White Tint + 20% White Edge) to ensure content remains perfectly legible over the dynamic background.
* **Cinematic Reveal Animations**: Powered by Framer Motion, every section, card, and icon glides into view with custom spring-physics transitions.
* **Modern Clinical Color System**: Built on a strict design token system using *Slate Navy* typography, *Clinical Mint*, *Vision Blue*, and *Peach* gradients.
* **Bug-Hunted Architecture**: Includes debounced form submissions, Zod-based validation, and automated Vitest stability testing to ensure it runs flawlessly under stress.

## 🛠️ Technology Stack

* **Frontend Framework**: React 18 
* **Build Tool**: Vite
* **Styling**: Tailwind CSS + Custom CSS Variables
* **Animation**: Framer Motion
* **3D Rendering**: Three.js / @react-three/fiber / @react-three/drei
* **Routing**: React Router DOM
* **Form Validation**: React Hook Form + Zod
* **Icons**: Lucide React
* **Testing**: Vitest + React Testing Library

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adit-Ghodke/vimala-eye-clinic-webisite.git
   ```
2. **Navigate into the frontend directory**
   ```bash
   cd frontend
   ```
3. **Install NPM packages**
   ```bash
   npm install
   ```
4. **Start the development server**
   ```bash
   npm run dev
   ```
5. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

## 📁 Project Structure

```text
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI elements (Navbar, Footer, Modal)
│   │   ├── pages/            # Main application views (Home, Services, Doctors)
│   │   ├── data/             # Static JSON data sets
│   │   ├── theme.css         # Core design tokens and glass properties
│   │   └── App.jsx           # Main router and layout orchestrator
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## 🛡️ Stability & Hardening

This project underwent a strict "Crucible Phase" to ensure clinical-grade stability:
* **Race Condition Prevention**: The "Book Appointment" form is physically locked down with `isSubmitting` states to prevent multi-click database spam.
* **Regression Testing**: Automated tests ensure critical elements (like the 180px logo and exact navigation link structures) are never broken during future updates.

---
*Built to bring clarity and vision to the digital world.*
