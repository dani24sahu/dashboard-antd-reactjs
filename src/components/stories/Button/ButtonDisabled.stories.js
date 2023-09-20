import Button from "./Button";

export default {
  component: Button,
  title: "Buttons/DisabledButton",
};

export const Disabled = {
    args: {
      label: 'Disabled Button',
      type: 'default',
      size: 'large',
      shape: null,
      icon: null,
      disabled: true,
    },
  };