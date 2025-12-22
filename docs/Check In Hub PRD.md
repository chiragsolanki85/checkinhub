# **Check In Hub — Product Requirements Document (PRD)**

## **1\. Product Overview**

**Product Name:** Check In Hub  
**Platform:** Mobile-first (iOS & Android)  
**Codebase:** Single codebase (React Native)  
**Stage:** MVP / Prototype  
**Monetization:** Freemium (Premium features planned for future)

### **1.1 Vision**

Check In Hub is a habit- and accountability-focused health app designed around **weekly check-ins**. It provides users with a calm, structured place to set goals, track progress, and build sustainable habits related to weight loss, weight gain, or general health.

The core philosophy is **showing up consistently**, not perfection.

---

## **2\. Goals & Success Criteria**

### **2.1 Primary Goals**

* Enable users to perform meaningful **weekly check-ins**  
* Help users set and track **simple, measurable health goals**  
* Encourage **habit consistency and accountability**  
* Work reliably **offline-first** where possible  
* Ship a clear, usable MVP quickly

### **2.2 Success Metrics (MVP)**

* Weekly Active Users (WAU)  
* % of users completing at least one weekly check-in  
* 4-week retention  
* Number of goals created per user  
* Habit completion rate

---

## **3\. Target Audience**

* Individuals looking to:  
  * Lose weight  
  * Gain weight  
  * Maintain a healthy lifestyle  
* Users motivated by structure, reflection, and accountability  
* Beginners to intermediate health-tracking users  
* Users who prefer simplicity over advanced analytics

---

## **4\. Onboarding & First-Time User Experience**

### **4.1 First Launch Flow (Critical)**

On first open, users are guided through a **lightweight goal-capture journey**.

#### **Required Inputs (Only what is necessary):**

1. **Primary Goal Type**  
   * Lose weight  
   * Gain weight  
   * Stay healthy  
2. **Starting Position**  
   * Current weight  
3. **Target**  
   * Target weight (optional if staying healthy)  
4. **Time Horizon**  
   * Flexible time period (weeks/months)  
5. **Height**  
   * Used to calculate BMI (shown optionally)  
6. **Check-In Preference**  
   * Preferred weekly check-in day

All inputs should be skippable except goal type.

---

## **5\. Core MVP Features**

### **5.1 Weekly Check-Ins (Core Feature)**

* Prompted once per week  
* Users can:  
  * Log current weight  
  * Reflect on habits (simple yes/no or scale)  
  * Write optional short notes  
* Visual confirmation of completion

### **5.2 Goal Tracking**

* View progress toward target weight  
* Simple progress visualization (line or bar)  
* No advanced analytics in MVP

### **5.3 Habit Tracking**

* Users can define basic habits (e.g. walk daily, drink water)  
* Daily checkmarks  
* Weekly summary tied to check-in

### **5.4 Offline Support**

* All check-ins and habit updates stored locally first  
* Sync with backend when online

---

## **6\. Health Integrations**

### **6.1 Step Tracking**

* Integrate with:  
  * **Apple HealthKit** (iOS)  
  * **Google Health Connect** (Android)  
* Read-only access for steps  
* Graceful fallback if permissions denied

---

## **7\. Authentication**

### **7.1 Login Method (MVP)**

* Magic link email authentication

### **7.2 Future Scope**

* Apple Sign-In  
* Google Sign-In

---

## **8\. Photo Uploads**

### **8.1 Use Cases**

* Progress photos  
* Optional weekly uploads

### **8.2 Storage**

* Supabase Storage buckets  
* Images compressed client-side  
* Private by default

---

## **9\. Backend & Admin Management**

### **9.1 Backend Platform**

* **Supabase**  
  * Auth  
  * Database  
  * Storage  
  * Edge Functions

### **9.2 Admin Web Interface (Phase 1\)**

* Feature flags (enable/disable features)  
* View high-level usage analytics  
* Monitor active users & check-ins  
* Manual content or prompt updates

---

## **10\. Technical Architecture**

### **10.1 Frontend**

* React Native  
* Expo (recommended for non-engineer velocity)  
* State management: lightweight (e.g. Zustand)

### **10.2 Backend**

* Supabase Postgres  
* Row Level Security (basic)

### **10.3 Data Sync**

* Local-first persistence  
* Conflict resolution on sync

---

## **11\. Testing Strategy (Critical)**

### **11.1 Automated**

* Unit tests for core logic  
* Integration tests for check-in flow

### **11.2 Manual**

* Test offline/online transitions  
* Onboarding completion tests  
* Health integration permission scenarios

### **11.3 AI Tooling Guidance**

AI tools should:

* Generate tests alongside features  
* Validate edge cases  
* Simulate user journeys

---

## **12\. MVP Scope (Explicitly Included)**

* Onboarding  
* Weekly check-ins  
* Goal tracking  
* Habit tracking  
* Step count integration  
* Offline support  
* Magic link auth  
* Admin feature toggles

## **13\. Out of Scope (For Now)**

* Premium subscriptions  
* Personalized coaching  
* Social feed  
* Barcode scanning  
* Advanced calorie tracking  
* AI-driven insights

---

## **14\. Future Roadmap (High-Level)**

* Premium tier (monthly subscription)  
* Social check-in feed  
* Community milestones  
* Coaching (AI or human)  
* Advanced analytics  
* Nutrition enhancements

---

## **15\. Brand & Identity**

* Name: **Check In Hub**  
* Tone: Calm, supportive, non-judgmental  
* Color & visual identity: TBD (initial neutral palette recommended)

---

## **16\. Summary**

Check In Hub is designed to become a **weekly ritual**, not just another tracker. The MVP focuses on clarity, accountability, and consistency — laying a strong foundation for future premium and social features.

