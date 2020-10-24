import React from "react";
import Nav from "../../Layout/nav";
import { Button, Jumbotron } from "react-bootstrap";
import { Row, Col, Layout } from "antd";
import UserCard from "./components/usercard";
import ProfileFilter from "./components/profileFilter";
import ChaletCard from "./components/chaletCard";
import SubscribeCard from "./components/subscribeCard";
import "../../Styling/profile.css";
const { Content } = Layout;
export default function Profile() {
  return (
    <div className="profile">
      <Nav />
      <Jumbotron fluid>
        {/* <Container> */}
        <Row>
          <UserCard />
          <h2 className="username">Gabriella Alessandro</h2>
        </Row>

        {/* </Container> */}
      </Jumbotron>
      <Button className="addButton color p-5">
        <i class="fas fa-plus-circle color m-3 add"></i>ADD NEW CHALET
      </Button>
      <Row>
        <Col span={16} offset={6}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Layout>
              <Row>
                <Col span={10} offset={4}>
                  <ProfileFilter />
                </Col>
              </Row>
              <Row>
                <Col span={5}>
                  <ChaletCard />
                </Col>
                <Col span={1}></Col>
                <Col span={5}>
                  <ChaletCard />
                </Col>
                <Col span={1}></Col>
                <Col span={5}>
                  <ChaletCard />
                </Col>
                <Col span={1}></Col>
                <Col span={6}>
                  <SubscribeCard />
                </Col>
              </Row>
            </Layout>
          </Content>
        </Col>
      </Row>
    </div>
  );
}
