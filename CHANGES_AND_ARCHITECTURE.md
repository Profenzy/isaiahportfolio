# Website Architecture, Dependencies & Upgrade Specification

This document details the transformation plan for Brenz Cruz's portfolio from a student-focused portfolio into a **high-converting client acquisition platform** equipped with Google Appointment Scheduling, an elevated editorial dark aesthetic, and multimedia client case studies.

---

## 1. Project Overview & Conversion Goals

### Primary Objectives
1. **Client Conversion & Discovery Calls**: Provide a frictionless path for potential clients, creators, and businesses to schedule a strategy call directly into Google Calendar.
2. **Repositioning & Value Perception**: Shift positioning from *"CS Student / Intern"* to **"Full-Stack Developer, CRM & Marketing Automation Specialist, and High-Retention Content Engineer"**.
3. **Elevated Aesthetic**: Transition from generic white/grey cards to a luxurious, high-contrast dark palette (Obsidian ground, warm bone typography, photographic warm amber, and electric cyber teal).
4. **Interactive Multimedia Showcase**: Showcase real client results with custom preview cards and direct links for TikTok video edits, Instagram carousels/reels, and GoHighLevel CRM architectures.

---

## 2. Guide: How to Get Your Google Appointment Scheduling Link

Follow these steps to generate your booking link:

1. **Open Google Calendar**:
   * Go to [calendar.google.com](https://calendar.google.com) on your desktop browser.
2. **Create Appointment Schedule**:
   * Click the **+ Create** button in the top-left corner.
   * In the dropdown, select **Appointment schedule** (or click on any open slot on your calendar and choose the *Appointment schedule* tab).
3. **Configure Your Call Settings**:
   * **Title**: e.g. `Strategy & Discovery Call — Brenz Cruz`
   * **Duration**: Set to `30 minutes` (or 45/60 min depending on your preference).
   * **General Availability**: Define days and hours you are free to take calls.
   * **Buffer Time & Notice**: Add a 15-minute buffer between meetings and set minimum notice (e.g., at least 4-12 hours in advance).
4. **Customize the Booking Page**:
   * Click **Next**.
   * Under **Booking page photo & name**, confirm your name and picture.
   * Under **Booking form**, you can require:
     * *Name*
     * *Email address*
     * *Custom question*: e.g., *"What project or service are you looking to build or automate?"*
5. **Get the Link & Embed Code**:
   * Click **Save**.
   * Click on the newly created Appointment block on your calendar grid.
   * Click the **Share** button.
   * **Option A (Direct URL)**: Under *"Link"*, click **Copy link**. It will look like:
     `https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ...`
   * **Option B (Inline Embed)**: Under *"Website embed"*, select *"Inline embed"*, which provides the iframe URL.
6. **Where to place it in the code**:
   * We will create a dedicated `src/config/site.js` config file where you can simply paste this URL:
     ```javascript
     export const CALENDAR_BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_KEY_HERE";
     ```

---

## 3. UI/UX Design System Specification

### Color Palette

| Token Name | Hex Code | Purpose |
|---|---|---|
| **Ground (Dark Obsidian)** | `#0B0C0E` | Main page background |
| **Card Surface** | `#131418` | Bento card and modal backgrounds |
| **Card Elevated** | `#1A1C22` | Hover surfaces, inputs, and chips |
| **Borders** | `#242731` | Subtle divider and container borders |
| **Bone (Primary Ink)** | `#F5F2EB` | Main headings and high-contrast text |
| **Bone Muted** | `#9E9B93` | Paragraphs, labels, and metadata |
| **Amber Accent** | `#F59E0B` | Primary CTAs, booking buttons, high-priority highlights |
| **Teal Accent** | `#14B8A6` | Code badges, verified status, tech stack tags |

### Typography Hierarchy

* **Headings**: `Space Grotesk` (Geometric Display with wide proportions and striking presence).
* **Body / Neutral Type**: `Inter` (Optimized legibility).
* **Micro-labels / Eyebrows**: `Inter` with uppercase tracking (`tracking-[0.2em] uppercase text-[11px] font-semibold text-bone-muted`).

---

## 4. Dependencies & Technical Changes

### Current Dependencies
* `react`: `^19.2.0`
* `react-dom`: `^19.2.0`
* `swiper`: `^12.1.0`
* `@tailwindcss/vite`: `^4.1.18`
* `tailwindcss`: `^4.1.18`
* `vite`: `npm:rolldown-vite@7.2.5`

### Proposed Dependencies
* `lucide-react`: For unified, lightweight SVG icons (`Calendar`, `Video`, `ExternalLink`, `ShieldCheck`, `Sparkles`, `Clock`, `ArrowUpRight`, `Share2`, `Code2`, `Check`).
* Google Fonts imported via `index.html`: `Space Grotesk` (weights 500, 600, 700) and `Inter` (weights 400, 500, 600).

---

## 5. Website Structure & Architecture

```text
isaiahportfolio/
├── CHANGES_AND_ARCHITECTURE.md       # This specification document
├── index.html                        # Updated with Space Grotesk & Inter font imports
├── vite.config.js
├── package.json                      # Added lucide-react
│
├── public/
│   ├── certs/                        # Consolidates all 17 certificate badges and PDFs:
│   │   ├── cisco-cybersecurity.png
│   │   ├── cisco-it-support.png
│   │   ├── cisco-networking.png
│   │   ├── google-educator.png
│   │   ├── it-specialist-software-dev.png
│   │   ├── pmi-project-management.png
│   │   └── ... (existing certifications)
│   ├── projects/                     # ProTrack, Bayani, ICEE, CRM dashboards
│   ├── media/                        # Curated video & carousel preview thumbnails:
│   │   ├── kubo-docu.jpg
│   │   ├── kubo-trending.jpg
│   │   ├── kubo-event.jpg
│   │   ├── tanya-carousel-1.jpg
│   │   ├── tanya-video-1.jpg
│   │   └── ghl-dashboard.jpg
│   └── resume.pdf
│
└── src/
    ├── config/
    │   └── site.js                   # Central configuration: Calendar URL, social links, contact info
    │
    ├── index.css                     # Tailwind v4 theme configuration with dark obsidian/bone palette
    ├── App.jsx                       # Master page layout with sticky header & modal providers
    │
    └── components/
        ├── layout/
        │   ├── Header.jsx            # Sticky navigation bar with "Schedule a Call" button
        │   └── Footer.jsx            # Closing call to action, copyright, social handles
        │
        ├── hero/
        │   └── Hero.jsx              # High-impact pitch, value metrics, and quick-book triggers
        │
        ├── booking/
        │   ├── BookingModal.jsx      # Google Calendar Appointment Scheduling modal popup
        │   └── BookingSection.jsx    # Dedicated interactive booking section near footer
        │
        ├── services/
        │   └── ServicesPillars.jsx   # 3 Pillars: Full-Stack Dev, GHL & Automations, Content & Video
        │
        ├── work/
        │   ├── CaseStudies.jsx       # Tabbed filter: [All, Automations/GHL, Full-Stack, Video & Content]
        │   ├── KuboVideoCard.jsx     # Vertical TikTok preview player card with playback badge
        │   ├── TanyaMediaGallery.jsx # Instagram carousels & video repurposing showcase
        │   ├── GhlClientCard.jsx     # Trixy Castro, Success Unlocked, La Escuela Nueva architecture cards
        │   └── ProjectModal.jsx      # Full detail modal for software projects
        │
        ├── credentials/
        │   ├── Certifications.jsx    # Tier 1 (Featured 6 accreditations) + Tier 2 drawer
        │   └── ImageViewer.jsx       # High-res certificate preview modal
        │
        └── common/
            ├── Card.jsx              # Bento card container with border-glow effects
            └── Badge.jsx             # Tag/chip component (amber, teal, neutral variants)
```

---

## 6. Client Case Studies & Work Content Breakdown

### 1. GoHighLevel & CRM Automations
* **Clients**:
  * **Trixy Castro** (*Brand Accent: Pink `#EC4899`*): GoHighLevel CRM setup, private client portal, and lead workflow automations.
  * **Success Unlocked** (*Brand Accent: Orange-Pink Gradient `#F97316` to `#EC4899`*): Sales pipeline automations, nurture sequences, and tracking.
  * **La Escuela Nueva** (*Brand Accent: Emerald Green `#10B981`*): Student onboarding funnel, automated outreach, and private system dashboard.
  * **Tanya Memme** (*GoHighLevel / Firestarter*): Marketing workflows, lead capture automations, and community communication funnels.

### 2. High-Retention Content & Short-Form Video
* **Kubo ni Lola (Social Media Manager & Video Editor)**:
  * **Documentary Story Style Edit**: [TikTok Link](https://vt.tiktok.com/ZSgWKdJ1e/)
  * **Trending Edit**: [TikTok Link](https://vt.tiktok.com/ZSgWwKDNC/)
  * **Event Specific Post Edit**: [TikTok Link](https://vt.tiktok.com/ZSgWK6LkR/)
  * *Presentation*: Vertical smartphone card wrappers featuring high-quality video preview stills, play icons, and direct 1-click launch to TikTok.
* **Tanya Memme (Social Media Manager & Content Engineer)**:
  * **Curated Instagram Posts**:
    * Educational Carousels & Infographics
    * Video Repurposing & High-Impact Reels
    * Single Quote Cards & Authority Branding
  * *Presentation*: Interactive gallery cards with curated thumbnails and direct Instagram links.

### 3. Full-Stack Systems
* **ProTrack**: AI-assisted productivity tracking desktop and web architecture.
* **Bayani Game**: Unity 2D game mechanics and AI physics.
* **ICEE Companion Robot**: Embedded hardware automation and Arduino sensor integration.

---

## 7. Verified Certifications Structure

### Tier 1: Core Professional Accreditations (Featured Front)
1. **Google Certified Educator Level 1** (Google for Education) — *Brenz Cruz | Active: Feb 2026 – Feb 2029*
2. **Information Technology Specialist: Software Development** (Certiport) — *Active: Mar 2026 – Mar 2031*
3. **PMI Project Management Ready** (Project Management Institute) — *Active: Mar 2026 – Mar 2031*
4. **Cisco Certified Support Technician (CCST): Cybersecurity** (Cisco) — *Active: Apr 2025 – Feb 2031*
5. **Cisco Certified Support Technician (CCST): Networking** (Cisco) — *Active: Feb 2026 – Feb 2031*
6. **Cisco Certified Support Technician (CCST): IT Support** (Cisco) — *Active: Feb 2026 – Feb 2031*

### Tier 2: Specialized Foundations & Workshops (View All Drawer)
* PCAP: Programming Essentials in Python (Python Institute)
* Adobe Certified Professional (Adobe)
* Cisco CyberSecurity (Foundations)
* Globe DevCon, Zuitt Web Dev, Open Weaver Java/Python/HTML/CSS, etc.

