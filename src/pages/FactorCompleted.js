import { useSelector } from "react-redux";
import makeFaDate from "../utils/makeFaDate";

import { FiPrinter } from "react-icons/fi";
import { useRef, useState } from "react";

import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";
import separateBy3 from "../utils/separateBy3";

const FactorCompleted = ({
  match: {
    params: { id },
  },
}) => {
  const [targetFactor] = useSelector((state) =>
    state.factorHistory.filter((el) => el.id === id)
  );
  const {
    productList,
    personalInfo,
    createTime,
    date,
    id: factorId,
  } = targetFactor;
  // TODO add sort
  const ref = useRef();
  const [wasPrinted, setWasPrinted] = useState(false);
  const totalPrice = targetFactor.productList.reduce((acc, res) => {
    return acc + res.count * res.price;
  }, 0);

  return (
    <>
      <div ref={ref} className="container">
        <div className="row factorCompleted__personalInfo">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3 factorCompleted__detail">
                <p>
                  {factorId}:<span>شناسه </span>
                </p>
                <p>
                  {makeFaDate(createTime)}:<span>تاریخ </span>
                </p>
              </div>
              <div className="col-md-9">
                <div>
                  <span className="factorCompleted__title">نام شخص</span> :{" "}
                  <span className="factorCompleted__value">
                    {personalInfo.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 my-3">
            <p>
              <span className="factorCompleted__title">آدرس</span> :{" "}
              <span className="factorCompleted__value">
                {personalInfo.address}
              </span>
            </p>
          </div>

          <div className="col-md-6 my-3">
            <div>
              <span className="factorCompleted__title">شماره تماس</span> :{" "}
              <span className="factorCompleted__value">
                {personalInfo.cellPhon}
              </span>
            </div>
          </div>
          <div className="col-md-6 my-3">
            <div>
              <span className="factorCompleted__title">شماره ثابت</span> :{" "}
              <span className="factorCompleted__value">
                {personalInfo.homeCall}
              </span>
            </div>
          </div>
        </div>
        <table className="table factorCompleted__table">
          <thead>
            <tr>
              <th>نام</th>
              <th>تعداد</th>
              <th>
                قیمت واحد <span>ریال </span>
              </th>
              <th>گونه</th>
              <th>
                قیمت کل <span>ریال </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {productList?.map(({ name, price, count, type, typeValue }, i) => (
              <tr key={i}>
                <th>{name}</th>
                <th>{count}</th>
                <th>{separateBy3(price)}</th>
                <th className="factorCompleted__table__type">
                  <span> {type}</span>
                  <span> {typeValue}</span>
                </th>

                <th>{separateBy3(count * price)}</th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="factorCompleted__totalPrice">
          <div>
            <span>{separateBy3(totalPrice)}</span>
            <span>ریال</span>
            <span>مجموع</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="factorCompleted__title text-right">
              تاریخ تحویل فاکتور
            </p>
            <div className="factorCompleted__date">
              {date.to &&
              Object.values(date.to).join("") !==
                Object.values(date.from).join("") ? (
                <p>
                  از تاریخ
                  <span>{`${date.from.year}/${date.from.month}/${date.from.day}`}</span>
                  تا تاریخ
                  <span>{`${date.to.year}/${date.to.month}/${date.to.day}`}</span>
                  تحویل مشتری داده میشود
                </p>
              ) : (
                <p>
                  در تاریخ
                  <span>{`${date.from.year}/${date.from.month}/${date.from.day}`}</span>
                  تحویل مشتری داده میشود
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <ReactToPrint
            onPrintError={(err) =>
              alert(
                `مشکلی در پرینت این فاکتور وجود دارد.مجددا امتحان کنید و یا به توسعه دهنه مشکل را گزارش دهید ${err}`
              )
            }
            documentTitle={`${personalInfo.name}-${factorId}-${Date.now()}`}
            onAfterPrint={() => setWasPrinted(true)}
            pageStyle={`font-size : "5rem;color : "red !important"`}
            bodyClass="printFrame"
            trigger={() => (
              <button className="factorCompleted__printTrigger">
                <FiPrinter /> پرینت فاکتور
              </button>
            )}
            content={() => ref.current}
          />
          {wasPrinted && (
            <Link className="factorCompleted__goHome" to="/">
              بازگشت به خانه
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default FactorCompleted;
