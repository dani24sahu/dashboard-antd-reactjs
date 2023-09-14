import {
  DownOutlined,
  FrownOutlined,
  PlusOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import {
  Button,
  Calendar,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Dropdown,
  List,
  Statistic,
  Progress,
} from "antd";



import React, { useState } from "react";
import PendingTask from "../views/taskPending/PendingTask.jsx";
import CalenderCard from "../views/calender/AppCalender.jsx";
import MoodCard from "../views/moodCard/MoodCard.jsx";
import Announcement from "../views/announcementCard/Announcement.jsx";
import Attendance from "../views/attendanceCard/Attendance.jsx";
import Leaves from "../views/leavesCard/Leaves.jsx";
import QuickLinks from "../views/quickLinkCard/QuickLinks.jsx";
import Pending from "../views/pendingOnMe/Pending.jsx";
import PendingReq from "../views/pendingReqs/PendingReq.jsx";
import Celebration from "../views/celebrationCard/Celebration.jsx";
import Holiday from "../views/holidayCard/Holiday.jsx";
import Insights from "../views/insightCard/Insights.jsx";

const data = ["Item 1", "Item 2", "Item 3", "Item 4"];
const { Text } = Typography;

const attendanceData = [
  {
    name: "present",
    value: 20,
  },
  {
    name: "absent",
    value: 0,
  },
  {
    name: "holiday",
    value: 0,
  },
  {
    name: "leave",
    value: 0,
  },
  {
    name: "weekend",
    value: 0,
  },
  {
    name: "penalty",
    value: 0,
  },
];

const items = [
  {
    key: "1",
    label: "Happy",
    icon: <SmileOutlined />,
  },
  {
    key: "2",
    label: "Calm",
    icon: <SmileOutlined />,
  },
  {
    key: "3",
    label: "Sleepy",
    icon: <SmileOutlined />,
  },
  {
    key: "4",
    label: "Dull",
    icon: <SmileOutlined />,
  },
  {
    key: "5",
    label: "Sad",
    icon: <FrownOutlined />,
  },
];

const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="AppContent">
      <div className="titleBox">
        {/* <Typography.Title style={{color:'maroon'}}>My Dashboard</Typography.Title> */}
        <Text style={{color:'maroon', fontSize:25}} strong>My Dashboard</Text>
        <Button type="primary" style={{color:'white', backgroundColor:'maroon'}} size="large">Apply New</Button>
      </div>
      <div className="container">
        <Space size={"large"} direction="horizontal">
          <CalenderCard />
          <Space
            style={{ display: "flex", flexDirection: "column", paddingTop: 0 }}
          >
            <MoodCard items={items} />
            <Announcement data={data} />
          </Space>
        </Space>
        {/* ....................... */}
        <Row gutter={16}>
          <PendingTask
            showModal={showModal}
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            data={data}
          />
          <Col span={8}>
            <Attendance attendanceData={attendanceData} />
          </Col>
          <Col span={8}>
            <Leaves data={data} />
          </Col>
        </Row>
        {/* ................... */}
        <Row gutter={16}>
          <Col span={8}>
            <QuickLinks data={data} />
          </Col>
          <Col span={8}>
            <Pending data={data} />
          </Col>
          <Col span={8}>
            <PendingReq data={data} />
          </Col>
        </Row>

        {/* .................... */}
        <Row gutter={16}>
          <Col span={8}>
            <Celebration data={data} />
          </Col>
          <Col span={8}>
            <Holiday data={data} />
          </Col>
          <Col span={8}>
            <Insights data={data} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AppContent;
