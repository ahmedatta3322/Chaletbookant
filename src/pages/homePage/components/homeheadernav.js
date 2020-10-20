import React from "react";
import { Layout, Menu, Button, Row } from "antd";
import "../../../Styling/homeheadernav.css";
const { Header } = Layout;

export default function HomeNav() {
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
        <Row>
          <Row>
            <div className="header-content">
              <div className="empty-div-right"></div>
              <h1>
                Book Your <span style={{ color: "##F8B544" }}> Chalet</span>
              </h1>
              <p>From your Home</p>
              <div className="empty-div-left"></div>
            </div>
          </Row>
          <Row>
            <div className="wave">
              <img className="wave-img" src="/images/wavees.png" alt="wave" />
            </div>
          </Row>
        </Row>
        {/* <div className="side-wave">
          <img
            className="side-wave-img"
            src="/images/Side wave.png"
            alt="wave"
          />
        </div> */}
      </Header>
    </Layout>
  );
}
