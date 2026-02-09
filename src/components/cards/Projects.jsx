import Card from "./Card";
import ProjectsIcon from "../../assets/icons/icon-projects.svg";
import { useState } from "react";
import ProjectModal from "../ProjectModal";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import ViewAllModal from "../ViewAllModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "ProTrack",
      image: "/projects/protrack.png",
      tech: "Electron • ExpressJS • Supabase • PostgreSQL • Prisma • Next.js • TypeScript",
      desc: "AI-powered productivity monitoring system designed for remote work environments. Detects fake and genuine activity using behavioral analysis and anomaly detection, providing accurate productivity reporting for companies.",
      github: "https://github.com/Profenzy/Protrack", // add later
      demo: "https://pro-track-one.vercel.app/",
    },
    {
      title: "Bayani Game",
      image: "/projects/bayani.png",
      tech: "Unity • C# • Game Physics • Animation • Level Design",
      desc: "2D action-adventure game showcasing player movement, enemy AI, collision detection, and core gameplay mechanics built in Unity.",
      github: "https://github.com/Profenzy/Bayani-GameDev",
      demo: "https://github.com/Profenzy/Bayani-GameDev",
    },
    {
      title: "ICEE Companion Robot",
      image: "/projects/icee.png",
      tech: "Arduino • Embedded Systems • Sensors • Hardware Integration",
      desc: "Arduino-based smart companion robot integrating sensors, audio modules, and automation for interactive assistance.",
      github: "",
      demo: "",
    },
  ];

  return (
    <Card
      title="Recent Projects"
      icon={<img src={ProjectsIcon} className="w-5 h-5" alt="" />}
      action={
        <button onClick={() => setShowAllProjects(true)}>
          View All
        </button>
      }
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        slidesPerView={1.2}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div
              onClick={() => setSelectedProject(project)}
              className="relative group cursor-pointer"
            >
              {/* project image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg h-44 w-full object-cover"
              />

              {/* hover overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/70
                  text-white
                  rounded-lg
                  opacity-0 group-hover:opacity-100
                  transition duration-300
                  p-4 flex flex-col justify-end
                "
              >
                <h4 className="font-semibold text-sm">
                  {project.title}
                </h4>

                <p className="text-xs opacity-80 mt-1">
                  {project.tech}
                </p>

                <p className="text-xs mt-2 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    {showAllProjects && (
      <ViewAllModal
        title="All Projects"
        items={projects}
        type="projects"
      onClose={() => setShowAllProjects(false)}
      />
    )}

    </Card>
  );
}

export default Projects;
