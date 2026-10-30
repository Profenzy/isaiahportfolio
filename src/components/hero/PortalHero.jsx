import { useEffect, useRef, useState } from "react";
import heroImg from "../../assets/images/profile_hd.jpeg";

function PortalHero() {
  const containerRef = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setP(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Motion calculations
  // Image settles from 1.12 to 1.0 in full natural color
  const imageScale = 1.12 - p * 0.12;

  // Solid panels translate outward past their width
  const leftPanelX = -p * 105;
  const rightPanelX = p * 105;

  // Dots travel outward toward opposite corners
  const dotAmberX = -p * 44; // vw
  const dotAmberY = -p * 38; // vh
  const dotTealX = p * 44;   // vw
  const dotTealY = p * 38;   // vh

  // Title: scales up while simultaneously tightening letter-spacing
  const titleScale = 1 + p * 0.28;
  const titleLetterSpacing = -0.015 - p * 0.025; // in em
  const spanTranslateX = p * 60; // in %

  return (
    <section ref={containerRef} className="relative h-[165vh] w-full">
      {/* Sticky full-height stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden isolate bg-[#0A0C0E]">
        
        {/* LAYER 1: Full-bleed image in FULL NATURAL COLOR and full size view */}
        <div 
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{ transform: `scale(${imageScale})` }}
        >
          <img
            src={heroImg}
            alt="Brenz Cruz"
            className="w-full h-full object-cover object-[center_28%]"
          />
        </div>

        {/* LAYER 2: Subtle radial veil darkening the edges only */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, transparent 45%, rgba(10,12,14,0.7) 85%, #0A0C0E 100%)"
          }}
        />

        {/* LAYER 3: TWO solid panels meeting in the middle, translating outward on scroll */}
        <div
          className="absolute top-0 left-0 bottom-0 w-[51vw] bg-[#0A0C0E] will-change-transform z-10 border-r border-[rgba(237,231,220,0.06)]"
          style={{ transform: `translateX(${leftPanelX}%)` }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-[51vw] bg-[#0A0C0E] will-change-transform z-10 border-l border-[rgba(237,231,220,0.06)]"
          style={{ transform: `translateX(${rightPanelX}%)` }}
        />

        {/* LAYER 4: Two small accent dots at the centre travelling to opposite corners */}
        <div
          className="absolute top-1/2 left-1/2 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#E8913C] z-20 pointer-events-none will-change-transform"
          style={{ transform: `translate(${dotAmberX}vw, ${dotAmberY}vh)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#2E6B72] z-20 pointer-events-none will-change-transform"
          style={{ transform: `translate(${dotTealX}vw, ${dotTealY}vh)` }}
        />

        {/* LAYER 5: Wordmark split into two spans, scaling up & letter-spacing tightening simultaneously */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4">
          <div 
            className="flex items-center justify-center gap-4 sm:gap-8 will-change-transform font-display font-extrabold text-[clamp(44px,10vw,140px)] text-[#EDE7DC] leading-none select-none"
            style={{
              transform: `scale(${titleScale})`,
              letterSpacing: `${titleLetterSpacing}em`
            }}
          >
            {/* First span translates left */}
            <span 
              className="inline-block will-change-transform"
              style={{ transform: `translateX(-${spanTranslateX}%)` }}
            >
              BRENZ
            </span>

            {/* Accent dot separator fading out */}
            <span 
              className="inline-block w-3 h-3 rounded-full bg-[#E8913C] self-center -mt-2 transition-opacity"
              style={{ opacity: 1 - p * 1.5 }}
            />

            {/* Second span translates right */}
            <span 
              className="inline-block will-change-transform"
              style={{ transform: `translateX(${spanTranslateX}%)` }}
            >
              CRUZ
            </span>
          </div>
        </div>

        {/* LAYER 6: Corner Metadata pins to top and bottom edges */}
        <div className="absolute top-[72px] left-8 z-30 pointer-events-none">
          <span className="label-caps text-[#9EA5A8]">
            [ 01 // PORTAL ]
          </span>
        </div>

        <div className="absolute top-[72px] right-8 z-30 pointer-events-none hidden sm:block">
          <span className="label-caps text-[#9EA5A8]">
            SHORT-FORM VIDEO <span className="text-[#E8913C]">&bull;</span> SYSTEMS
          </span>
        </div>

        <div className="absolute bottom-8 left-8 z-30 pointer-events-none">
          <span className="label-caps text-[#9EA5A8]">
            BASED IN PH // REMOTE WORLDWIDE
          </span>
        </div>

        <div 
          className="absolute bottom-8 right-8 z-30 pointer-events-none transition-opacity duration-300 flex items-center gap-2"
          style={{ opacity: Math.max(1 - p * 3, 0) }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
          <span className="label-caps text-[#EDE7DC]">
            SCROLL TO UNCOVER &darr;
          </span>
        </div>

      </div>
    </section>
  );
}

export default PortalHero;
