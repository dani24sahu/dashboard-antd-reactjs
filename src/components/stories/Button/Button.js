import React from "react";
import { Button as AntButton } from "antd";

// Define the custom button component
export default function Button({
  label,
  type,
  size,
  shape,
  icon,
  color,
  onClick,
}) {
  return (
    <AntButton
      type={type} // primary, default, dashed, link, text or ghost
      size={size} // large, middle or small
      style={{backgroundColor: color}} // background color
      shape={shape} // circle, round or omit
      icon={icon} // any ant-design icon component
      onClick={onClick} // any click handler function
    >
      {label}
    </AntButton>
  );
}
