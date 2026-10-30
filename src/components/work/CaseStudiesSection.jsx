import { useState } from "react";
import { PlayIcon, ArrowUpRightIcon, SparklesIcon, LayersIcon, Code2Icon, VideoIcon, ExternalLinkIcon } from "../icons/Icons";

function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState("all");

  // Kubo ni Lola TikTok videos
  const kuboVideos = [
    {
      title: "Documentary Story Style Edit",
      style: "Cinematic Narrative",
      tag: "Story Edit",
      desc: "Emotional brand storytelling capturing the heritage, rustic atmosphere, and traditional coffee brewing experience of Kubo ni Lola.",
      link: "https://vt.tiktok.com/ZSgWKdJ1e/",
      gradient: "from-amber-900/60 via-[#12141a] to-[#07080a]",
      accent: "text-amber-400 border-amber-500/30",
    },
    {
      title: "Trending Audio & Dynamic Pacing",
      style: "Viral Engagement",
      tag: "Trending Edit",
      desc: "Fast-paced trending sound synchronization, quick match-cuts, and text hook timing designed for maximum TikTok algorithm distribution.",
      link: "https://vt.tiktok.com/ZSgWwKDNC/",
      gradient: "from-teal-950/60 via-[#12141a] to-[#07080a]",
      accent: "text-teal-400 border-teal-500/30",
    },
    {
      title: "Event & Seasonal Special Edit",
      style: "Event Specific",
      tag: "Event Showcase",
      desc: "Atmospheric showcase highlighting community gatherings, seasonal menu highlights, and customer testimonial moments.",
      link: "https://vt.tiktok.com/ZSgWK6LkR/",
      gradient: "from-purple-950/60 via-[#12141a] to-[#07080a]",
      accent: "text-purple-400 border-purple-500/30",
    },
  ];

  // Tanya Memme Curated Works
  const tanyaHighlights = [
    {
      category: "Multi-Slide Carousels",
      count: "Educational & Storytelling",
      desc: "Structured multi-slide design focusing on high save-rates, swipe retention, and authority personal branding.",
      samplePosts: [
        { label: "Community Carousel Feature", link: "https://www.instagram.com/p/Db6ZnO3FchQ/?img_index=1" },
        { label: "Visual Insight Guide", link: "https://www.instagram.com/p/Da0_HR5Ffy5/?img_index=1" },
        { label: "High-Engagement Swipe Post", link: "https://www.instagram.com/p/DcJvfLEFfbl/" },
      ]
    },
    {
      category: "Reels & Video Repurposing",
      count: "Short-Form Video System",
      desc: "Repurposed long-form video interviews into bite-sized reels with dynamic captions, sound design, and hook pacing.",
      samplePosts: [
        { label: "Featured Video Highlight", link: "https://www.instagram.com/p/DcEfDX8nCVu/" },
        { label: "Personal Story Cut", link: "https://www.instagram.com/p/Dbygw28FSpi/" },
        { label: "Direct Hook Reel", link: "https://www.instagram.com/p/DcCO1_ckleV/" },
        { label: "Actionable Advice Cut", link: "https://www.instagram.com/p/Db861-CGy-N/" },
      ]
    },
    {
      category: "GHL & Firestarter Automations",
      count: "Lead Funnel Infrastructure",
      desc: "Automated community lead capture funnels, email auto-responders, and CRM synchronization using GoHighLevel & Firestarter.",
      samplePosts: [
        { label: "Brand Event Sequence", link: "https://www.instagram.com/p/DbTWQTklcyE/" },
        { label: "Audience Outreach Campaign", link: "https://www.instagram.com/p/DbbE1SGmXcG/" },
        { label: "Automated Follow-up Flow", link: "https://www.instagram.com/p/Dbv4yXBEaCJ/" },
      ]
    }
  ];

  // GHL & Enterprise Clients
  const ghlClients = [
    {
      name: "Trixy Castro",
      clientTheme: "border-pink-500/30 bg-pink-500/5",
      badgeColor: "text-pink-400 border-pink-500/40 bg-pink-500/10",
      accentGlow: "from-pink-500/20 to-transparent",
      role: "GHL Management & Custom Portal",
      deliverables: [
        "End-to-End GoHighLevel Account Architecture",
        "Private Web Application for Internal Data Viewing",
        "Automated Sales Outreach Pipelines & Lead Segmentation",
        "Real-Time Conversion Tracking & Automated Follow-Ups",
      ],
      systemMetric: "Full GHL Pipeline Deployment",
    },
    {
      name: "Success Unlocked",
      clientTheme: "border-orange-500/30 bg-orange-500/5",
      badgeColor: "text-orange-400 border-orange-500/40 bg-orange-500/10",
      accentGlow: "from-orange-500/25 via-pink-500/20 to-transparent",
      role: "Sales Outreach & Automation Engine",
      deliverables: [
        "Multi-Stage Sales Outreach Automation Sequences",
        "Custom Client Reporting & Analytics Integration",
        "Lead Magnet Delivery & Booking Appointment Scheduling",
        "High-Converting Email & SMS Workflow Triggers",
      ],
      systemMetric: "Multi-Touch Nurture Funnel",
    },
    {
      name: "La Escuela Nueva",
      clientTheme: "border-emerald-500/30 bg-emerald-500/5",
      badgeColor: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
      accentGlow: "from-emerald-500/20 to-transparent",
      role: "Student Outreach & Operations Portal",
      deliverables: [
        "Automated Student Onboarding & Inquiry Capture",
        "Private Management Portal for Admissions Data",
        "Automated Calendar Reminders & Scheduling Integration",
        "Cross-Platform Lead Notification Routing",
      ],
      systemMetric: "End-to-End Admissions Workflow",
    },
  ];

  // Engineering & Software Projects
  const softwareProjects = [
    {
      title: "ProTrack",
      subtitle: "AI-Powered Productivity & Behavioral Anomaly Monitoring",
      image: "/projects/protrack.png",
      tag: "Flagship Software",
      tech: "Electron • ExpressJS • Supabase • PostgreSQL • Prisma • Next.js • TypeScript",
      desc: "Designed and engineered an enterprise-grade productivity tracking desktop and web platform. Combines behavioral anomaly detection to differentiate genuine work input from artificial activity, generating automated compliance reports for remote teams.",
      github: "https://github.com/Profenzy/Protrack",
      demo: "https://pro-track-one.vercel.app/",
    },
    {
      title: "Bayani Game",
      subtitle: "2D Action-Adventure Unity Engine Experience",
      image: "/projects/bayani.png",
      tag: "Game Systems",
      tech: "Unity • C# • 2D Physics • Finite State Machines • AI Pathfinding",
      desc: "Engineered responsive player movement physics, multi-state enemy combat AI, dynamic animation transitions, and environmental hazard choreography in Unity.",
      github: "https://github.com/Profenzy/Bayani-GameDev",
      demo: "https://github.com/Profenzy/Bayani-GameDev",
    },
    {
      title: "ICEE Smart Robot",
      subtitle: "Arduino Companion Micro-Controller Automation",
      image: "/projects/icee.png",
      tag: "Hardware Systems",
      tech: "Arduino • Embedded C++ • Ultrasonic Sensors • Audio Drivers",
      desc: "Built an interactive physical companion robot integrating ultrasonic obstacle detection, motor actuation, responsive audio feedback, and micro-controller automation.",
      github: "https://github.com/Profenzy",
      demo: "",
    },
  ];

  return (
    <section id="case-studies" className="py-24 md:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="micro-label text-amber-400">
              // Selected Case Studies & Proven Work
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#f5f2eb] tracking-tight">
              Real business systems, automations & media.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {[
              { id: "all", label: "All Work" },
              { id: "ghl", label: "GHL & Automations" },
              { id: "video", label: "Short-Form Video" },
              { id: "software", label: "Software & Portals" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer
                  ${activeTab === tab.id 
                    ? "bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]" 
                    : "text-[#9e9b93] hover:text-[#f5f2eb]"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. GHL & CLIENT PORTALS (Trixy Castro, Success Unlocked, La Escuela Nueva) */}
        {(activeTab === "all" || activeTab === "ghl") && (
          <div className="mb-20 space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div>
                <span className="micro-label text-amber-400">
                  CRM Infrastructure & Outreach
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-[#f5f2eb] mt-1">
                  GoHighLevel Management & Private Data Portals
                </h3>
              </div>
              <span className="hidden sm:inline-block text-xs text-[#9e9b93] font-mono">
                3 Active Enterprise Accounts
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {ghlClients.map((client) => (
                <div
                  key={client.name}
                  className={`
                    editorial-card rounded-3xl p-7 flex flex-col justify-between
                    ${client.clientTheme} transition duration-300 relative overflow-hidden group
                  `}
                >
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${client.accentGlow} rounded-full blur-2xl -z-10`} />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`micro-label text-[10px] px-2.5 py-1 rounded-full border ${client.badgeColor}`}>
                        {client.systemMetric}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-2xl text-[#f5f2eb]">
                        {client.name}
                      </h4>
                      <p className="text-xs text-amber-300/90 font-medium mt-1">
                        {client.role}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                      {client.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-[#9e9b93]">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#9e9b93]">
                    <span className="font-mono text-[11px] text-teal-300">
                      Private System
                    </span>
                    <span className="text-[11px] text-amber-400 font-medium">
                      Operational
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. TANYA MEMME (Carousels, Video Reels & GHL Automations) */}
        {(activeTab === "all" || activeTab === "ghl" || activeTab === "video") && (
          <div className="mb-20 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <span className="micro-label text-purple-400">
                  Creator Growth & Content Engineering
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-[#f5f2eb] mt-1">
                  Tanya Memme — Full Social Media, Video & GHL System
                </h3>
              </div>
              <p className="text-xs text-[#9e9b93] max-w-sm">
                Managed social media presence, designed high-save carousels, repurposed video reels, and built automated lead funnels in GoHighLevel / Firestarter.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {tanyaHighlights.map((block) => (
                <div
                  key={block.category}
                  className="editorial-card rounded-3xl p-7 flex flex-col justify-between border-white/[0.08] hover:border-purple-500/40 transition group"
                >
                  <div className="space-y-4">
                    <span className="micro-label text-purple-400 text-[10px]">
                      {block.count}
                    </span>
                    <h4 className="font-display font-bold text-xl text-[#f5f2eb]">
                      {block.category}
                    </h4>
                    <p className="text-xs text-[#9e9b93] leading-relaxed">
                      {block.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/[0.08]">
                      <span className="micro-label text-[10px] text-[#f5f2eb]/70 block">
                        Verified Live Posts:
                      </span>
                      {block.samplePosts.map((post) => (
                        <a
                          key={post.label}
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex items-center justify-between p-2.5 rounded-xl
                            bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/40 hover:bg-white/[0.05]
                            text-xs text-[#d1cec7] hover:text-[#f5f2eb] transition group/link
                          "
                        >
                          <span className="truncate pr-2">{post.label}</span>
                          <ArrowUpRightIcon className="w-3.5 h-3.5 text-purple-400 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#9e9b93]">
                    <span className="text-[11px] font-mono text-purple-300">
                      Instagram & GHL
                    </span>
                    <span className="text-amber-400 text-xs flex items-center gap-1">
                      Direct Proof
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. KUBO NI LOLA (Vertical TikTok Video Phone Players) */}
        {(activeTab === "all" || activeTab === "video") && (
          <div className="mb-20 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <span className="micro-label text-amber-400">
                  Short-Form Video Production
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-[#f5f2eb] mt-1">
                  Kubo ni Lola — TikTok Video Edits & SMM
                </h3>
              </div>
              <a
                href="https://www.tiktok.com/@kubonilola?_r=1&_t=ZS-9AzPb7ZCeJh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold transition"
              >
                <span>Visit Official TikTok (@kubonilola)</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Vertical 9:16 Phone Mockup Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {kuboVideos.map((video) => (
                <a
                  key={video.title}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="phone-frame group flex flex-col justify-between p-6 cursor-pointer"
                >
                  {/* Subtle top phone notch */}
                  <div className="mx-auto w-24 h-4 rounded-full bg-white/[0.06] mb-4 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/[0.1] block" />
                  </div>

                  {/* Video Ambient Background & Play Button */}
                  <div className="my-auto flex flex-col items-center justify-center text-center space-y-4 py-8">
                    {/* Glowing circular play badge */}
                    <div className="
                      w-16 h-16 rounded-full bg-amber-500 text-black
                      flex items-center justify-center shadow-[0_0_35px_rgba(245,158,11,0.5)]
                      group-hover:scale-110 transition duration-300
                    ">
                      <PlayIcon className="w-6 h-6 ml-1 text-black" />
                    </div>

                    <div className="space-y-1">
                      <span className={`micro-label text-[10px] px-2.5 py-0.5 rounded-full border ${video.accent} bg-white/[0.02]`}>
                        {video.tag}
                      </span>
                      <h4 className="font-display font-bold text-lg text-[#f5f2eb] pt-1 group-hover:text-amber-300 transition">
                        {video.title}
                      </h4>
                      <p className="text-xs text-[#9e9b93] font-mono">
                        {video.style}
                      </p>
                    </div>
                  </div>

                  {/* Bottom description & launch CTA */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-3">
                    <p className="text-xs text-[#9e9b93] leading-relaxed line-clamp-2">
                      {video.desc}
                    </p>
                    <div className="flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                      <span>Watch Edit on TikTok</span>
                      <ArrowUpRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 4. SOFTWARE & FULL-STACK SYSTEMS (ProTrack, Bayani, ICEE) */}
        {(activeTab === "all" || activeTab === "software") && (
          <div className="space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div>
                <span className="micro-label text-teal-400">
                  Full-Stack Architecture
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-[#f5f2eb] mt-1">
                  Custom Software, Desktop Systems & Hardware
                </h3>
              </div>
              <span className="hidden sm:inline-block text-xs text-[#9e9b93] font-mono">
                Production Software
              </span>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {softwareProjects.map((proj) => (
                <div
                  key={proj.title}
                  className="editorial-card rounded-3xl overflow-hidden flex flex-col justify-between border-white/[0.08] hover:border-teal-500/40 transition group"
                >
                  {/* Screenshot Thumbnail */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#07080a] border-b border-white/[0.08]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="micro-label text-[10px] px-2.5 py-1 rounded-full bg-[#07080a]/80 backdrop-blur-md text-teal-300 border border-teal-500/30">
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-xl text-[#f5f2eb] group-hover:text-teal-300 transition">
                        {proj.title}
                      </h4>
                      <p className="text-xs font-mono text-teal-400 leading-relaxed">
                        {proj.tech}
                      </p>
                      <p className="text-xs text-[#9e9b93] leading-relaxed pt-1">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3">
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl
                            bg-teal-500 text-black font-semibold text-xs
                            hover:bg-teal-400 transition
                          "
                        >
                          <span>Live Demo</span>
                          <ArrowUpRightIcon className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl
                            bg-white/[0.03] border border-white/[0.08] text-[#f5f2eb] text-xs font-medium
                            hover:bg-white/[0.08] transition
                          "
                        >
                          <span>Code Repository</span>
                          <ArrowUpRightIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default CaseStudiesSection;

