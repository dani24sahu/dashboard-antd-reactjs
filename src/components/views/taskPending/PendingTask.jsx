import { PlusOutlined } from "@ant-design/icons";
import { Card, Col, List, Space, Table } from "antd";
import React, { useState } from "react";
import TaskForm from "./TaskForm";

const PendingTask = ({
  showModal,
  isModalOpen,
  handleOk,
  handleCancel,
  data,
}) => {
  const [taskData, setTaskData] = useState([]); // state variable for task data

  const handleSubmit = (values) => {
    // console.log(values);
    const newTask = { ...values, key: Date.now() };
    setTaskData((prevTaskData) => [...prevTaskData, newTask]); // set task data
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
      title: "Start and End Date",
      dataIndex: "startEndDate",
      key: "startEndDate",
    },
    {
      title: "Start and End Time",
      dataIndex: "startEndTime",
      key: "startEndTime",
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
    },
  ];

  // const dataSource = taskData ? [taskData] : [];
  const dataSource = taskData;

  return (
    <>
      <Col span={8}>
        <Card
          title="Pending tasks"
          bordered={false}
          onSubmit={handleSubmit}
          extra={
            <a onClick={showModal}>
              <Space>
                <PlusOutlined />
                Add New
              </Space>
            </a>
          }
        >
          {taskData && (
            <Table
              showHeader={true}
              columns={columns}
              scroll={{x:550,y: 300}}
              dataSource={dataSource}
              pagination={false} // Optional: Remove pagination if not needed
              rowKey={(record) => record.key} // Specify a unique key for each row
            />
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
