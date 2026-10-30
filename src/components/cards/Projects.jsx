import Card from "./Card";
import { useState } from "react";
import ProjectModal from "../ProjectModal";
import ViewAllModal from "../ViewAllModal";
import { ArrowUpRightIcon, Code2Icon, SparklesIcon } from "../icons/Icons";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "ProTrack — AI Productivity & Behavioral Monitoring",
      tag: "Flagship Software",
      image: "/projects/protrack.png",
      tech: "Electron • ExpressJS • Supabase • PostgreSQL • Prisma • Next.js • TypeScript",
      desc: "Enterprise productivity monitoring desktop & cloud application. Detects genuine vs simulated input using behavioral anomaly analysis and generates automated executive reports.",
      github: "https://github.com/Profenzy/Protrack",
      demo: "https://pro-track-one.vercel.app/",
    },
    {
      title: "Bayani Game — 2D Action-Adventure",
      tag: "Game Development",
      image: "/projects/bayani.png",
      tech: "Unity • C# • Game Physics • Enemy AI • Animation",
      desc: "Interactive 2D adventure game showcasing custom combat physics, enemy pathfinding AI, state machines, and level choreography built in Unity.",
      github: "https://github.com/Profenzy/Bayani-GameDev",
      demo: "https://github.com/Profenzy/Bayani-GameDev",
    },
    {
      title: "ICEE — Smart Companion Hardware Robot",
      tag: "Embedded Systems",
      image: "/projects/icee.png",
      tech: "Arduino • Embedded C++ • Sensor Integration • Audio Modules",
      desc: "Hardware-integrated companion robot combining ultrasonic distance sensing, motor drivers, audio feedback, and micro-controller automation.",
      github: "https://github.com/Profenzy",
      demo: "",
    },
  ];

  return (
    <Card
      title="Featured Engineering & Systems"
      icon={<Code2Icon className="w-5 h-5 text-amber-400" />}
      accent="amber"
      action={
        <button 
          onClick={() => setShowAllProjects(true)}
          className="flex items-center gap-1 hover:text-amber-400 transition"
        >
          <span>View All Projects</span>
          <ArrowUpRightIcon className="w-3.5 h-3.5" />
        </button>
      }
    >
      <div className="pt-2">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <div
                onClick={() => setSelectedProject(project)}
                className="
                  group relative cursor-pointer
                  bg-[#0e1015] border border-[#232631] hover:border-amber-500/50
                  rounded-xl overflow-hidden transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]
                  flex flex-col h-[320px]
                "
              >
                {/* Project Image */}
                <div className="relative h-44 w-full overflow-hidden bg-[#0a0b0d]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="micro-label text-[10px] bg-[#0b0c0e]/80 backdrop-blur-md text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-sm text-[#f5f2eb] group-hover:text-amber-300 transition line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="text-[11px] text-[#9e9b93] line-clamp-2 mt-1 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#232631]/60 flex items-center justify-between text-[11px]">
                    <span className="text-teal-400/90 font-mono text-[10px] truncate max-w-[180px]">
                      {project.tech.split("•")[0]}
                    </span>
                    <span className="text-amber-400 flex items-center gap-1 group-hover:translate-x-0.5 transition">
                      Details <ArrowUpRightIcon className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {showAllProjects && (
        <ViewAllModal
          title="All Engineering Projects"
          items={projects}
          type="projects"
          onClose={() => setShowAllProjects(false)}
        />
      )}
    </Card>
  );
}

export default Projects;
