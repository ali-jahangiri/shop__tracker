const bodyOverflowHandler = (state, overFlowDirection = "overflow") => {
  if (state) {
    document.body.style[overFlowDirection] = "hidden";
  } else document.body.style[overFlowDirection] = "auto";
};

export default bodyOverflowHandler;
