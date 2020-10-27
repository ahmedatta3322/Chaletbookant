import React from "react";
import Nav from "../../Layout/nav";
import { Button, Jumbotron } from "react-bootstrap";
import { Row, Col, Layout } from "antd";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import UserCard from "./components/usercard";
import ProfileFilter from "./components/profileFilter";
import ChaletCard from "./components/chaletCard";
import SubscribeCard from "./components/subscribeCard";
import "../../Styling/profile.css";
import Foter from "../../Layout/Footer";
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

export default function profile1() {
  return (
    <div className="profile">
      <Layout>
        <Nav />
        <Jumbotron fluid>
          {/* <Container> */}
          <Row>
            <UserCard />
            <h2 className="username">Gabriella Alessandro</h2>
          </Row>

          {/* </Container> */}
        </Jumbotron>
        <Button className="addButton color p-4">
          <i class="fas fa-plus-circle color add"></i>ADD NEW CHALET
        </Button>
        <Layout className="content">
          <Content>
            <Row>
              <Col span={10} offset={4}>
                <ProfileFilter />
              </Col>
            </Row>
            <Row>
              {/* chalits*/}
              <Col span={30} offset={25}>
                <Row>
                  <Col span={6}>
                    <ChaletCard />
                  </Col>
                  <Col span={1}></Col>
                  <Col span={6}>
                    <ChaletCard />
                  </Col>
                  <Col span={1}></Col>
                  <Col span={6}>
                    <ChaletCard />
                  </Col>
                  <Col span={6}>
                    <ChaletCard />
                  </Col>
                </Row>
              </Col>
              {/* Requests*/}
              {/* <Col span={20}>
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
                      <DownOutlined />
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
                      <DownOutlined />
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
                    <Col span={3}>
                      <Row>
                        <Button
                          variant="primary"
                          className="active pl-3 pr-3 p-3 viewbtn d-flex"
                        >
                          view
                        </Button> */}
              {/*it will show in received only*/}
              {/* <Button>
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
                    <Col span={3}>
                      <Row>
                        <Button
                          variant="primary"
                          className="active pl-3 pr-3 p-3 viewbtn d-flex"
                        >
                          view
                        </Button> */}
              {/*it will show in received only*/}
              {/* <Button>
                          <i class="fas fa-trash-alt trash"></i>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>  */}
              {/* end of requests*/}
            </Row>
          </Content>
          <Sider>
            <Col span={30} offset={25} className="m-0">
              <SubscribeCard />
              <br />
              <img src="/images/adds.png" alt="adds" />{" "}
            </Col>
          </Sider>
        </Layout>
        <Foter />
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </div>
  );
}
