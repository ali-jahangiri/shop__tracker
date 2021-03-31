import FactorPriority from "./FactorPriority";
import TextareaFactor from "./TextareaFactor";

const AdditionalInformationFactor = () => {
  return (
    <div className="additionalInfo row">
      <div className="col-md-6">
        <p className="additionalInfo__header">توضیحات افزوده</p>
        <TextareaFactor />
      </div>
      <div className="col-md-6">
        <p className="additionalInfo__header">اولویت فاکتور</p>
        <FactorPriority />
      </div>
    </div>
  );
};

export default AdditionalInformationFactor;
