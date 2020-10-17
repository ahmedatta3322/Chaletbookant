import React from "react";
import { Layout, Menu, Button } from "antd";
import "../../Styling/Headernav.css";
const { Header, Content, Footer } = Layout;

export default function Headernav() {
  return (
    <Layout className="layout">
      <Header id="home-header">
        <div className="logo">
          <img className="logo-img" src="/images/logo.png" alt="logo" />
        </div>
        <Menu id="home-menu" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item className="home-menu-item home-menu-item-active" key="1">
            Home
          </Menu.Item>
          <Menu.Item className="home-menu-item " key="2">
            Services
          </Menu.Item>
          <Menu.Item className="home-menu-item" key="3">
            About us
          </Menu.Item>
          <Menu.Item className="home-menu-item" key="4">
            Contact
          </Menu.Item>
          <Button
            className="login-btn"
            style={{
              backgroundColor: "#F8B544",
              color: "white",
              border: "none",
            }}
          >
            Login
          </Button>
        </Menu>
        <div className="header-content">
          <div className="empty-div-right"></div>
          <h1>
            Book Your <span style={{ color: "##F8B544" }}> Chalet</span>
          </h1>
          <p>From your Home</p>
          <div className="empty-div-left"></div>
        </div>
        <div className="wave">
          <img className="wave-img" src="/images/wavees.png" alt="wave" />
        </div>
        {/* <div className="side-wave">
          <img
            className="side-wave-img"
            src="/images/Side-Waveweb.png"
            alt="wave"
          />
        </div> */}
      </Header>
      <Content id="home-content">
        <div className="site-layout-content"></div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Ahmed atta</Footer>
    </Layout>
  );
}
