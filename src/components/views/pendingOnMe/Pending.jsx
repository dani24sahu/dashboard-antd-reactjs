import { Card, List } from "antd";
import React from "react";

const Pending = ({data}) => {
  return (
    <>
      <Card title="Pending on me" bordered={false}>
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

export default Pending;
