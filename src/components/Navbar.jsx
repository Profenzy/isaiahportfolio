import { CalendarIcon, SparklesIcon } from "./icons/Icons";

function Navbar({ onOpenBooking }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0b0c0e]/80 border-b border-[#232631]/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-teal-400 p-[1px]">
            <div className="w-full h-full bg-[#0b0c0e] rounded-[7px] flex items-center justify-center font-display font-bold text-sm text-[#f5f2eb]">
              B
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-sm text-[#f5f2eb] tracking-tight block">
              Brenz Cruz
            </span>
            <span className="micro-label text-[9px] text-[#9e9b93] -mt-0.5 block">
              Full-Stack & Automations
            </span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="
              flex items-center gap-2
              bg-amber-500/10 border border-amber-500/30 text-amber-300
              hover:bg-amber-500 hover:text-black
              px-3.5 py-1.5 rounded-xl text-xs font-semibold
              transition-all duration-200 cursor-pointer
            "
          >
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Book a Call</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

