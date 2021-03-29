import { v4 as uuidv4 } from "uuid";
const productItemConstructor = ({
  productName,
  productPrice,
  productType,
}) => ({
  name: productName,
  price: productPrice,
  type: productType,
  id: uuidv4(),
});

export default productItemConstructor;
