import { FullscreenOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Col, Drawer, Image, Space, Table, Typography } from "antd";
import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskDrawer from "./TaskDrawer";

const PendingTask = ({ showModal, isModalOpen, handleOk, handleCancel }) => {
  const [taskData, setTaskData] = useState([]);
  const [additionalFormData, setAdditionalFormData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = (values) => {
    const newTask = {
      title: values.title,
      assignee: values.assignee,
      remarks: values.remarks,
      key: Date.now(),
    };
    setTaskData((prevTaskData) => [...prevTaskData, newTask]);

    setAdditionalFormData({
      file: values.file,
      startEndDate: new Date(values.startEndDate[0]),

      startEndTime: new Date(values.startEndTime[0]),
    });
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Assignee",
      dataIndex: "assignee",
      key: "assignee",
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
    },
  ];

  const dataSource = taskData;

  return (
    <>
      <Col span={8}>
        <Card
          title="Pending tasks"
          bordered={false}
          extra={
            <>
              <Space>
                <a onClick={showModal}>
                  <Space>
                    <PlusOutlined />
                    Add New
                  </Space>
                </a>
                <a>
                  <Space>
                    <FullscreenOutlined
                      onClick={showDrawer}
                      style={{
                        color: "gray",
                        fontSize: "15px",
                        fontWeight: "bolder",
                      }}
                    />
                    {/* TODO: Add a drawer component here after clicking on this icon */}
                    <TaskDrawer
                      title="All Tasks"
                      placement="bottom"
                      closable={false}
                      onClose={onClose}
                      open={open}
                      width={400}
                    ></TaskDrawer>
                  </Space>
                </a>
              </Space>
            </>
          }
        >
          {taskData.length > 0 ? (
            <Table
              showHeader={true}
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              rowKey={(record) => record.key}
            />
          ) : (
            <Typography.Title
              level={5}
              style={{ textAlign: "center", color: "gray" }}
            >
              No pending tasks
            </Typography.Title>
          )}
        </Card>
      </Col>
      <TaskForm
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default PendingTask;
