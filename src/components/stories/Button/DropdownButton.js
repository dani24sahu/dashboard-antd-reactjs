import React from "react";
import { Button, Menu, Dropdown } from "antd";

const DropdownButton = ({ label, options, color, size, type, onClick }) => {
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
        <Button type={type} style={{ backgroundColor: color }} size={size}>
          {label}
        </Button>
      </Dropdown>
    </>
  );
};

export default DropdownButton;
