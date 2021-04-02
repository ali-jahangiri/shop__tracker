const isSameDay = (from, to) => {
  if (
    `${from.year}/${from.month}/${from.day}` ===
    `${to.year}/${to.month}/${to.day}`
  ) {
    return true;
  }
  return false;
};

export default isSameDay;
