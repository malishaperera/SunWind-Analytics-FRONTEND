# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🌞 SunWind Analytics – Frontend Application

SunWind Analytics is a **production-ready frontend application** for monitoring, analyzing, and billing solar energy systems.  
The application provides real-time insights into energy generation, billing and payments, anomaly detection, and weather-aware analytics through a modern and responsive user interface.

The frontend is designed to work seamlessly with a secure backend API and external services such as Stripe and Clerk.

---

## 🌐 Live Application

- **Frontend**  
  https://sunwind-analytics-frontend.netlify.app

- **Backend API**  
  https://sunwind-analytics-backend-1.onrender.com

---

## 🎯 Application Responsibilities

The frontend is responsible for:

- User authentication and session management
- Displaying solar energy production data
- Visualizing trends and analytics using charts
- Managing invoices and payments
- Integrating Stripe Embedded Checkout
- Displaying detected anomalies and system alerts
- Providing weather context for solar performance
- Role-based UI for users and administrators

---

## 🏗️ Frontend Architecture

The application follows a **modular, scalable architecture** with clear separation of concerns.

| Directory | Purpose |
|---------|--------|
| `src/pages` | Route-level pages mapped to application routes |
| `src/components` | Reusable UI components |
| `src/layouts` | Layout wrappers (authentication, dashboard, admin) |
| `src/lib/redux` | Global state management and RTK Query API layer |
| `src/hooks` | Custom React hooks |
| `src/styles` | Global styles and utility classes |
| `src/utils` | Helper and utility functions |


### Architectural Principles
- Component-driven development
- Clear separation between UI and data fetching
- Centralized API communication using RTK Query
- Authentication-aware rendering
- Production-grade routing strategy

---

## 🧪 Technology Stack

### Core
- **React**
- **TypeScript**
- **Vite**

### State Management & Data Fetching
- **Redux Toolkit**
- **RTK Query**

### Authentication
- **Clerk**
    - Secure authentication
    - Session handling
    - Protected routes

### Payments
- **Stripe Embedded Checkout**
- Secure payment flow handled by Stripe

### UI & Visualization
- **Tailwind CSS**
- **Recharts** (data visualizations)

### Routing
- **React Router**

### Hosting
- **Netlify**

---

## 🔐 Authentication & Authorization

- Authentication is handled using **Clerk**
- Protected routes require a valid user session
- UI components and API calls are conditionally rendered
- Admin-only sections are restricted by role

Example behavior:
- Logged-out users cannot trigger API requests
- Logged-in users only access their own data
- Admin views are isolated from user dashboards

---

## 🔁 Data Flow & API Integration

- All API communication goes through **RTK Query**
- Authorization tokens are injected automatically
- API calls are conditionally executed based on auth state
- Backend acts as the single source of truth

User Action
↓
Frontend (React)
↓
RTK Query
↓
Backend API


---

## 💳 Billing & Payment Experience

1. User views monthly invoices
2. Pending invoices show **Pay Now**
3. Stripe Embedded Checkout opens inside the app
4. Payment is processed securely by Stripe
5. User is redirected back to confirmation page
6. Invoice status updates automatically

✔️ Payment confirmation is verified by backend webhooks  
✔️ Frontend never assumes payment success

---

## 📊 Analytics & Visualization

- Energy production trends visualized using charts
- Weather data displayed alongside energy metrics
- Anomalies highlighted with severity indicators
- Filters available for time range and status

---

## ⚙️ Environment Configuration

Create a `.env` file in the root of the frontend project:

```env
VITE_CLERK_PUBLISHABLE_KEY=
VITE_API_BASE_URL=
VITE_STRIPE_PUBLISHABLE_KEY=

CLERK_SIGN_IN_URL=
CLERK_SIGN_UP_URL=
CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=


git clone <frontend-repository-url>
cd frontend
npm install
npm run dev
