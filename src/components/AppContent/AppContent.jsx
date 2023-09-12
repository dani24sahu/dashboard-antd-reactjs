import { DownOutlined, FrownOutlined, SmileOutlined } from "@ant-design/icons";
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
import CountUp from "react-countup";
import React from "react";

const data = ["Item 1", "Item 2", "Item 3", "Item 4"];

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

const formatter = (value) => new Date(Date.now()).toLocaleDateString();

const AppContent = () => {
  return (
    <div className="AppContent">
      <div className="titleBox">
        <Typography.Title>My Dashboard</Typography.Title>
        <Button type="primary">Apply New</Button>
      </div>
      <div className="container">
        {/* <Row gutter={16}>
          <Col span={12}>
            <CalenderCard />
          </Col>
          
          <Space direction="vertical">
            <Card
              title="Let's get to work"
              style={{ width: 800 }}
              extra={
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Today's mood
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              }
            ></Card>
            <Card
              title="Let's get to work"
              style={{ width: 800 }}
              extra={
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Today's mood
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              }
            ></Card>
          </Space>
        </Row> */}
        <Space direction="horizontal">
          <CalenderCard />
          <Space
            style={{ display: "flex", flexDirection: "column", paddingTop: 0 }}
          >
            <Card
              title="Let's get to work"
              style={{ width: 800 }}
              bordered={false}
              extra={
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Today's mood
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              }
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="Today" formatter={formatter} />
                </Col>
                <Col span={12}>
                  <h3>09:00:00 hrs</h3>
                </Col>
              </Row>
              <Progress percent={50}/>
              <Typography.Text type="secondary">
                Shift 09:00 AM - 06:00 PM
              </Typography.Text>
            </Card>
            <Card title="Announcements" style={{ width: 800 }} bordered={false}>
              <List
                size="small"
                bordered={false}
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Space>
        </Space>
        {/* ....................... */}
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Pending tasks" bordered={false} extra>
              <List
                size="small"
                bordered={false}
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Attendence" bordered={false}>
              <List
                size="small"
                bordered={false}
                dataSource={attendanceData}
                renderItem={(item) => (
                  <List.Item>
                    <b>{item.name}</b>: {item.value}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Leaves" bordered={false}>
              <List
                size="small"
                bordered={false}
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
        </Row>

        {/* .................. */}
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Quick links" bordered={false}>
              <List
                size="small"
                bordered={false}
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Pending on me" bordered={false}>
              <List
                size="small"
                bordered={false}
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="My Pending Requests" bordered={false}>
              <List
                size="small"
                bordered={false}
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
        </Row>

        {/* .................... */}
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Celebrations" bordered={false}>
              <List
                size="small"
                bordered={false}
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Holiday" bordered={false}>
              <List
                size="small"
                bordered={false}
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Insights" bordered={false}>
              <List
                size="small"
                bordered={false}
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AppContent;

function CalenderCard() {
  return (
    <>
      <Calendar />
    </>
  );
}
