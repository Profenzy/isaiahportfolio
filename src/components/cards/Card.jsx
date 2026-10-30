function Card({ title, icon, children, action, className = "", accent = "amber" }) {
  const accentBorderHover = accent === "teal" 
    ? "hover:border-teal-500/40 hover:shadow-[0_12px_40px_-10px_rgba(20,184,166,0.15)]" 
    : "hover:border-amber-500/40 hover:shadow-[0_12px_40px_-10px_rgba(245,158,11,0.15)]";

  return (
    <div
      className={`
        fade-up  
        h-full
        rounded-2xl
        border border-[#232631]
        p-6
        bg-[#13151b]/80
        backdrop-blur-md
        flex flex-col
        transition-all duration-300
        hover:-translate-y-1
        ${accentBorderHover}
        ${className}
      `}
    >
      {/* header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#232631]/60">
        <h3 className="font-display font-semibold text-[#f5f2eb] text-base flex items-center gap-2.5 tracking-tight">
          {icon && <span className="text-amber-400">{icon}</span>}
          {title}
        </h3>

        {action && (
          <div className="text-xs font-medium text-[#9e9b93] hover:text-amber-400 transition cursor-pointer">
            {action}
          </div>
        )}
      </div>

      {/* body */}
      <div className="flex-1 flex flex-col text-[#9e9b93]">
        {children}
      </div>
    </div>
  );
}

export default Card;
