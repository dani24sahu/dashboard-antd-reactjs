import { Input as AntInput } from "antd";
import {} from "@ant-design/icons";
import React from "react";

// const {Password} = AntInput.Password;

const Input = ({ placeholder, leftIcon, rightIcon, size, type }) => {
  return (
    <>
      {/*  <AntInput placeholder={placeholder} prefix={icon} suffix={icon} /> */}
      {leftIcon ? (
        <AntInput placeholder={placeholder} prefix={leftIcon} size={size} />
      ) : (
        <AntInput placeholder={placeholder} suffix={rightIcon} size={size}/>
      )}

        {type === "password" ? (
            <AntInput.Password placeholder={placeholder} size={size} />
        ) : null}

    </>
  );
};

export default Input;
