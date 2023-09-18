import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Modal,
  Input,
  ColorPicker,
  Select,
  Typography,
  DatePicker,
  TimePicker,
} from "antd";
import { useState } from "react";
import AntButton from "../otherComponents/AntButton";
import { buttonConfig } from "./taskFormBtnConfig";

const { Text } = Typography;



function TaskForm({ onSubmit, isModalOpen, handleOk, handleCancel }) {
  const [formData, setFormData] = useState(null);
  const [newCategories, setNewCategories] = useState([]); // to handle new categories
  const [form] = Form.useForm();

  const [showModal, setShowModal] = useState(false);
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);

  const handleFormSubmit = (values) => {
    console.log(values);
    setFormData(values);
    onSubmit(values);
  };

  const handleNewCategorySubmit = (values) => {
    console.log(values);
    setNewCategories(values);
    onSubmit(values);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleOpenNewCategoryModal = () => {
    setShowNewCategoryModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCloseNewCategoryModal = () => {
    setShowNewCategoryModal(false);
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
          <AntButton
            onClick={handleCancel}
            config={buttonConfig}
            buttonId={3}
          />,
          <AntButton
            onClick={() => form.submit()}
            key="submit"
            config={buttonConfig}
            buttonId={2}
          />,
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
            <PlusOutlined style={{ color: "blue" }} />
            <Text
              type="secondary"
              onClick={handleOpenNewCategoryModal}
              style={{ cursor: "pointer", color: "blue" }}
            >
              {" "}
              New Category
            </Text>
          </Form.Item>
          <Modal
            title="New Category"
            open={showNewCategoryModal}
            onCancel={handleCloseNewCategoryModal}
            width={600}
            footer={[
              <AntButton
                key="cancel"
                onClick={handleCloseNewCategoryModal}
                config={buttonConfig}
                buttonId={3}
              />,
              <AntButton key="newSubmit" config={buttonConfig} buttonId={4} />,
            ]}
          >
            <Form
              form={form}
              onFinish={handleNewCategorySubmit}
              // onSubmit={() => onSubmit(newCategories)}
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
                            {
                              required: true,
                              message: "Please select a color",
                            },
                          ]}
                        >
                          <ColorPicker picker="CirclePicker" />
                        </Form.Item>
                        <AntButton
                          config={buttonConfig}
                          buttonId={5}
                          onClick={() => remove(field.name)}
                        />
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <AntButton
                        config={buttonConfig}
                        buttonId={6}
                        onClick={() => add()}
                      />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form>
          </Modal>
          <Form.Item name="startEndDate">
            {/* TODO: Date picker with Rangepicker */}
            <DatePicker.RangePicker
              name="startEndDate"
              placeholder={["dd/mm/yyyy", "dd/mm/yyyy"]}
              format="DD/MM/YYYY"
            />
          </Form.Item>
          <Form.Item name="startEndTime">
            <TimePicker.RangePicker
              name="startEndTime"
              placeholder={["12:00 PM", "12:00 PM"]}
            />
          </Form.Item>
          <Form.Item name="remarks">
            <Input.TextArea name="remarks" placeholder="Remarks" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default TaskForm;
