import React from "react";
import { Col, Row } from "antd";
import { Menu, Dropdown, Button } from "antd";
import { Button as Btn } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { DownOutlined } from "@ant-design/icons";
import { DatePicker, Space } from "antd";
import "../../../Styling/chaletcard.css";
import "../../../Styling/detailschaletcard.css";
export default function DetailsChaletCard() {
  const { RangePicker } = DatePicker;
  const menu = (
    <Menu>
      <Menu.Item key="1">Available to Rent</Menu.Item>
      <Menu.Item key="2">Available to Exchange</Menu.Item>
      <Menu.Item key="3">Available to All</Menu.Item>
    </Menu>
  );
  return (
    <Card className="details-card">
      <Card.Body className="pl-4 pr-4 pt-3 pb-2">
        <h3 className="p-3">Dahb, Saint Catherine</h3>
        <Row>
          <Col span={17}>
            <h4 className="p-3">$ 3,10,500</h4>
          </Col>
          <Col>
            {" "}
            <Dropdown overlay={menu}>
              <Button className="btn-dropdown">
                Rent <DownOutlined />
              </Button>
            </Dropdown>
          </Col>
        </Row>

        <Card.Title className="about-title pl-3">About</Card.Title>
        <Card.Text className="coloor h4 pl-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </Card.Text>
        <hr />
        <Card.Title className="about-title pl-3">Features</Card.Title>
        <div className="features d-flex">
          <div className="h6 air">
            <img
              src="/images/air condition.png"
              className="featureImg"
              alt="air condition"
            />
            3 Air Conditioner
          </div>
          <div className="h6">
            <img src="/images/garden.png" className="featureImg" alt="garden" />
            2 Garden
          </div>
          <div className="h6 ml-2">
            <img src="/images/wifi.png" className="featureImg" alt="wifi" />1
            Wi-Fi
          </div>
        </div>
        <hr />
        <div className="text-center">
          <hr className="d-inline-block rightdiv" />
          <h5 className="d-inline-block book">BOOK NOW </h5>
          <hr className="d-inline-block leftdiv" />
        </div>
        <Space direction="vertical" size={12} className="mt-3 ml-4">
          <RangePicker />
        </Space>
        <Btn variant="primary" className="check-btn">
          Check Availability{" "}
        </Btn>

        {/* <Slider
          marks={{
            1: "1",
            5: "5",
            10: "10",
            // 60: "7",
            // 80: "9",
            // 100: "F",
          }}
        /> */}
      </Card.Body>
      <hr />
      <div className="footerCard d-block">
        <div className="text-center">
          <hr className="d-inline-block rightdiv" />
          <h5 className="d-inline-block book">Guests </h5>
          <hr className="d-inline-block leftdiv" />
        </div>
        <div class="slidecontainer mt-5 mb-5">
          <span className="spans">Minimum</span>
          <input
            type="range"
            className="rangeInput"
            min="1"
            max="10"
            value="5"
          />
          <span className="spans">Maximum</span>
        </div>
      </div>
    </Card>
  );
}
