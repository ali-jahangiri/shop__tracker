import { useState } from "react";
import { useDispatch } from "react-redux";

//actions
import {
  increaseItemCount,
  removeItemFromFactor,
  setItemTypeValue,
} from "../../Store/slices/newFactorSlice";

// icons
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";
import { IoIosArrowRoundUp } from "react-icons/io";

import MoreOptionPickedProduct from "./MoreOptionPickedProduct";

const PickedProductItem = ({ name, price, type, id, count, index }) => {
  const [value, setValue] = useState("");
  const [moreMode, setMoreMode] = useState(false);

  const dispatch = useDispatch();

  const countHandler = ({ target: { value } }) => {
    if (value <= 0) return;
    dispatch(
      increaseItemCount({
        id,
        count: Number(value),
      })
    );
  };

  const typeValueHandler = ({ target: { value } }) => {
    dispatch(setItemTypeValue({ id, typeValue: value }));
    setValue(value);
  };
  const moreHandler = () => {
    setMoreMode(!moreMode);
  };
  return (
    <>
      <div className="pickedProduct col-md-12">
        <div style={{ width: "100%" }} className="row relative  ">
          <div className="pickedProduct__index">
            <p>{index}</p>
          </div>
          <div
            className={`pickedProduct__notAllow ${
              moreMode ? "pickedProduct__notAllow--active" : ""
            }`}
          ></div>
          <div className="col-md-2">
            <p className="pickedProduct__name">{name}</p>
          </div>
          <div className="col-md-4 col-sm-6">
            <input
              value={value}
              placeholder={`گونه : ${type}`}
              onChange={typeValueHandler}
            />
          </div>
          <div className="col-md-2 col-sm-6 col-">
            <input
              style={{ width: "100%" }}
              type="number"
              value={count}
              onChange={countHandler}
            />
          </div>
          <div className="col-md-2 pickedProduct__totalPrice">
            <p>
              {price * count}
              <span>ریال</span>
            </p>
          </div>
          <div className="col-md-2 pickedProduct__details">
            <AiOutlineDelete
              title="دابل کلیک برای حذف"
              onDoubleClick={() => dispatch(removeItemFromFactor(id))}
            />
            {!moreMode ? (
              <AiOutlineMore onClick={moreHandler} />
            ) : (
              <IoIosArrowRoundUp
                className="pickedProduct__arrowDown pickedProduct__arrowDown--active"
                onClick={moreHandler}
              />
            )}
          </div>
        </div>
      </div>

      <div className="row">
        {moreMode && (
          <MoreOptionPickedProduct
            moreModeSetter={setMoreMode}
            currentPrice={price}
            productId={id}
          />
        )}
      </div>
    </>
  );
};

export default PickedProductItem;
