import React from "react";
import { Button } from "antd";
import { BUTTON_CONFIG } from "./ButtonConfig";

const AntButton = ({ config, buttonId, onClick }) => {
  const selectedButtonConfig = config.find((button) => button.id === buttonId);

  if (!selectedButtonConfig) {
    return null;
  }

  const { type } = selectedButtonConfig;

  const buttonProperties = BUTTON_CONFIG[type];

  return (
    <Button onClick={onClick} {...buttonProperties} style={{ ...selectedButtonConfig.style }}>
      {selectedButtonConfig.label}
    </Button>
  );
};

export default AntButton;
