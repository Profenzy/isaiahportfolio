function ProjectModal({ project, onClose }) {
    if (!project) return null;
  
    return (
      <div
        className="
          fixed inset-0 z-50
          flex items-center justify-center
          bg-black/60 backdrop-blur-sm
        "
      >
        {/* modal box */}
        <div className="
          bg-white rounded-xl
          max-w-xl w-full mx-4 p-6
          relative
          animate-fadeIn
        ">
          
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
          >
            ✕
          </button>
  
          {/* image */}
          <img
            src={project.image}
            className="rounded-lg mb-4 w-full h-52 object-cover"
          />
  
          {/* title */}
          <h2 className="text-xl font-semibold">
            {project.title}
          </h2>
  
          {/* tech stack */}
          <p className="text-sm text-gray-500 mt-1">
            {project.tech}
          </p>
  
          {/* description */}
          <p className="text-sm mt-3 text-gray-700 leading-relaxed">
            {project.desc}
          </p>
  
          {/* buttons */}
          <div className="flex gap-3 mt-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded-lg text-sm"
              >
                View Code
              </a>
            )}
  
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className="px-4 py-2 border rounded-lg text-sm"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectModal;
  