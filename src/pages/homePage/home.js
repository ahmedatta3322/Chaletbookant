import React from "react";
import HomeNav from "./components/homeheadernav";
import { Layout, Row, Col } from "antd";
import { Card } from "react-bootstrap";
import HomeFilter from "../../Components/filter";
import Map from "../../Components/map";
import "../../Styling/home.css";
const { Content, Footer } = Layout;

export default function Home() {
  return (
    <Layout>
      <HomeNav />
      <Content id="home-content">
        <div className="site-layout-content">
          <HomeFilter />
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
              <Col span={12} offset={7}>
                <Row>
                  <Col span={6}>
                    <Card className="text-center basic-card">
                      <Card.Header className="text-center text-white font-weight-bold">
                        <img
                          src="/images/Basic Icon.png"
                          alt="basic"
                          className="basic-img"
                        />
                        Basic
                      </Card.Header>
                      <Card.Body>
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
                  <Col span={6}>
                    <Card className="text-center advance-card">
                      <Card.Header className="text-center text-white font-weight-bold pt-3">
                        <img
                          src="/images/Advance Icon.png"
                          alt="basic"
                          className="advance-img"
                        />
                        Advance
                      </Card.Header>
                      <Card.Body>
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
                  <Col span={6}>
                    <Card className="text-center platinum-card">
                      <Card.Header className="text-center text-white font-weight-bold">
                        <img
                          src="/images/Platinum icon.png"
                          alt="basic"
                          className="platinum-img"
                        />
                        Platinum
                      </Card.Header>
                      <Card.Body>
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
      <Footer className="text-white ">
        <div>
          <spa className=" h3"> Stay in touch</spa>
          <div className="ml-4 mt-1">
            <i class="fab fa-facebook-square mr-2"></i>
            <i class="fab fa-google-plus mr-2"></i>
            <i class="fab fa-twitter mr-2"></i>
            <i class="fab fa-instagram mr-2"></i>
          </div>
        </div>
        <div>
          <span className="font-weight-bold">Contact</span>
          <br />
          <span>
            <i class="fas fa-phone-alt mr-2"></i>000-000-0000
          </span>
          <span>
            <i class="fas fa-envelope mr-2 ml-2"></i>info@email.com
          </span>
          <br />
          <span>
            <i class="fas fa-map-marker-alt mr-2"></i>Cairo , Egypt
          </span>
        </div>
      </Footer>
    </Layout>
  );
}
