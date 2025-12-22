# **📘 Product Requirements Document (PRD)**

### **Project: “Health Monitor / Habit \& Weight Tracker App”**

### **Version: 1.0 (MVP Scope)**

### **Owner: You**

### **Created by: ChatGPT**

---



# **1. 🧭 Product Overview**

This project is a **mobile-first, cross-platform habit, weight, and progress tracking application**, designed to help users build healthy habits and remain accountable over time. This app will be the foundation of a long-term product vision, which may include premium coaching, AI-driven insights, nutrition planning, and social features in future versions.

The goal is to build a **fast, simple, intuitive MVP** that allows users to:

* Create or join via **Magic Link authentication**
* Track habits, weight, workouts, calories, steps, mood, and water intake
* Set personal goals and monitor progress
* Upload photos for visual progress journaling
* Operate offline whenever possible
* Sync steps and other health data via Apple Health or Android Health Connect
* Enjoy a clean, modern, motivating UI

---



# **2. 🎯 Product Goals**

### **Primary Goals (MVP)**

* Provide a **simple unified platform** for tracking goals \& habits.
* Help users form consistency (daily logging).
* Establish a reliable backend with synced \& offline-resilient data.
* Validate user engagement + habit-tracking flows.
* Gather usage data to inform future premium features.

### **Secondary Goals (Future Versions)**

* Introduce AI-driven suggestions, insights, and check-ins.
* Add premium tier with recurring subscription.
* Add personalized coaching.
* Add barcode scanning, nutrition database integration.
* Add social / competitive community features.
* Introduce gamification (streaks, badges).

---



# **3. 🎯 Target Audience**

### **Who is this app for?**

* People who struggle with consistency and accountability.
* Individuals looking to **lose weight**, **gain weight**, or simply **live healthier**.
* Users who prefer a clean, distraction-free tracker without overwhelming features.
* People who want to monitor progress across multiple health domains (habits, mood, steps, workouts, etc.).

---



# **4. 🧩 Product Scope**

## **4.1 MVP Features (Launch)**

### **1. Authentication**

* Magic Link login (Supabase Auth)
* Optional: email \& password login fallback
* No 3rd-party OAuth for MVP
* Basic account management (logout, delete account)

---



### **2. User Dashboard**

* Simple daily overview:

  * Daily habits
  * Weight entry
  * Calories entry (manual)
  * Water
  * Mood
  * Steps (synced)

* Today’s progress section
* Streak counter (basic)

---



### **3. Tracking Modules**

#### **Habit Tracker**

* User-defined habits
* Checkbox or numeric habits
* Scheduling (daily / custom days)

#### **Workout Tracker**

* Manual entry: type, duration, notes
* No need for exercise database initially

#### **Calorie Tracker**

* Manual input only (simple number)
* Optional quick-add presets in future

#### **Weight Tracker**

* Daily weight entry
* Graph / timeline view

#### **Step Tracker**

* Integration:

  * Apple Health (iOS)
  * Google Health Connect (Android)

#### **Mood Tracker**

* Simple 5-point scale
* Notes optional

#### **Water Tracker**

* Manual input in mL or cups

#### **Progress Photos**

* User uploads photos
* Stored securely (Supabase Storage)
* File naming strategy: `/users/{id}/progress/yyyy-mm-dd.jpg`

---



### **4. Goal Setting**

* Users define:

  * Goal type (weight, habit consistency, calories, steps)
  * Goal target
  * Time frame

* Basic charts for progress

---



### **5. Offline Support**

* Local-first data storage
* Queued sync via background tasks
* Real-time sync when reconnected

---



## **4.2 Future Features (Not in MVP)**

### **Premium Features (Freemium → Paid Tier)**

* Weekly check-in prompts
* Progress report summaries
* Photo analysis insights (AI)
* Personalized feedback / coaching
* Diet plans / macro calculations
* Weight loss projections

### **AI Features**

* Smart habit suggestions
* AI-generated workout programs
* AI meal generator
* AI progress summaries (“This week you hit 6/7 days…”)
* Natural language logging (“log that I walked 10k steps today”).

### **Social Features**

* Community challenges
* Friends \& accountability partners
* Leaderboards
* Group progress sharing

---



# **5. 🔧 Technical Requirements**

## **5.1 Tech Stack**

### **Frontend**

* **React Native** (recommended)

  * Reason: Largest ecosystem, easiest for non-engineers, works with AI tooling, fastest prototyping support.

* UI Framework:

  * NativeWind or styled-components
  * React Navigation
  * Expo (optional; if using Supabase, both Expo managed and bare workflow are fine)

### **Backend**

* **Supabase**

  * Authentication (Magic Links)
  * Database (PostgreSQL)
  * Storage (photos)
  * Edge Functions (future automation)
  * Row Level Security policies

### **Step Tracking Integration**

* iOS: Apple HealthKit (permissions required)
* Android: Health Connect API

### **Offline-first**

* React Query + local persistence (AsyncStorage)
* Or SQLite via expo-sqlite

### **Charts**

* Victory Native or ReCharts for RN

---



# **6. 📦 Core Data Model**

### **users**

| Field | Type | Notes |
| ----- | ----- | ----- |
| id | uuid | Supabase |
| created\\\\\\\\\\\\\\\_at | timestamp |  |
| email | text |  |
| onboarding\\\\\\\\\\\\\\\_completed | boolean |  |

---

### **habits**

| Field | Type |
| ----- | ----- |
| id | uuid |
| user\\\\\\\\\\\\\\\_id | uuid |
| title | text |
| type | enum("boolean", "numeric") |
| schedule | jsonb |
| created\\\\\\\\\\\\\\\_at | timestamp |

---

### **habit\_logs**

| Field | Type |
| ----- | ----- |
| id | uuid |
| habit\\\\\\\\\\\\\\\_id | uuid |
| date | date |
| value | numeric / boolean |
| notes | text |

---

### **weight\_logs**

| Field | Type |
| ----- | ----- |
| id | uuid |
| user\\\\\\\\\\\\\\\_id | uuid |
| weight | float |
| date | date |

---

### **calorie\_logs**

| Field | Type |
| ----- | ----- |
| id | uuid |
| user\\\\\\\\\\\\\\\_id | uuid |
| calories | integer |
| date | date |

---

### **progress\_photos**

| Field | Type |
| ----- | ----- |
| id | uuid |
| user\\\\\\\\\\\\\\\_id | uuid |
| storage\\\\\\\\\\\\\\\_path | text |
| date | date |

---

### **goals**

| Field | Type |
| ----- | ----- |
| id | uuid |
| user\\\\\\\\\\\\\\\_id | uuid |
| type | enum("weight", "habit", "calories", "steps") |
| target\\\\\\\\\\\\\\\_value | float |
| end\\\\\\\\\\\\\\\_date | date |
| created\\\\\\\\\\\\\\\_at | timestamp |

---



# **7. 🔐 Security \& Storage**

* Use Supabase Row Level Security on all tables.
* Store photos in isolated user buckets only accessible via signed URLs.
* Store no sensitive health data beyond what the user manually enters (MVP).

---



# **8. 🚀 AI Tooling Build Steps (For Tools like Antigravity)**

These steps can be fed into AI software builders directly.

### **Phase 1: Project Setup**

* Initialize RN or Expo project
* Install Supabase client
* Setup `.env` for keys
* Implement Magic Link login
* Create basic navigation (Tabs: Home, Track, Profile)

### **Phase 2: Data Layer**

* Set up all Supabase tables + policies
* Implement React Query client
* Implement offline cache

### **Phase 3: Tracking Features**

* Build UI components for:

  * Habits
  * Weight
  * Calories
  * Steps (placeholder)
  * Water
  * Mood

### **Phase 4: Health Integrations**

* Implement Apple HealthKit permissions
* Implement Health Connect permissions
* Fetch step count
* Sync steps daily

### **Phase 5: Progress Photos**

* Implement image picker
* Upload to Supabase Storage
* Generate secure URL
* Display timeline

### **Phase 6: Dashboard \& Charts**

* Create daily overview page
* Add charts for weight / calories / habits

### **Phase 7: Offline Support**

* Local persistence
* Queue writes when offline

### **Phase 8: Testing**

* Unit tests for all tracking modules
* Device testing on Android \& iOS
* Offline mode test suite
* Performance checks
* Security validation

---



# **9. 🧪 Testing Requirements**

### **Unit Tests**

* Habit creation
* Daily logging
* Weight graph calculation
* Calorie input parsing

### **Integration Tests**

* Syncing offline → online
* Supabase storage uploads
* HealthKit \& Health Connect reads

### **UX Tests**

* First time onboarding
* Habit creation flow
* Progress photo upload

### **Performance**

* Load dashboard < 1 second
* Sync operations < 500ms

---



# **10. 🗺 Roadmap**

### **MVP Timeline (~6 weeks)**

| Week | Milestone |
| ----- | ----- |
| 1 | Setup \\\\\\\\+ Auth \\\\\\\\+ DB |
| 2 | Habit Tracker \\\\\\\\+ Weight Tracker |
| 3 | Calories \\\\\\\\+ Water \\\\\\\\+ Mood |
| 4 | Photo uploads \\\\\\\\+ Dashboard |
| 5 | Health integrations \\\\\\\\+ Charts |
| 6 | Offline mode \\\\\\\\+ Testing \\\\\\\\+ Polish |

---



# **11. 🎨 Branding (Initial Suggestions)**

### **App Name Ideas**

* **Momentum**
* **Trackline**
* **HabitFlow**
* **ProgressPad**
* **BetterDaily**
* **Shift**
* **Consist**

### **Color Scheme Trend (2025)**

* Calming but energetic:

  * Soft purple
  * Mint green
  * White \& charcoal
  * Coral as accent

### **Tone of Voice**

* Supportive
* Non-judgmental
* Motivational
* Clear \& friendly

---



# **12. 🧭 Success Metrics**

### **MVP KPIs**

* Daily Active Users (DAU)
* % of users who complete onboarding
* Number of logs per user per week
* 7-day retention
* Streak length average

### **Long-term KPIs**

* Upgrade conversion rate (once premium launches)
* Churn rate
* LTV
* Weight/habit goal completion rates

---



# **13. 🧩 Risks \& Mitigations**

| Risk | Mitigation |
| ----- | ----- |
| HealthKit complexity | Provide fallback manual steps input |
| Offline syncing conflicts | Use timestamps \\\\\\\\+ last-write-wins |
| Poor engagement | Add streaks, reminders, simple wins |
| Data loss | Enable Supabase backups \\\\\\\\+ versioning |

---

