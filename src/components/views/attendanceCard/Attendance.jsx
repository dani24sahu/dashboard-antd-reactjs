import { Card, List } from "antd";
import React from "react";

const Attendance = ({attendanceData}) => {
  return (
    <>
      <Card title="Attendence" bordered={false}>
        <List
          size="small"
          bordered={false}
          dataSource={attendanceData}
          renderItem={(item) => (
            <List.Item>
              <b>{item.name}</b>: {item.value}
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default Attendance;
