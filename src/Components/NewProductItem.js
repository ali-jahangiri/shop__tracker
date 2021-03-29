import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Store/slices/ProductSlice";
import bodyOverflowHandler from "../utils/bodyOverflowHandler";
import inputValidation from "../utils/inputValidation";
import productItemConstructor from "../utils/ProductItemConstructor";

import Modal from "./Modal";

const INIT = {
  productName: "",
  productType: "",
  productPrice: "",
};

const NewProductItem = ({ parentCategory }) => {
  const [values, setValues] = useState(INIT);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputError, setInputError] = useState(INIT);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const modalTrigger = (openModal) => {
    setIsModalOpen(openModal);
    bodyOverflowHandler(openModal);
  };
  const validation = () => {
    return Object.entries(values).map(([inputName, inputValue]) => {
      if (!inputValidation(inputValue)) {
        setInputError((prev) => ({ ...prev, [inputName]: true }));
        return true;
      }
      return false;
    });
  };

  const submitHandler = () => {
    if (validation().some((el) => el)) {
      // if one of the inputs have problem
      let timer = setTimeout(() => {
        setInputError(INIT);
        clearTimeout(timer);
      }, 500);
    } else {
      // if inputs don't have any problem , submit and store the product
      dispatch(
        addProduct({
          parentCategory,
          values: productItemConstructor({ ...values }),
        })
      );
      setValues(INIT);
      setInputError(INIT);
      modalTrigger(false);
    }
  };

  const cancelHandler = () => {
    setValues(INIT);
    modalTrigger(false);
  };
  return (
    <>
      <button
        className="newProduct__trigger"
        onClick={() => modalTrigger(true)}
      >
        محصول جدید
      </button>
      {isModalOpen && (
        <Modal trigger={modalTrigger}>
          <div className="newProduct__modal">
            <p>افزودن محصولی جدید</p>
            <input
              onChange={onChangeHandler}
              className={
                inputError.productName ? "newProduct__input--invalid" : ""
              }
              value={values.productName}
              name="productName"
              placeholder="نام محصول"
            />
            <input
              onChange={onChangeHandler}
              className={
                inputError.productType ? "newProduct__input--invalid" : ""
              }
              value={values.productType}
              name="productType"
              placeholder="گونه محصول"
            />
            <input
              onChange={onChangeHandler}
              className={
                inputError.productPrice ? "newProduct__input--invalid" : ""
              }
              value={values.productPrice}
              name="productPrice"
              placeholder="قیمت محصول"
            />
            <div className="newProduct__controller">
              <button onClick={cancelHandler}>انصراف</button>
              <button onClick={submitHandler}>افزودن</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default NewProductItem;
