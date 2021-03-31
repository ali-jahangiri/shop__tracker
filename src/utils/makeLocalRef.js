const makeLocalRef = (ref) =>
  ((reference) => {
    return {
      ref: reference,
    };
  })(ref);

export default makeLocalRef;
