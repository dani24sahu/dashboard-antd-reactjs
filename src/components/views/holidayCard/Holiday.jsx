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
          renderItem={(item) => (
            <List.Item>
              <Badge
                count={item.date}
                style={{
                  backgroundColor: "#ffccff",
                  fontSize: 16,
                  width: 64,
                  height: 64,
                  lineHeight: "64px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              />
              <List.Item.Meta
                title={item.occasion}
                style={{ marginLeft: 16 }}
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
