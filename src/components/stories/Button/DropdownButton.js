import React from "react";
import { Button, Menu, Dropdown } from "antd";
import PropTypes from "prop-types";

const DropdownButton = ({
  label,
  options,
  color,
  size,
  type,
  onClick,
  shape,
  loading = false,
  disabled = false,
}) => {
  const menu = (
    <Menu>
      {options.map((option) => (
        <Menu.Item key={option.key} onClick={() => onClick(option.label)}>
          {option.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button
          type={type}
          style={{ backgroundColor: color }}
          size={size}
          shape={shape}
          loading={loading}
          disabled={disabled}
        >
          {label}
        </Button>
      </Dropdown>
    </>
  );
};

DropdownButton.propTypes = {
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

export default DropdownButton;
