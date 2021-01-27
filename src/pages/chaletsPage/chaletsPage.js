import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Pagination } from "react-bootstrap";
import { Layout, Row, Col, Spin } from "antd";
import Nav from "../../Layout/nav";
import HomeFilter from "../../Components/filter";
import ChaletCard from "../profilePage/components/chaletCard";
import GoogleMap from "../../Components/map";
import "../../Styling/chaletspage.css";
import Foter from "../../Layout/Footer";
import { getChalets } from "../../redux/actions/chaletActionCreator";
import { getOnlineUserProfile } from "../../redux/actions/userActionCreator";
const { Sider, Content } = Layout;

function ChaletsPage({ chalets, pagesNum, total, auth }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const handleClick = (e) => {
    setCurrentPage(e.target.textContent);
  };
  useEffect(() => {
    dispatch(getChalets("4", currentPage));
    dispatch(getOnlineUserProfile());
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [dispatch, currentPage]);
  console.log(chalets, pagesNum);
  let active = currentPage;
  let items = [];
  for (let number = 1; number <= pagesNum; number++) {
    items.push(
      <Pagination.Item
        onClick={handleClick}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  // console.log(currentPage);
  return (
    <Layout>
      <Nav auth={auth} />

      <Layout className="chalitsContent">
        <Content>
          {/* <div className="site-layout-content"> */}
          <Row className="mt-5 mb-5 chaletsFilter">
            <Col
              lg={{ span: 10, offset: 1 }}
              xl={20}
              xxl={16}
              span={15}
              xxlOffset={4}
              offset={5}
            >
              <HomeFilter />
            </Col>
          </Row>
          <Row>
            {/* chalits*/}
            <Col lg={16} span={15} offset={1} className="chalits">
              {loading === true ? (
                <div className="loader">
                  {" "}
                  <Spin size="large" />
                </div>
              ) : (
                <>
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
                  {/* {currentPage < total && ( */}
                  <Pagination
                    size="lg"
                    className="justify-content-end paginate mt-3"
                  >
                    {/* <Pagination.Prev /> */}
                    {items}
                    {/* <Pagination.Next /> */}
                  </Pagination>
                  {/* )} */}
                </>
              )}
            </Col>
            <Col span={5} offset={25} className="mt-5 rentchalet">
              <Row>
                <Sider className="m-0">
                  <Row className="maps">
                    <Col
                      lg={24}
                      xl={24}
                      xxl={24}
                      span={10}
                      offset={20}
                      className="m-0 rentchalet"
                    >
                      {loading === true ? (
                        <div className="loader chalet-loader">
                          {" "}
                          <Spin size="large" />
                        </div>
                      ) : (
                        <GoogleMap chalets={chalets} />
                      )}
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
    pagesNum: reduxState.Chalets.pagesNum,
    total: reduxState.Chalets.total,
    auth: reduxState.Users.auth,
  };
};
export default connect(mapStateToProps)(ChaletsPage);
