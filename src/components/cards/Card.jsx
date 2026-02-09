function Card({ title, icon, children, action }) {
    return (
      <div
        className="
          fade-up  
          h-full
          rounded-xl
          border border-black/10
          p-5
          bg-white
          flex flex-col
          transition duration-300
          hover:-translate-y-1
          hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        "
      >
        {/* header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold flex items-center gap-2">
            {icon}
            {title}
          </h3>
  
          {action && (
            <span className="text-sm text-gray-500 hover:text-black cursor-pointer">
              {action}
            </span>
          )}
        </div>
  
        {/* body */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    );
  }
  
  export default Card;
  