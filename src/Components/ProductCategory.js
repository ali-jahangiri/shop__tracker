import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

// components
import NewProductItem from "./NewProductItem";
import ProductTable from "./ProductTable";

// icons
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";

import {
  editCategoryTitle,
  removeCategory,
} from "../Store/slices/ProductSlice";

// helper functions
import inputValidation from "../utils/inputValidation";
import selfClearTimeout from "../utils/selfClearTimeout";
import Modal from "./Modal";

const ProductCategory = ({ categoryTitle }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(categoryTitle);
  const [inputError, setInputError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = useSelector(
    (state) => state.product.allProducts[categoryTitle]
  );
  const dispatch = useDispatch();

  const changeSubmitter = () => {
    if (!inputValidation(value) || value === categoryTitle) {
      setInputError(true);
      return selfClearTimeout(() => {
        setInputError(false);
      }, 1000);
    }
    dispatch(
      editCategoryTitle({
        oldTitle: categoryTitle,
        newTitle: value,
      })
    );
    setEditMode(false);
  };

  const cancelHandler = () => {
    setEditMode(false);
    setValue(categoryTitle);
  };

  const deleteModalTrigger = () => {
    setIsModalOpen(true);
  };
  const deleteHandler = () => {
    dispatch(removeCategory(categoryTitle));
    setIsModalOpen(false);
  };
  const deleteCanceled = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="product__category mt-5">
      <div className="product__category__header">
        <NewProductItem parentCategory={categoryTitle} />
        <div
          style={{
            width: `${editMode ? "35%" : "20%"}`,
            justifyContent: `${editMode ? "flex-end" : "space-between"}`,
          }}
        >
          {editMode ? (
            <div className="product__category--edit">
              <IoCheckmarkSharp onClick={changeSubmitter} />
              <MdClose onClick={cancelHandler} />
              <input
                className={`${
                  inputError ? "product__category__input--invalid" : ""
                }`}
                value={value}
                onChange={({ target: { value } }) => setValue(value)}
              />
            </div>
          ) : (
            <>
              <AiOutlineDelete onClick={deleteModalTrigger} />
              <FiEdit2 onClick={() => setEditMode(!editMode)} />
              <p>{categoryTitle}</p>
            </>
          )}
          {isModalOpen && (
            <Modal trigger={setIsModalOpen}>
              <div className="product__category__delete">
                <p>آیا از حذف این دسته بندی مطمئن هستید ؟ </p>
                <div>
                  <button onClick={deleteHandler}>بله, حذف کن!</button>
                  <button onClick={deleteCanceled}>خیر</button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>

      {product && <ProductTable product={product} />}
    </div>
  );
};

export default ProductCategory;
