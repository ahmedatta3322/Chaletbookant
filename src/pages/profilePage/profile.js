import React, { useState } from "react";
import Nav from "../../Layout/nav";
import { Button, Jumbotron } from "react-bootstrap";
import { Row, Col, Layout, Dropdown } from "antd";
import { Menu } from "antd";
import UserCard from "./components/usercard";
// import ProfileFilter from "./components/profileFilter";
import ChaletCard from "./components/chaletCard";
import SubscribeCard from "./components/subscribeCard";
import "../../Styling/profile.css";
import Foter from "../../Layout/Footer";
import AboutChaletModal from "../../Components/modal/chaletModal";

const { Sider, Content } = Layout;

const menu1 = (
  <Menu>
    <Menu.Item key="0">
      <button className="filterbtn">Rent</button>
    </Menu.Item>
    <Menu.Item key="1">
      <button className="filterbtn">Exchange</button>
    </Menu.Item>
    <Menu.Divider />
  </Menu>
);
const menu2 = (
  <Menu>
    <Menu.Item key="0">
      <button className="filterbtn"> Sent</button>
    </Menu.Item>
    <Menu.Item key="1">
      <button className="filterbtn">Receivied</button>
    </Menu.Item>
    <Menu.Divider />
  </Menu>
);

export default function Profile() {
  const [modalShow, setModalShow] = useState(false);
  const [filterStatus, setFilterStatus] = useState("My Chalets");
  const handleFilter = (e) => {
    const { textContent } = e.target;
    console.log(typeof textContent);
    if (textContent === "Requests") {
      setFilterStatus("Requests");
      console.log(filterStatus);
    } else if (textContent === "My Chalets") {
      setFilterStatus("My Chalets");
      console.log(filterStatus);
    }
  };
  return (
    <div className="profile">
      <Layout>
        <Nav />
        <Jumbotron fluid>
          <Row>
            <Col span={5}>
              <UserCard />
            </Col>
            <h2 className="username">Gabriella Alessandro</h2>
          </Row>
        </Jumbotron>
        <Button
          className="addButton color p-4 h5"
          onClick={() => setModalShow(true)}
        >
          <i class="fas fa-plus-circle color add mr-3"></i>
          <span>ADD NEW CHALET</span>
        </Button>
        <AboutChaletModal show={modalShow} onHide={() => setModalShow(false)} />
        <Layout className="content">
          <Content>
            <Row>
              <Col xl={15} span={5} offset={1}>
                <Button
                  variant="primary"
                  className="prof-filter active shadow p-5 cardButton"
                  onClick={handleFilter}
                >
                  <img src="/images/Chalets-Icon.png" alt="chalet" />
                  <br />
                  <span className=" mt-1" onClick={handleFilter}>
                    My Chalets
                  </span>
                </Button>
                <Button
                  variant="primary"
                  className="prof-filter bg-light ml-5 shadow p-5 cardButton"
                  onClick={handleFilter}
                >
                  <img src="/images/requests icon.png" alt="chalet" />
                  <br />
                  <span className="text-secondary mt-1" onClick={handleFilter}>
                    Requests
                  </span>
                </Button>
              </Col>
            </Row>
            <Row>
              {/* chalits*/}
              {filterStatus === "My Chalets" && (
                <Col xl={20} xxl={15} offset={2}>
                  <Row>
                    <Col xl={10} xxl={7} span={6}>
                      <ChaletCard />
                    </Col>
                    <Col md={1} span={1}></Col>
                    <Col xl={10} xxl={7} span={6}>
                      <ChaletCard />
                    </Col>
                    <Col md={1} span={1}></Col>
                    <Col xl={10} xxl={7} span={6}>
                      <ChaletCard />
                    </Col>
                    <Col md={1}></Col>
                    <Col xl={10} xxl={7} span={6}>
                      <ChaletCard />
                    </Col>
                  </Row>
                </Col>
              )}

              {/* Requests*/}
              {filterStatus === "Requests" && (
                <Col span={15} xl={23} xxl={16} offset={2} className="mt-5">
                  <Row className="requestfilter">
                    <Dropdown
                      overlay={menu1}
                      trigger={["click"]}
                      className="pr-5 pl-5"
                    >
                      <button
                        className="ant-dropdown-link filterbtn d-flex"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i class="fas fa-angle-down arrow"></i>
                        {/* <DownOutlined /> */}
                        Rent
                      </button>
                    </Dropdown>
                    <Dropdown
                      overlay={menu2}
                      trigger={["click"]}
                      className="pr-5 pl-5"
                    >
                      <button
                        className="ant-dropdown-link filterbtn d-flex"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i class="fas fa-angle-down arrow"></i>
                        {/* <DownOutlined /> */}
                        Sent
                      </button>
                    </Dropdown>
                  </Row>
                  <div className="bg-light p-3 mt-5">
                    <Row className="mt-5 mb-5">
                      <Col span={15}>
                        <p className="request-content">
                          You have a Request form{" "}
                          <span className="yellow">ChaletBook</span> to{" "}
                          <span className="red">Rent</span> your{" "}
                          <span className="yellow">Maldives</span> Chalet
                        </p>
                      </Col>
                      <Col span={4}></Col>
                      <Col xl={5} span={3}>
                        <Row>
                          <Button
                            variant="primary"
                            className="active pl-4 pr-4 p-3 viewbtn d-flex border-0"
                          >
                            view
                          </Button>
                          {/*it will show in received only*/}
                          <Button className="border-0">
                            <i class="fas fa-trash-alt trash"></i>
                          </Button>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="mt-5 mb-5">
                      <Col span={15}>
                        <p className="request-content">
                          You have a Request form{" "}
                          <span className="yellow">ChaletBook</span> to{" "}
                          <span className="red">Rent</span> your{" "}
                          <span className="yellow">Maldives</span> Chalet
                        </p>
                      </Col>
                      <Col span={4}></Col>
                      <Col xl={5} span={3}>
                        <Row>
                          <Button
                            variant="primary"
                            className="active pl-4 pr-4 p-3 viewbtn d-flex border-0"
                          >
                            view
                          </Button>
                          {/*it will show in received only*/}
                          <Button className="border-0">
                            <i class="fas fa-trash-alt trash"></i>
                          </Button>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </Col>
              )}

              {/* end of requests*/}
              <Col span={5} offset={25} className="ml-5 side">
                <Row>
                  <Sider>
                    <Col span={25} offset={10} className="m-0">
                      <SubscribeCard />
                      <br />
                      <img
                        src="/images/adds.png"
                        alt="adds"
                        className="adds"
                      />{" "}
                    </Col>
                  </Sider>
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
