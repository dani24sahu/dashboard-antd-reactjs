import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Modal,
  Button,
  Input,
  ColorPicker,
  Select,
  Typography,
  DatePicker,
  TimePicker,
} from "antd";
import { useState } from "react";

const { Text } = Typography;

function TaskForm({ onSubmit, isModalOpen, handleOk, handleCancel }) {
  const [formData, setFormData] = useState(null);
  const [form] = Form.useForm();

  const [showModal, setShowModal] = useState(false); // state variable for modal visibility

  const handleFormSubmit = (values) => {
    console.log(values);
    setFormData(values);
    onSubmit(values)
  };

  const handleOpenModal = () => {
    setShowModal(true); // open the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // close the modal
  };

  return (
    <>
      <Modal
        title="New Task"
        open={isModalOpen}
        onOk={handleOk}
        onSubmit={() => onSubmit(formData)}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            onClick={() => form.submit()} // TODO: useForm hook
          >
            Submit
          </Button>,
        ]}
      >
        <Form form={form} onFinish={handleFormSubmit}>
          <Form.Item name="title">
            <Input name="title" placeholder="Title" required />
          </Form.Item>
          <Form.Item name="file">
            <Input name="file" type="file" placeholder="Choose file" />
          </Form.Item>
          <Form.Item name="assignee">
            <Input name="assignee" placeholder="Asignee Name" required />
          </Form.Item>
          <Form.Item name="category">
            <Select placeholder="Category"></Select>
          </Form.Item>

          <Form.Item>
            <PlusOutlined />
            <Text
              type="secondary"
              onClick={handleOpenModal}
              style={{ cursor: "pointer" }}
            >
              {" "}
              New Category
            </Text>
          </Form.Item>
          <Modal
            title="New Category" // modal title
            open={showModal} // modal visibility
            onCancel={handleCloseModal} // close modal when clicking cancel button or outside modal
            width={600} // modal width in pixels
          >
            <Form.List name="newCategories">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <Form.Item key={field.key}>
                      <Form.Item
                        {...field}
                        name={[field.name, "name"]}
                        key={[field.key, "name"]}
                        rules={[
                          {
                            required: true,
                            message: "Please enter a category name",
                          },
                        ]}
                      >
                        <Input placeholder="New category name" />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        name={[field.name, "color"]}
                        key={[field.key, "color"]}
                        rules={[
                          { required: true, message: "Please select a color" },
                        ]}
                      >
                        <ColorPicker picker="CirclePicker" />
                      </Form.Item>
                      <Button onClick={() => remove(field.name)}>Delete</Button>
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button onClick={() => add()}>New Category</Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Modal>
          <Form.Item name="startEndDate">
            {/* TODO: Date picker with Rangepicker */}
            <DatePicker.RangePicker
              name="startEndDate"
              placeholder={["dd/mm/yyyy", "dd/mm/yyyy"]}
              format="DD/MM/YYYY"
            />
          </Form.Item>
          <Form.Item name='startEndTime'>
            <TimePicker.RangePicker name='startEndTime' placeholder={["12:00 PM", "12:00 PM"]} />
          </Form.Item>
          <Form.Item name='remarks'>
            <Input.TextArea name="remarks" placeholder="Remarks" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default TaskForm;
