import React from "react";
import HomeNav from "./components/homeheadernav";
import { Layout, Row, Col } from "antd";
import { Card } from "react-bootstrap";
import HomeFilter from "../../Components/filter";
import Map from "../../Components/map";
import "../../Styling/home.css";
import Footer from "../../Layout/Footer";
const { Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <HomeNav />
      <Content id="home-content">
        <div className="site-layout-content">
          <Row
            className="filterContainer"
            // gutter={{
            //   xl: 3,
            //   // xxlg: 13,
            // }}
          >
            <Col>
              <HomeFilter />
            </Col>
          </Row>
          <Row className="map">
            <Col span={16} offset={4}>
              <Map />
            </Col>
          </Row>
          <div className="whychalet">
            <img
              className="whychalet-img"
              src="/images/why chaletbook.png"
              alt="site flow"
            />
          </div>
          <div className="site-card-wrapper">
            <Row>
              <Col span={15} offset={7}>
                <Row gutter={{ xl: 9, xxlg: 6 }}>
                  <Col className="gutter-row">
                    <Card className="text-center basic-card">
                      <Card.Header className="text-center text-white font-weight-bold">
                        <img
                          src="/images/Basic Icon.png"
                          alt="basic"
                          className="basic-img"
                        />
                        Basic
                      </Card.Header>
                      <Card.Body className="size">
                        <Card.Text>
                          {" "}
                          <i class="fas fa-check blue-icon"></i>Rent
                        </Card.Text>

                        <Card.Text>
                          <i class="fas fa-times blue-icon"></i>Exchange
                        </Card.Text>

                        <Card.Text>
                          <i class="fas fa-check blue-icon"></i>only one Unit.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>6 $</Card.Footer>
                    </Card>
                  </Col>
                  <Col className="gutter-row">
                    <Card className="text-center advance-card">
                      <Card.Header className="text-center text-white font-weight-bold pt-3">
                        <img
                          src="/images/Advance Icon.png"
                          alt="basic"
                          className="advance-img"
                        />
                        Advance
                      </Card.Header>
                      <Card.Body className="size">
                        <Card.Text>
                          {" "}
                          <i class="fas fa-check blue-icon"></i>Rent
                        </Card.Text>

                        <Card.Text>
                          <i class="fas fa-check blue-icon"></i>Exchange
                        </Card.Text>

                        <Card.Text>
                          <i class="fas fa-check blue-icon"></i>Up to 4 Units.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <span>10 $</span>
                      </Card.Footer>
                    </Card>
                  </Col>
                  <Col className="gutter-row">
                    <Card className="text-center platinum-card">
                      <Card.Header className="text-center text-white font-weight-bold">
                        <img
                          src="/images/Platinum icon.png"
                          alt="basic"
                          className="platinum-img"
                        />
                        Platinum
                      </Card.Header>
                      <Card.Body className="size">
                        <Card.Text>
                          {" "}
                          <i class="fas fa-check blue-icon"></i>Rent
                        </Card.Text>

                        <Card.Text>
                          <i class="fas fa-check blue-icon"></i>Exchange
                        </Card.Text>

                        <Card.Text>
                          <i class="fas fa-check blue-icon"></i>Unlimited Units.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>30 $</Card.Footer>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
