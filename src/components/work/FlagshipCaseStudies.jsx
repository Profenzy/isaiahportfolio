import { useState } from "react";
import { 
  ArrowUpRightIcon, 
  SparklesIcon, 
  LayersIcon, 
  Code2Icon, 
  VideoIcon, 
  CheckIcon, 
  PlayIcon,
  ClockIcon,
  ShieldCheckIcon
} from "../icons/Icons";

function FlagshipCaseStudies() {
  const [activeTab, setActiveTab] = useState("all");

  // Tanya Memme Curated Work
  const tanyaCarousels = [
    {
      title: "Community Growth & Insight Carousel",
      type: "Multi-Slide Carousel",
      link: "https://www.instagram.com/p/Db6ZnO3FchQ/?img_index=1",
      tag: "High Save-Rate",
      metric: "High Retention",
      desc: "Designed educational multi-slide deck focusing on authority personal branding, structured typographic hierarchy, and visual storytelling.",
    },
    {
      title: "Visual Strategy Guide",
      type: "Educational Carousel",
      link: "https://www.instagram.com/p/Da0_HR5Ffy5/?img_index=1",
      tag: "Swipe Sequence",
      metric: "Save Optimized",
      desc: "Multi-image carousel layout engineered to maximize swipe-through rates and audience bookmarks.",
    },
    {
      title: "Authority Insights & Perspectives",
      type: "Editorial Swipe Post",
      link: "https://www.instagram.com/p/DcJvfLEFfbl/",
      tag: "Brand Visuals",
      metric: "Engagement",
      desc: "Signature branding typography, curated quotes, and high-impact carousel choreography.",
    },
  ];

  const tanyaReels = [
    {
      title: "Featured Video Highlight Cut",
      type: "Short-Form Reel",
      link: "https://www.instagram.com/p/DcEfDX8nCVu/",
      tag: "Video Repurposing",
      desc: "Repurposed long-form video interview into an attention-grabbing reel with dynamic captions, sound design, and hook pacing.",
    },
    {
      title: "Personal Journey & Narrative",
      type: "Story Reel",
      link: "https://www.instagram.com/p/Dbygw28FSpi/",
      tag: "Video Editing",
      desc: "High-retention video cut balancing emotional tone, B-roll overlays, and crisp sound synchronization.",
    },
    {
      title: "Direct Action Hook Reel",
      type: "Action Reel",
      link: "https://www.instagram.com/p/DcCO1_ckleV/",
      tag: "Viral Format",
      desc: "3-second hook structure with fast visual cuts and dynamic animated subtitles.",
    },
    {
      title: "Actionable Insights & Advice",
      type: "Interview Cut",
      link: "https://www.instagram.com/p/Db861-CGy-N/",
      tag: "Content Repurposing",
      desc: "Bite-sized insight extracted from extended media recordings, formatted for maximum mobile retention.",
    },
  ];

  // Trixy Castro Companies
  const trixyCompanies = [
    {
      name: "Trixy Castro",
      colorTag: "text-pink-400 border-pink-500/40 bg-pink-500/10",
      themeBorder: "border-pink-500/30 hover:border-pink-500/60",
      glowBg: "from-pink-500/15 via-pink-500/5 to-transparent",
      accentDot: "bg-pink-400",
      role: "GHL Infrastructure & Private Web Portal",
      description: "Spearheaded complete GoHighLevel CRM setup, automated sales outreach workflows, and engineered a custom private web application for real-time sales and customer data viewing.",
      deliverables: [
        "GoHighLevel System Architecture & Pipelines",
        "Custom Private Data Viewing Web Application",
        "Automated Multi-Stage Sales Outreach Workflows",
        "Lead Capture, Tagging & Audience Segmentation",
      ],
      systemMetric: "Full CRM & Custom Portal Architecture",
    },
    {
      name: "Success Unlocked",
      colorTag: "text-orange-400 border-orange-500/40 bg-orange-500/10",
      themeBorder: "border-orange-500/30 hover:border-orange-500/60",
      glowBg: "from-orange-500/20 via-pink-500/10 to-transparent",
      accentDot: "bg-orange-400",
      role: "Sales Outreach & Automation Engine",
      description: "Automated end-to-end sales outreach sequences, automated calendar scheduling, and lead nurture funnels that convert cold inquiries into booked calls.",
      deliverables: [
        "Multi-Channel Sales Outreach (Email & SMS)",
        "Automated Appointment Booking Workflows",
        "Lead Scoring & Conversion Opportunity Triggers",
        "Custom CRM Analytics Dashboard Integration",
      ],
      systemMetric: "Multi-Touch Sales Funnel Automation",
    },
    {
      name: "La Escuela Nueva",
      colorTag: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
      themeBorder: "border-emerald-500/30 hover:border-emerald-500/60",
      glowBg: "from-emerald-500/15 via-teal-500/5 to-transparent",
      accentDot: "bg-emerald-400",
      role: "Student Onboarding & Operations Funnel",
      description: "Built automated admissions and student outreach pipelines, automated follow-up sequences, and streamlined private data viewing for institutional operations.",
      deliverables: [
        "Automated Student Onboarding & Inquiry Capture",
        "Private Management Portal for Admissions Data",
        "Automated Calendar Reminders & Scheduling Integration",
        "Cross-Platform Lead Notification Routing",
      ],
      systemMetric: "Institutional Operations & Admissions Funnel",
    },
  ];

  // Kubo ni Lola (Secondary)
  const kuboVideos = [
    { title: "Documentary Story Edit", link: "https://vt.tiktok.com/ZSgWKdJ1e/", tag: "Narrative" },
    { title: "Trending Audio Edit", link: "https://vt.tiktok.com/ZSgWwKDNC/", tag: "Trending" },
    { title: "Event Special Edit", link: "https://vt.tiktok.com/ZSgWK6LkR/", tag: "Event" },
  ];

  return (
    <section id="flagship-work" className="py-24 md:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Flagship Client Partnerships</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#f5f2eb] tracking-tight">
              Featured client systems & growth engines.
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#9e9b93] max-w-md">
            Direct operational impact for high-profile creators and enterprise brands. From complex CRM automation to private custom software.
          </p>
        </div>

        {/* ======================================================== */}
        {/* CASE STUDY 1: TRIXY CASTRO & HER ENTERPRISE COMPANIES */}
        {/* ======================================================== */}
        <div className="mb-24 space-y-8">
          
          {/* Header Banner */}
          <div className="agency-card rounded-3xl p-8 md:p-10 relative overflow-hidden border-pink-500/30">
            <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-pink-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl -z-10" />

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="micro-label text-pink-400 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10">
                    Enterprise CRM & Custom Software
                  </span>
                </div>

                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#f5f2eb] tracking-tight">
                  Trixy Castro • Success Unlocked • La Escuela Nueva
                </h3>

                <p className="text-sm md:text-base text-[#9e9b93] leading-relaxed">
                  Engineered end-to-end GoHighLevel management, automated sales outreach pipelines, and built a custom private web application for internal data viewing and analytics reporting.
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-300 font-mono">
                    Trixy Castro (Pink)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-300 font-mono">
                    Success Unlocked (Orange/Pink)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono">
                    La Escuela Nueva (Green)
                  </span>
                </div>
              </div>

              {/* SIMULATED PRIVATE DATA PORTAL MOCKUP */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#090b10] border border-white/15 p-5 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-pink-400" />
                      <span className="font-mono text-xs text-[#f5f2eb] font-semibold">
                        Private Data Viewing Portal
                      </span>
                    </div>
                    <span className="text-[10px] micro-label text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      Live Dashboard
                    </span>
                  </div>

                  {/* Dashboard Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-[#9e9b93] micro-label block">GHL Outreach Sent</span>
                      <span className="font-display font-bold text-lg text-[#f5f2eb] mt-0.5 block">14,280+</span>
                      <span className="text-[10px] text-teal-400 font-mono">Automated 24/7</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-[#9e9b93] micro-label block">Pipeline Conversion</span>
                      <span className="font-display font-bold text-lg text-pink-400 mt-0.5 block">High-Value</span>
                      <span className="text-[10px] text-amber-400 font-mono">Multi-Stage Funnel</span>
                    </div>
                  </div>

                  {/* Pipeline Architecture nodes */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <span className="text-[10px] micro-label text-[#9e9b93] block">Automated Pipeline Flow</span>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#d1cec7]">
                      <span className="px-2 py-1 rounded bg-white/5">Lead Ingest</span>
                      <span>➔</span>
                      <span className="px-2 py-1 rounded bg-pink-500/20 text-pink-300">GHL Workflow</span>
                      <span>➔</span>
                      <span className="px-2 py-1 rounded bg-teal-500/20 text-teal-300">Sales Outreach</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 3 Dedicated Client Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {trixyCompanies.map((company) => (
              <div
                key={company.name}
                className={`
                  agency-card rounded-3xl p-7 flex flex-col justify-between
                  ${company.themeBorder} transition duration-300 relative overflow-hidden group
                `}
              >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${company.glowBg} rounded-full blur-2xl -z-10`} />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`micro-label text-[10px] px-2.5 py-1 rounded-full border ${company.colorTag}`}>
                      {company.systemMetric}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-2xl text-[#f5f2eb]">
                      {company.name}
                    </h4>
                    <p className="text-xs text-amber-300 font-medium mt-1">
                      {company.role}
                    </p>
                  </div>

                  <p className="text-xs text-[#9e9b93] leading-relaxed">
                    {company.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/[0.08]">
                    <span className="micro-label text-[10px] text-[#f5f2eb]/70 block">
                      Key Deliverables:
                    </span>
                    {company.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-[#d1cec7]">
                        <span className={`w-1.5 h-1.5 rounded-full ${company.accentDot} mt-1.5 shrink-0`} />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#9e9b93]">
                  <span className="font-mono text-[11px] text-teal-300">
                    GoHighLevel & Web Portal
                  </span>
                  <span className="text-[11px] text-amber-400 font-medium flex items-center gap-1">
                    <CheckIcon className="w-3.5 h-3.5 text-teal-400" /> System Active
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ======================================================== */}
        {/* CASE STUDY 2: TANYA MEMME (CREATIVE & AUTOMATIONS)      */}
        {/* ======================================================== */}
        <div className="mb-24 space-y-8">
          
          {/* Header Banner */}
          <div className="agency-card rounded-3xl p-8 md:p-10 relative overflow-hidden border-purple-500/30">
            <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-purple-500/20 via-amber-500/10 to-transparent rounded-full blur-3xl -z-10" />

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="micro-label text-purple-400 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
                  Full Creator Growth & Automation System
                </span>

                <h3 className="font-display font-bold text-3xl md:text-4xl text-[#f5f2eb] tracking-tight">
                  Tanya Memme — SMM, Content Direction & GoHighLevel
                </h3>

                <p className="text-sm md:text-base text-[#9e9b93] leading-relaxed">
                  Operated as dedicated Social Media Manager, Creative Content Editor (educational carousels, video editing, repurposing, single quote cards), and Lead Automation Engineer inside GoHighLevel / Firestarter.
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono">
                    Carousels & Graphics
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono">
                    Short-Form Video & Reels
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono">
                    GoHighLevel / Firestarter
                  </span>
                </div>
              </div>

              {/* GHL / Firestarter Workflow Architecture Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#0a0c12] border border-white/15 p-5 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                      <span className="font-mono text-xs text-[#f5f2eb] font-semibold">
                        GHL / Firestarter Architecture
                      </span>
                    </div>
                    <span className="text-[10px] micro-label text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                      Automation Flow
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-[#9e9b93]">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                      <div className="flex items-center justify-between text-[#f5f2eb] font-semibold text-xs">
                        <span>Lead Magnet & Funnel Capture</span>
                        <span className="text-teal-400 font-mono text-[10px]">Step 01</span>
                      </div>
                      <p className="text-[11px] text-[#9e9b93]">
                        Traffic from Instagram carousels & video reels routed directly into GoHighLevel / Firestarter opt-in pages.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                      <div className="flex items-center justify-between text-[#f5f2eb] font-semibold text-xs">
                        <span>Automated Nurture Sequence</span>
                        <span className="text-amber-400 font-mono text-[10px]">Step 02</span>
                      </div>
                      <p className="text-[11px] text-[#9e9b93]">
                        Multi-touch email and SMS auto-responders deliver community updates, event invitations, and sales links.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Tanya Memme Visual Sub-sections: Carousels & Video Reels */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* 1. Multi-Slide Carousels Card */}
            <div className="agency-card rounded-3xl p-7 space-y-5 border-white/[0.08] hover:border-purple-500/40">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="micro-label text-purple-400">
                    Graphic Design & Typography
                  </span>
                  <h4 className="font-display font-bold text-xl text-[#f5f2eb] mt-1">
                    Educational & Authority Carousels
                  </h4>
                </div>
                <span className="text-xs text-[#9e9b93] font-mono">
                  Instagram Decks
                </span>
              </div>

              <p className="text-xs text-[#9e9b93] leading-relaxed">
                Multi-slide swipe sequences designed in Figma and Photoshop. Optimized for high bookmark rates, font contrast, and brand consistency.
              </p>

              {/* Carousel Samples */}
              <div className="space-y-3">
                {tanyaCarousels.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/item flex items-center justify-between p-3.5 rounded-2xl
                      bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/40 hover:bg-white/[0.05]
                      transition duration-200
                    "
                  >
                    <div className="space-y-0.5 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#f5f2eb] group-hover/item:text-purple-300 transition">
                          {item.title}
                        </span>
                        <span className="text-[10px] micro-label text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#9e9b93] line-clamp-1">
                        {item.desc}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-purple-500 group-hover/item:text-black transition">
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* 2. Short-Form Video & Reels Card */}
            <div className="agency-card rounded-3xl p-7 space-y-5 border-white/[0.08] hover:border-amber-500/40">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="micro-label text-amber-400">
                    Video Editing & Repurposing
                  </span>
                  <h4 className="font-display font-bold text-xl text-[#f5f2eb] mt-1">
                    High-Retention Video Reels
                  </h4>
                </div>
                <span className="text-xs text-[#9e9b93] font-mono">
                  Instagram Reels
                </span>
              </div>

              <p className="text-xs text-[#9e9b93] leading-relaxed">
                Repurposed interviews into vertical short-form clips with animated subtitles, B-roll cutaways, and dynamic audio leveling.
              </p>

              {/* Video Reels Samples */}
              <div className="space-y-3">
                {tanyaReels.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/item flex items-center justify-between p-3.5 rounded-2xl
                      bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/40 hover:bg-white/[0.05]
                      transition duration-200
                    "
                  >
                    <div className="space-y-0.5 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#f5f2eb] group-hover/item:text-amber-300 transition">
                          {item.title}
                        </span>
                        <span className="text-[10px] micro-label text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#9e9b93] line-clamp-1">
                        {item.desc}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-black transition">
                      <PlayIcon className="w-3.5 h-3.5 ml-0.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* CASE STUDY 3: KUBO NI LOLA (COMPACT SECONDARY STRIP)    */}
        {/* ======================================================== */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="micro-label text-[#9e9b93]">
              Additional Short-Form Editing Works
            </span>
            <h4 className="font-display font-bold text-xl text-[#f5f2eb] mt-0.5">
              Kubo ni Lola Cafe — Social Media & TikTok Edits
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {kuboVideos.map((video) => (
              <a
                key={video.title}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-3.5 py-2 rounded-xl
                  bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/40
                  text-xs text-[#d1cec7] hover:text-[#f5f2eb] transition
                "
              >
                <PlayIcon className="w-3 h-3 text-amber-400" />
                <span>{video.title}</span>
                <ArrowUpRightIcon className="w-3 h-3 text-[#9e9b93]" />
              </a>
            ))}
            <a
              href="https://www.tiktok.com/@kubonilola?_r=1&_t=ZS-9AzPb7ZCeJh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:underline px-2 py-1 font-semibold"
            >
              TikTok Profile ➔
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FlagshipCaseStudies;

