import React from "react";
import DropdownButton from "./DropdownButton";

export default {
  component: DropdownButton,
  title: "Buttons/DropdownButton",
};

const Template = (args) => <DropdownButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "primary",
  label: "Click me",
  color: "blue",
  shape: "round",
  size: {
    options: ["small", "middle", "large"],
  },
  onClick: (label) => console.log(label),
  options: ["Option 1", "Option 2", "Option 3"],
  loading: false,
  disabled: false,
};
