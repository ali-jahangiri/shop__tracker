const makeCombineArr = (obj) => {
  const copy = { ...obj };
  return Object.values(copy).flat();
};

export default makeCombineArr;
