import React from "react";
import { Layout, Menu, Row } from "antd";
import "../../../Styling/homeheadernav.css";
import { Link, withRouter } from "react-router-dom";
const { Header } = Layout;
function HomeNav(props) {
  console.log(props.location.pathname);
  return (
    <Layout className="layout">
      <Header id="home-header">
        <div className="logo">
          <img className="logo-img" src="/images/logo.png" alt="logo" />
        </div>
        <Menu
          id="home-menu"
          mode="horizontal"
          selectedKeys={[props.location.pathname]}
        >
          <Menu.Item className="home-menu-item home-menu-item-active" key="1">
            Home
          </Menu.Item>
          <Menu.Item className="home-menu-item" key="/chalets">
            <Link to="/chalets" className="text-white text-decoration-none">
              {" "}
              Chalets
            </Link>
          </Menu.Item>
          <Menu.Item className="home-menu-item" key="3">
            About us
          </Menu.Item>
          <Menu.Item className="home-menu-item" key="4">
            Contact
          </Menu.Item>
          <Menu.Item className="home-menu-item" key="/login">
            <Link
              to="/login"
              variant="primary"
              className="login-btn"
              style={{
                backgroundColor: "#F8B544",
                color: "white",
                border: "none",
                borderRadius: "0",
              }}
            >
              Login
            </Link>
          </Menu.Item>
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
              <img className="wave-img" src="/images/waves.png" alt="wave" />
            </div>
          </Row>
        </Row>
        <div className="side-wave">
          <img
            className="side-wave-img"
            src="/images/side wave.png"
            alt="wave"
          />
          <img src="/images/chair.jpg" className="chair" alt="chair" />
        </div>
      </Header>
    </Layout>
  );
}
export default withRouter(HomeNav);
