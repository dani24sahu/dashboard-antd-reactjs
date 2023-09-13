import { DownOutlined } from "@ant-design/icons";
import { Card, Col, Dropdown, Progress, Row, Space, Statistic, Typography } from "antd";
import React from "react";


const formatter = (value) => new Date(Date.now()).toLocaleDateString();

const MoodCard = ({items}) => {
  return (
    <>
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
        <Progress percent={50} />
        <Typography.Text type="secondary">
          Shift 09:00 AM - 06:00 PM
        </Typography.Text>
      </Card>
    </>
  );
};

export default MoodCard;
