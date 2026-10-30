import GithubIcon from "../assets/icons/icon-github.svg";
import MailIcon from "../assets/icons/icon-mail.svg";
import DownloadIcon from "../assets/icons/icon-download.svg";
import profile from "../assets/images/profile.jpg";
import { CalendarIcon, ArrowUpRightIcon, SparklesIcon } from "./icons/Icons";

function Hero({ onOpenBooking }) {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-12">
      {/* Ambient background glow accents */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl -z-10" 
      />

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* LEFT: Identity & Positioning */}
        <div className="flex items-start md:items-center gap-6">
          {/* Profile image with amber rim highlight */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-amber-500/40 to-teal-400/30 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-300" />
            <img
              src={profile}
              alt="Brenz Cruz"
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border border-[#232631] shadow-xl"
            />
          </div>

          <div className="space-y-2">
            {/* Wide tracking micro-label eyebrow */}
            <div className="flex items-center gap-2">
              <span className="micro-label text-amber-400/90 flex items-center gap-1.5">
                <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
                Engineering & Automations
              </span>
            </div>

            {/* Wide geometric display heading */}
            <h1 className="font-display font-bold text-3xl md:text-5xl text-[#f5f2eb] tracking-tight">
              Brenz Cruz
            </h1>

            {/* Core client-facing title */}
            <p className="text-sm md:text-base text-[#9e9b93] font-normal max-w-lg leading-relaxed">
              Full-Stack Developer, CRM & Sales Automation Specialist, and High-Retention Content Engineer.
            </p>

            {/* Availability status badge */}
            <div className="pt-1">
              <span className="
                inline-flex items-center gap-2
                text-xs font-medium tracking-wide
                bg-teal-500/10 text-teal-300
                border border-teal-500/25
                px-3 py-1 rounded-full
              ">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Available for Client Projects & Strategy Calls
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Action & Booking CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          {/* PRIMARY CTA: Schedule Strategy Call */}
          <button
            onClick={onOpenBooking}
            className="
              flex items-center gap-2.5
              bg-amber-500 text-black font-semibold
              px-5 py-2.5 rounded-xl text-sm
              hover:bg-amber-400 transition-all duration-200
              shadow-[0_0_24px_rgba(245,158,11,0.25)]
              hover:shadow-[0_0_32px_rgba(245,158,11,0.4)]
              hover:-translate-y-0.5 active:translate-y-0
              cursor-pointer
            "
          >
            <CalendarIcon className="w-4 h-4 text-black" />
            <span>Schedule a Call</span>
            <ArrowUpRightIcon className="w-4 h-4 text-black/70" />
          </button>

          {/* GitHub button */}
          <a
            href="https://github.com/Profenzy"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              bg-[#15171e] text-[#f5f2eb]
              border border-[#232631]
              px-4 py-2.5 rounded-xl text-sm font-medium
              hover:border-[#373b49] hover:bg-[#1b1e27] transition
            "
          >
            <img src={GithubIcon} className="w-4 h-4 opacity-80 invert" alt="" />
            <span>GitHub</span>
          </a>

          {/* Direct Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bacruz.prof@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              bg-[#15171e] text-[#f5f2eb]
              border border-[#232631]
              px-4 py-2.5 rounded-xl text-sm font-medium
              hover:border-[#373b49] hover:bg-[#1b1e27] transition
            "
          >
            <img src={MailIcon} className="w-4 h-4 opacity-80 invert" alt="" />
            <span>Email</span>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="
              flex items-center gap-2
              bg-[#15171e] text-[#f5f2eb]
              border border-[#232631]
              px-4 py-2.5 rounded-xl text-sm font-medium
              hover:border-amber-500/40 hover:bg-[#1b1e27] transition
            "
          >
            <img src={DownloadIcon} className="w-4 h-4 opacity-80 invert" alt="" />
            <span>Resume</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
