import React, { useState } from "react";
import { Modal as AntModal } from "antd";

const Modal = ({ title, onCancel, onOk, open, children, footer }) => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    // setIsModalOpen(false);
    onCancel();
  };

  const handleOk = () => {
    // setIsModalOpen(false);
    onOk();
  };

  return (
    <AntModal
      open={open}
      title={title}
      onCancel={handleCancel}
      onOk={handleOk}
      footer={footer}
    >
      {children}
    </AntModal>
  );
};

export default Modal;
