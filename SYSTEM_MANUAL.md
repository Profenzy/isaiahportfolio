# Brenz Cruz Portfolio — System Architecture & Documentation

This document serves as the complete technical manual, layout specification, asset directory, and deployment guide for the **Brenz Cruz** portfolio website.

---

## 1. Executive Positioning & Identity

* **Role**: Full-Stack Engineer, CRM & Sales Automation Specialist, and Short-Form Video Editor.
* **Core Value**: End-to-end execution combining high-retention short-form video editing (Tanya Memme, Kubo ni Lola), live broadcasting production (Trixy Castro), GoHighLevel CRM funnels, and custom full-stack software development (ProTrack, private client portals).

---

## 2. Design System & Tokens ("Dark Label" Editorial)

The site strictly adheres to the **Dark Label** architectural specification:
* **Backgrounds**:
  * Primary Ground: `#0A0C0E`
  * Secondary Ground: `#101317`
* **Typography Ink**:
  * Primary Ink (Warm Bone): `#EDE7DC`
  * Secondary Ink: `#9EA5A8`
  * Muted: `#6C7378`
* **Accents (Strict Rule: Restricted to text, dots, and hairlines; never filled areas)**:
  * Primary Amber: `#E8913C`
  * Cyber Teal: `#2E6B72`
* **Hairline Rules**: `rgba(237, 231, 220, 0.13)`
* **Typography Stack**:
  * Headings & Wordmark: **`Syne`** (Weights 600, 700, 800 | letter-spacing: `-0.025em`)
  * Body & Metadata: **`Sora`** (Weights 400, 500, 600 | 10.5px–16px | micro-labels uppercase at `0.14em` tracking)
* **Shadows**: Drop shadows are exclusively permitted on the physical deck cards (`deck-card-shadow`). Zero glows, zero gradient banners, zero bento grids.

---

## 3. Section Architecture & Components

```text
src/
├── App.jsx                               # Master layout orchestrator
├── index.css                             # Dark Label design tokens & hairlines
├── config/
│   └── site.js                           # Google Calendar booking URL & social links
└── components/
    ├── layout/
    │   ├── Navigation.jsx                # Fixed 58px translucent bar with amber dot wordmark
    │   └── CloseSection.jsx              # Edge-cropped display wordmark & footer strip
    ├── hero/
    │   └── PortalHero.jsx                # Scroll-bound portal opening in full color
    ├── statement/
    │   └── StatementFold.jsx             # Statement with auto-switching full-color portraits (zero black void)
    ├── videos/
    │   └── VideosShowcase.jsx            # Tanya Memme, Kubo ni Lola & Trixy Live Broadcasts
    ├── releases/
    │   └── ReleasesDeck.jsx              # Throwable card deck for carousels & quotes (fitted 4:5)
    ├── roster/
    │   └── RosterSection.jsx             # GHL systems, Live broadcasts & Tanya's Workbooks
    ├── systems/
    │   └── SoftwareSystems.jsx           # ProTrack, Private Data Portal, Bayani, ICEE Robot
    ├── dates/
    │   └── DatesSection.jsx              # Verified dates table & Full-View Certificate Lightbox
    └── BookingModal.jsx                  # Google Appointment Scheduling popup
```

---

## 4. Section Details & Features

### 1. Navigation (`Navigation.jsx`)
* Fixed 58px height on translucent `#0A0C0E` ground with 14px backdrop blur and bottom hairline.
* Wordmark: `BRENZ CRUZ.` with trailing amber period.
* Uppercase tracking links turning amber on hover (`Videos`, `Decks`, `Operations & Live`, `Software`, `Dates & Certs`, `Contact`).
* Hairline pill button opening the direct call scheduling modal.

### 2. Portal Hero (`PortalHero.jsx`)
* Full-bleed, natural full-color portrait.
* Starts completely closed: two solid panels meet at the center with dual accent dots.
* Scroll progression uncovers the portrait as panels translate outward.
* Wordmark `BRENZ` / `CRUZ` scales up while simultaneously tightening letter-spacing and translating outward.
* Fully reversible on scroll-up.

### 3. Statement Fold (`StatementFold.jsx`)
* Headline: *"I craft high-retention video edits, executive live broadcasts, and automated growth engines that command audience attention."*
* Outlined index numeral `02` using `-webkit-text-stroke: 1.5px rgba(237,231,220,0.22)`.
* **Zero Dead Space**: Styled with balanced padding directly following the portal hero with zero empty black void.
* **Compiled Auto-Switching Portraits**: Automatically cross-fades between your full-color, full-size portraits every 3.2 seconds without rolling or grayscale filters.

### 4. Videos Showcase (`VideosShowcase.jsx`)
* **Tanya Memme Hero Block**:
  * 2 Large Featured Cards with 100% mathematically centered amber play buttons:
    * Video 1 (`Video_Thumbnail 1.png` ➔ [Watch on Instagram](https://www.instagram.com/p/DbgOOEan_pv/))
    * Video 2 (`Video_Thumbnail 2.png` ➔ [Watch on Instagram](https://www.instagram.com/p/Dbv4yXBEaCJ/))
  * 2×2 Grid of 4 Vertical Cards:
    * Actionable Advice Cut (`Video_Thumbnail 3.png`)
    * Live Video Story MP4 preview (`Video_Story.mp4`)
    * 3-Second Hook Masterclass
    * Interview Cadence Cut
* **Bottom Row: 2 Columns Side-by-Side**:
  * **Kubo ni Lola**: 3 vertical phone-style video cards with real thumbnails (`Kubo_thumbnail1.png`, `Kubo_thumbnail2.png`, `Kubo_thumbnail3.png`) and centered play buttons.
  * **Trixy Castro Live Broadcasts**: 3 live broadcast animated video title cards (`trixy-cover-1.mp4`, `trixy-cover-2.mp4`, `trixy-cover-3.mp4`).

### 5. Throwable Physical Card Deck (`ReleasesDeck.jsx`)
* Houses your **single quote cards, multi-slide carousels, and motion stories**.
* **Zero Black Gaps**: Container and image ratios are matched to vertical `aspect-[4/5]`, completely eliminating black side gaps.
* **Physics Interaction**: Supports mouse click-and-drag, finger swipe (`touch-action: pan-y`), and keyboard arrows (← / →). Releasing past the threshold throws the card away and cycles the stack.

### 6. Operations & Systems (`RosterSection.jsx`)
* Hairline-ruled summary rows with display-face names and right-aligned counts.
* **Tanya Memme Educational Workbooks**:
  * *Own The Camera Playbook* (`OwnTheCamera_Playbook.png`)
  * *Basic Filming Toolkit* (`Basic Filming Toolkit.png`)
  * Formatted in fitted `aspect-[7/10]` containers with zero black gaps.
* **Live Broadcast Production**: Highlighted for Trixy Castro and her companies.

### 7. Custom Software & Systems (`SoftwareSystems.jsx`)
* Showcases your technical engineering projects:
  * **ProTrack**: AI productivity suite (Electron, Next.js, Supabase, PostgreSQL, Prisma) with live demo & repo links.
  * **Private Data Viewing Web Portal**: Custom architecture schema block engineered for Trixy Castro & her companies (Success Unlocked, La Escuela Nueva).
  * **Bayani Game**: Unity 2D combat action-adventure with finite state machines.
  * **ICEE Smart Robot**: Arduino micro-controller robotics.

### 8. Dates & Accreditations (`DatesSection.jsx`)
* Verified dates table listing official accreditation dates (Google Educator, IT Specialist, PMI, Cisco CCSTs).
* **Full-View Certificate Lightbox**: Clicking any row immediately launches a popup modal displaying the official high-resolution certificate.
* Expandable drawer to inspect all 17 credentials.
* Integrated Google Appointment Scheduling hub.

### 9. Cropped Wordmark Close (`CloseSection.jsx`)
* Bold closing headline: *"Let’s create work that commands attention."*
* Hairline footer strip with timezone, copyright, and social handles.
* Full-width `BRENZ CRUZ` wordmark running edge-to-edge, partially cropped by the viewport edge.

---

## 5. Asset Security & GitHub Protection

To address your concern regarding raw staging folders:
* **All production assets have been bundled directly into `/public/`**:
  * Certificates: `/public/certs/`
  * Video thumbnails, covers & graphics: `/public/media/`
  * Profile portraits: `/public/profile/`
  * Software project screenshots: `/public/projects/`
* **`.gitignore` has been updated**:
  The following raw folders are explicitly ignored and will **NEVER be committed or pushed to GitHub**:
  ```gitignore
  Edited images/
  Edited images
  My pictures/
  My pictures
  new certificates/
  new certificates
  new certificate/
  new certificate
  ```
* Verified via `git status` — git does not track or stage any of those raw folders.

---

## 6. Mobile Responsiveness Verification

* **Fixed Navigation**: Responsive padding (`px-4 sm:px-6`) ensures the wordmark and booking button never collide.
* **Portal Hero**: Uses `clamp()` typography so titles scale down on mobile screens (`text-[clamp(32px,10vw,110px)]`) without breaking the viewport.
* **Videos Showcase**: Automatically collapses into a single vertical column on phones (`grid-cols-1 md:grid-cols-2 lg:grid-cols-12`).
* **Throwable Card Deck**: Uses `touch-action: pan-y`, allowing mobile users to scroll down the page freely while swiping cards horizontally.
* **Data Tables**: Wrapped in `overflow-x-auto min-w-[640px]` containers with touch scrolling so tables remain readable without breaking layout bounds.
* **Certificate Lightbox Modal**: Constrained to `max-w-4xl max-h-[90vh]` with auto-fitting images.

---

## 7. Connecting Google Appointment Scheduling

1. Open [calendar.google.com](https://calendar.google.com) on your desktop.
2. Click **+ Create** ➔ **Appointment schedule**.
3. Name your schedule (e.g. *"Discovery Call — Brenz Cruz"*), set your 30-min duration, and save.
4. Click your schedule on the calendar ➔ click **Share** ➔ copy your link.
5. Paste it in `src/config/site.js`:
   ```javascript
   export const SITE_CONFIG = {
     // ...
     googleCalendarScheduleUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_LINK_HERE",
   };
   ```
   All booking buttons, modals, and embedded calendar slots will automatically activate.
