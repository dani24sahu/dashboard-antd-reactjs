import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import {
  Card,
  Col,
  Dropdown,
  Menu,
  Progress,
  Row,
  Space,
  Typography,
  message,
} from "antd";

const { Text } = Typography;

// const formatter = (value) => new Date(Date.now()).toLocaleDateString();
const formatter = () => {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return currentDate.toLocaleDateString(undefined, options).replace(/,/g, "");
};

const MoodCard = ({ items }) => {
  const [progress, setProgress] = useState(0);
  const [selectedMood, setSelectedMood] = useState(null);
  const [emojis, setEmojis] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const success = ({ label }) => {
    messageApi.open({
      type: "success",
      content: `You are ${label} today!`,
    });
  };

  useEffect(() => {
    const startTime = new Date();
    startTime.setHours(9, 0, 0); // 9:00 AM

    const endTime = new Date();
    endTime.setHours(18, 0, 0); // 6:00 PM

    const now = new Date();
    if (now < startTime) {
      setProgress(0);
    } else if (now >= endTime) {
      setProgress(100);
    } else {
      const totalMilliseconds = endTime - startTime;
      const currentMilliseconds = now - startTime;
      const currentProgress = (currentMilliseconds / totalMilliseconds) * 100;
      setProgress(currentProgress);
    }

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
      clearInterval(intervalId);
    };
  }, []);

  const handleMoodSelect = (item) => {
    setSelectedMood(item);
    setEmojis([]);
  };

  useEffect(() => {
    if (!selectedMood) {
      const interval = setInterval(() => {
        if (emojis.length < 4) {
          setEmojis((prevEmojis) => [...prevEmojis, emojis[emojis.length]]);
        } else {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [selectedMood, emojis]);

  return (
    <>
      {contextHolder}
      <Card
        title="Let's get to work"
        style={{ width: "800px", height: "300px", fontSize: "20px" }}
        bordered={false}
        extra={
          <Dropdown
            overlay={
              <Menu>
                {items.map((item) => (
                  <Menu.Item
                    key={item.key}
                    onClick={() => {
                      handleMoodSelect(item);
                      success(item);
                    }}
                  >
                    <Space>
                      {item.icon}
                      {item.label}
                    </Space>
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <a href="/dummyHREF" onClick={(e) => e.preventDefault()}>   {/*{Provided dummy href}*/}
              <Space>
                {/* {!selectedMood && emojis}         ********************TODO */}
                {selectedMood && selectedMood.icon}
                <span>
                  {selectedMood ? selectedMood.label : `Today's Mood`}
                </span>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        }
      >
        <Row gutter={16}>
          <Col span={12}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text strong style={{ fontSize: "20px" }}>
                Today
              </Text>
              <Text>{formatter()}</Text>
            </div>
          </Col>
          <Col span={12}>
            <Text style={{ fontSize: "20px" }}>09:00:00 hrs</Text>
          </Col>
        </Row>
        <Progress
          percent={progress}
          strokeColor="lightgreen"
          showInfo={false}
          style={{ marginTop: "80px ", display: "flex", alignItems: "center" }}
        />

        <Typography.Text
          type="secondary"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          Shift 09:00 AM - 06:00 PM
        </Typography.Text>
      </Card>
    </>
  );
};

export default MoodCard;
