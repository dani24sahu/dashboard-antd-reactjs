import React, { useState } from "react";
import { Card, List, Avatar, Modal } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { data } from "./announcement";

const formatDate = (dateString, format) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const ordinalSuffixes = ["th", "st", "nd", "rd"];

  const ordinalSuffix =
    ordinalSuffixes[(day - 20) % 10] ||
    ordinalSuffixes[(day - 10) % 10] ||
    ordinalSuffixes[day - 1] ||
    ordinalSuffixes[0];

  switch (format) {
    case "list":
      return `${monthNames[month]} ${day.toString().padStart(2, "0")}, ${year}`;
    case "modal":
      return `${day}${ordinalSuffix} ${monthNames[month]} ${year}`;

    default:
      return dateString;
  }
};

const Announcement = () => {
  const [visible, setVisible] = useState(false);

  const [modalData, setModalData] = useState(null);

  const showModal = (item) => {
    setModalData(item);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <div style={{ display: "block", width: 800, padding: 30 }}>
      <Card title="Announcements">
        <List
          itemLayout="horizontal"
          dataSource={data}
          style={{ height: 300, overflow: "auto" }}
          renderItem={(item) => (
            <List.Item >
              <List.Item.Meta
                avatar={<SoundOutlined />}
                title={item.subject}
                description={
                  <>
                    {item.content.slice(0, 50)}... <a onClick={() => showModal(item)}>See more</a>
                  </>
                }
              />
              <div>{formatDate(item.date, "list")}</div>
            </List.Item>
          )}
        />
      </Card>
      {/* modal to show the announcement details */}
      {modalData && (
        <Modal
          title={modalData.subject}
          open={visible}
          onCancel={hideModal}
          footer={null}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar src={modalData.author.avatar} />
            <div style={{ marginLeft: 16 }}>
              <div>{modalData.author.name}</div>
              <div>{modalData.author.role}</div>
              <div>{formatDate(modalData.date, "modal")}</div>
            </div>
          </div>
          <div style={{ marginTop: 16 }}>{modalData.content}</div>
        </Modal>
      )}
    </div>
  );
};
export default Announcement;
