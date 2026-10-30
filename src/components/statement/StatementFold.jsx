import { useEffect, useState } from "react";

function StatementFold() {
  const images = [
    "/profile/switch-4.jpeg",
    "/profile/switch-1.jpeg",
    "/profile/switch-2.jpeg",
    "/profile/switch-3.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch compiled pictures every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#0A0C0E] border-b border-[rgba(237,231,220,0.13)] px-6 md:px-16 pt-12 md:pt-16 pb-16 md:pb-24"
    >
      {/* Background outlined index numeral using -webkit-text-stroke */}
      <div 
        aria-hidden="true"
        className="absolute left-6 md:left-16 bottom-4 md:bottom-8 select-none pointer-events-none text-stroke-numeral font-display font-extrabold text-[clamp(100px,18vw,260px)] leading-none z-0"
      >
        02
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Statement Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          
          {/* Small uppercase label */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
            <span className="label-caps text-[#9EA5A8]">
              POSITIONING & PHILOSOPHY
            </span>
          </div>

          {/* Statement at clamp(24px, 3.6vw, 52px) over about 22ch with one phrase in amber */}
          <blockquote className="font-display font-bold text-[clamp(24px,3.6vw,50px)] text-[#EDE7DC] leading-[1.14] tracking-tight max-w-[24ch]">
            I craft <span className="text-[#E8913C]">high-retention video edits</span>, executive live broadcasts, and automated growth engines that command audience attention.
          </blockquote>

          {/* Supporting fine print line */}
          <p className="text-sm md:text-base text-[#9EA5A8] max-w-lg leading-relaxed pt-1">
            Specializing in dynamic video pacing for creators like Tanya Memme, live broadcasting and GoHighLevel CRM infrastructure for Trixy Castro and her companies.
          </p>

          {/* Image index indicator dots */}
          <div className="flex items-center gap-2 pt-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i ? "bg-[#E8913C] w-6" : "bg-[rgba(237,231,220,0.2)] w-2"
                }`}
              />
            ))}
            <span className="label-caps text-[9px] text-[#6C7378] ml-2">
              PORTRAIT 0{currentIndex + 1} / 0{images.length} &bull; FULL COLOR VIEW
            </span>
          </div>

        </div>

        {/* FULL SIZE VIEW, FULL NATURAL COLOR PORTRAIT FRAME */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[340px] sm:max-w-[390px] aspect-[3/4] rounded-2xl border border-[rgba(237,231,220,0.18)] bg-[#101317] p-2 overflow-hidden shadow-2xl">
            
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#07080A]">
              {images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="Brenz Cruz"
                  className={`
                    absolute inset-0 w-full h-full object-cover object-top
                    transition-opacity duration-1000 ease-in-out
                    ${currentIndex === i ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"}
                  `}
                />
              ))}

              {/* Bottom Subtle Overlay Ribbon */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0A0C0E]/90 via-[#0A0C0E]/40 to-transparent flex items-center justify-between">
                <div>
                  <span className="font-display font-bold text-sm text-[#EDE7DC] block">
                    Brenz Cruz
                  </span>
                  <span className="label-caps text-[9px] text-[#9EA5A8] block">
                    Video Editor & Systems
                  </span>
                </div>
                <span className="label-caps text-[9px] text-[#E8913C] border border-[#E8913C]/30 px-2 py-0.5 rounded-full bg-[#0A0C0E]/60">
                  Live Preview
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Top right corner index */}
      <div className="absolute top-8 right-8 md:right-16 z-10">
        <span className="label-caps text-[#6C7378]">
          [ 02 // 06 ]
        </span>
      </div>

    </section>
  );
}

export default StatementFold;
