import { Card, List } from "antd";
import React from "react";

const PendingReq = () => {
  return (
    <>
      <Card title="My Pending Requests" bordered={false}>
        <List
          size="small"
          style={{overflow: 'auto', height: '300px'}}
          bordered={false}
          // dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Card>
    </>
  );
};

export default PendingReq;
