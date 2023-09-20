import React from "react";
import { Button as AntButton } from "antd";

export default function Button({
  label,
  type,
  size,
  shape,
  icon,
  iconPosition,
  color,
  loading,
  disabled=false,
  onClick,
}) {
  return (
    <AntButton
      type={type}
      size={size} 
      style={{backgroundColor: color}} 
      shape={shape}
      icon={icon}
      loading={loading} 
      iconPosition={iconPosition}
      disabled={disabled}
      onClick={onClick} 
    >
      {label}
    </AntButton>
  );
}