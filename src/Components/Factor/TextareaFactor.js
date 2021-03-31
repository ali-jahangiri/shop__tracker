import { useDispatch, useSelector } from "react-redux";
import { setFactorAdditionalText } from "../../Store/slices/newFactorSlice";

const TextareaFactor = () => {
  const value = useSelector((state) => state.newFactor.additionalInfo.text);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => {
    dispatch(setFactorAdditionalText(value));
  };

  return (
    <textarea
      placeholder="توضیحات اضافه خود را وارد کنید"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextareaFactor;
