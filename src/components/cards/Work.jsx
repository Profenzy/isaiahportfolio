import Card from "./Card";
import { useState } from "react";
import ViewAllModal from "../ViewAllModal";
import { LayersIcon, ArrowUpRightIcon } from "../icons/Icons";

function Work() {
  const [showAllWork, setShowAllWork] = useState(false);

  const clientHighlights = [
    {
      role: "SMM, Content Editor & GHL Automation Specialist",
      company: "Tanya Memme",
      badge: "GHL & Media",
      badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10",
      desc: "Engineered GoHighLevel / Firestarter lead funnels, edited high-converting carousels, video reels, and brand assets.",
    },
    {
      role: "GHL Architect & Private Data Portal Developer",
      company: "Trixy Castro • Success Unlocked • La Escuela Nueva",
      badge: "CRM & Systems",
      badgeColor: "border-teal-500/30 text-teal-300 bg-teal-500/10",
      desc: "Managed multi-client GHL infrastructure, automated sales outreach pipelines, and developed custom private portals for data viewing.",
    },
    {
      role: "Social Media Manager & Video Editor",
      company: "Kubo ni Lola Cafe",
      badge: "Short-Form Video",
      badgeColor: "border-pink-500/30 text-pink-300 bg-pink-500/10",
      desc: "Spearheaded TikTok social campaigns, documentary story video edits, trending reels, and community growth.",
    },
    {
      role: "Full-Stack System Developer",
      company: "Freelance & Enterprise Projects",
      badge: "Full-Stack",
      badgeColor: "border-purple-500/30 text-purple-300 bg-purple-500/10",
      desc: "Architected AI-powered productivity tracking desktop software (ProTrack), Arduino robotics, and full-stack web applications.",
    },
  ];

  return (
    <Card 
      title="Client Experience & Systems" 
      icon={<LayersIcon className="w-5 h-5 text-teal-400" />}
      accent="teal"
      action={
        <button 
          onClick={() => setShowAllWork(true)}
          className="flex items-center gap-1 hover:text-teal-400 transition"
        >
          <span>View All</span>
          <ArrowUpRightIcon className="w-3.5 h-3.5" />
        </button>
      }
    >
      <div className="space-y-4 text-xs md:text-sm">
        {clientHighlights.map((work) => (
          <div 
            key={work.company}
            className="p-3.5 rounded-xl bg-[#0e1015]/60 border border-[#232631]/80 hover:border-[#373b49] transition group"
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div>
                <p className="font-display font-medium text-[#f5f2eb] text-sm group-hover:text-amber-300 transition">
                  {work.company}
                </p>
                <p className="text-xs text-[#9e9b93]">
                  {work.role}
                </p>
              </div>
              <span className={`micro-label text-[10px] px-2.5 py-0.5 rounded-full border shrink-0 ${work.badgeColor}`}>
                {work.badge}
              </span>
            </div>
            <p className="text-xs text-[#8e8b84] leading-relaxed mt-1">
              {work.desc}
            </p>
          </div>
        ))}
      </div>

      {showAllWork && (
        <ViewAllModal
          title="All Experience & Client Case Studies"
          items={clientHighlights}
          type="work"
          onClose={() => setShowAllWork(false)}
        />
      )}
    </Card>
  );
}

export default Work;
