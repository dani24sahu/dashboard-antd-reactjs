import { Input as AntInput, AutoComplete as AntAutocomplete } from "antd";
import {} from "@ant-design/icons";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { urlSchema } from "./validationSchema";

const Input = ({
  placeholder,
  leftIcon,
  rightIcon,
  size,
  type,
  validationSchema,
  options,
  onSelect,
  required=true
}) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // const options = ['Apple', 'Banana', 'Cherry', 'Date',];

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleSelect = (value) => {
    setSearchValue(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const emailRegex =
      /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+(?:com|in|net|uk|nl|co\.in)$/i; // Regular expression for basic email format check

    if (type === "email" && !emailRegex.test(value)) {
      setError("Invalid email format");
    } else {
      setError(null);
    }

    if (type === "password") {
      // Strong password regex with at least one number, one special character, one uppercase letter, one lowercase letter, and a minimum length of 8
      const strongPasswordRegex =
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

      if (!strongPasswordRegex.test(value)) {
        setError(
          "Password must contain at least one number, one special character, one uppercase letter, one lowercase letter, and be at least 8 characters long"
        );
      } else {
        setError(null);
      }

      const { error: ValidationError } = urlSchema.validate(value);
      if (ValidationError) {
        setError(ValidationError.message);
      } else {
        setError("");
      }
    }
  };

  return (
    <>
      {/* {type === "iconInput" && leftIcon ? (
        <AntInput
          placeholder={placeholder}
          prefix={leftIcon}
          size={size}
          onChange={handleChange}
        />
      ) : (
        <AntInput
          placeholder={placeholder}
          suffix={rightIcon}
          size={size}
          onChange={handleChange}
        />
      )} */}

      {type === "password" ? (
        <>
          <AntInput.Password
            placeholder={placeholder}
            size={size}
            value={inputValue}
            onChange={handleChange}
          />
        </>
      ) : null}

      {type === "url" ? (
        <>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <AntInput
            placeholder="Enter URL"
            // validationSchema={validationSchema}
            size={size}
            handleChange={handleChange}
          />
        </>
      ) : null}

      {type === "search" ? (
        <AntAutocomplete
          value={searchValue}
          aria-required={required}
          options={options
            .filter((option) =>
              option.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((option) => ({ value: option }))}
          style={{ width: 450 }}
          onSearch={handleSearch}
          onSelect={handleSelect}
          placeholder={placeholder}
        />
      ) : null}
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  size: PropTypes.oneOf(["small", "middle", "large"]),
  type: PropTypes.oneOf([
    "text",
    "password",
    "number",
    "email",
    "tel",
    "url",
    "search",
  ]),
  validationSchema: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func,
};

export default Input;
