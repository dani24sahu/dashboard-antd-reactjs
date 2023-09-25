import React from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

export default {
  component: Modal,
  title: "Modals/Modal",
  argTypes: {
    title: { control: "text" },
    open: { control: "boolean" },
  },
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: "Sample Modal",
  footer: { okText: "OK", cancelText: "Cancel" },
  onCancel: () => {
    console.log("Canceled");
  },
  onOk: () => {
    console.log("OK");
  },
  children: <p>This is the content of the modal.</p>,
};
