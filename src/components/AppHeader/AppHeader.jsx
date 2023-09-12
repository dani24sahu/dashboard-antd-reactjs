import { Avatar, Image, Menu, Space } from "antd";
import { BellFilled, BellOutlined, TableOutlined } from "@ant-design/icons";
import React from "react";

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <Image
        width={100}
        style={{ fontSize: 100 }}
        src="https://staticdocument.s3.ap-south-1.amazonaws.com/3500/masterfiles/1688449715102_0.33845984511155347.png"
      ></Image>
      <Menu mode="horizontal">
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.Item key="2">Engage</Menu.Item>
        <Menu.Item key="3">Request</Menu.Item>
        <Menu.Item key="4">Finance</Menu.Item>
        <Menu.Item key="5">Benefits</Menu.Item>
        <Menu.Item key="6">Others</Menu.Item>
      </Menu>
      <Space direction="horizontal">
        <BellOutlined style={{ fontSize: 24 }} />
        <TableOutlined style={{ fontSize: 24 }} />
        <Avatar style={{ fontSize: 24 }}></Avatar>
      </Space>
    </div>
  );
};

export default AppHeader;
