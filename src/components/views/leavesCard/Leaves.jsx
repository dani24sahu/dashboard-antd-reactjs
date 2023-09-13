import { Card, List } from "antd";
import React from "react";

const Leaves = ({data}) => {
  return (
    <>
      <Card title="Leaves" bordered={false}>
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

export default Leaves;
