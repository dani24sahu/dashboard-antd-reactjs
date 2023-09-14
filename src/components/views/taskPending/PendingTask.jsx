import { FullscreenOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Col, Drawer, Space, Table } from "antd";
import React, { useState } from "react";
import TaskForm from "./TaskForm";

// const PendingTask = ({ showModal, isModalOpen, handleOk, handleCancel }) => {
//   const [taskData, setTaskData] = useState([]); // state variable for task data

//   const handleSubmit = (values) => {
//     // console.log(values);
//     const newTask = { ...values, key: Date.now() };
//     setTaskData((prevTaskData) => [...prevTaskData, newTask]); // set task data
//   };

//   const columns = [
//     {
//       title: "Title",
//       dataIndex: "title",
//       key: "title",
//     },
//     {
//       title: "Assignee",
//       dataIndex: "assignee",
//       key: "assignee",
//     },
//     {
//       title: "Start and End Date",
//       dataIndex: "startEndDate",
//       key: "startEndDate",
//     },
//     {
//       title: "Start and End Time",
//       dataIndex: "startEndTime",
//       key: "startEndTime",
//     },
//     {
//       title: "Remarks",
//       dataIndex: "remarks",
//       key: "remarks",
//     },
//   ];

//   // const dataSource = taskData ? [taskData] : [];
//   const dataSource = taskData;

//   return (
//     <>
//       <Col span={8}>
//         <Card
//           title="Pending tasks"
//           bordered={false}
//           onSubmit={handleSubmit}
//           extra={
//             <a onClick={showModal}>
//               <Space>
//                 <PlusOutlined />
//                 Add New
//               </Space>
//             </a>
//           }
//         >
//           {taskData.length > 0 && (
//             <Table
//               showHeader={false}
//               columns={columns}
//               // scroll={{x:550,y: 300}}
//               dataSource={dataSource}
//               pagination={false}
//               rowKey={(record) => record.key}
//             />
//           )}
//         </Card>
//       </Col>
//       <TaskForm
//         isModalOpen={isModalOpen}
//         handleOk={handleOk}
//         handleCancel={handleCancel}
//         onSubmit={handleSubmit}
//       />
//     </>
//   );
// };

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

    const startDate = new Date(values.startEndDate[0]);
    const endDate = new Date(values.startEndDate[1]);
    const startDateValue = startDate.getDate();

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
    // {
    //   title: "Start and End Date",
    //   dataIndex: "startEndDate",
    //   key: "startEndDate",
    // },
    // {
    //   title: "Start and End Time",
    //   dataIndex: "startEndTime",
    //   key: "startEndTime",
    // },
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
                    <FullscreenOutlined onClick={showDrawer} style={{color:'gray', fontSize:'15px', fontWeight:'bolder'}}/>
                    {/* TODO: Add a drawer component here after clicking on this icon */}
                    <Drawer 
                      title="All Tasks"
                      placement="bottom"
                      closable={false}
                      onClose={onClose}
                      open={open}
                      width={400}
                    >

                    </Drawer>
                  </Space>
                </a>
              </Space>
            </>
          }
        >
          {taskData.length > 0 && (
            <Table
              showHeader={true}
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              rowKey={(record) => record.key}
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
