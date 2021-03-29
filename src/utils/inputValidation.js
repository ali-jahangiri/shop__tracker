const inputValidation = (inputValue) => {
  if (inputValue.trim() && inputValue.length > 2) return true;
  else return false;
};

export default inputValidation;
