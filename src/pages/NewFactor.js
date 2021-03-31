import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import FactorPersonalInfoForm from "../Components/Factor/FactorPersonalInfoForm";

import PageHeader from "../Components/PageHeader";
import { clearFactor } from "../Store/slices/newFactorSlice";
import factorHistoryItemConstructor from "../utils/factorHistoryItemConstructor";

import { addFactorToHistory } from "../Store/slices/factorHistorySlice";

const NewFactor = ({ history }) => {
  const entireNewFactor = useSelector((state) => state.newFactor);
  const dispatch = useDispatch();

  const createFactorHandler = (personalInfo) => {
    const id = uuidv4().slice(0, 6);
    dispatch(
      addFactorToHistory(
        factorHistoryItemConstructor(entireNewFactor, id, personalInfo)
      )
    );
    history.push(`new-factor/${id}`);
    dispatch(clearFactor());
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
