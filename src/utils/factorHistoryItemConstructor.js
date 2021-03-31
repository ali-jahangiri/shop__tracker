const factorHistoryItemConstructor = (allValue, id, personalInfo) => ({
  ...allValue,
  createTime: Date.now(),
  id,
  personalInfo,
});

export default factorHistoryItemConstructor;
