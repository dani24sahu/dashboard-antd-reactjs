import React from "react";
import Checkbox from "./checkbox";

export default {
    title: "Inputs/Checkbox",
    component: Checkbox,
  };
  
  const Template = (args) => <Checkbox {...args} />;
  
  export const DefaultCheckbox = Template.bind({});
  DefaultCheckbox.args = {
    id: "defaultCheckbox",
    label: "Default Checkbox",
  };
  
  export const CheckedCheckbox = Template.bind({});
  CheckedCheckbox.args = {
    id: "checkedCheckbox",
    label: "Checked Checkbox",
    checked: true,
  };
  
  export const DisabledCheckbox = Template.bind({});
  DisabledCheckbox.args = {
    id: "disabledCheckbox",
    label: "Disabled Checkbox",
    disabled: true,
  };
  
  // Add more stories as needed with the new props
  