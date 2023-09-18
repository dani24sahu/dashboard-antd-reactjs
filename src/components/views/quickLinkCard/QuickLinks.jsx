import React, { useState } from "react";
import { Card, List, Modal, Form, Input, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const QuickLinks = () => {
  const [visible, setVisible] = useState(false);

  const [form] = Form.useForm();
  const [quickLinks, setQuickLinks] = useState([]); //  an array to store quick links

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      setQuickLinks([...quickLinks, values]); // Add the new quick link to the array
      console.log(values);
      setVisible(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const cardStyle = {
    width: 400,
    margin: "20px",
  };

  const listItemStyle = {
    cursor: "pointer",
    padding: "8px 0",
    borderBottom: "1px solid #dcdcdc",
  };

  const linkStyle = {
    color: "#1890ff",
    // textDecoration: "underline",
    fontSize: "18px",
  };

  return (
    <>
      <Card
        title="Quick links"
        bordered={false}
        // style={cardStyle}
        extra={
          <a onClick={showModal}>
            <Space>
              <PlusOutlined />
              Add New
            </Space>
          </a>
        }
      >
        <List
          size="small"
          bordered={false}
          dataSource={quickLinks}
          renderItem={(item) => (
            <List.Item
              style={listItemStyle}
              onClick={() => window.open(item.url, "_blank")}
            >
              <a style={linkStyle}>{item.name}</a>
            </List.Item>
          )}
        />
      </Card>

      <Modal
        title="Add a new quick link"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter a name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="url"
            label="URL"
            rules={[{ required: true, message: "Please enter a URL" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default QuickLinks;
