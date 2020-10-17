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
            <Col span={15} offset={5}>
              <Map />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Ahmed atta</Footer>
    </Layout>
  );
}
