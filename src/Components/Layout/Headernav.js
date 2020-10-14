import React from "react";
import { Layout, Menu } from "antd";
import "../../Styling/Headernav.css";
const { Header, Content, Footer } = Layout;

export default function Headernav() {
  return (
    <Layout className="layout">
      <Header id="home-header">
        <div className="logo" />
        <Menu id="home-menu" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content id="home-content">
        <div className="site-layout-content"></div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Ahmed atta</Footer>
    </Layout>
  );
}
