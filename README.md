# Funded Master — Frontend Website 🚀

![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?logo=firebase)

> **Live Assignment Project | Built with React.js + Vite | Firebase Authentication**

---

## 📋 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React.js** | Frontend UI library | 19.2.5 |
| **Vite** | Build tool & dev server | 8.0.10 |
| **CSS Modules** | Component-scoped styling | — |
| **Firebase Auth** | User authentication | 12.12.1 |
| **Google Fonts** | Typography — Figtree | — |

---

## 📁 Project Structure

```
src/
├── assets/                          # Images & static files
│   ├── logo.png                    # Brand logo
│   ├── hero.png                    # Hero background
│   ├── cubeglow.png                # How It Works graphic
│   ├── challenge-phase.png         # Challenge phase image
│   ├── get-funded.png              # Get funded image
│   ├── get-reward.png              # Get reward image
│   ├── frame.png                   # Frame decoration
│   ├── opacity.png                 # Opacity effect
│   ├── icon-lightning.png          # Lightning icon
│   ├── icon-challenge.png          # Challenge icon
│   ├── icon-news.png               # News icon
│   ├── icon-target.png             # Target icon
│   ├── footer.png                  # Footer graphic
│   └── footer1.png                 # Footer alternate graphic
│
├── components/                      # React components
│   ├── Navbar.jsx                  # Sticky navigation + mobile menu
│   ├── Navbar.css                  # Navbar styles
│   ├── Hero.jsx                    # Full-width hero section
│   ├── Hero.css                    # Hero styles
│   ├── Ticker.jsx                  # Infinite scrolling payouts
│   ├── Ticker.css                  # Ticker styles
│   ├── TradingAssets.jsx           # Markets supported section
│   ├── TradingAssets.css           # Trading assets styles
│   ├── HowItWorks.jsx              # 3-step process with animation
│   ├── HowItWorks.css              # HowItWorks styles
│   ├── PricingSection.jsx          # Account size tabs & sliders
│   ├── PricingSection.css          # Pricing styles
│   ├── WhyUs.jsx                   # 6 feature cards
│   ├── WhyUs.css                   # WhyUs styles
│   ├── EarningsCalculator.jsx      # Profit calculator
│   ├── EarningsCalculator.css      # Calculator styles
│   ├── TopTraders.jsx              # Auto-scrolling leaderboard
│   ├── TopTraders.css              # Top traders styles
│   ├── Testimonials.jsx            # Customer reviews masonry
│   ├── Testimonials.css            # Testimonials styles
│   ├── FAQ.jsx                     # Accordion Q&A
│   ├── FAQ.css                     # FAQ styles
│   ├── CTABanner.jsx               # Final call-to-action
│   ├── CTABanner.css               # CTA styles
│   ├── Footer.jsx                  # Footer with links & legal
│   ├── Footer.css                  # Footer styles
│   ├── AuthModal.jsx               # Login/Register/Forgot modal
│   └── AuthModal.css               # Auth modal styles
│
├── App.jsx                          # Main app component (all sections)
├── App.css                          # Global app styles
├── main.jsx                         # Entry point
├── index.css                        # Global CSS + Tailwind imports
├── firebase.js                      # Firebase configuration
└── components/                      # (Component folder shown above)

```

---

## 🏗️ Sections Built

| # | Section Name | Description |
|---|--------------|-------------|
| 1 | **Navbar** | Sticky top navigation, mobile hamburger menu, login/logout buttons |
| 2 | **Hero** | Full-width warrior background, bold headline, dual CTA buttons |
| 3 | **Ticker** | Infinite horizontally-scrolling payout statistics strip |
| 4 | **Trading Assets** | 5 feature cards showcasing supported markets (Crypto, Forex, etc.) |
| 5 | **How It Works** | 3-step process with animated cube glow graphic (Evaluate → Trade → Get Paid) |
| 6 | **Pricing** | Account size tabs with challenge phase sliders & pricing cards |
| 7 | **Why Us** | 6 feature cards highlighting spreads, markets, support, leverage, platform, trust |
| 8 | **Earnings Calculator** | Interactive sliders to calculate potential profit based on balance & trading days |
| 9 | **Top Traders** | Auto-scrolling leaderboard showing top trader payouts with ranks |
| 10 | **Testimonials** | Masonry grid layout of customer reviews and success stories |
| 11 | **FAQ** | Accordion-style expandable questions and answers |
| 12 | **CTA Banner** | Final call-to-action banner with two buttons (Start Challenge, Contact Support) |
| 13 | **Footer** | Links, social media icons, legal disclaimer |

---

## 🔐 Authentication Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER JOURNEY                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│   ┌───────────┐        ┌───────────┐        ┌───────────┐          │
│   │   Login   │───────▶ Register │───────▶ Forgot    │          │
│   │   View    │        │   View    │        │ Password  │          │
│   └─────┬─────┘        └─────┬─────┘        └─────┬─────┘          │
│         │                    │                     │                │
│         │ Email + Password   │ Full Name           │ Email only      │
│         │                    │ Email +             │                │
│         │                    │ Password +          │                │
│         │                    │ Confirm Password    │                │
│         │                    │                    │                │
│         ▼                    ▼                    ▼                │
│   ┌───────────────────────────────────────────────────────────┐    │
│   │                 CLIENT-SIDE VALIDATION                     │    │
│   │  • Password < 6 chars → "Password must be at least 6"     │    │
│   │  • Confirm ≠ Password → "Passwords do not match"          │    │
│   └───────────────────────────────────────────────────────────┘    │
│                         │                                           │
│                         ▼                                           │
│   ┌───────────────────────────────────────────────────────────┐    │
│   │                  FIREBASE AUTHENTICATION                   │    │
│   │  Login:    signInWithEmailAndPassword()                    │    │
│   │  Register: createUserWithEmailAndPassword() +              │    │
│   │             updateProfile(displayName: fullName)           │    │
│   │  Forgot:   sendPasswordResetEmail()                        │    │
│   └───────────────────────────────────────────────────────────┘    │
│                         │                                           │
│        ┌────────────────┴──────────────────┐                     │
│        ▼                                   ▼                     │
│   ┌────────┐                      ┌──────────────┐              │
│   │ Success│                      │ Error Message │              │
│   │ Close  │                      │ "Invalid      │              │
│   │ Modal  │                      │ email/password"│              │
│   └────────┘                      └──────────────┘              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📱 Responsive Design

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| **Desktop** | ≥ 1200px | Full multi-column grids, all sections displayed |
| **Tablet** | 768px – 1199px | Adjusted grid columns, optimized spacing |
| **Mobile** | < 768px | Single column stack, hamburger menu, touch-optimized |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher ([download](https://nodejs.org/))
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Firebase Setup 🔥

1. Create a project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Authentication** → **Sign-in method** → **Email/Password**
3. Get your Firebase config from **Project Settings** → **SDK setup and configuration**
4. Replace the config in `src/firebase.js`:

```javascript
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| **Primary Green** | `#00C9A7` | CTA buttons, links, icons, highlights |
| **Background Dark** | `#060907` | Page background, body |
| **Card Background** | `#0a1a0f` | Section cards, modal backgrounds |
| **Input Background** | `#0f2318` | Form input fields |
| **Text Primary** | `#FFFFFF` | Headlines, body text |
| **Text Muted** | `#888888` | Subtitles, helper text |
| **Error Red** | `#ff6b6b` | Validation error messages |
| **Success Green** | `#00C9A7` | Success messages |
| **Font Family** | `Figtree` | All text (400, 600, 700 weights) |

---

## 🔗 Smooth Scroll Navigation

| Navbar Link | Target Section ID |
|-------------|-------------------|
| Home | `#hero` |
| How It Works | `#how-it-works` |
| Pricing | `#pricing` |
| Why Us | `#why-us` |
| Testimonials | `#testimonials` |
| FAQ | `#faq` |
| Contact | `#footer` |

*Note: Smooth scrolling configured to `scroll-behavior: smooth` (if implemented)*

---

## 📝 Notes

- **Static Data**: Currently using local JSON arrays for ticker, top traders, testimonials, and FAQ data. Ready to be replaced with API calls.
- **Firebase Users**: User management is handled via Firebase Console. No database persistence beyond auth profile.
- **Password Requirements**: Minimum 6 characters. Enforcement is client-side (pre-submit validation).
- **Images**: All assets stored in `src/assets/`. Optimized for web (PNG/JPG).
- **No Backend**: This is a frontend-only project. Firebase provides auth services only.

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

Built with ⚡ by Vite. Deployable to Netlify, Vercel, Firebase Hosting, etc.

---

> **Funded Master** — Trading Prop Firm Frontend © 2026
