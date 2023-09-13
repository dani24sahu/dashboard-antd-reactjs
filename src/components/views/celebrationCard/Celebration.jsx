import { Card, List } from "antd";
import React from "react";

const Celebration = ({data}) => {
  return (
    <>
      <Card title="Celebrations" bordered={false}>
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

export default Celebration;
