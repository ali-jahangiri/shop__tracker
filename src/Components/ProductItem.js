const ProductItem = ({ id, name, type, price }) => {
  const onClick = () => {};
  return (
    <tr onDoubleClick={onClick} className="product__item">
      <th>
        <span>ریال</span> <p>{price}</p>
      </th>
      <th>{type}</th>
      <th>{name}</th>
    </tr>
  );
};

export default ProductItem;
