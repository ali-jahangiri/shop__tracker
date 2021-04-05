import bodyOverflowHandler from "../utils/bodyOverflowHandler";

const Modal = ({ children, trigger, style }) => {
  const clickHandler = ({ target }) => {
    if (target.classList.contains("modal")) {
      trigger(false);
      bodyOverflowHandler(false);
    }
  };

  return (
    <div
      onClick={clickHandler}
      style={{ top: `${window.pageYOffset}px`, ...style }}
      className="modal"
    >
      <div onClick={clickHandler} className="modal__content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
