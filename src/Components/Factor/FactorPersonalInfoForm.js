import { Form, withFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useSelector } from "react-redux";

// components
import Input from "../Input";
import FactorProduct from "./FactorProductSelection";
import PickedProductList from "./PickedProductList";
import AdditionalInformationFactor from "./AdditionalInformationFactor";
import Modal from "../Modal";

// helper function
import bodyOverflowHandler from "../../utils/bodyOverflowHandler";
import { Prompt } from "react-router";

const FactorPersonalInfoForm = ({
  errors,
  touched,
  createFactorHandler,
  values,
  resetForm,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const newFactor = useSelector((state) => state.newFactor);
  // lazy initialization for getting stat with initialization and reassign it when need
  const [shouldPreventTransforming, setShouldPreventTransforming] = useState(
    () => !!Object.values(newFactor.productList).length
  );

  const submitHandler = () => {
    setShouldPreventTransforming(false);
    createFactorHandler(values);
    bodyOverflowHandler(false);
    resetForm();
  };
  return (
    <Form style={{ width: "100%" }}>
      <div className="row">
        <Input
          error={errors}
          touched={touched}
          type="city"
          placeholder="آدرس"
          name="address"
        />
        <Input
          error={errors}
          touched={touched}
          placeholder="نام و نام خانوادگی"
          name="name"
        />
      </div>
      <div className="row">
        <Input
          error={errors}
          touched={touched}
          placeholder="شماره همراه"
          name="cellPhon"
        />

        <Input
          error={errors}
          touched={touched}
          placeholder="شماره ثابت"
          name="homeCall"
        />
      </div>
      <FactorProduct />
      <PickedProductList />
      <AdditionalInformationFactor />
      <Prompt
        when={shouldPreventTransforming}
        message="آیا میخواهید از صفحه خارج شوید ؟ با خارج شدن اطلاعات این فاکتور از بین میرود"
      />
      <button
        style={{
          borderRadius: "5px",
          margin: "3rem 0",
          border: "none",
          background: "#eebb4d",
          padding: "0.5rem 2rem",
        }}
        disabled={
          !newFactor.date.from ||
          !newFactor.productList.length ||
          Object.values(touched).length < 4 ||
          Object.values(errors).length
        }
        onClick={() => {
          setIsModalOpen(true);
          bodyOverflowHandler(true);
        }}
        type="submit"
      >
        ایجاد فاکتور
      </button>
      {isModalOpen && (
        <Modal trigger={setIsModalOpen}>
          <p style={{ textAlign: "right" }}>آیا از ساختن فاکتور مطمئن هستید؟</p>
          <button
            style={{
              border: "none",
              background: "#96bb7c",
              marginRight: "1rem",
              borderRadius: "5px",
              padding: ".5rem 1.5rem",
            }}
            onClick={submitHandler}
          >
            بله,فاکتور را بساز
          </button>
          <button
            style={{ border: "none", background: "transparent" }}
            onClick={() => {
              setIsModalOpen(false);
              bodyOverflowHandler(false);
            }}
          >
            <span>!</span>خیر
          </button>
        </Modal>
      )}
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      address: "",
      cellPhon: "",
      homeCall: "",
    };
  },
  handleSubmit(...res) {},
  validationSchema: Yup.object().shape({
    name: Yup.string().required("نام و نام خانوادگی ضروری میباشد"),
    cellPhon: Yup.string()
      .length(11, "تعداد ارقام اشتباه میباشد")
      .required("شماره تماس ضروری میباشد"),
    homeCall: Yup.string().required("شماره تماس ثابت ضروری میباشد"),
    address: Yup.string().required("آدرس ضروری میباشد"),
  }),
})(FactorPersonalInfoForm);
