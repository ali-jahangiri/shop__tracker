import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import makeCombineArr from "../../utils/makeCombineArr";

// icons
import { AiOutlineSearch } from "react-icons/ai";
import { addItemToFactor } from "../../Store/slices/newFactorSlice";

const FactorProductSelector = () => {
  const [value, setValues] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.product.allProducts);

  const changeHandler = ({ target: { value } }) => {
    setValues(value);
  };

  const addToProductListHandler = (productName) => {
    const targetProduct = makeCombineArr(state).find(
      (el) => el.name === productName
    );
    setValues("");
    dispatch(
      addItemToFactor({ ...targetProduct, count: 1, id: uuidv4().slice(0, 6) })
    );
  };

  return (
    <div className="factorProduct__selector">
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="input"
        placeholder="نام محصول را وارد کنید"
        value={value}
        onChange={changeHandler}
      />
      <div
        className={`factorProduct__result ${
          isFocused ? "factorProduct__result--focused" : ""
        }`}
      >
        <div className="factorProduct__result__basement">
          <AiOutlineSearch />
          <p>در جست و جوی محصول</p>
        </div>
        {makeCombineArr(state)
          .map((el) => el.name)
          .filter((el) => value && el.includes(value))
          .map((el, i) => (
            <div
              onClick={() => addToProductListHandler(el)}
              className="factorProduct__result__item"
              key={i}
            >
              {el}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FactorProductSelector;
