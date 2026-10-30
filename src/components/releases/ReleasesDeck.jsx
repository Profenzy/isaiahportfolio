import { useState, useRef } from "react";
import { ArrowUpRightIcon } from "../icons/Icons";

function ReleasesDeck({ onOpenBooking }) {
  const cards = [
    {
      code: "CR-01",
      title: "Carousel A1: Strategic Framework",
      type: "Multi-Slide Carousel",
      image: "/media/Carousel 1.png",
      link: "https://www.instagram.com/p/DZ-XIxTkRbe/?img_index=1",
      tag: "Carousel Deck",
      desc: "Designed in Figma and Photoshop with contrast-first typography and structured information hierarchy.",
      accent: "#E8913C",
    },
    {
      code: "QT-01",
      title: "Quote Card 01: Authority Mindset",
      type: "Single Quote Card",
      image: "/media/Quote_Single 1.png",
      link: "https://www.instagram.com/p/DaFdffJtwfy/",
      tag: "Single Quote",
      desc: "Signature branding typography highlighting key soundbites from podcast and interview recordings.",
      accent: "#2E6B72",
    },
    {
      code: "SP-01",
      title: "Single Post 01: Visual Insight",
      type: "Single Graphic Post",
      image: "/media/Single post 1.png",
      link: "https://www.instagram.com/p/Da6Il1wFddN/",
      tag: "Single Post",
      desc: "High-retention feed graphic engineered to stop scrolling and prompt bookmarks.",
      accent: "#E8913C",
    },
    {
      code: "QT-02",
      title: "Quote Card 02: Perspective Shift",
      type: "Single Quote Card",
      image: "/media/Quote_Single 2.png",
      link: "https://www.instagram.com/p/DaAn6zgN9es/",
      tag: "Single Quote",
      desc: "Clean editorial layout paired with bold statement typography.",
      accent: "#2E6B72",
    },
    {
      code: "SP-02",
      title: "Single Post 02: Community Notice",
      type: "Single Graphic Post",
      image: "/media/Single post 2.png",
      link: "https://www.instagram.com/p/DbTWQTklcyE/",
      tag: "Single Post",
      desc: "Promotional event creative designed for cross-channel distribution.",
      accent: "#E8913C",
    },
    {
      code: "CR-02",
      title: "Carousel 02: Educational Slide Deck",
      type: "Multi-Slide Carousel",
      image: "/media/Carousel 2.png",
      link: "https://www.instagram.com/p/DaNYASOEbS2/?img_index=1",
      tag: "Carousel Deck",
      desc: "Educational carousel sequence formatted for high swipe retention.",
      accent: "#2E6B72",
    },
    {
      code: "VS-01",
      title: "Video Story: BTS Cut",
      type: "Video Story",
      video: "/media/Video_Story.mp4",
      link: "https://www.instagram.com/tanyamemmeofficial/",
      tag: "Motion Reel",
      desc: "Dynamic vertical story cut with animated text and real-time audio sync.",
      accent: "#E8913C",
    },
  ];

  const [topIndex, setTopIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isThrowing, setIsThrowing] = useState(false);
  const [throwDir, setThrowDir] = useState(1);

  const deckRef = useRef(null);
  const startPos = useRef({ x: 0, y: 0 });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") triggerThrow(1);
    else if (e.key === "ArrowLeft") triggerThrow(-1);
  };

  const triggerThrow = (direction) => {
    if (isThrowing) return;
    setIsThrowing(true);
    setThrowDir(direction);
    setTimeout(() => {
      setTopIndex((prev) => (prev + 1) % cards.length);
      setIsThrowing(false);
      setDragOffset({ x: 0, y: 0 });
    }, 280);
  };

  const onPointerDown = (e) => {
    if (isThrowing) return;
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
    if (e.target.setPointerCapture) {
      e.target.setPointerCapture(e.pointerId);
    }
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;
    setDragOffset({ x: deltaX, y: deltaY });
  };

  const onPointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragOffset.x) > 38) {
      triggerThrow(dragOffset.x > 0 ? 1 : -1);
    } else {
      setDragOffset({ x: 0, y: 0 });
    }
  };

  return (
    <section 
      id="decks"
      className="py-24 md:py-32 bg-[#0A0C0E] border-b border-[rgba(237,231,220,0.13)] px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: Headline, Lede, Buttons */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-3">
            <span className="label-caps text-[#E8913C] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
              CAROUSELS & SINGLE QUOTE CARDS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#EDE7DC] tracking-tight leading-[1.08]">
              Tactile graphic decks & quote cards.
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#9EA5A8] leading-relaxed">
            A physical stack of single quote cards, multi-slide educational carousels, and visual authority assets crafted for Tanya Memme. Designed in 4:5 vertical proportion to stop the scroll and build brand recognition.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="
                border border-[#E8913C] text-[#EDE7DC] hover:bg-[#E8913C] hover:text-[#0A0C0E]
                px-6 py-3 rounded-full label-caps text-[11px] font-semibold
                transition duration-200 cursor-pointer
              "
            >
              Commission Visuals
            </button>

            <a
              href="https://www.instagram.com/tanyamemmeofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border border-[rgba(237,231,220,0.15)] hover:border-[#EDE7DC] text-[#9EA5A8] hover:text-[#EDE7DC]
                px-5 py-3 rounded-full label-caps text-[11px] font-medium
                transition duration-200 flex items-center gap-2
              "
            >
              <span>View On Instagram</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-4 border-t border-[rgba(237,231,220,0.13)] flex items-center gap-8 text-xs text-[#6C7378]">
            <div>
              <span className="label-caps text-[9px] text-[#6C7378] block">PROPORTION</span>
              <span className="font-mono text-xs text-[#9EA5A8]">4:5 Vertical Crop</span>
            </div>
            <div>
              <span className="label-caps text-[9px] text-[#6C7378] block">TOTAL DECK</span>
              <span className="font-mono text-xs text-[#EDE7DC]">07 Selected Pieces</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Throwable Physical Card Deck (Fitted Size, Zero Black Side Gaps) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-end">
          
          <div
            ref={deckRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            style={{ touchAction: "pan-y" }}
            className="
              relative w-[300px] sm:w-[370px] h-[510px] sm:h-[560px]
              select-none outline-none cursor-grab active:cursor-grabbing
            "
          >
            {[2, 1, 0].map((stackPos) => {
              const cardIndex = (topIndex + stackPos) % cards.length;
              const card = cards[cardIndex];
              const isTop = stackPos === 0;

              const stackScale = 1 - stackPos * 0.04;
              const stackTranslateY = stackPos * 12;
              const stackRotation = stackPos === 0 ? 0 : stackPos === 1 ? -2.5 : 2;

              let transform = `translate3d(0px, ${stackTranslateY}px, 0px) scale(${stackScale}) rotate(${stackRotation}deg)`;
              let transition = isDragging ? "none" : "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s";
              let opacity = 1 - stackPos * 0.18;

              if (isTop) {
                if (isThrowing) {
                  transform = `translate3d(${throwDir * 420}px, -40px, 0px) scale(1.05) rotate(${throwDir * 22}deg)`;
                  opacity = 0;
                } else if (isDragging) {
                  const rot = dragOffset.x * 0.07;
                  transform = `translate3d(${dragOffset.x}px, ${dragOffset.y * 0.5}px, 0px) scale(1.03) rotate(${rot}deg)`;
                }
              }

              return (
                <div
                  key={card.code}
                  onPointerDown={isTop ? onPointerDown : undefined}
                  onPointerMove={isTop ? onPointerMove : undefined}
                  onPointerUp={isTop ? onPointerUp : undefined}
                  onPointerCancel={isTop ? onPointerUp : undefined}
                  style={{
                    transform,
                    transition,
                    opacity,
                    zIndex: 10 - stackPos,
                  }}
                  className="
                    absolute inset-0 w-full h-full rounded-2xl
                    bg-[#101317] border border-[rgba(237,231,220,0.13)]
                    deck-card-shadow p-4 sm:p-5 flex flex-col justify-between
                    will-change-transform overflow-hidden
                  "
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-[rgba(237,231,220,0.1)]">
                    <span className="font-mono text-xs text-[#E8913C]">
                      {card.code}
                    </span>
                    <span className="label-caps text-[9px] px-2 py-0.5 rounded-full border border-[rgba(237,231,220,0.15)] text-[#9EA5A8]">
                      {card.tag}
                    </span>
                  </div>

                  {/* FITTED ARTWORK CONTAINER (Aspect 4:5 - Perfectly Fits 1080x1350 with ZERO Black Side Gaps) */}
                  <div className="my-2 relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#101317] border border-[rgba(237,231,220,0.1)]">
                    {card.video ? (
                      <video
                        src={card.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover block"
                      />
                    )}
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-0.5">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#EDE7DC] line-clamp-1">
                      {card.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-[#9EA5A8] line-clamp-1">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-2 border-t border-[rgba(237,231,220,0.08)] flex items-center justify-between">
                    <span className="label-caps text-[9px] text-[#6C7378]">
                      {card.type}
                    </span>

                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        inline-flex items-center gap-1.5
                        label-caps text-[10px] text-[#E8913C] hover:text-[#EDE7DC]
                        transition-colors
                      "
                    >
                      <span>View Live</span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Progress dots & hint line */}
          <div className="w-[300px] sm:w-[370px] pt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-1.5">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTopIndex(i)}
                  className={`
                    w-1.5 h-1.5 rounded-full transition-all duration-200 cursor-pointer
                    ${topIndex === i ? "bg-[#E8913C] w-4" : "bg-[rgba(237,231,220,0.2)]"}
                  `}
                />
              ))}
            </div>

            <span className="label-caps text-[9.5px] text-[#6C7378] tracking-[0.16em]">
              DRAG CARD TO FLIP &bull; ARROWS &larr; &rarr; TO CYCLE
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ReleasesDeck;
