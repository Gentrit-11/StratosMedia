import React from "react";
import "./OurWork.css";

const Modal = ({ images, category, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`modal-image ${category.toLowerCase()}`}
            alt={`Modal Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Modal;
