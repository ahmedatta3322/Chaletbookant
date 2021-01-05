import React, { useEffect } from "react";
import { Layout, Row, Col } from "antd";
import { connect, useDispatch } from "react-redux";
import Nav from "../Layout/nav";
import GoogleMap from "../Components/map";
import { getOnlineUserProfile } from "../redux/actions/userActionCreator";
import "../Styling/aboutus.css";
import Foter from "../Layout/Footer";
import { getChalets } from "../redux/actions/chaletActionCreator";
const { Content } = Layout;
function Aboutus(props) {
  const { chalets, auth } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOnlineUserProfile());
    dispatch(getChalets("", ""));
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <Nav auth={auth} />
        <Layout>
          <Content>
            <Row className="about-container">
              <Col span={11}>
                <fieldset class="scheduler-border">
                  <legend class="scheduler-border about-heading">
                    A B O U T - U S
                  </legend>
                  <div class="control-group">
                    <Row>
                      <Col span={11}>
                        <p className="aboutus-gragh left-gragh">
                          Welcome to our site, we're a group of passionate
                          developers from Egypt, We established apptechegy{" "}
                          <br /> as a software house and our first product is{" "}
                          <br /> chalitbook, a place to rent, exchange and sell
                          your <br /> chilts . Chalitbook has always been our
                          passion and <br /> we have exchanged homes All over
                          the World <br /> for yearsThat's why we decided it's
                          time to create <br /> our own chalitbook Website.
                        </p>
                      </Col>
                      <Col span={1}>
                        <div className="about-seprator"></div>
                      </Col>
                      <Col span={12}>
                        <p className="aboutus-gragh ml-3">
                          We are offering free trials in order to show you how{" "}
                          <br />
                          our system works , We hope that you get the most{" "}
                          <br />
                          benefit out of our platform . <br /> Our affordable
                          pricing offers you a great opportunity <br /> to get
                          profit from anting your property , even better <br />{" "}
                          opportunity to spend your holiday in another place{" "}
                          <br /> for exchange .
                        </p>
                      </Col>
                    </Row>
                  </div>
                </fieldset>
                <Row>
                  <Col span={15} offset={4}>
                    <fieldset class="scheduler-border location-section">
                      <legend class="about-location">
                        O U R - L O C A T I O N
                      </legend>
                      <div class="control-group">
                        <Row className="about-map">
                          <Col span={24}>
                            <GoogleMap chalets={chalets} />
                          </Col>
                        </Row>
                      </div>
                    </fieldset>
                    <Row>
                      <Col span={10} offset={10}>
                        <div className="ml-4 h3 social-section">
                          <i class="fab fa-facebook-square mr-2"></i>
                          <i class="far fa-envelope mr-2"></i>
                          <i class="fab fa-twitter mr-2"></i>
                          <i class="fab fa-instagram mr-2"></i>
                          <i class="fab fa-whatsapp mr-2"></i>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <img
                  className="about-img"
                  src="/images/aboutus.png"
                  alt="about us"
                />
              </Col>
            </Row>
          </Content>
        </Layout>
        <Row>
          <Col span={24}>
            <Foter />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    auth: reduxState.Users.auth,
    chalets: reduxState.Chalets.chalets,
  };
};
export default connect(mapStateToProps)(Aboutus);
