import React from "react";
import { Layout, Menu, Badge } from "antd";
import "../Styling/nav.css";
import { NavLink } from "react-router-dom";
const { Header } = Layout;

export default function Nav() {
  return (
    // <Layout className="layout">
    <Header className="header">
      <div className="logo">
        <NavLink to="/">
          <img className="logo-immg mb-5" src="/images/logo.png" alt="logo" />
        </NavLink>
      </div>
      <Menu mode="horizontal" className="mt-1">
        <Menu.Item className="home-menu-item home-menu-item-active" key="1">
          <Badge count={25}>
            <i class="far fa-bell font rotate text-white"></i>
          </Badge>
        </Menu.Item>
        <Menu.Item className="home-menu-item " key="2">
          <i class="fas fa-sign-out-alt font"></i>
        </Menu.Item>
      </Menu>
    </Header>
    // </Layout>
  );
}
