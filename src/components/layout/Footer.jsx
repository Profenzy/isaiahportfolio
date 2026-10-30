import { ArrowUpRightIcon, SparklesIcon } from "../icons/Icons";
import { SITE_CONFIG } from "../../config/site";

function Footer({ onOpenBooking }) {
  return (
    <footer className="pt-20 pb-16 bg-[#050608] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Editorial Sign-off */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-white/[0.08]">
          <div className="space-y-4 max-w-2xl">
            <span className="micro-label text-amber-400">
              // Partner With Brenz Cruz
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#f5f2eb] tracking-tight leading-[1.08]">
              Ready to automate operations or launch custom software?
            </h2>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenBooking}
              className="
                flex items-center gap-3
                bg-amber-500 text-black font-semibold
                px-7 py-4 rounded-2xl text-sm md:text-base
                hover:bg-amber-400 transition-all duration-200
                shadow-[0_0_35px_rgba(245,158,11,0.35)]
                hover:shadow-[0_0_45px_rgba(245,158,11,0.55)]
                hover:-translate-y-0.5 active:translate-y-0
                cursor-pointer
              "
            >
              <span>Schedule Discovery Call</span>
              <ArrowUpRightIcon className="w-4 h-4 text-black/70" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata & Social Grid */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Identity */}
          <div className="space-y-2 col-span-2 md:col-span-1">
            <span className="font-display font-bold text-lg text-[#f5f2eb]">
              Brenz Cruz
            </span>
            <p className="text-xs text-[#9e9b93] leading-relaxed">
              Full-Stack Developer, CRM Automation Architect, and Content Engineer.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <span className="micro-label text-[10px] text-[#f5f2eb]/70 block">
              Navigation
            </span>
            <div className="space-y-1.5 text-xs text-[#9e9b93]">
              <a href="#services" className="hover:text-[#f5f2eb] transition block">Services</a>
              <a href="#case-studies" className="hover:text-[#f5f2eb] transition block">Client Work</a>
              <a href="#credentials" className="hover:text-[#f5f2eb] transition block">Credentials</a>
              <a href="#schedule" className="hover:text-amber-400 transition block">Book a Call</a>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="space-y-2">
            <span className="micro-label text-[10px] text-[#f5f2eb]/70 block">
              Connect
            </span>
            <div className="space-y-1.5 text-xs text-[#9e9b93]">
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f2eb] transition flex items-center gap-1">
                <span>LinkedIn</span> <ArrowUpRightIcon className="w-3 h-3" />
              </a>
              <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f2eb] transition flex items-center gap-1">
                <span>GitHub</span> <ArrowUpRightIcon className="w-3 h-3" />
              </a>
              <a href={SITE_CONFIG.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f2eb] transition flex items-center gap-1">
                <span>Facebook</span> <ArrowUpRightIcon className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Direct Communication */}
          <div className="space-y-2">
            <span className="micro-label text-[10px] text-[#f5f2eb]/70 block">
              Direct Contact
            </span>
            <a 
              href={`mailto:${SITE_CONFIG.email}`} 
              className="text-xs font-mono text-amber-300 hover:underline block"
            >
              {SITE_CONFIG.email}
            </a>
            <p className="text-[11px] text-[#9e9b93]">
              Available for Q2 Projects
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9e9b93] gap-4">
          <p>© {new Date().getFullYear()} Brenz Cruz. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

