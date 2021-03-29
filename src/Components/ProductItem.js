const ProductItem = ({ id, name, type, price }) => {
  const onClick = () => {
    console.log("sd");
  };
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
