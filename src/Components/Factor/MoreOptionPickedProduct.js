import { useState } from "react";
import { useDispatch } from "react-redux";

import { changeFactorItemPrice } from "../../Store/slices/newFactorSlice";

import inputValidation from "../../utils/inputValidation";

const MoreOptionPickedProduct = ({
  currentPrice,
  productId,
  moreModeSetter,
}) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (inputValidation(value)) {
      dispatch(
        changeFactorItemPrice({
          id: productId,
          newPrice: Number(value),
        })
      );
      moreModeSetter(false);
    }
  };

  return (
    <div className="pickedProduct__more">
      <button onClick={submitHandler}>ذخیره</button>
      <div>
        قیمت این محصول
        <input
          placeholder={currentPrice}
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
        <span>ریال </span>میباشد .میتوانید آن را برای فاکتور جاری تغییر دهید
      </div>
    </div>
  );
};

export default MoreOptionPickedProduct;
