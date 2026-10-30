import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ImageViewer from "./ImageViewer";
import { ArrowUpRightIcon } from "./icons/Icons";

function ViewAllModal({ title, items, onClose, type }) {
  if (!items) return null;

  const [selectedImage, setSelectedImage] = useState(null);

  // lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-[#0b0c0e]/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* modal box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-[#13151b] border border-[#232631]
          w-full max-w-3xl rounded-2xl p-6 md:p-8 relative
          max-h-[85vh] overflow-y-auto
          shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]
        "
      >
        {/* close */}
        <button
          onClick={onClose}
          className="
            absolute right-4 top-4
            w-8 h-8 rounded-full
            bg-[#1b1e27] text-[#9e9b93]
            hover:text-[#f5f2eb] hover:bg-[#232631]
            flex items-center justify-center
            transition cursor-pointer
          "
        >
          ✕
        </button>

        <h2 className="font-display font-bold text-2xl text-[#f5f2eb] mb-6 tracking-tight">
          {title}
        </h2>

        <div className="space-y-4">
          {/* PROJECTS */}
          {type === "projects" &&
            items.map((project) => (
              <div 
                key={project.title} 
                className="border border-[#232631] bg-[#0e1015] rounded-xl p-5 hover:border-amber-500/30 transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4 h-48 w-full object-cover border border-[#232631]"
                />
                <h3 className="font-display font-semibold text-lg text-[#f5f2eb]">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-teal-400 mt-1">{project.tech}</p>
                <p className="text-sm text-[#9e9b93] mt-2.5 leading-relaxed">{project.desc}</p>

                <div className="flex gap-3 mt-4 pt-3 border-t border-[#232631]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-amber-500 text-black font-semibold rounded-lg text-xs hover:bg-amber-400 transition"
                    >
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#1b1e27] border border-[#232631] text-[#f5f2eb] rounded-lg text-xs hover:bg-[#232631] transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}

          {/* WORK */}
          {type === "work" &&
            items.map((job, i) => (
              <div 
                key={i} 
                className="border border-[#232631] bg-[#0e1015] rounded-xl p-5 hover:border-teal-500/30 transition"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display font-semibold text-base text-[#f5f2eb]">
                    {job.company}
                  </h3>
                  {job.badge && (
                    <span className="micro-label text-[10px] px-2.5 py-0.5 rounded-full border border-teal-500/30 text-teal-300 bg-teal-500/10">
                      {job.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-amber-400 font-medium">{job.role}</p>
                <p className="text-sm text-[#9e9b93] mt-2.5 leading-relaxed">{job.desc}</p>
              </div>
            ))}

          {/* CERTS */}
          {type === "certs" &&
            items.map((cert, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(cert.image)}
                className="
                  flex items-center gap-4 border border-[#232631] bg-[#0e1015]
                  p-3.5 rounded-xl cursor-pointer hover:border-teal-500/40 hover:bg-[#181a22]
                  transition group
                "
              >
                <div className="w-20 h-16 rounded-lg bg-[#0a0b0d] flex items-center justify-center p-1 shrink-0 border border-[#232631]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-display font-medium text-sm text-[#f5f2eb] group-hover:text-amber-300 transition">
                    {cert.title}
                  </p>
                  <p className="text-xs text-[#9e9b93] mt-0.5">{cert.org}</p>
                  {cert.validity && (
                    <p className="text-[11px] text-teal-400 font-mono mt-0.5">
                      {cert.validity}
                    </p>
                  )}
                </div>
                <span className="text-xs text-[#9e9b93] group-hover:text-amber-400 flex items-center gap-1 shrink-0 pr-2">
                  Preview <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
        </div>
      </div>

      <ImageViewer
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>,
    document.body
  );
}

export default ViewAllModal;
