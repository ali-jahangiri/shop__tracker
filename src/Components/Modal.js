const Modal = ({ children, trigger }) => {
  const clickHandler = ({ target }) => {
    if (target.classList.contains("modal")) trigger(false);
  };

  return (
    <div
      onClick={clickHandler}
      style={{ top: `${window.pageYOffset}px` }}
      className="modal"
    >
      <div onClick={clickHandler} className="modal__content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
