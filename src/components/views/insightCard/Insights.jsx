import { Card, List } from "antd";
import React from "react";

const Insights = ({data}) => {
  return (
    <>
      <Card title="Insights" bordered={false}>
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

export default Insights;
