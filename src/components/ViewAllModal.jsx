import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ImageViewer from "./ImageViewer";

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
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* modal box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-3xl mx-4 rounded-xl p-6 relative max-h-[85vh] overflow-y-auto hide-scrollbar"
      >
        {/* close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-6">{title}</h2>

        <div className="space-y-6">
          {/* PROJECTS */}
          {type === "projects" &&
            items.map((project) => (
              <div key={project.title} className="border rounded-lg p-4">
                <img
                  src={project.image}
                  className="rounded mb-3 h-40 w-full object-cover"
                />
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{project.tech}</p>
                <p className="text-sm mt-2">{project.desc}</p>

                <div className="flex gap-3 mt-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-3 py-1 bg-black text-white rounded text-xs"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="px-3 py-1 border rounded text-xs"
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
              <div key={i} className="border-l-2 pl-4">
                <h3 className="font-semibold">{job.role}</h3>
                <p className="text-xs text-gray-500">{job.company}</p>
                <p className="text-sm mt-2">{job.desc}</p>
              </div>
            ))}

          {/* CERTS */}
          {type === "certs" &&
            items.map((cert, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(cert.image)}
                className="flex items-center gap-4 border p-3 rounded-lg cursor-pointer hover:shadow-md transition"
              >
                <img
                  src={cert.image}
                  className="w-20 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-xs text-gray-500">{cert.org}</p>
                </div>
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
