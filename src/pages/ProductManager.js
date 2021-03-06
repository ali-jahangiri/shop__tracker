import { useSelector } from "react-redux";
import EmptyProduct from "../Components/EmptyProduct";
import NewProductCategory from "../Components/NewProductCategory";

import PageHeader from "../Components/PageHeader";
import ProductCategory from "../Components/ProductCategory";

const ProductManager = () => {
  const categories = useSelector((state) => state.product.category);

  return (
    <div className="container">
      <PageHeader title="محصولات" />
      {!categories.length ? (
        <EmptyProduct>
          <p>
            شما هیچ محصولی ندارید.ابتدا دسته ای اضافه و سپس به آن محصول وارد
            کنید
          </p>
        </EmptyProduct>
      ) : (
        categories.map((el, i) => (
          <ProductCategory key={i} categoryTitle={el} />
        ))
      )}
      <NewProductCategory />
    </div>
  );
};

export default ProductManager;
