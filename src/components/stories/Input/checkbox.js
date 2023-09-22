import React, { useState } from "react";
import PropTypes from "prop-types";
import { Checkbox as AntCheckbox } from "antd";
import Joi, {valid} from "joi";

const Checkbox = ({
  areaLabel,
  ariaLabelledBy,
  checkboxClassName,
  checked: initialChecked,
  "data-testId": dataTestId,
  disabled,
  id,
  indeterminate,
  label,
  name,
  onChange,
  value,
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);
  const [error, setError] = useState("");

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);

    // Perform validation
    if (valid && typeof valid === "function") {
      const isValid = Joi.valid(newChecked);
      if (!isValid) {
        setError("Checkbox validation failed");
      } else {
        setError("");
      }
    }

    // Notify parent component of the change
    if (onChange && typeof onChange === "function") {
      onChange(newChecked);
    }
  };

  return (
    <AntCheckbox
      id={id}
      name={name}
      value={value}
      checked={isChecked}
      disabled={disabled}
      onChange={handleChange}
      aria-label={areaLabel}
      aria-labelledby={ariaLabelledBy}
      data-testid={dataTestId}
      className={checkboxClassName}
      indeterminate={indeterminate}
    >
      {label}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </AntCheckbox>
  );
};

Checkbox.propTypes = {
  areaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  checkboxClassName: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
  componentClassName: PropTypes.string,
  "data-testId": PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  indeterminate: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Checkbox;
