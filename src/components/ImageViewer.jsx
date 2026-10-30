function ImageViewer({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-[10000]
        bg-[#0b0c0e]/90 backdrop-blur-md
        flex items-center justify-center p-4
        cursor-zoom-out animate-fadeIn
      "
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative max-h-[90vh] max-w-[90vw]"
      >
        <button
          onClick={onClose}
          className="
            absolute -top-12 right-0
            w-9 h-9 rounded-full
            bg-[#1b1e27] text-[#f5f2eb] border border-[#232631]
            flex items-center justify-center
            hover:bg-amber-500 hover:text-black
            transition cursor-pointer
          "
        >
          ✕
        </button>
        <img
          src={image}
          alt="Certificate Fullscreen"
          className="max-h-[85vh] max-w-[90vw] rounded-2xl border border-[#232631] shadow-2xl object-contain bg-[#12141a]"
        />
      </div>
    </div>
  );
}

export default ImageViewer;
