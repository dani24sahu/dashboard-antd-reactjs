import { Space } from "antd";
import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AppContent from "./components/AppContent/AppContent";

const App = () => {
  return (
    <>
      <div className="App">
        <AppHeader />
        <Space direction="horizontal">
          <AppContent />
        </Space>
      </div>
    </>
  );
};

export default App;
