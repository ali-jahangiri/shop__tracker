import PersianDate from "persian-date";
import makeLocalRef from "./makeLocalRef";

const makeFaDate = (timestamp) => {
  const { year, month, day } = new PersianDate(timestamp).State.persianAstro;
  return `${year}/${++makeLocalRef(month).ref}/${day}`;
};

export default makeFaDate;
