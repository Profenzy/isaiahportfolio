import { CalendarIcon, SparklesIcon, ArrowUpRightIcon } from "../icons/Icons";

function Navbar({ onOpenBooking }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#07080a]/80 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-teal-400 p-[1px]">
              <div className="w-full h-full bg-[#0a0b0e] rounded-[11px] flex items-center justify-center font-display font-bold text-sm text-[#f5f2eb] group-hover:text-amber-400 transition">
                BC
              </div>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-teal-400 border-2 border-[#07080a]" />
          </div>
          <div>
            <span className="font-display font-bold text-base text-[#f5f2eb] tracking-tight group-hover:text-amber-400 transition block">
              Brenz Cruz
            </span>
            <span className="micro-label text-[9px] text-[#9e9b93] -mt-0.5 block">
              Systems • Automations • Media
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#9e9b93]">
          <a href="#services" className="hover:text-[#f5f2eb] transition">
            Services
          </a>
          <a href="#case-studies" className="hover:text-[#f5f2eb] transition">
            Client Work
          </a>
          <a href="#credentials" className="hover:text-[#f5f2eb] transition">
            Credentials
          </a>
          <a href="#schedule" className="hover:text-amber-400 transition">
            Schedule Call
          </a>
        </nav>

        {/* Header Right: Status & Action Button */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>Available for Client Projects</span>
          </div>

          <button
            onClick={onOpenBooking}
            className="
              flex items-center gap-2
              bg-amber-500 text-black font-semibold
              px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-xs md:text-sm
              hover:bg-amber-400 transition-all duration-200
              shadow-[0_0_25px_rgba(245,158,11,0.25)]
              hover:shadow-[0_0_35px_rgba(245,158,11,0.4)]
              hover:-translate-y-0.5 active:translate-y-0
              cursor-pointer
            "
          >
            <CalendarIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-black" />
            <span>Schedule a Call</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5 text-black/70 hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

