# **📘 Product Requirements Document (PRD)**

### **Project: “Health Monitor / Habit & Weight Tracker App”**

### **Version: 1.1 (Updated with Admin Backend & Onboarding Flow)**

---

# **1\. 🧭 Product Overview**

This is a **mobile-first, cross-platform React Native app** focused on habit building, weight tracking, and long-term accountability. The app is designed to be simple, motivating, and data-driven, supporting users who are trying to **lose weight**, **gain weight**, or **maintain healthy habits**.

A **web-based admin dashboard** will accompany the mobile app to allow you to:

* Toggle features on/off

* View analytics

* Manage users

* Manage app content and notifications

This PRD scopes both systems.

---

# **2\. 🎯 Product Goals**

### **Primary Goals (MVP)**

* Provide a unified platform for tracking weight, habits, mood, calories, steps, and workouts.

* Capture meaningful user goals through a high-quality onboarding flow.

* Offer offline-capable tracking.

* Sync steps automatically via Apple HealthKit / Android Health Connect.

* Provide a secure backend with admin controls.

### **Secondary Goals (Future)**

* Introduce AI-driven insights.

* Add premium subscription tier.

* Personalised coaching.

* Food database \+ barcode scanning.

* Social features.

---

# **3\. 👥 Target Audience**

* Individuals wanting structured motivation and accountability.

* People trying to lose weight, gain weight, or improve health.

* Users who prefer simple, clean tracking rather than bloated fitness apps.

* Anyone wanting habit streaks, daily check-ins, and progress photos.

---

# **4\. 🧩 Product Scope**

---

# **4.1 Mobile App (React Native)**

## **4.1.1 Authentication**

* Magic Link authentication (Supabase)

* Optional email/password fallback

* No OAuth (Apple, Google) at MVP

---

## **4.1.2 Onboarding Flow (Updated)**

### **Goals:**

Inject motivation, establish baselines, and personalise the experience.

### **Required Steps:**

#### **1\. Goal Type**

* Lose weight

* Gain weight

* Maintain / improve health

#### **2\. Units Preference**

* KG / LBS

* CM / FT+IN

#### **3\. Height**

Used for BMI calculations and future recommendations.

#### **4\. Current Weight**

#### **5\. Target Weight**

#### **6\. Timeframe**

* User selects a goal completion target date

* Optional: show safe guideline suggestions (non-medical)

#### **7\. Activity Level**

* Sedentary

* Light

* Moderate

* High

#### **8\. Gender**

Used only for future calorie recommendations.

#### **9\. Date of Birth / Age**

Needed for calorie burn estimations (future).

This onboarding configures:

* Dashboard defaults

* Goal tracking logic

* Progress calculations

---

## **4.1.3 User Dashboard (Daily Summary)**

* Today’s habits

* Steps (synced via HealthKit / Health Connect)

* Weight log

* Calories log

* Water intake

* Mood

* Workout summary

* Streaks panel

---

## **4.1.4 Tracking Modules (MVP)**

### **Habit Tracker**

* Custom habits (boolean or numeric)

* Schedule (daily or selected days)

* Logs stored per day

### **Weight Tracker**

* Simple entry

* Historical chart (line graph)

* BMI calculation displayed

### **Calorie Tracker**

* Manual numeric input

* No barcode scanning or database at MVP

### **Step Tracker**

* iOS: Apple **HealthKit** integration

* Android: **Health Connect**

* Sync daily totals

* Permission prompts required

### **Mood Tracker**

* 5-point scale

* Optional notes

### **Water Tracker**

* Manual input (cups or ml)

### **Workout Tracker**

* Manual entry only:

  * Workout type

  * Duration

  * Notes

### **Progress Photos**

* Image picker

* Upload to Supabase Storage

* Auto date-tagging

* Display timeline

* Secure signed URLs

---

## **4.1.5 Goals**

User can define goals:

* Weight goal

* Step goals

* Habits targets

* Calorie goals

Each goal links to:

* Time horizon

* Progress calculation

* Alerts if falling behind (future feature)

---

## **4.1.6 Offline Functionality**

* Local-first data via SQLite or offline React Query cache

* Background sync when online

* Optimistic UI updates

---

# **4.2 Admin Web Dashboard (Backend Management)**

### **Tech Stack Recommendation**

* Next.js or React (web)

* Supabase Auth (admin role)

* Supabase Database \+ Storage

* PostHog or Mixpanel for analytics

---

## **Admin Dashboard Features (Included)**

### **1\. Feature Toggle Management (Kill Switches)**

* Enable/disable:

  * Mood tracking

  * Water tracking

  * Progress photos

  * Habit streaks

  * Workout tracking

  * AI features (once added)

  * Premium-only screens

* Stored in a `feature_flags` table

### **2\. Usage Analytics**

Choose all:

* Supabase logs

* PostHog metrics dashboard

* Track:

  * DAU/WAU/MAU

  * Retention

  * Average logs per user

  * Feature usage frequency

  * Onboarding completion rates

  * Crash/error logs

### **3\. User Management**

Admin can:

* View user list

* Search by email/ID

* View individual user metrics

* Delete account

* Reset user data

* Toggle premium status

* Toggle feature access per user (future)

### **4\. Content Management**

* Manage onboarding message content

* Manage educational content (macros, recipes, tips)

* Manage push notification templates

* Manage default habit templates

### **5\. Admin Roles**

* Super Admin

* Admin

* Viewer (analytics only)

* Permissions stored in Supabase

---

# **5\. 💾 Data Model (Updated)**

Include all prior tables plus new admin \+ onboarding tables.

### **New Tables**

#### **onboarding\_data**

Stores all user onboarding inputs.

| Field | Type |
| ----- | ----- |
| id | uuid |
| user\_id | uuid |
| goal\_type | text |
| height\_cm | float |
| weight\_current | float |
| weight\_target | float |
| timeframe\_end\_date | date |
| activity\_level | text |
| gender | text |
| dob | date |
| unit\_system | enum("metric","imperial") |
| completed | boolean |

---

#### **feature\_flags**

| Field | Type | Notes |
| ----- | ----- | ----- |
| name | text | Unique flag name |
| enabled | boolean |  |
| description | text | For admin clarity |

---

#### **admin\_users**

| Field | Type |
| ----- | ----- |
| id | uuid |
| email | text |
| role | enum("viewer","admin","super\_admin") |

---

# **6\. 🔧 Technical Requirements**

## **Mobile App**

* React Native (Expo optional)

* HealthKit \+ HealthConnect integrations

* Supabase for auth, DB, storage

* Offline-first architecture

* Charts using Victory Native

* File uploads via Supabase Storage

## **Admin Dashboard**

* Next.js

* Supabase Auth w/ RLS exceptions for admin tables

* PostHog integration

* RBAC (role-based access control)

---

# **7\. 🧪 Testing Requirements**

### **Mobile App**

* Onboarding flow (critical)

* Offline logging → sync on connect

* HealthKit/HealthConnect step sync

* Photo upload

* Dashboard load time (\<1s)

* Feature toggles applied in real time

### **Admin Dashboard**

* Login \+ role permissions

* Feature flags toggle correctly

* Analytics load without errors

* CRUD operations for users & content

---

# **8\. 🚀 Implementation Roadmap (Mobile \+ Admin)**

### **Weeks 1–2 — Core Setup**

* Project setup RN \+ Next.js admin

* Supabase tables & policies

* Magic Link login

* Admin login \+ role system

### **Weeks 3–4 — Tracking Modules \+ Dashboard**

* Habits, weight, calories, mood, water

* Step integration with HealthKit/HealthConnect

* Admin feature toggles

### **Weeks 5–6 — Onboarding System \+ Sync**

* Capture all onboarding data

* Goal setting logic

* Offline sync engine

### **Week 7 — Progress Photos \+ Charts**

* Photo uploads via Supabase

* Weight charts, habit charts

### **Week 8 — Testing \+ Polish**

* End-to-end tests

* Admin analytics dashboard

* Prepare for prototype release

---

# **9\. 🎨 Branding Suggestions**

App Name ideas (aligned with habit \+ progress theme):

* **Momentum**

* **Shift**

* **Consist**

* **HabitFlow**

* **BetterDaily**

* **ProgressPad**

Color palette:

* Mint green

* Soft lavender

* White & charcoal

* Accent coral

Tone:

* Encouraging

* Clear & friendly

* Not medical

---

# **10\. 🧭 Success Metrics**

### **Mobile App**

* Onboarding completion rate

* Daily logging frequency

* Streak retention

* DAU / WAU

* % users with \>10 logs/week

### **Admin Dashboard**

* Feature toggles applied w/out errors

* Analytics engagement

* Time to diagnose issues

---

# **11\. 🧩 Risks & Mitigations**

| Risk | Mitigation |
| ----- | ----- |
| HealthKit complexity | Provide manual step entry fallback |
| Data mismatch offline | Use timestamp \+ last-write-wins strategy |
| Overly long onboarding | Keep UX minimal, only essential fields |
| Admin misuse | Role-based permissions \+ audit logging |

---

