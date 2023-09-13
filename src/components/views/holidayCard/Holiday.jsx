import { Card, List } from "antd";
import React from "react";

const Holiday = ({ data }) => {
  return (
    <>
      <Card title="Holiday" bordered={false}>
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

export default Holiday;
