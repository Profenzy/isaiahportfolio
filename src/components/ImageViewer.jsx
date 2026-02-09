function ImageViewer({ image, onClose }) {
    if (!image) return null;
  
    return (
      <div
        onClick={onClose}
        className="
          fixed inset-0 z-50
          bg-black/80 backdrop-blur-sm
          flex items-center justify-center
        "
      >
        <img
          src={image}
          className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
        />
      </div>
    );
  }
  
  export default ImageViewer;
  