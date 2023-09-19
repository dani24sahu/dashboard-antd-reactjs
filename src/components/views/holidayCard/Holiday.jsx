import React from "react";
import { Card, List, Badge } from "antd";
import { data } from "./holidayData";

const Holiday = () => {
  return (
    <>
      <Card title="Holidays">
        <List
          itemLayout="horizontal"
          dataSource={data}
          style={{ overflow: "auto", height: 300 }}
          renderItem={(item) => (
            <List.Item>
              <Badge
                count={item.date}
                style={{
                  backgroundColor: "#ffccff",
                  fontSize: 14,
                  width: 50,
                  height: 50,
                  lineHeight: "50px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              />
              <List.Item.Meta
                title={item.occasion}
                style={{ marginLeft: 20 }}
              />
              <List.Item.Meta title={item.type} />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default Holiday;
