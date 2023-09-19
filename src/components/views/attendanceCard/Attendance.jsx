import React from "react";
import { Card, Table } from "antd";
import { data } from "./attendanceData";

const columns = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Count",
    dataIndex: "count",
    key: "count",
  },
];

const Attendance = () => {
  return (
    <Card title="Attendance" style={{ width: 500 }}>
      <Table
        columns={columns}
        style={{ overflow: "auto", height: 300 }}
        dataSource={data}
        pagination={false}
        showHeader={false}
        // scroll={{ y: 200 }}
      />
    </Card>
  );
};

export default Attendance;
