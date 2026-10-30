import { ArrowUpRightIcon, Code2Icon } from "./icons/Icons";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-[#0b0c0e]/85 backdrop-blur-md p-4
        animate-fadeIn
      "
    >
      {/* modal box */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="
          bg-[#13151b] border border-[#232631]
          rounded-2xl max-w-xl w-full p-6 relative
          shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]
        "
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            w-8 h-8 rounded-full
            bg-[#1b1e27] text-[#9e9b93]
            hover:text-[#f5f2eb] hover:bg-[#232631]
            flex items-center justify-center
            transition cursor-pointer
          "
        >
          ✕
        </button>

        {/* image */}
        <div className="relative rounded-xl overflow-hidden mb-5 border border-[#232631] bg-[#0a0b0d]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover"
          />
        </div>

        {/* title */}
        <h2 className="font-display font-bold text-xl text-[#f5f2eb]">
          {project.title}
        </h2>

        {/* tech stack pills */}
        <p className="text-xs font-mono text-teal-400 mt-1.5 leading-relaxed">
          {project.tech}
        </p>

        {/* description */}
        <p className="text-sm mt-3 text-[#9e9b93] leading-relaxed">
          {project.desc}
        </p>

        {/* buttons */}
        <div className="flex gap-3 mt-6 pt-4 border-t border-[#232631]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2 bg-amber-500 text-black font-semibold
                rounded-xl text-xs hover:bg-amber-400 transition
              "
            >
              <span>View Source Code</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2 bg-[#1b1e27] text-[#f5f2eb] border border-[#232631]
                rounded-xl text-xs font-medium hover:bg-[#232631] transition
              "
            >
              <span>Live Demonstration</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
