import React from "react";
import { Layout, Row, Col, Carousel } from "antd";
import Nav from "../../Layout/nav";
import DetailsChaletCard from "./components/detailsChaletCard";
import GoogleMap from "../../Components/map";
import ChaletCard from "../profilePage/components/chaletCard";
import Foter from "../../Layout/Footer";
import "../../Styling/viewChalet.css";
import GuestsReviews from "./components/guestsReviews";
const { Content } = Layout;
export default function ViewChalet() {
  return (
    <div>
      <Layout>
        <Nav />
        <Layout className="chalits-details">
          <Content>
            <hr className="d-inline-block mr-0 rightdiv" />
            <h5 className="d-inline-block mt-4 mb-5 headings">
              Chalet Details
            </h5>
            <hr className="d-inline-block ml-0 leftdiv" />
            <Row>
              <Col span={4} offset={1} className="ml-0"></Col>
              <Col span={11} offset={5} className="m-0">
                <Row>
                  <Col span={15}>
                    <Carousel autoplay>
                      <div>
                        <img
                          className="image"
                          src="/images/chalits.png"
                          alt="images"
                        />
                      </div>
                      <div>
                        <img
                          className="image"
                          src="/images/chalits.png"
                          alt="images"
                        />
                      </div>
                      <div>
                        <img
                          className="image"
                          src="/images/chalits.png"
                          alt="images"
                        />
                      </div>
                      <div>
                        <img
                          className="image"
                          src="/images/chalits.png"
                          alt="images"
                        />
                      </div>
                    </Carousel>
                    <Row
                      className="separator"
                      style={{ height: "2.5rem", backgroundColor: "#0070D3" }}
                    >
                      <Col></Col>
                    </Row>
                    <Row
                      className="view-map"
                      style={{
                        width: "76vw",
                        height: "16.6vh",
                        transform: "translate(0px, -13px)",
                      }}
                    >
                      <Col
                        xl={6}
                        xxl={9}
                        span={10}
                        offset={20}
                        className="m-0 rentchalet"
                      >
                        <GoogleMap />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={9}>
                    <DetailsChaletCard />
                  </Col>
                </Row>
              </Col>
              <div style={{ width: "37px" }}></div>
              <Col span={4} offset={5} className="m-0">
                <Row>
                  <Col span={24}>
                    <GuestsReviews />
                  </Col>
                </Row>
              </Col>
              <Col span={4} offset={1} className="ml-0"></Col>
            </Row>
            <Row className="relatedChalets mb-5">
              {/* chalits*/}
              <hr className="d-inline-block mr-0 rightdiv" />
              <h5 className="d-inline-block headings">Related Chalets</h5>
              <hr className="d-inline-block ml-0 leftdiv" />

              <Col xl={20} xxl={22} offset={1}>
                <Row>
                  <Col xl={10} xxl={4} span={6}>
                    <ChaletCard />
                  </Col>
                  <Col md={1} span={1}></Col>
                  <Col xl={10} xxl={4} span={6}>
                    <ChaletCard />
                  </Col>
                  <Col md={1} span={1}></Col>
                  <Col xl={10} xxl={4} span={6}>
                    <ChaletCard />
                  </Col>
                  <Col md={1}></Col>
                  <Col xl={10} xxl={4} span={6}>
                    <ChaletCard />
                  </Col>
                  <Col md={1}></Col>
                  <Col xl={10} xxl={4} span={6}>
                    <ChaletCard />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Foter />
      </Layout>
    </div>
  );
}
