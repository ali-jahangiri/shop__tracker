const selfClearTimeout = (callback, timeout) => {
  let result;
  let timer = setTimeout(() => {
    result = callback();
    clearTimeout(timer);
  }, timeout);
  return result;
};

export default selfClearTimeout;
