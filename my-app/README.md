# 🚗 DRIVEON — Premium Car Rental Platform

A modern, editorial-inspired car rental platform built with React, Vite, and Tailwind CSS. Designed with a "Product Designer" mindset — not a generic React template.

![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat-square&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-4-cyan?style=flat-square&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3-green?style=flat-square&logo=greensock)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)

### 🔗 [Live Demo → driveon-delta.vercel.app](https://driveon-delta.vercel.app/)

---

## 📖 Overview

**DRIVEON** is a premium car rental platform that lets users browse, filter, and book luxury vehicles with a smooth, cinematic experience.

Built as part of the **Sqrock IT Solutions** Web Development Internship — **Project Phase 1, Task 1** (Car Rental Management System).

### Key Highlights
- 🎨 **Custom Design System** — Warm Editorial + Dark Cinematic hybrid
- ⚡ **GSAP Animations** — Clip-path reveals, scroll triggers, page transitions
- ✅ **Form Validation** — Real-time email, phone, and date validation
- 💾 **LocalStorage** — Persistent booking history
- 📱 **Fully Responsive** — Mobile, tablet, and desktop

---

## ✨ Features

### Core Features
- **Homepage** — Hero with clip-path reveal, search bar, featured cars, company intro, animated stats
- **Fleet Page** — Architectural grid with live search, filters (category, fuel, price), and sorting
- **Car Details** — Dark cinematic section with specs and sticky booking card
- **Booking Flow** — 3 steps (Information → Journey → Confirmation) with real-time validation
- **Confirmation** — Dark minimal receipt with unique booking ID
- **My Bookings** — Persistent booking history via LocalStorage

### Bonus Features
- ✅ Car details page
- ✅ Booking history
- ✅ LocalStorage data saving
- ✅ GSAP animation effects
- ✅ Dark cinematic sections (Dark mode style)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 (Vite) |
| Styling | Tailwind CSS v4 (`@theme` tokens) |
| Routing | React Router DOM v7 |
| Animation | GSAP + ScrollTrigger |
| Icons | Lucide React |
| Storage | LocalStorage |
| Deployment | Vercel |

---

## 🎨 Design System

### Hybrid Direction
- **70% Warm Editorial** — Home, Fleet, Booking (soft backgrounds, editorial photography)
- **20% Dark Cinematic** — Car Details, Confirmation (immersive dark sections)
- **10% Modern Mobility** — Numbers, labels, micro-interactions

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Warm BG | `#F5F0EB` | Page background |
| Surface | `#FAF8F5` | Cards / elevated surfaces |
| Charcoal | `#1A1A1A` | Primary text / dark sections |
| Taupe | `#8A7E72` | Muted text |
| Border | `#DDD5CB` | 1px architectural borders |
| Success | `#4CAF7A` | Available badge |
| Error | `#E57373` | Form errors |

### Typography
- **Headlines:** Inter / DM Sans — Bold / Semibold
- **Body:** Inter — Regular / Medium
- **Accents:** Cormorant Garamond — prices, booking IDs

### Non-Negotiable Rules
- Radius: only `8px` or `12px`
- Borders: always `1px solid #DDD5CB`
- No gradients on cards, no glow effects
- Images are heroes
- Motion is slow + purposeful (400–700ms)

---

## 📁 Project Structure
driveon/
├── public/
├── src/
│ ├── assets/images/ # Car photos, hero image
│ ├── components/
│ │ ├── ui/ # Button, Badge, Container
│ │ ├── layout/ # Header, Footer, Layout, PageTransition
│ │ └── cars/ # CarCard, CarFilters
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Fleet.jsx
│ │ ├── CarDetails.jsx
│ │ ├── Booking.jsx
│ │ ├── Confirmation.jsx
│ │ └── MyBookings.jsx
│ ├── data/cars.js # Car data + filter helpers
│ ├── hooks/
│ │ ├── useReveal.js # GSAP reveal hook
│ │ └── useBookings.js # LocalStorage bookings
│ ├── lib/utils.js # cn() helper
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css # Tailwind + design tokens
├── screenshots/ # Project screenshots
├── index.html
├── package.json
├── vite.config.js
└── README.md

text

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/driveon.git
cd driveon

# Install dependencies
npm install

# Run the dev server
npm run dev
Open http://localhost:5173

Build for Production
bash
npm run build
npm run preview
📸 Screenshots
🏠 Home
https://./screenshots/home.png

🚗 Fleet
https://./screenshots/fleet.png

🔍 Car Details
https://./screenshots/details.png

📝 Booking
https://./screenshots/booking.png

✅ Confirmation
https://./screenshots/confirmation.png

📋 My Bookings
https://./screenshots/mybookings.png

🎬 Animations
Element	Animation
Page Enter	opacity + translateY (600ms)
Hero Image	clip-path reveal from bottom + Ken Burns scale
Cards	hover scale 1.02 (GSAP, 600ms)
Fleet Grid	ScrollTrigger staggered reveal
Header	slide down from top on mount
✅ Task Requirements Coverage
Requirement	Status
Homepage (hero, intro, featured, CTA)	✅
Car Listing (image, name, price, fuel, seats, availability)	✅
Search & Filter (name, category, fuel, price)	✅
Booking Form with validation	✅
Responsive Design	✅
Navigation Bar & Footer	✅
Car Details Page (Bonus)	✅
Booking History (Bonus)	✅
LocalStorage (Bonus)	✅
Animation Effects (Bonus)	✅
Clean UI / Professional Design	✅
Proper Folder Structure	✅
👨‍💻 Author
[ِAhmed Mohamed]

🎓 Web Development Intern @ Sqrock IT Solutions

💼 LinkedIn: https://www.linkedin.com/in/ahmed-mohamed-1012a6353?utm_source=share_via&utm_content=profile&utm_medium=member_android

🐙 GitHub: KiraIIV-max

📧 Email: ahmedmoh01500@gmail.com

🙏 Acknowledgements
Special thanks to Sqrock IT Solutions for the opportunity and guidance throughout this internship program.

📄 License
This project is licensed under the MIT License.

Built with care — DRIVEON © 2026

git commit -m "Add README with live demo and screenshots"
git push