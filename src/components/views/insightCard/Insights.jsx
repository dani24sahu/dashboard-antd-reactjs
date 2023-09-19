import React, { useState } from "react";
import { Card, List, Badge, Select } from "antd";
import {data} from './insightsData'

const filterOptions = [
  { label: "Leave", value: "leave" },
  { label: "Work from home", value: "Work from home" },
  { label: "On duty", value: "On duty" },
];

const statusColors = {
  approved: "green",
  pending: "gray",
  declined: "red",
};

const Insights = () => {
  const [filter, setFilter] = useState("leave");

  const handleChangeFilter = (value) => {
    setFilter(value);
  };

  const extraContent = (
    <Select value={filter} onChange={handleChangeFilter}>
      {filterOptions.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );

  return (
    <Card title="Insights" extra={extraContent} style={{ width: 500 }}>
      <List
        style={{ height: 300, overflow: "auto" }}
        dataSource={data.filter((item) => {
          if (filter === "leave") {
            return item.type.some((t) => t.toLowerCase().includes("leave"));
          }
          return item.type.includes(filter);
        })}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={`${item.date} (${item.type.join(", ")})`}
            />
            <Badge color={statusColors[item.status]} text={item.status} />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Insights;
