import { DownOutlined } from "@ant-design/icons";
import {
  Card,
  Col,
  Dropdown,
  Progress,
  Row,
  Space,
  Statistic,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";

const formatter = (value) => new Date(Date.now()).toLocaleDateString();

const MoodCard = ({ items }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Define the start and end times for the shift
    const startTime = new Date();
    startTime.setHours(9, 0, 0); // 9:00 AM

    const endTime = new Date();
    endTime.setHours(18, 0, 0); // 6:00 PM

    // Calculate the current progress
    const now = new Date();
    if (now < startTime) {
      setProgress(0); // Before the shift starts
    } else if (now >= endTime) {
      setProgress(100); // After the shift ends
    } else {
      const totalMilliseconds = endTime - startTime;
      const currentMilliseconds = now - startTime;
      const currentProgress = (currentMilliseconds / totalMilliseconds) * 100;
      setProgress(currentProgress);
    }

    // Update the progress every second
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= endTime) {
        setProgress(100);
        clearInterval(intervalId);
      } else {
        const totalMilliseconds = endTime - startTime;
        const currentMilliseconds = currentTime - startTime;
        const currentProgress = (currentMilliseconds / totalMilliseconds) * 100;
        setProgress(currentProgress);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []);

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
        <Progress percent={progress} strokeColor='lightgreen' showInfo={false} />
        <Typography.Text type="secondary">
          Shift 09:00 AM - 06:00 PM
        </Typography.Text>
      </Card>
    </>
  );
};

export default MoodCard;
