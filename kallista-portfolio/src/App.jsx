import React from "react";
import { useState, useEffect } from "react";
import { Layout, Menu, theme, Button, ConfigProvider, FloatButton } from "antd";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import "./App.css";
import { CaretUpFilled } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const items = [
  {
    key: "1",
    label: "home",
    icon: <span className="material-icons">cottage</span>,
  },
  {
    key: "2",
    label: "projects",
    icon: <span className="material-icons">cloud</span>,
  },
  {
    key: "3",
    label: "skills",
    icon: <span className="material-icons">dark_mode</span>,
  },
];

const swapCurrentPage = (key) => {
  switch (key) {
    case "1":
      return <Home />;
    case "2":
      return <Projects />;
    case "3":
      return <Skills />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("1");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#68CFDF",
          colorText: "#D6FFFD",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#3E3B3F",
        },
      }}
    >
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#3E3B3F",
            position: "fixed",
            top: "0",
            width: "100%",
          }}
        >
          <div className="demo-logo" />
          <Menu
            onClick={(info) => {
              console.log(info.key + " was clicked");
              setCurrentPage(info.key);
            }}
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
        <Content
          style={{
            padding: "30px 20px",
            background: "#534F54",
          }}
        >
          <div
            style={{
              marginTop: 50,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            {swapCurrentPage(currentPage)}
          </div>
        </Content>
        <FloatButton.BackTop type="primary" icon={<CaretUpFilled />} />
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          kallista zhang © {new Date().getFullYear()}
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
