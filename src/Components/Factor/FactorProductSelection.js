import DateOfFactor from "./DateOfFactor";
import FactorProductSelector from "./FactorProductSelector";

const FactorProduct = () => {
  return (
    <div className="row factorProduct">
      <div className="col-md-6 p-0">
        <DateOfFactor />
      </div>
      <div className="col-md-6">
        <FactorProductSelector />
      </div>
    </div>
  );
};

export default FactorProduct;
