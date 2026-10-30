import { useState } from "react";
import { PlayIcon, ArrowUpRightIcon } from "../icons/Icons";

function VideosShowcase() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const tanyaVideos = [
    {
      id: "tanya-1",
      title: "Personal Journey & Storytelling Cut",
      subtitle: "Tanya Memme • Long-Form to Short-Form",
      duration: "0:48",
      platform: "Instagram Reel",
      url: "https://www.instagram.com/p/DbgOOEan_pv/",
      thumbnail: "/media/Video_Thumbnail 1.png",
      featured: true,
      description: "High-retention storytelling cut with bold animated captions and emotional pacing for creator personal branding.",
    },
    {
      id: "tanya-2",
      title: "High-Impact Retention Reel",
      subtitle: "Tanya Memme • Episode Hook",
      duration: "0:52",
      platform: "Instagram Reel",
      url: "https://www.instagram.com/p/Dbv4yXBEaCJ/",
      thumbnail: "/media/Video_Thumbnail 2.png",
      featured: true,
      description: "Fast-paced conversational edit engineered to capture the viewer within the first 2 seconds.",
    },
    {
      id: "tanya-3",
      title: "Actionable Advice Cut",
      subtitle: "Tanya Memme • Reel",
      duration: "0:45",
      platform: "Instagram Reel",
      url: "https://www.instagram.com/p/Db861-CGy-N/",
      thumbnail: "/media/Video_Thumbnail 3.png",
      featured: false,
    },
    {
      id: "tanya-4",
      title: "Behind The Scenes Story",
      subtitle: "Tanya Memme • Story",
      duration: "0:30",
      platform: "Live MP4 Video",
      videoSrc: "/media/Video_Story.mp4",
      featured: false,
      isMp4: true,
    },
    {
      id: "tanya-5",
      title: "3-Second Hook Cut",
      subtitle: "Tanya Memme • Viral Hook",
      duration: "0:38",
      platform: "Instagram Reel",
      url: "https://www.instagram.com/p/DcCO1_ckleV/",
      thumbnail: "/media/Video_Thumbnail 1.png",
      featured: false,
    },
    {
      id: "tanya-6",
      title: "Interview Cadence Cut",
      subtitle: "Tanya Memme • Dialogue Pacing",
      duration: "0:49",
      platform: "Instagram Reel",
      url: "https://www.instagram.com/p/DcEfDX8nCVu/",
      thumbnail: "/media/Video_Thumbnail 2.png",
      featured: false,
    },
  ];

  const kuboVideos = [
    {
      id: "kubo-1",
      title: "Heritage Story",
      tag: "TikTok • Narrative",
      url: "https://vt.tiktok.com/ZSgWKdJ1e/",
      thumbnail: "/media/Kubo_thumbnail1.png",
      description: "Cultural documentary edit emphasizing authentic culinary tradition and rustic warmth.",
    },
    {
      id: "kubo-2",
      title: "Trending Audio",
      tag: "TikTok • Trending",
      url: "https://vt.tiktok.com/ZSgWwKDNC/",
      thumbnail: "/media/Kubo_thumbnail2.png",
      description: "Beat-synced trending sound edit designed for high algorithmic distribution.",
    },
    {
      id: "kubo-3",
      title: "Event & Seasonal Gathering",
      tag: "TikTok • Event Highlight",
      url: "https://vt.tiktok.com/ZSgWK6LkR/",
      thumbnail: "/media/Kubo_thumbnail3.png",
      description: "Atmospheric social highlight reel capturing guest experiences and live dining vibe.",
    },
  ];

  const trixyBroadcasts = [
    {
      id: "trixy-1",
      title: "Trabajos En Efectivo Contratos Grandes",
      videoSrc: "/media/trixy-cover-1.mp4",
      tag: "Executive Multi-Stream",
      description: "Official title motion package and broadcast direction for high-volume Spanish speaking entrepreneurship streams.",
    },
    {
      id: "trixy-2",
      title: "De la Lesión a la Solución",
      videoSrc: "/media/trixy-cover-2.mp4",
      tag: "Corporate Interview Stream",
      description: "Multi-camera live broadcast production and animated screen transitions.",
    },
    {
      id: "trixy-3",
      title: "Cómo Configurar Tu Perfil LinkedIn",
      videoSrc: "/media/trixy-cover-3.mp4",
      tag: "Professional Masterclass",
      description: "Live broadcast graphics and technical stream supervision for executive branding.",
    },
  ];

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
            
            {/* FEATURED VIDEO 1 */}
            <div
              onClick={() => setSelectedVideo(tanyaVideos[0])}
              className="lg:col-span-4 group flex flex-col justify-between rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-4 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#07080A]">
                <img
                  src={tanyaVideos[0].thumbnail}
                  alt={tanyaVideos[0].title}
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
                  {tanyaVideos[0].title}
                </h4>
                <p className="text-[11px] font-mono text-[#6C7378]">
                  {tanyaVideos[0].duration} &bull; Click to Inspect Cut &rarr;
                </p>
              </div>
            </div>

            {/* FEATURED VIDEO 2 */}
            <div
              onClick={() => setSelectedVideo(tanyaVideos[1])}
              className="lg:col-span-4 group flex flex-col justify-between rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-4 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#07080A]">
                <img
                  src={tanyaVideos[1].thumbnail}
                  alt={tanyaVideos[1].title}
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
                  {tanyaVideos[1].title}
                </h4>
                <p className="text-[11px] font-mono text-[#6C7378]">
                  {tanyaVideos[1].duration} &bull; Click to Inspect Cut &rarr;
                </p>
              </div>
            </div>

            {/* 2X2 GRID OF 4 SMALLER VERTICAL CARDS ON THE RIGHT */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              
              {/* Card 1: Video Thumbnail 3 */}
              <div
                onClick={() => setSelectedVideo(tanyaVideos[2])}
                className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition cursor-pointer"
              >
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <img
                    src={tanyaVideos[2].thumbnail}
                    alt={tanyaVideos[2].title}
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
                    {tanyaVideos[2].title}
                  </p>
                  <p className="text-[10px] text-[#6C7378]">Tanya Memme &bull; Reel</p>
                </div>
              </div>

              {/* Card 2: Video Story (Live MP4) */}
              <div 
                onClick={() => setSelectedVideo(tanyaVideos[3])}
                className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition cursor-pointer"
              >
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
              <div
                onClick={() => setSelectedVideo(tanyaVideos[4])}
                className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition cursor-pointer"
              >
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <img
                    src={tanyaVideos[4].thumbnail}
                    alt={tanyaVideos[4].title}
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
                    {tanyaVideos[4].title}
                  </p>
                  <p className="text-[10px] text-[#6C7378]">Tanya Memme &bull; Viral</p>
                </div>
              </div>

              {/* Card 4: Sound Design */}
              <div
                onClick={() => setSelectedVideo(tanyaVideos[5])}
                className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition cursor-pointer"
              >
                <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                  <img
                    src={tanyaVideos[5].thumbnail}
                    alt={tanyaVideos[5].title}
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
                    {tanyaVideos[5].title}
                  </p>
                  <p className="text-[10px] text-[#6C7378]">Tanya Memme &bull; Reel</p>
                </div>
              </div>

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
              {kuboVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] p-2.5 transition cursor-pointer"
                >
                  <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition" />
                    
                    {/* Centered Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-9 h-9 rounded-full bg-[#E8913C] text-[#0A0C0E] flex items-center justify-center shadow-lg">
                        <PlayIcon className="w-3.5 h-3.5 text-[#0A0C0E]" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="font-display font-semibold text-xs text-[#EDE7DC] group-hover:text-[#E8913C] transition line-clamp-1">
                      {video.title}
                    </p>
                    <p className="text-[10px] text-[#6C7378]">{video.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: TRIXY CASTRO & PORTFOLIO COMPANIES LIVE BROADCASTS */}
          <div className="space-y-5">
            <div className="flex items-end justify-between pb-2 border-b border-[rgba(237,231,220,0.1)]">
              <div>
                <h3 className="font-display font-bold text-2xl text-[#EDE7DC]">
                  Trixy Castro Live Broadcasts
                </h3>
                <p className="text-xs text-[#9EA5A8] mt-0.5">
                  Executive multi-stream production, technical direction & live title motion covers.
                </p>
              </div>

              <span className="label-caps text-[10px] text-[#2E6B72]">
                EXECUTIVE PRODUCTION
              </span>
            </div>

            {/* 3 Looping Video Title Motion Covers */}
            <div className="grid grid-cols-3 gap-3.5">
              {trixyBroadcasts.map((stream) => (
                <div
                  key={stream.id}
                  onClick={() => setSelectedVideo({ ...stream, isMp4: true, platform: "Executive Broadcast Video" })}
                  className="group flex flex-col justify-between rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#2E6B72] p-2.5 transition cursor-pointer"
                >
                  <div className="relative aspect-[9/14] rounded-lg overflow-hidden bg-[#07080A]">
                    <video
                      src={stream.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1.5 left-1.5 bg-[#0A0C0E]/80 backdrop-blur-xs px-1.5 py-0.5 rounded text-[8px] font-mono text-[#2E6B72] border border-[#2E6B72]/30">
                      LIVE COVER
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="font-display font-semibold text-xs text-[#EDE7DC] group-hover:text-[#2E6B72] transition line-clamp-1">
                      {stream.title}
                    </p>
                    <p className="text-[10px] text-[#6C7378]">{stream.tag}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* IN-PAGE CINEMATIC VIDEO PLAYER MODAL                    */}
      {/* ======================================================== */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="
            fixed inset-0 z-[10000]
            bg-[#0A0C0E]/92 backdrop-blur-[14px]
            flex items-center justify-center p-4 sm:p-8
            animate-fadeIn
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative max-w-xl w-full bg-[#101317]
              border border-[rgba(237,231,220,0.18)] rounded-2xl
              p-5 sm:p-7 deck-card-shadow overflow-hidden flex flex-col justify-between
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(237,231,220,0.1)] mb-4">
              <div>
                <span className="label-caps text-[10px] text-[#E8913C] block">
                  {selectedVideo.platform || selectedVideo.tag || "PORTFOLIO SHOWCASE"}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#EDE7DC] mt-0.5">
                  {selectedVideo.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="
                  w-8 h-8 rounded-full border border-[rgba(237,231,220,0.2)]
                  text-[#9EA5A8] hover:text-[#EDE7DC] hover:border-[#E8913C]
                  flex items-center justify-center transition cursor-pointer text-xs
                "
              >
                ✕
              </button>
            </div>

            {/* Video Body */}
            <div className="my-auto relative aspect-[9/14] max-h-[58vh] w-full mx-auto flex items-center justify-center rounded-xl overflow-hidden bg-[#07080A] border border-[rgba(237,231,220,0.1)]">
              {selectedVideo.isMp4 ? (
                <video
                  src={selectedVideo.videoSrc}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : selectedVideo.thumbnail ? (
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <img
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover filter contrast-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <p className="text-xs text-[#EDE7DC] max-w-xs leading-relaxed">
                      {selectedVideo.description || "Edited and paced for high-retention social performance."}
                    </p>
                    {selectedVideo.url && (
                      <a
                        href={selectedVideo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          border border-[#E8913C] bg-[#E8913C] text-[#0A0C0E] hover:bg-transparent hover:text-[#EDE7DC]
                          px-5 py-2.5 rounded-full label-caps text-[10.5px] font-semibold transition flex items-center gap-1.5
                        "
                      >
                        <span>Open & Play Reel Live</span>
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[rgba(237,231,220,0.1)] flex items-center justify-between text-xs text-[#6C7378]">
              <span className="font-mono text-[11px] text-[#9EA5A8]">
                {selectedVideo.subtitle || selectedVideo.tag || "Short-Form Production"}
              </span>

              {selectedVideo.url && (
                <a
                  href={selectedVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps text-[10px] text-[#E8913C] hover:underline flex items-center gap-1"
                >
                  <span>Open Full Video ↗</span>
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default VideosShowcase;
