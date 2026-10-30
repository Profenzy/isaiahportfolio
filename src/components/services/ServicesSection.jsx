import { Code2Icon, SparklesIcon, VideoIcon, ArrowUpRightIcon } from "../icons/Icons";

function ServicesSection({ onOpenBooking }) {
  const services = [
    {
      num: "01",
      title: "Full-Stack Software & Custom Portals",
      tagline: "High-performance web apps, desktop tools & private data dashboards.",
      icon: <Code2Icon className="w-6 h-6 text-teal-400" />,
      accentColor: "border-teal-500/30 hover:border-teal-500/60",
      glowColor: "group-hover:bg-teal-500/5",
      bulletAccent: "bg-teal-400",
      capabilities: [
        "Private Client Data Portals & Dashboards",
        "React & Next.js Full-Stack Web Applications",
        "Electron Desktop Productivity Tools (e.g. ProTrack)",
        "PostgreSQL, Supabase & Prisma Database Engineering",
        "REST APIs & Real-time Synchronization",
      ],
      techPills: ["React", "Next.js", "Node/Express", "PostgreSQL", "Electron", "TypeScript"],
    },
    {
      num: "02",
      title: "GoHighLevel & Revenue Automations",
      tagline: "End-to-end CRM workflows, lead funnels & automated outreach pipelines.",
      icon: <SparklesIcon className="w-6 h-6 text-amber-400" />,
      accentColor: "border-amber-500/30 hover:border-amber-500/60",
      glowColor: "group-hover:bg-amber-500/5",
      bulletAccent: "bg-amber-400",
      capabilities: [
        "GoHighLevel (GHL) & Firestarter Architecture",
        "Automated Sales Outreach & Follow-up Pipelines",
        "Client Onboarding & Appointment Booking Systems",
        "Webhook & Custom Database Integrations",
        "Multi-Account CRM Management for High-Ticket Brands",
      ],
      techPills: ["GoHighLevel", "Firestarter", "Webhooks", "Sales Pipelines", "Automated Workflows"],
    },
    {
      num: "03",
      title: "Short-Form Video & Creative Systems",
      tagline: "High-retention storytelling, TikToks, Reels & authority carousels.",
      icon: <VideoIcon className="w-6 h-6 text-purple-400" />,
      accentColor: "border-purple-500/30 hover:border-purple-500/60",
      glowColor: "group-hover:bg-purple-500/5",
      bulletAccent: "bg-purple-400",
      capabilities: [
        "Documentary-Style Story Short-Form Video Editing",
        "High-Engagement TikTok & Reel Pacing with Dynamic Sound",
        "Multi-Slide Educational Carousels for Instagram",
        "Repurposing Long-Form Content into High-Impact Clips",
        "Brand Visual Consistency & Social Media Strategy",
      ],
      techPills: ["Premiere Pro", "CapCut", "Photoshop", "TikTok Growth", "Instagram Carousels"],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="micro-label text-amber-400">
              // Capabilities & Offerings
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#f5f2eb] tracking-tight">
              Three pillars of modern digital execution.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9e9b93] max-w-md">
            Whether you need custom software, automated business operations, or high-converting media, every solution is built for measurable ROI.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc) => (
            <div
              key={svc.num}
              className={`
                group editorial-card rounded-3xl p-8 flex flex-col justify-between
                ${svc.accentColor} transition-all duration-300 relative overflow-hidden
              `}
            >
              {/* Subtle hover background tint */}
              <div className={`absolute inset-0 ${svc.glowColor} transition duration-300 pointer-events-none`} />

              <div className="space-y-6 relative">
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <span className="font-display font-bold text-xl text-[#9e9b93] group-hover:text-[#f5f2eb] transition">
                    {svc.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                    {svc.icon}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[#f5f2eb] tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#9e9b93] mt-2 leading-relaxed">
                    {svc.tagline}
                  </p>
                </div>

                {/* Capabilities checklist */}
                <div className="space-y-2.5 pt-2">
                  {svc.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2.5 text-xs text-[#d1cec7]">
                      <span className={`w-1.5 h-1.5 rounded-full ${svc.bulletAccent} mt-1.5 shrink-0`} />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Tags */}
              <div className="pt-8 mt-6 border-t border-white/[0.08] relative">
                <div className="flex flex-wrap gap-1.5">
                  {svc.techPills.map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 text-[11px] rounded-lg bg-white/[0.03] border border-white/[0.06] text-[#9e9b93]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;

