import { ArrowUpRightIcon, Code2Icon, ShieldCheckIcon } from "../icons/Icons";

function SoftwareSystems() {
  const systems = [
    {
      code: "SYS-01",
      title: "ProTrack — AI Productivity & Anomaly Suite",
      tag: "Flagship Software",
      image: "/projects/protrack.png",
      tech: "Electron • Next.js • Supabase • PostgreSQL • Prisma • TypeScript",
      desc: "Cross-platform desktop and web platform detecting genuine vs simulated activity using behavioral anomaly analysis. Generates automated compliance reports for distributed teams.",
      demo: "https://pro-track-one.vercel.app/",
      github: "https://github.com/Profenzy/Protrack",
    },
    {
      code: "SYS-02",
      title: "Private Data Viewing Web Application",
      tag: "Enterprise Portal",
      image: null, // Image removed as requested
      tech: "React • Tailwind CSS • Webhook Pipelines • GoHighLevel API",
      desc: "Custom private portal engineered for Trixy Castro and her companies (Success Unlocked, La Escuela Nueva). Real-time sales outreach analytics, lead ingestion logs, and automated CRM tracking.",
      demo: null,
      github: "https://github.com/Profenzy",
    },
    {
      code: "SYS-03",
      title: "Bayani Game — 2D Action-Adventure",
      tag: "Game Systems",
      image: "/projects/bayani.png",
      tech: "Unity • C# • Finite State Machines • Enemy AI Pathfinding",
      desc: "Interactive 2D adventure game featuring responsive combat physics, multi-state enemy AI, custom animation state machines, and choreographic level design.",
      demo: "https://github.com/Profenzy/Bayani-GameDev",
      github: "https://github.com/Profenzy/Bayani-GameDev",
    },
    {
      code: "SYS-04",
      title: "ICEE — Smart Hardware Companion Robot",
      tag: "Robotics & Hardware",
      image: "/projects/icee.png",
      tech: "Arduino • Embedded C++ • Ultrasonic Sensors • Audio Modules",
      desc: "Micro-controller integrated companion robot combining obstacle avoidance sensors, motor actuation, and automated audio response feedback.",
      demo: null,
      github: "https://github.com/Profenzy",
    },
  ];

  return (
    <section 
      id="software"
      className="py-24 md:py-32 bg-[#0A0C0E] border-b border-[rgba(237,231,220,0.13)] px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[rgba(237,231,220,0.13)]">
          <div className="space-y-3">
            <span className="label-caps text-[#2E6B72] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B72]" />
              ENGINEERING // CUSTOM SYSTEMS & APPLICATIONS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#EDE7DC] tracking-tight">
              Desktop software, cloud portals & robotics.
            </h2>
          </div>
          <span className="label-caps text-[#6C7378]">
            04 CUSTOM APPLICATIONS
          </span>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#2E6B72] p-6 flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#2E6B72]">
                    {item.code}
                  </span>
                  <span className="label-caps text-[9px] px-2.5 py-0.5 rounded-full border border-[rgba(237,231,220,0.15)] text-[#9EA5A8]">
                    {item.tag}
                  </span>
                </div>

                {/* Screenshot or Technical Architecture Schema (for Private App) */}
                {item.image ? (
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#07080A] border border-[rgba(237,231,220,0.08)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter contrast-[1.04]"
                    />
                  </div>
                ) : (
                  /* Elegant Architecture Schema Container for Private Data Viewing App (No image) */
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#07080A] border border-[rgba(237,231,220,0.1)] p-5 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-3 border-b border-[rgba(237,231,220,0.08)]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E8913C] animate-pulse" />
                        <span className="font-mono text-xs text-[#EDE7DC] font-semibold">
                          Client Data Viewing Schema
                        </span>
                      </div>
                      <span className="label-caps text-[9px] text-[#2E6B72] border border-[#2E6B72]/30 px-2 py-0.5 rounded">
                        Internal Network
                      </span>
                    </div>

                    {/* Visual Architecture Flow */}
                    <div className="space-y-2 py-2">
                      <div className="p-2.5 rounded-lg bg-[#101317] border border-[rgba(237,231,220,0.06)] flex items-center justify-between text-[11px] font-mono text-[#9EA5A8]">
                        <span>Inbound Leads</span>
                        <span>➔</span>
                        <span className="text-[#E8913C]">GHL Pipeline</span>
                        <span>➔</span>
                        <span className="text-[#2E6B72]">Private Dashboard</span>
                      </div>
                      <p className="text-[10px] text-[#6C7378] font-mono">
                        Protected: Confidential client metrics & outreach data
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[rgba(237,231,220,0.08)] flex items-center justify-between text-[10px] font-mono text-[#6C7378]">
                      <span>Target: Trixy Castro Portfolio</span>
                      <span className="text-[#2E6B72]">Active Deployment</span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-lg text-[#EDE7DC] group-hover:text-[#2E6B72] transition">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#9EA5A8] mt-1">
                    {item.tech}
                  </p>
                  <p className="text-xs text-[#6C7378] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-[rgba(237,231,220,0.08)] flex items-center gap-3">
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1.5
                      border border-[#2E6B72] text-[#EDE7DC] hover:bg-[#2E6B72] hover:text-[#0A0C0E]
                      px-3.5 py-1.5 rounded-full label-caps text-[10px] font-semibold
                      transition
                    "
                  >
                    <span>Live Demo</span>
                    <ArrowUpRightIcon className="w-3 h-3" />
                  </a>
                )}

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1.5
                      border border-[rgba(237,231,220,0.15)] text-[#9EA5A8] hover:text-[#EDE7DC] hover:border-[#EDE7DC]
                      px-3.5 py-1.5 rounded-full label-caps text-[10px] font-medium
                      transition
                    "
                  >
                    <span>Repository</span>
                    <ArrowUpRightIcon className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SoftwareSystems;
