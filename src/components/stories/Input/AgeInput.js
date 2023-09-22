import React, { useState } from "react";
import PropTypes, { number } from "prop-types";
import { ageSchema } from "./validationSchema";
import { Input as AntInput } from "antd";

const AgeInput = ({ placeholder, onChange }) => {
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const inputAge = e.target.value;
    setAge(inputAge);
    // console.log(value);

    const {error: ValidationError}= (ageSchema).validate(inputAge);
    if (ValidationError) {
      setError(ValidationError.message);
    } else {
      setError("");
    }

    if (onChange) {
      onChange(inputAge);
    }
  };

  return (
    <>
      <AntInput
        placeholder={placeholder}
        type={number}
        value={age}
        onChange={handleChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

AgeInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default AgeInput;
