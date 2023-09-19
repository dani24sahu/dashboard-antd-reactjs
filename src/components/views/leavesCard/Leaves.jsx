import React, { useState } from "react";
import { Card, Table, Drawer } from "antd";
import { FullscreenOutlined } from "@ant-design/icons";
import {data} from './leavesData'

const cardColumns = [
  {
    dataIndex: "type",
    key: "type",
  },
  {
    dataIndex: "value",
    key: "value",
    align: "right",
  },
];

const drawerColumns = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Added This Month",
    dataIndex: "added",
    key: "added",
    align: "right",
  },
  {
    title: "Current Balance",
    dataIndex: "balance",
    key: "balance",
    align: "right",
  },
];

const Leaves = () => {
  const [visible, setVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpenDrawer = () => {
    setVisible(true);
  };

  const handleCloseDrawer = () => {
    setVisible(false);
  };

  const handleSelectRow = (record) => {
    setSelectedRow(record);
  };

  const extraContent = <FullscreenOutlined onClick={handleOpenDrawer} />;

  const drawerContent = (
    <div>
      <Table
        columns={drawerColumns}
        dataSource={data}
        pagination={false}
        onRow={(record) => ({
          onClick: () => handleSelectRow(record),
        })}
      />
      {selectedRow && (
        <aside>
          <h3>{selectedRow.type}</h3>
          <Table
            columns={[
              { dataIndex: "key", key: "key" },
              { dataIndex: "value", key: "value", align: "right" },
            ]}
            dataSource={[
              { key: "Current Balance", value: selectedRow.balance },
              { key: "Added This Month", value: selectedRow.added },
              { key: "Leaves Taken", value: null },
              { key: "Leaves Pending", value: null },
              { key: "Total Remaining", value: null },
              { key: "Carry Forward", value: null },
            ]}
            pagination={false}
            showHeader={false}
          />
        </aside>
      )}
    </div>
  );

  return (
    <Card title="Leaves" extra={extraContent} style={{ width: 500 }}>
      <Table columns={cardColumns} dataSource={data} pagination={false} />
      <Drawer
        title="Leaves"
        placement="bottom"
        open={visible}
        onClose={handleCloseDrawer}
      >
        {drawerContent}
      </Drawer>
    </Card>
  );
};

export default Leaves;
