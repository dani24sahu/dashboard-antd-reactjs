import React, { useState } from "react";
import { Drawer } from "antd";
const App = ({title, placement, closable, onClose, open, width}) => {
  return (
    <>
      <Drawer
        title={title}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        width={width}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default App;
