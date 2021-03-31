import { Field } from "formik";

const Input = ({ error, touched, ...rest }) => {
  const wasError = error[rest.name];
  const wasTouched = touched[rest.name];
  return (
    <div className="col-md-6">
      <Field
        className={`input ${wasError && wasTouched ? "input--invalid" : ""}`}
        {...rest}
      />
      {wasError && wasTouched && (
        <span className="input__errText">{wasError}</span>
      )}
    </div>
  );
};

export default Input;
