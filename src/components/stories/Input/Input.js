import { Input as AntInput } from "antd";
import {} from "@ant-design/icons";
import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ placeholder, leftIcon, rightIcon, size, type,  }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

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
    }
  };

  return (
    <>
      {leftIcon ? (
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
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {type === "password" ? (
        <AntInput.Password
          placeholder={placeholder}
          size={size}
          value={inputValue}
          onChange={handleChange}
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
};

export default Input;
