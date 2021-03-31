import { useSelector } from "react-redux";
import EmptyProduct from "../EmptyProduct";
import PickedProductItem from "./PickedProductItem";

const PickedProductList = () => {
  const productList = useSelector((state) => state.newFactor.productList);

  return (
    <div style={{ margin: "5rem 0" }}>
      {!productList.length && (
        <EmptyProduct>
          <p>محصولی به فاکتور افزوده نشده است</p>
        </EmptyProduct>
      )}
      {productList?.map((el, i) => {
        return <PickedProductItem key={i} index={++i} {...el} />;
      })}
    </div>
  );
};

export default PickedProductList;
