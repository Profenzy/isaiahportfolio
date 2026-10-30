function Navigation({ onOpenBooking }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[58px] bg-[#0A0C0E]/85 backdrop-blur-[14px] border-b border-[rgba(237,231,220,0.13)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        
        {/* Wordmark with trailing amber period */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-sm sm:text-[15px] tracking-[-0.02em] text-[#EDE7DC]">
            BRENZ CRUZ<span className="text-[#E8913C]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <a 
            href="#videos" 
            className="label-caps text-[10.5px] text-[#9EA5A8] hover:text-[#E8913C] transition-colors"
          >
            Videos
          </a>
          <a 
            href="#decks" 
            className="label-caps text-[10.5px] text-[#9EA5A8] hover:text-[#E8913C] transition-colors"
          >
            Decks
          </a>
          <a 
            href="#systems" 
            className="label-caps text-[10.5px] text-[#9EA5A8] hover:text-[#E8913C] transition-colors"
          >
            Operations & Live
          </a>
          <a 
            href="#software" 
            className="label-caps text-[10.5px] text-[#9EA5A8] hover:text-[#2E6B72] transition-colors"
          >
            Software
          </a>
          <a 
            href="#dates" 
            className="label-caps text-[10.5px] text-[#9EA5A8] hover:text-[#E8913C] transition-colors"
          >
            Dates & Certs
          </a>
          <a 
            href="#contact" 
            className="label-caps text-[10.5px] text-[#9EA5A8] hover:text-[#E8913C] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Hairline pill button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenBooking}
            className="
              border border-[rgba(237,231,220,0.22)] hover:border-[#E8913C]
              text-[#EDE7DC] hover:text-[#E8913C]
              px-3.5 sm:px-4 py-1.5 rounded-full
              label-caps text-[10px] sm:text-[10.5px]
              transition duration-200 cursor-pointer
            "
          >
            Schedule Call
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navigation;
