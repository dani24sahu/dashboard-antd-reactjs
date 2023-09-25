import React, {} from "react";
import { Form } from "antd";
import Modal from "../../stories/Modal/Modal";
import Button from "../../stories/Button/Button";
import Input from "../../stories/Input/Input";

const LeaveFormModal = ({ open, onCancel, handleSearch, handleSelect }) => {
  const [form] = Form.useForm();
  const handleOk = () => {
    console.log("ok");
  };

  return (
    <Modal
      title="Apply Leave"
      open={open}
      onCancel={onCancel}
      footer={[
        <Button label="Cancel" type="secondary" onClick={onCancel} />,
        <Button label="Submit" type="primary" onClick={handleOk} />,
      ]}
    >
      <Form form={form}>
        <Form.Item>
          <Input
            placeholder="Leave Type"
            type="search"
            options={["Paid Leave", "LOP", "Wedding Leave"]}
            required
            onSearch={handleSearch}
            onSelect={handleSelect}
          />

        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LeaveFormModal;
