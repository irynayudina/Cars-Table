import React, { useRef, useEffect, useState } from "react";
import "./Modal.css";
const Modal = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const trigger = childrenArray[0];
  const content = childrenArray[1];

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const modalRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalRef, triggerRef]);
  return (
    <div>
      <div
        onClick={handleShowModal}
        ref={triggerRef}
        style={{ display: "inline-block" }}
      >
        {trigger}
      </div>
      {showModal && (
        <div className="blur">
          <div className="modal" ref={modalRef}>
            <div className="modal-close" onClick={handleCloseModal}>
              &#10060;
            </div>
            {React.cloneElement(content, { onClose: handleCloseModal })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
