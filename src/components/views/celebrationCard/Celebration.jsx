import React from "react";
import { Card, List, Badge } from "antd";
import { GiftFilled, TrophyFilled, UserOutlined } from "@ant-design/icons";

import { data } from "./celebrationData";

const Celebration = () => {
  return (
    <div style={{ display: "block", padding: 30 }}>
      <Card title="Celebrations">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<img src={item.image} alt={item.name} width={64} />}
                title={item.name}
                description={
                  <>
                    {item.occasion === "Birthday" ? (
                      <GiftFilled />
                    ) : (
                      <TrophyFilled />
                    )}{" "}
                    {item.occasion}
                  </>
                }
              />
              <Badge
                count={item.date}
                style={{
                  backgroundColor: "lightblue",
                  color: "black",
                  fontSize: 12,
                  width: 50,
                  height: 50,
                  lineHeight: "50px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};
export default Celebration;
