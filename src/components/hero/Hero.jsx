import newPortrait from "../../assets/images/profile_hd.jpeg";
import { CalendarIcon, ArrowUpRightIcon, SparklesIcon, ShieldCheckIcon, CheckIcon } from "../icons/Icons";

function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-10 md:pt-16 pb-20 md:pb-28 overflow-hidden border-b border-white/[0.06]">
      {/* Cinematic Luminous Glow Cones */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-20 right-1/4 w-[600px] h-[600px] bg-amber-500/12 rounded-full blur-[150px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 -left-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT 7-COLS: Narrative Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Status Pill with live pulse */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="micro-label text-amber-300/90 text-[10px] md:text-[11px]">
                Full-Stack Systems • GHL Automations • Creative Direction
              </span>
            </div>

            {/* Massive Editorial Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.04]">
              <span className="text-gradient-bone block">Architecting high-converting systems,</span>
              <span className="text-gradient-amber block">automations & media.</span>
            </h1>

            {/* Narrative Body Copy */}
            <p className="text-base sm:text-lg text-[#9e9b93] font-normal max-w-xl leading-relaxed">
              I partner with founders, executives, and high-growth brands to engineer custom web software, deploy automated GoHighLevel CRM workflows, and produce high-retention content that converts attention into revenue.
            </p>

            {/* CTAs & Conversion Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="
                  shimmer-btn flex items-center gap-3
                  bg-amber-500 text-black font-semibold
                  px-7 py-4 rounded-2xl text-sm md:text-base
                  hover:bg-amber-400 transition-all duration-300
                  shadow-[0_0_35px_rgba(245,158,11,0.35)]
                  hover:shadow-[0_0_50px_rgba(245,158,11,0.55)]
                  hover:-translate-y-0.5 active:translate-y-0
                  cursor-pointer
                "
              >
                <CalendarIcon className="w-5 h-5 text-black" />
                <span>Schedule Strategy Call</span>
                <ArrowUpRightIcon className="w-4 h-4 text-black/70" />
              </button>

              <a
                href="#flagship-work"
                className="
                  flex items-center gap-2
                  bg-[#10131c] text-[#f5f2eb]
                  border border-white/10 hover:border-amber-500/40
                  px-6 py-4 rounded-2xl text-sm md:text-base font-medium
                  hover:bg-[#161a26] transition duration-300
                "
              >
                <span>View Flagship Work</span>
                <ArrowUpRightIcon className="w-4 h-4 text-[#9e9b93]" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="
                  text-xs text-[#9e9b93] hover:text-[#f5f2eb]
                  px-3 py-4 font-mono transition flex items-center gap-1
                "
              >
                <span>Download CV</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Proof Credibility Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#9e9b93]">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-teal-400" />
                <span>17 Industry Accreditations</span>
              </div>
              <div className="flex items-center gap-2">
                <SparklesIcon className="w-4 h-4 text-amber-400" />
                <span>Specialist for Tanya Memme & Trixy Castro</span>
              </div>
            </div>

          </div>

          {/* RIGHT 5-COLS: Luxury Editorial Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Backlight halo gradient */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/30 via-teal-500/20 to-amber-500/10 rounded-[32px] blur-2xl opacity-70" />

              {/* Card Container */}
              <div className="relative rounded-[32px] bg-[#0c0e14] border border-white/10 p-4 shadow-2xl backdrop-blur-2xl">
                
                {/* Photo Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#07080a] border border-white/[0.08]">
                  <img
                    src={newPortrait}
                    alt="Brenz Cruz"
                    className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent opacity-85" />

                  {/* Floating Chip Top-Right */}
                  <div className="absolute top-4 right-4">
                    <span className="
                      px-3.5 py-1.5 rounded-full
                      bg-[#0c0e14]/85 backdrop-blur-md border border-white/15
                      text-[11px] font-semibold text-amber-300 shadow-xl flex items-center gap-1.5
                    ">
                      <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
                      GHL & Systems Architect
                    </span>
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-5 left-5 right-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-display font-bold text-2xl text-[#f5f2eb]">
                          Brenz Cruz
                        </h2>
                        <p className="text-xs text-amber-400 font-mono mt-0.5">
                          bacruz.prof@gmail.com
                        </p>
                      </div>
                      <span className="w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_12px_#2dd4bf]" />
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs text-[#9e9b93]">
                      <div>
                        <span className="text-[10px] micro-label text-[#9e9b93] block">Focus</span>
                        <span className="text-xs font-semibold text-[#f5f2eb]">Full-Stack & CRM</span>
                      </div>
                      <div>
                        <span className="text-[10px] micro-label text-[#9e9b93] block">Status</span>
                        <span className="text-xs font-semibold text-teal-300">Taking Clients</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* PROOF TICKER STRIP */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="font-display font-bold text-3xl md:text-4xl text-[#f5f2eb] tracking-tight">
              8+
            </p>
            <p className="text-xs text-[#9e9b93] font-medium">
              Enterprise & Client Portals
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-display font-bold text-3xl md:text-4xl text-amber-400 tracking-tight">
              35+
            </p>
            <p className="text-xs text-[#9e9b93] font-medium">
              GoHighLevel & CRM Automations
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-display font-bold text-3xl md:text-4xl text-teal-400 tracking-tight">
              17
            </p>
            <p className="text-xs text-[#9e9b93] font-medium">
              Verified Industry Certifications
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-display font-bold text-3xl md:text-4xl text-[#f5f2eb] tracking-tight">
              100%
            </p>
            <p className="text-xs text-[#9e9b93] font-medium">
              On-Time Project Delivery
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
