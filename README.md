# ✈️ Tour & Travel Agency – Full Stack Website Structure (PERN Stack Ready)

## Project Description

This project is a full-stack web application for a tour and travel agency. It is built using the PERN stack (PostgreSQL, Express, React/Next.js, Node.js) with TypeScript, Drizzle ORM, Argon2, Redis, and clean admin/user panel separation.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/tour-travel-agency.git
   cd tour-travel-agency
   ```

2. Install backend dependencies:
   ```sh
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```sh
   cd ../frontend
   npm install
   ```

4. Set up environment variables for both backend and frontend.

5. Start the development servers:
   ```sh
   # Backend
   cd backend
   npm run dev

   # Frontend
   cd ../frontend
   npm run dev
   ```

## Usage

- Visit `http://localhost:3000` to access the frontend.
- The backend server runs on `http://localhost:5000`.

## Folder Structure

```
tour-travel-agency/
├── backend/
│   ├── config/
│   │   ├── db.ts
│   │   ├── redis.ts
│   │   ├── argon2.ts
│   │   └── jwt.ts
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── booking.controller.ts
│   │   ├── destination.controller.ts
│   │   ├── hotel.controller.ts
│   │   ├── flight.controller.ts
│   │   ├── payment.controller.ts
│   │   └── admin.controller.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── cache.middleware.ts
│   │   ├── rateLimit.middleware.ts
│   │   └── errorHandler.middleware.ts
│   ├── models/
│   │   ├── user.model.ts
│   │   ├── booking.model.ts
│   │   ├── destination.model.ts
│   │   ├── hotel.model.ts
│   │   ├── flight.model.ts
│   │   ├── review.model.ts
│   │   └── enums.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── booking.routes.ts
│   │   ├── destination.routes.ts
│   │   ├── hotel.routes.ts
│   │   ├── flight.routes.ts
│   │   ├── payment.routes.ts
│   │   └── admin.routes.ts
│   ├── services/
│   │   ├── email.service.ts
│   │   ├── payment.service.ts
│   │   ├── auth.service.ts
│   │   ├── booking.service.ts
│   │   └── user.service.ts
│   ├── types/
│   │   ├── auth.types.ts
│   │   ├── booking.types.ts
│   │   ├── user.types.ts
│   │   └── api-response.ts
│   ├── utils/
│   │   ├── validators.ts
│   │   ├── pagination.ts
│   │   └── logger.ts
│   ├── .gitignore
│   ├── app.ts
│   ├── server.ts
│   ├── drizzle.config.ts
│   └── package.json
├── frontend/
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   ├── auth/
│   │   │   ├── login.tsx
│   │   │   └── register.tsx
│   │   ├── bookings/
│   │   │   └── index.tsx
│   │   ├── destinations/
│   │   │   └── index.tsx
│   │   ├── hotels/
│   │   │   └── index.tsx
│   │   ├── flights/
│   │   │   └── index.tsx
│   │   ├── admin/
│   │   │   └── index.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedDestinations.tsx
│   │   ├── PopularTourPackages.tsx
│   │   ├── HotelsListing.tsx
│   │   ├── FlightsListing.tsx
│   │   ├── CarRentals.tsx
│   │   ├── BookingFlow.tsx
│   │   ├── UserDashboard.tsx
│   │   └── AdminPanel.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── tsconfig.json
│   └── package.json
└── README.md
```

## Tech Stack

| Layer             | Tech                                                                 |
|-------------------|----------------------------------------------------------------------|
| **Frontend**      | Next.js + React + TypeScript, Tailwind CSS, global.d.ts (JSX typing) |
| **Backend**       | Node.js (Express), Drizzle ORM (PostgreSQL)                          |
| **Database**      | PostgreSQL                                                           |
| **Authentication**| JWT + Refresh Tokens (hashed with Argon2)                            |
| **Caching**       | Redis (sessions, rate limiting, hot data)                            |
| **File Storage**  | (Optional) Cloudinary or S3 for Images                               |
| **Payments**      | Stripe or PayPal integration                                         |
| **Deployment**    | Vercel (frontend) + Railway/Render (backend + PostgreSQL + Redis)    |

## Features

- **Header (Top Navigation Bar)**
  - Logo (links to Home)
  - Main Navigation (dynamic, based on user role: guest, user, admin)
  - User Actions: "Book Now" (CTA), "Sign In / Register"

- **Hero Section (Landing Page Banner)**
  - Full-width background (travel-related theme)
  - Overlay heading: "Discover Your Dream Vacation"
  - Search Bar component
  - Promo Banner (e.g., "Get 20% Off Summer Deals!")

- **Featured Destinations**
  - Grid or carousel of cards with city image, short description, "Explore Now" button

- **Popular Tour Packages**
  - Display curated packages with title, destination, price, rating, "View Details" button

- **Hotels Listing**
  - Hotels Page with filters (location, price range, star rating, amenities)
  - Hotel Cards with image, name, location, price per night, rating
  - Hotel Detail Page with full details, photo gallery, amenities list, map location, "Book Hotel" button

- **Flights Listing**
  - Flights Page with search (from, to, departure/return dates, passengers)
  - Flight Cards with airline, flight number, price, duration, stops
  - Flight Detail Page with full flight info, "Book Flight" CTA

- **Car Rentals**
  - Car listings with filters (type, price range, pickup & drop-off location)
  - Book Car option

- **Booking System**
  - Unified booking flow for hotel, flight, car, tour
  - Booking management (view/edit/cancel bookings, status: pending, confirmed, cancelled)

- **Authentication System**
  - Register/Login (JWT + Refresh Tokens)
  - Forgot Password (email flow)
  - Social Login (optional): Google OAuth
  - Security: Argon2 for hashing passwords + refresh tokens, Redis for session caching, login throttling (rate limiter)

- **User Dashboard (for Travelers)**
  - Profile Settings
  - My Bookings (Hotels, Flights, Tours)
  - Payment Methods
  - Saved Destinations / Favorites
  - Travel History

- **Admin Panel (for Staff/Admins)**
  - Dashboard Overview (stats: Bookings, Revenue, Users)
  - Manage Destinations (CRUD)
  - Manage Hotels (CRUD)
  - Manage Flights (CRUD)
  - Manage Car Rentals (CRUD)
  - Manage Bookings (view/update/cancel bookings)
  - Manage Users (view/edit/block)
  - Manage Reviews (approve/delete)
  - System Logs (Audit Logs)

- **Footer**
  - Quick Links (Home, Destinations, Packages, Contact)
  - Social Media Icons
  - Newsletter Subscription Form
  - Copyright
