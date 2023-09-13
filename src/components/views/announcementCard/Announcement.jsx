import { Card, List } from "antd";
import React from "react";

const Announcement = ({data}) => {
  return (
    <>
      <Card title="Announcements" style={{ width: 800 }} bordered={false}>
        <List
          size="small"
          bordered={false}
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Card>
    </>
  );
};

export default Announcement;
