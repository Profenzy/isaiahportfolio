import { SITE_CONFIG } from "../../config/site";
import { ArrowUpRightIcon } from "../icons/Icons";

function CloseSection({ onOpenBooking }) {
  return (
    <footer id="contact" className="relative bg-[#0A0C0E] overflow-hidden pt-24 md:pt-32">
      
      {/* Top CTA Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          
          {/* Left: Short headline & fine-print line */}
          <div className="space-y-4 max-w-2xl">
            <span className="label-caps text-[#E8913C] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
              AVAILABLE FOR SELECT COMMISSIONS
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#EDE7DC] tracking-tight leading-[1.05]">
              Let’s create work that commands attention.
            </h2>
            <p className="text-xs md:text-sm text-[#9EA5A8] max-w-lg leading-relaxed pt-1">
              Short-form video editing, GoHighLevel CRM infrastructure, and custom full-stack systems. Reach out for contracts and strategic partnerships.
            </p>
          </div>

          {/* Right: Two buttons at the opposite edge */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onOpenBooking}
              className="
                border border-[#E8913C] text-[#EDE7DC] hover:bg-[#E8913C] hover:text-[#0A0C0E]
                px-6 py-3.5 rounded-full label-caps text-[11px] font-semibold
                transition duration-200 cursor-pointer
              "
            >
              Schedule Call
            </button>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="
                border border-[rgba(237,231,220,0.18)] hover:border-[#EDE7DC] text-[#9EA5A8] hover:text-[#EDE7DC]
                px-6 py-3.5 rounded-full label-caps text-[11px] font-medium
                transition duration-200 flex items-center gap-2
              "
            >
              <span>{SITE_CONFIG.email}</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

      {/* Hairline footer strip */}
      <div className="border-t border-[rgba(237,231,220,0.13)] py-6 px-6 md:px-16 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <span className="label-caps text-[10px] text-[#6C7378]">
          &copy; {new Date().getFullYear()} BRENZ CRUZ. ALL RIGHTS RESERVED.
        </span>

        <span className="label-caps text-[10px] text-[#6C7378] hidden md:inline">
          TIMEZONE // ASIA/MANILA (UTC+8) &bull; REMOTE WORLDWIDE
        </span>

        <div className="flex items-center gap-6 label-caps text-[10px] text-[#9EA5A8]">
          <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8913C] transition">
            LinkedIn
          </a>
          <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8913C] transition">
            GitHub
          </a>
          <a href={SITE_CONFIG.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8913C] transition">
            Facebook
          </a>
        </div>
      </div>

      {/* The Wordmark full width, translated down slightly so the page edge crops it */}
      <div className="w-full overflow-hidden select-none pointer-events-none border-t border-[rgba(237,231,220,0.06)] flex justify-center">
        <span className="font-display font-extrabold text-[clamp(60px,18vw,280px)] leading-[0.76] tracking-[-0.035em] text-[rgba(237,231,220,0.08)] whitespace-nowrap translate-y-4 md:translate-y-8 block">
          BRENZ CRUZ
        </span>
      </div>

    </footer>
  );
}

export default CloseSection;

