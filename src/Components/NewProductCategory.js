import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCategory } from "../Store/slices/ProductSlice";
import bodyOverflowHandler from "../utils/bodyOverflowHandler";
import inputValidation from "../utils/inputValidation";
import { RiAddFill } from "react-icons/ri";

import Modal from "./Modal";

const NewProductCategory = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [value, setValue] = useState("");
  const [inputError, setInputError] = useState(null);

  const dispatch = useDispatch();

  const panelTrigger = (forceTo) => {
    setIsPanelOpen(forceTo);
    bodyOverflowHandler(forceTo);
    setValue("");
  };

  const submitHandler = () => {
    if (inputValidation(value)) {
      dispatch(addCategory(value));
      panelTrigger(false);
    } else {
      setInputError(true);
      let timer = setTimeout(() => {
        setInputError(null);
        clearTimeout(timer);
      }, 1000);
    }
  };
  const cancelHandler = () => {
    setValue("");
    panelTrigger(false);
  };
  return (
    <div id="categoryCreator">
      <button onClick={() => panelTrigger(true)}>
        <RiAddFill />
        دسته بندی جدید
      </button>
      {isPanelOpen && (
        <Modal trigger={panelTrigger}>
          <p className="text-right">افزودن دسته بندی جدید</p>
          <div className="categoryCreator__container">
            <div>
              <button onClick={cancelHandler}>انصراف</button>
              <button onClick={submitHandler}>افزودن دسته بندی</button>
            </div>
            <input
              value={value}
              onChange={({ target: { value } }) => setValue(value)}
              placeholder="نام دسته بندی"
              className={`${
                inputError ? "categoryCreator__input--invalid" : ""
              }`}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NewProductCategory;
// // style={{ display: `${isPanelOpen ? "none" : "block"}` }}
