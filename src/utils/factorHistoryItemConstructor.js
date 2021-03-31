const factorHistoryItemConstructor = (allValue) => ({
  ...allValue,
  createTime: Date.now(),
});

export default factorHistoryItemConstructor;
