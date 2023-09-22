import React from "react";
import { Button as AntButton } from "antd";
import PropTypes from "prop-types";

export default function Button({
  label,
  type,
  size,
  shape,
  icon,
  iconPosition,
  color,
  loading,
  disabled = false,
  onClick,
}) {
  return (
    <AntButton
      type={type}
      size={size}
      style={{ backgroundColor: color }}
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

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "dashed",
    "text",
    "link",
    "default",
  ]),
  size: PropTypes.oneOf(["small", "middle", "large"]),
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  color: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
