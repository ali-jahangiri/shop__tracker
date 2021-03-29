const bodyOverflowHandler = (state) => {
  if (state) {
    document.body.style.overflow = "hidden";
  } else document.body.style.overflow = "auto";
};

export default bodyOverflowHandler;
