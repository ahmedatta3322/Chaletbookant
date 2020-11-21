import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Layout, Row, Col } from "antd";
import Nav from "../../Layout/nav";
import HomeFilter from "../../Components/filter";
import ChaletCard from "../profilePage/components/chaletCard";
import GoogleMap from "../../Components/map";
import "../../Styling/chaletspage.css";
import Foter from "../../Layout/Footer";
import { getChalets } from "../../redux/actions/chaletActionCreator";
const { Sider, Content } = Layout;

function ChaletsPage({ chalets }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChalets());
  }, [dispatch]);
  console.log(chalets);
  return (
    <Layout>
      <Nav />

      <Layout className="chalitsContent">
        <Content>
          {/* <div className="site-layout-content"> */}
          <Row className="mt-5 mb-5 chaletsFilter">
            <Col xl={20} xxl={16} span={15} xxlOffset={4} offset={5}>
              <HomeFilter />
            </Col>
          </Row>
          <Row>
            {/* chalits*/}

            <Col span={15} offset={1} className="chalits">
              <Row>
                {chalets && chalets.length !== 0 ? (
                  chalets.map((chalet) => (
                    <>
                      {/* <Col span={2}></Col> */}
                      {/* <Col span={3}></Col> */}
                      <Col span={7} className="m-chalet">
                        <ChaletCard chalet={chalet} key={chalet.id} />
                      </Col>
                    </>
                  ))
                ) : (
                  <p>No Chalets </p>
                )}
                {/* <Col span={4}></Col>
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
                </Col> */}
              </Row>
            </Col>

            <Col span={5} offset={25} className="mt-0 rentchalet">
              <Row>
                <Sider className="m-0">
                  <Row className="maps">
                    <Col
                      xl={6}
                      xxl={8}
                      span={10}
                      offset={20}
                      className="m-0 rentchalet"
                    >
                      <GoogleMap chalets={chalets} />
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
const mapStateToProps = (reduxState) => {
  return {
    chalets: reduxState.Chalets.chalets,
  };
};
export default connect(mapStateToProps)(ChaletsPage);
