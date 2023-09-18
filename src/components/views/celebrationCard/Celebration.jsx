import React, { useState } from "react";
import { Card, List, Badge, Select } from "antd";
import { GiftFilled, TrophyFilled } from "@ant-design/icons";

import { data } from "./celebrationData";

const { Option } = Select;

const Celebration = () => {
  const [filter, setFilter] = useState("All Celebrations");

  const filteredData =
    filter === "All Celebrations"
      ? data
      : data.filter((item) => item.occasion === filter);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <>
      <Card
        title="Celebrations"
        extra={
          <Select defaultValue="All Celebrations" onChange={handleFilterChange}>
            <Option value="All Celebrations">All Celebrations</Option>
            <Option value="Birthday">Birthday</Option>
            <Option value="Work Anniversary">Work Anniversary</Option>
          </Select>
        }
      >
        <List
          itemLayout="horizontal"
          dataSource={filteredData}
          // style={{backgroundColor:"#e6f2ff"}}
          renderItem={(item) => (
            <List.Item style={{ padding: "2px" }}>
              <List.Item.Meta
                avatar={<img src={item.image} alt={item.name} width={50} height={50} />}
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
                  backgroundColor: "#e6f2ff",
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
    </>
  );
};

export default Celebration;
