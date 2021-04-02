import workColorCreator from "./workColorCreator";

const factorHistoryItemConstructor = (allValue, id, personalInfo) => ({
  ...allValue,
  createTime: Date.now(),
  id,
  personalInfo,
  hashColor: workColorCreator(),
});

export default factorHistoryItemConstructor;
