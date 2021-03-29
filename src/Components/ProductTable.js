import ProductItem from "./ProductItem";

const ProductTable = ({ product }) => {
  return (
    <table className="table product__table">
      <thead>
        <tr>
          <th>قیمت</th>
          <th>گونه</th>
          <th>نام</th>
        </tr>
      </thead>
      <tbody>
        {product?.map((el, i) => (
          <ProductItem key={i} {...el} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
