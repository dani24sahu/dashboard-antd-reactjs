
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import {
  Card,
  Col,
  Dropdown,
  Menu, // Import Menu component from antd
  Progress,
  Row,
  Space,
  Statistic,
  Typography,
  message
} from "antd";

const formatter = (value) => new Date(Date.now()).toLocaleDateString();

const MoodCard = ({ items }) => {
  const [progress, setProgress] = useState(0);
  const [selectedMood, setSelectedMood] = useState(null);
  const [emojis, setEmojis] = useState([]);
  const [messageApi, contextHolder] = message.useMessage()

  const success = ({label}) => {
    messageApi.open({
      type: 'success',
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

  // useEffect(() => {
  //   if (!selectedMood) {
  //     const interval = setInterval(() => {
  //       if (emojis.length < 4) {
  //         setEmojis((prevEmojis) => [...prevEmojis, "😊"]);
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }
  // }, [selectedMood, emojis]);

  return (
    <>
      {contextHolder}
      <Card
        title="Let's get to work"
        style={{ width: 800 }}
        bordered={false}
        extra={
          <Dropdown
            overlay={
              <Menu>
                {items.map((item) => (
                  <Menu.Item
                    key={item.key}
                    onClick={() =>{ handleMoodSelect(item); success(item)}}
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
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {/* {!selectedMood && } */}
                {selectedMood && selectedMood.icon}
                <span>{selectedMood ? selectedMood.label: `Today's Mood`}</span>
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
        <Progress percent={progress} strokeColor="lightgreen" showInfo={false} />

        <Typography.Text type="secondary" style={{display:"flex", alignItems:'center', justifyContent:'center'}}>
          Shift 09:00 AM - 06:00 PM
        </Typography.Text>
      </Card>
    </>
  );
};

export default MoodCard;
