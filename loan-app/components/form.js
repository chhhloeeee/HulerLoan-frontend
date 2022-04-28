import React from "react";
import styles from "../styles/form.module.css";

const FormElement = ({
  text,
  required,
  type,
  name,
  className,
  readOnly,
  onChange,
}) => {
  return (
    <label for={name}>
      <span>
        {text} <span className={styles.required}>*</span>
      </span>
      <input
        type={type}
        className={className}
        name={name}
        required={required}
        readOnly={readOnly}
        onChange={onChange}
      />
    </label>
  );
};

export default FormElement;
