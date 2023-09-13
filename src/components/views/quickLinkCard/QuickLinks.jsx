import { Card, List } from "antd";
import React from "react";

const QuickLinks = ({data}) => {
  return (
    <>
      <Card title="Quick links" bordered={false}>
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

export default QuickLinks;
