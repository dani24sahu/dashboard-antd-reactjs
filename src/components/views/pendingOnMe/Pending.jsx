import { Card, List } from "antd";
import React from "react";

const Pending = () => {
  return (
    <>
      <Card title="Pending on me" bordered={false}>
        <List
          size="small"
          bordered={false}
          style={{ overflow: "auto", height: 300 }}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Card>
    </>
  );
};

export default Pending;
