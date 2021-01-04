import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import HomeNav from "./components/homeheadernav";
import { Layout, Row, Col, Spin } from "antd";
import { Card } from "react-bootstrap";
import HomeFilter from "../../Components/filter";
import Map from "../../Components/map";
import { getChalets } from "../../redux/actions/chaletActionCreator";
import "../../Styling/home.css";
import Footer from "../../Layout/Footer";
import { getOnlineUserProfile } from "../../redux/actions/userActionCreator";
const { Content } = Layout;
function Home({ chalets }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChalets("", ""));
    dispatch(getOnlineUserProfile());
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [dispatch]);
  return (
    <Layout>
      <HomeNav />
      <Content id="home-content">
        <div className="site-home-content">
          <Row
            className="filterContainer"
            // gutter={{
            //   xl: 3,
            //   // xxlg: 13,
            // }}
          >
            <Col offset={1}>
              <HomeFilter />
            </Col>
          </Row>
          <Row className="home-map">
            <Col span={24} offset={9}>
              <h5 className="pt-5 pb-5">Find the Perfect Chalet </h5>
              {loading === true ? (
                <div className="loader chalet-loader">
                  {" "}
                  <Spin size="large" />
                </div>
              ) : (
                <Map chalets={chalets} />
              )}
            </Col>
          </Row>
          <div className="whychalet">
            <h5>Why should you choose us? </h5>
          </div>
          <img
            className="whychalet-img"
            src="/images/why chaletbook.png"
            alt="site flow"
          />
          <div className="left-side-wave">
            <img
              className="left-side-wave-img"
              src="/images/b-sidewave.png"
              alt="wave"
            />
          </div>
          <div className="site-card-wrapper mb-5">
            <Row>
              <Col span={15} offset={5}>
                <h5>Memberships </h5>
                <Row gutter={{ xl: 9, xxlg: 6 }}>
                  <Col className="gutter-row subscribe">
                    <Card className="text-center basic-card">
                      <Card.Header className="text-center text-white headerCard  font-weight-bold">
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
                          <i className="fas fa-times blue-icon"></i>Exchange
                        </Card.Text>

                        <Card.Text>
                          <i className="fas fa-check blue-icon"></i>only one
                          Unit.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>6 $</Card.Footer>
                    </Card>
                  </Col>
                  <Col className="gutter-row subscribe">
                    <Card className="text-center advance-card">
                      <Card.Header className="text-center text-white headerCard font-weight-bold pt-3">
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
                          <i className="fas fa-check blue-icon"></i>Rent
                        </Card.Text>

                        <Card.Text>
                          <i className="fas fa-check blue-icon"></i>Exchange
                        </Card.Text>

                        <Card.Text>
                          <i className="fas fa-check blue-icon"></i>Up to 4
                          Units.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <span>10 $</span>
                      </Card.Footer>
                    </Card>
                  </Col>
                  <Col className="gutter-row subscribe">
                    <Card className="text-center platinum-card">
                      <Card.Header className="text-center headerCard text-white font-weight-bold">
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
                          <i className="fas fa-check blue-icon"></i>Rent
                        </Card.Text>

                        <Card.Text>
                          <i className="fas fa-check blue-icon"></i>Exchange
                        </Card.Text>

                        <Card.Text>
                          <i className="fas fa-check blue-icon"></i>Unlimited
                          Units.
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
const mapStateToProps = (reduxState) => {
  return {
    chalets: reduxState.Chalets.chalets,
    // token:reduxState.Users.token
  };
};
export default connect(mapStateToProps)(Home);
