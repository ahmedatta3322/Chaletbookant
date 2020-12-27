import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Select, Button, Form } from "antd";
import { Button as Btn } from "react-bootstrap";
import { Card } from "react-bootstrap";
// import { DownOutlined } from "@ant-design/icons";
import { DatePicker, Space } from "antd";
import "../../../Styling/chaletcard.css";
import "../../../Styling/detailschaletcard.css";
import SendExchangeRequestModal from "../../../Components/modal/sendExchangeRequestModal";
import { getUserChalet } from "../../../redux/actions/chaletActionCreator";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
function DetailsChaletCard({ chalet, chalets, auth }) {
  const [status, setStatus] = useState("");
  const [sendRequestModalShow, setSendRequestModalShow] = useState(false);
  const { RangePicker } = DatePicker;
  const { Option } = Select;
  const dispatch = useDispatch();
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };
  useEffect(() => {
    if (chalet && chalet.status === "available_to_exchange") {
      setStatus("Exchange");
    } else if (chalet && chalet.status === "available_to_rent") {
      setStatus("Rent");
    } else if (chalet && chalet.status === "available_to_all") {
      setStatus("available_to_all");
    }
    dispatch(getUserChalet(""));
  }, [dispatch, chalet]);
  // const menu = (
  //   <>
  //     {status === "available_to_all" && (
  //       <Menu className="text-dark">
  //         <>
  //           <Menu.Item key="1">Rent</Menu.Item>
  //           <Menu.Item key="2">Exchange</Menu.Item>
  //         </>
  //         {/* <Menu.Item key="3">Available to All</Menu.Item> */}
  //       </Menu>
  //     )}
  //   </>
  // );
  const handleCheckAvailabilty = (values) => {
    console.log(values);
    setSendRequestModalShow(true);
  };
  // console.log(props.chalet);
  return (
    <Card className="details-card">
      <Card.Body className="pl-4 pr-4 pt-3 pb-2">
        <h3 className="p-3">{chalet && chalet.address}</h3>
        <Form onFinish={handleCheckAvailabilty}>
          <Row>
            <Col span={15}>
              <h4 className="p-3">$ {chalet && chalet.fees}</h4>
            </Col>
            <Col>
              {" "}
              {/* <Dropdown overlay={menu}>
              <Button className="btn-dropdown">
                {status === "available_to_all" ? "Rent" : status}{" "}
                {status === "available_to_all" && <DownOutlined />}
              </Button>
            </Dropdown> */}
              {status === "available_to_all" && (
                <Form.Item
                  // className="mb-3"
                  name="status"
                  rules={[
                    {
                      required: true,
                      message: "status is required",
                    },
                  ]}
                  // noStyle
                >
                  <Select
                    defaultValue="Rent"
                    style={{ width: 109 }}
                    name="status"

                    // onChange={handleRequestFilter}
                  >
                    <Option value="Rent">Rent</Option>
                    <Option value="Exchange">Exchange</Option>
                  </Select>
                </Form.Item>
              )}
              {status !== "available_to_all" && <Button>{status}</Button>}
            </Col>
          </Row>

          <Card.Title className="about-title pl-3">About</Card.Title>
          <Card.Text className="coloor h4 pl-3">
            {chalet && chalet.description}
          </Card.Text>
          <hr />
          <Card.Title className="about-title pl-3">Features</Card.Title>
          <div className="features d-flex">
            <div className="h6 ml-2">
              <img src="/images/wifi.png" className="featureImg" alt="wifi" />
              {chalet && chalet.feature && chalet.feature[0]}
            </div>
            <div className="h6">
              <img
                src="/images/garden.png"
                className="featureImg"
                alt="garden"
              />
              {chalet && chalet.feature && chalet.feature[1]}
            </div>
            <div className="h6 air">
              <img
                src="/images/air condition.png"
                className="featureImg"
                alt="air condition"
              />
              {chalet && chalet.feature && chalet.feature[2]}
            </div>
          </div>
          <hr />
          <div className="text-center">
            <hr className="d-inline-block rightdiv" />
            <h5 className="d-inline-block book">BOOK NOW </h5>
            <hr className="d-inline-block leftdiv" />
          </div>
          <Space direction="vertical" size={12} className="mt-3 ml-4">
            {/* <Form.Item></Form.Item> */}
            <Form.Item
              name="date"
              // label="RangePicker"
              {...rangeConfig}
              // noStyle
            >
              <RangePicker />
            </Form.Item>
          </Space>
          {!auth ? (
            <NavLink
              variant="primary"
              type="submit"
              className="check-btn text-white link"
              to="/login"
            >
              Check Availability
            </NavLink>
          ) : (
            <Btn
              variant="primary"
              type="submit"
              className="check-btn"
              // onClick={() => setSendRequestModalShow(true)}
            >
              Check Availability{" "}
            </Btn>
          )}
        </Form>
        <SendExchangeRequestModal
          chalets={chalets}
          chalet={chalet}
          show={sendRequestModalShow}
          onHide={() => setSendRequestModalShow(false)}
        />
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
            value={chalet && chalet.max_guests}
          />
          <span className="spans">Maximum</span>
        </div>
      </div>
    </Card>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    chalets: reduxState.Chalets.currentUserChalets,
    auth: reduxState.Users.auth,
  };
};
export default connect(mapStateToProps)(DetailsChaletCard);
