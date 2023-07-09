import "./Modal.css";

export const Modal = ({ children, show, onClose }) => {
  return !show ? null : (
    <div className="modal" onClick={onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};