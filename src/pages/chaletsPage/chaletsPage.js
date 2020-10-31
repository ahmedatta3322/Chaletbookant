import React from "react";
import { Layout, Row, Col } from "antd";
import Nav from "../../Layout/nav";
import HomeFilter from "../../Components/filter";
import ChaletCard from "../profilePage/components/chaletCard";
import GoogleMap from "../../Components/map";
import "../../Styling/chaletspage.css";
import Foter from "../../Layout/Footer";
const { Sider, Content } = Layout;

export default function ChaletsPage() {
  return (
    <Layout>
      <Nav />

      <Layout className="chalitsContent">
        <Content>
          {/* <div className="site-layout-content"> */}
          <Row className="m-5">
            <Col span={15} offset={5}>
              <HomeFilter />
            </Col>
          </Row>
          <Row>
            {/* chalits*/}

            <Col span={15} offset={1} className="chalits">
              <Row>
                <Col span={4}></Col>
                <Col span={7}>
                  <ChaletCard />
                </Col>
                <Col span={4}></Col>
                <Col span={7}>
                  <ChaletCard />
                </Col>
                <Col span={4}></Col>
                <Col span={7}>
                  <ChaletCard />
                </Col>
                <Col span={4}></Col>
                <Col span={7}>
                  <ChaletCard />
                </Col>
              </Row>
            </Col>

            <Col span={5} offset={25} className="mt-0 rentchalet">
              <Row>
                <Sider className="m-0">
                  <Row className="maps">
                    <Col span={10} offset={20} className="m-0 rentchalet">
                      <GoogleMap />
                    </Col>
                  </Row>
                  <br />
                  <img src="/images/ad.png" alt="adds" className="ads" />{" "}
                </Sider>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Foter />
    </Layout>
  );
}
