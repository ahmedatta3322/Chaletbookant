import React from "react";
import Headernav from "../../Layout/Headernav";
import { Layout, Row, Col } from "antd";
import HomeFilter from "../../Components/filter";
import Map from "../../Components/map";
import "../../Styling/home.css";
const { Content, Footer } = Layout;

export default function Home() {
  return (
    <Layout>
      <Headernav />
      <Content id="home-content">
        <div className="site-layout-content">
          <HomeFilter />
          <Row className="map">
            <Col span={16} offset={4}>
              <Map />
            </Col>
          </Row>
          <div className="site-flow"></div>
        </div>
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>Created by Ahmed atta</Footer> */}
    </Layout>
  );
}
