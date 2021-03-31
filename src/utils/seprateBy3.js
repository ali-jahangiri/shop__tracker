const separateBy3 = (number) => {
  const endResult = [];
  String(number)
    .split("")
    .reverse()
    .forEach((el, index) => {
      if (!(index % 3) && index) endResult.push(",");
      endResult.push(el);
    });
  return endResult.reverse().join("");
};

export default separateBy3;
