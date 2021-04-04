const bodyOverflowHandler = (state, overFlowDirection = "overflow") => {
  console.log(state);
  if (state) {
    document.body.style[overFlowDirection] = "hidden";
  } else document.body.style[overFlowDirection] = "auto";
};

export default bodyOverflowHandler;
