import { PlayIcon, ArrowUpRightIcon } from "../icons/Icons";

function VideosShowcase() {
  return (
    <section 
      id="videos"
      className="py-24 md:py-32 bg-[#0A0C0E] border-b border-[rgba(237,231,220,0.13)] px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Tag */}
        <div className="flex items-center justify-between pb-6 border-b border-[rgba(237,231,220,0.13)]">
          <span className="label-caps text-[#E8913C] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
            VIDEOS // SHORT-FORM EDITING & DIRECTION
          </span>
          <span className="label-caps text-[#6C7378]">
            [ 03 // 06 ]
          </span>
        </div>

        {/* ======================================================== */}
        {/* TOP BLOCK: TANYA MEMME (HERO VIDEO SHOWCASE)            */}
        {/* ======================================================== */}
        <div className="space-y-6">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#EDE7DC] tracking-tight">
                Tanya Memme
              </h2>
              <p className="text-xs sm:text-sm text-[#9EA5A8] max-w-2xl leading-relaxed">
                Short-form clips from full interview episodes: hook first, subtitled, key words emphasized. Paced for viral retention and personal brand authority.
              </p>
            </div>

            <div className="flex items-center gap-4 label-caps text-[10px] text-[#9EA5A8] shrink-0">
              <a 
                href="https://www.instagram.com/tanyamemmeofficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#E8913C] transition flex items-center gap-1"
              >
                <span>@tanyamemmeofficial</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </a>
              <span className="text-[#6C7378]">&bull;</span>
              <a 
                href="https://www.tiktok.com/@tanyamemme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#E8913C] transition flex items-center gap-1"
              >
                <span>TikTok</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Grid Layout (2 Large Featured Cards on Left + 2x2 Grid on Right) */}
          <div className="grid lg:grid-cols-12 gap-5 items-stretch">
            
            {/* FEATURED VIDEO 1 (Large Card) */}
            <a
              href="https://www.instagram.com/p/DbgOOEan_pv/"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-4 group flex flex-col justify-between rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-4 transition-all duration-300"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#07080A]">
                <img
                  src="/media/Video_Thumbnail 1.png"
                  alt="Tanya Memme Reel 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
                
                {/* 100% Dead-Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#E8913C] text-[#0A0C0E] flex items-center justify-center group-hover:scale-110 transition duration-300 shadow-2xl">
                    <PlayIcon className="w-5 h-5 text-[#0A0C0E]" />
                  </div>
                </div>
              </div>

              <div className="pt-3.5 space-y-1">
                <h4 className="font-display font-bold text-base text-[#EDE7DC] group-hover:text-[#E8913C] transition">
                  Personal Journey & Storytelling Cut
                </h4>
                <p className="text-[11px] font-mono text-[#6C7378]">
                  0:48 &bull; plays on Instagram ↗
                </p>
              </div>
            </a>

            {/* FEATURED VIDEO 2 (Large Card) */}
            <a
              href="https://www.instagram.com/p/Dbv4yXBEaCJ/"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-4 group flex flex-col justify-between rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-4 transition-all duration-300"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#07080A]">
                <img
                  src="/media/Video_Thumbnail 2.png"
                  alt="Tanya Memme Reel 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />

                {/* 100% Dead-Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#E8913C] text-[#0A0C0E] flex items-center justify-center group-hover:scale-110 transition duration-300 shadow-2xl">
                    <PlayIcon className="w-5 h-5 text-[#0A0C0E]" />
                  </div>
                </div>
              </div>

              <div className="pt-3.5 space-y-1">
                <h4 className="font-display font-bold text-base text-[#EDE7DC] group-hover:text-[#E8913C] transition">
                  High-Impact Retention Reel
                </h4>
                <p className="text-[11px] font-mono text-[#6C7378]">
                  0:52 &bull; plays on Instagram ↗
                </p>
              </div>
            </a>

            {/* 2X2 GRID OF 4 SMALLER VERTICAL CARDS ON THE RIGHT */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              
              {/* Card 1: Video Thumbnail 3 */}
              <a
                href="https://www.instagram.com/p/Db861-CGy-N/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition"
              >
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <img
                    src="/media/Video_Thumbnail 3.png"
                    alt="Actionable Advice Cut"
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-9 h-9 rounded-full bg-[#E8913C] text-[#0A0C0E] flex items-center justify-center shadow-lg">
                      <PlayIcon className="w-3.5 h-3.5 text-[#0A0C0E]" />
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-display font-semibold text-xs text-[#EDE7DC] group-hover:text-[#E8913C] transition line-clamp-1">
                    Actionable Advice Cut
                  </p>
                  <p className="text-[10px] text-[#6C7378]">Tanya Memme &bull; Reel</p>
                </div>
              </a>

              {/* Card 2: Video Story (Actual mp4 video preview!) */}
              <div className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition">
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <video
                    src="/media/Video_Story.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1.5 right-1.5 bg-[#0A0C0E]/80 px-1.5 py-0.5 rounded text-[8px] font-mono text-[#E8913C]">
                    LIVE MP4
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-display font-semibold text-xs text-[#EDE7DC] line-clamp-1">
                    Behind The Scenes Story
                  </p>
                  <p className="text-[10px] text-[#6C7378]">Tanya Memme &bull; Story</p>
                </div>
              </div>

              {/* Card 3: Direct Hook */}
              <a
                href="https://www.instagram.com/p/DcCO1_ckleV/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition"
              >
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <img
                    src="/media/Video_Thumbnail 1.png"
                    alt="Fast Paced Hook"
                    className="w-full h-full object-cover filter contrast-[1.04]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-9 h-9 rounded-full bg-[#E8913C] text-[#0A0C0E] flex items-center justify-center shadow-lg">
                      <PlayIcon className="w-3.5 h-3.5 text-[#0A0C0E]" />
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-display font-semibold text-xs text-[#EDE7DC] group-hover:text-[#E8913C] transition line-clamp-1">
                    3-Second Hook Cut
                  </p>
                  <p className="text-[10px] text-[#6C7378]">Tanya Memme &bull; Viral</p>
                </div>
              </a>

              {/* Card 4: Sound Design */}
              <a
                href="https://www.instagram.com/p/DcEfDX8nCVu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition"
              >
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <img
                    src="/media/Video_Thumbnail 2.png"
                    alt="Interview Cadence"
                    className="w-full h-full object-cover filter contrast-[1.04]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-9 h-9 rounded-full bg-[#E8913C] text-[#0A0C0E] flex items-center justify-center shadow-lg">
                      <PlayIcon className="w-3.5 h-3.5 text-[#0A0C0E]" />
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-display font-semibold text-xs text-[#EDE7DC] group-hover:text-[#E8913C] transition line-clamp-1">
                    Interview Cadence
                  </p>
                  <p className="text-[10px] text-[#6C7378]">Tanya Memme &bull; Reel</p>
                </div>
              </a>

            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* BOTTOM BLOCK: KUBO NI LOLA & TRIXY CASTRO (2 COLUMNS)    */}
        {/* ======================================================== */}
        <div className="pt-12 border-t border-[rgba(237,231,220,0.13)] grid lg:grid-cols-2 gap-12">
          
          {/* COLUMN 1: KUBO NI LOLA WITH EXACT THUMBNAILS */}
          <div className="space-y-5">
            <div className="flex items-end justify-between pb-2 border-b border-[rgba(237,231,220,0.1)]">
              <div>
                <h3 className="font-display font-bold text-2xl text-[#EDE7DC]">
                  Kubo ni Lola
                </h3>
                <p className="text-xs text-[#9EA5A8] mt-0.5">
                  TikTok social campaigns, rustic brand narrative, and dynamic edits.
                </p>
              </div>

              <a
                href="https://www.tiktok.com/@kubonilola?_r=1&_t=ZS-9AzPb7ZCeJh"
                target="_blank"
                rel="noopener noreferrer"
                className="label-caps text-[10px] text-[#E8913C] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>@kubonilola</span>
                <ArrowUpRightIcon className="w-3 h-3" />
              </a>
            </div>

            {/* 3 Vertical Video Cards with Real Kubo Thumbnails */}
            <div className="grid grid-cols-3 gap-3.5">
              
              {/* 1. Documentary Story (Kubo_thumbnail1.png) */}
              <a
                href="https://vt.tiktok.com/ZSgWKdJ1e/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition"
              >
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <img
                    src="/media/Kubo_thumbnail1.png"
                    alt="Heritage Story"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition" />
                  
                  {/* Perfectly Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-9 h-9 rounded-full bg-[#E8913C] text-[#0A0C0E] flex items-center justify-center shadow-lg">
                      <PlayIcon className="w-3.5 h-3.5 text-[#0A0C0E]" />
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-display font-semibold text-xs text-[#EDE7DC] group-hover:text-[#E8913C] transition line-clamp-1">
                    Heritage Story
                  </p>
                  <p className="text-[10px] text-[#6C7378]">TikTok &bull; Narrative</p>
                </div>
              </a>

              {/* 2. Trending Edit (Kubo_thumbnail2.png) */}
              <a
                href="https://vt.tiktok.com/ZSgWwKDNC/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition"
              >
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <img
                    src="/media/Kubo_thumbnail2.png"
                    alt="Trending Audio"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition" />

                  {/* Perfectly Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-9 h-9 rounded-full bg-[#E8913C] text-[#0A0C0E] flex items-center justify-center shadow-lg">
                      <PlayIcon className="w-3.5 h-3.5 text-[#0A0C0E]" />
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-display font-semibold text-xs text-[#EDE7DC] group-hover:text-[#E8913C] transition line-clamp-1">
                    Trending Audio
                  </p>
                  <p className="text-[10px] text-[#6C7378]">TikTok &bull; Trending</p>
                </div>
              </a>

              {/* 3. Event Specific (Kubo_thumbnail3.png) */}
              <a
                href="https://vt.tiktok.com/ZSgWK6LkR/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition"
              >
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <img
                    src="/media/Kubo_thumbnail3.png"
                    alt="Seasonal Gathering"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition" />

                  {/* Perfectly Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-9 h-9 rounded-full bg-[#E8913C] text-[#0A0C0E] flex items-center justify-center shadow-lg">
                      <PlayIcon className="w-3.5 h-3.5 text-[#0A0C0E]" />
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-display font-semibold text-xs text-[#EDE7DC] group-hover:text-[#E8913C] transition line-clamp-1">
                    Event Gathering
                  </p>
                  <p className="text-[10px] text-[#6C7378]">TikTok &bull; Seasonal</p>
                </div>
              </a>

            </div>
          </div>

          {/* COLUMN 2: TRIXY CASTRO LIVE BROADCAST TITLE COVERS */}
          <div className="space-y-5">
            <div className="flex items-end justify-between pb-2 border-b border-[rgba(237,231,220,0.1)]">
              <div>
                <h3 className="font-display font-bold text-2xl text-[#EDE7DC]">
                  Trixy Castro Live Broadcasts
                </h3>
                <p className="text-xs text-[#9EA5A8] mt-0.5">
                  Official live broadcast title motion cards and stream packages.
                </p>
              </div>

              <div className="flex items-center gap-2 label-caps text-[10px] text-[#2E6B72] border border-[#2E6B72]/30 px-2.5 py-0.5 rounded shrink-0">
                <span>Broadcast Covers</span>
              </div>
            </div>

            {/* 3 Live Broadcast Video Covers */}
            <div className="grid grid-cols-3 gap-3.5">
              
              {/* Cover 1 */}
              <div className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#2E6B72] p-2.5 transition">
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <video
                    src="/media/trixy-cover-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-[#0A0C0E]/80 px-1.5 py-0.5 rounded text-[8px] font-mono text-[#2E6B72] border border-[#2E6B72]/30">
                    TITLE CARD
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-display font-semibold text-xs text-[#EDE7DC] line-clamp-1">
                    De Trabajos a Contratos
                  </p>
                  <p className="text-[10px] text-[#6C7378]">Live Broadcast &bull; Stream</p>
                </div>
              </div>

              {/* Cover 2 */}
              <div className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#2E6B72] p-2.5 transition">
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <video
                    src="/media/trixy-cover-2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-[#0A0C0E]/80 px-1.5 py-0.5 rounded text-[8px] font-mono text-[#2E6B72] border border-[#2E6B72]/30">
                    TITLE CARD
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-display font-semibold text-xs text-[#EDE7DC] line-clamp-1">
                    De la Lesión a Solución
                  </p>
                  <p className="text-[10px] text-[#6C7378]">Live Broadcast &bull; Stream</p>
                </div>
              </div>

              {/* Cover 3 */}
              <div className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#2E6B72] p-2.5 transition">
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <video
                    src="/media/trixy-cover-3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-[#0A0C0E]/80 px-1.5 py-0.5 rounded text-[8px] font-mono text-[#2E6B72] border border-[#2E6B72]/30">
                    TITLE CARD
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-display font-semibold text-xs text-[#EDE7DC] line-clamp-1">
                    LinkedIn Para Tu Negocio
                  </p>
                  <p className="text-[10px] text-[#6C7378]">Live Broadcast &bull; Stream</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default VideosShowcase;
