import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FactorPersonalInfoForm from "../Components/Factor/FactorPersonalInfoForm";

import PageHeader from "../Components/PageHeader";
import { setPersonalInfo, clearFactor } from "../Store/slices/newFactorSlice";
import factorHistoryItemConstructor from "../utils/factorHistoryItemConstructor";
import { addFactorTOHistory } from "./FactorHistory";

const NewFactor = () => {
  const entireNewFactor = useSelector((state) => state.newFactor);
  const dispatch = useDispatch();
  const createFactorHandler = (personalInfo) => {
    dispatch(setPersonalInfo(personalInfo));
    dispatch(addFactorTOHistory(factorHistoryItemConstructor(entireNewFactor)));
  };
  // clear out the entire factor if user go out of the page
  useEffect(() => {
    return () => dispatch(clearFactor());
  }, []);
  return (
    <div className="container">
      <PageHeader title="فاکتور جدید" />
      <FactorPersonalInfoForm createFactorHandler={createFactorHandler} />
    </div>
  );
};

export default NewFactor;
