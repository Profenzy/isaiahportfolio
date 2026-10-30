import { ArrowUpRightIcon, Code2Icon } from "../icons/Icons";

function SoftwareProjects() {
  const projects = [
    {
      title: "ProTrack — AI Productivity & Behavioral Monitoring",
      image: "/projects/protrack.png",
      tag: "Flagship Software",
      tech: "Electron • Next.js • Supabase • PostgreSQL • Prisma • TypeScript",
      desc: "Desktop and cloud application detecting genuine vs simulated input using behavioral anomaly analysis. Generates automated executive productivity reports for distributed teams.",
      demo: "https://pro-track-one.vercel.app/",
      github: "https://github.com/Profenzy/Protrack",
    },
    {
      title: "Bayani Game — 2D Action-Adventure",
      image: "/projects/bayani.png",
      tag: "Game Physics",
      tech: "Unity • C# • Finite State Machines • Enemy AI Pathfinding",
      desc: "Interactive 2D adventure game featuring responsive combat physics, multi-state enemy AI, and fluid animation state choreography.",
      demo: "https://github.com/Profenzy/Bayani-GameDev",
      github: "https://github.com/Profenzy/Bayani-GameDev",
    },
    {
      title: "ICEE — Smart Hardware Companion Robot",
      image: "/projects/icee.png",
      tag: "Robotics & IoT",
      tech: "Arduino • Embedded C++ • Ultrasonic Sensors • Audio Modules",
      desc: "Micro-controller integrated companion robot combining obstacle detection sensors, motor actuation, and automated audio response feedback.",
      demo: "",
      github: "https://github.com/Profenzy",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="micro-label text-teal-400">
              // Custom Software Engineering
            </span>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-[#f5f2eb] tracking-tight">
              Desktop software, cloud systems & hardware robotics.
            </h3>
          </div>
          <span className="text-xs font-mono text-[#9e9b93]">
            3 Production Projects
          </span>
        </div>

        {/* 3-Column Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="agency-card rounded-3xl overflow-hidden flex flex-col justify-between border-white/[0.08] hover:border-teal-500/40 transition group"
            >
              {/* Image Thumbnail */}
              <div className="relative h-52 w-full overflow-hidden bg-[#07080a] border-b border-white/[0.08]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="micro-label text-[10px] px-2.5 py-1 rounded-full bg-[#07080a]/80 backdrop-blur-md text-teal-300 border border-teal-500/30">
                    {proj.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-lg text-[#f5f2eb] group-hover:text-teal-300 transition">
                    {proj.title}
                  </h4>
                  <p className="text-xs font-mono text-teal-400 leading-relaxed">
                    {proj.tech}
                  </p>
                  <p className="text-xs text-[#9e9b93] leading-relaxed pt-1">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.08] flex items-center gap-3">
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl
                        bg-teal-500 text-black font-semibold text-xs
                        hover:bg-teal-400 transition
                      "
                    >
                      <span>Live Demo</span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl
                        bg-white/[0.03] border border-white/[0.08] text-[#f5f2eb] text-xs font-medium
                        hover:bg-white/[0.08] transition
                      "
                    >
                      <span>Code Repository</span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SoftwareProjects;

