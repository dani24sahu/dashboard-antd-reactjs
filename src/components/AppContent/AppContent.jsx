import { Button, Card, Col, Row, Space, Typography } from "antd";

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

import { ReactComponent as CalmIcon } from "../../assets/emoji/calm.svg";
import { ReactComponent as DullIcon } from "../../assets/emoji/dull.svg";
import { ReactComponent as EcstaticIcon } from "../../assets/emoji/ecstatic.svg";
import { ReactComponent as SadIcon } from "../../assets/emoji/sad.svg";
import { ReactComponent as SleepIcon } from "../../assets/emoji/Sleepy.svg";

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
    icon: <EcstaticIcon />,
  },
  {
    key: "2",
    label: "Calm",
    icon: <CalmIcon />,
  },
  {
    key: "3",
    label: "Sleepy",
    icon: <SleepIcon />,
  },
  {
    key: "4",
    label: "Dull",
    icon: <DullIcon />,
  },
  {
    key: "5",
    label: "Sad",
    icon: <SadIcon />,
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
        <Text style={{ color: "maroon", fontSize: 25 }} strong>
          My Dashboard
        </Text>
        <Button
          type="primary"
          style={{ color: "white", backgroundColor: "maroon" }}
          size="large"
        >
          Apply New
        </Button>
      </div>
      <div className="container">
        <Space size={"large"} direction="horizontal">
          <Card>
            <CalenderCard />
          </Card>
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
