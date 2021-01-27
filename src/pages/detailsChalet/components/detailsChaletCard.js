import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Select, Button, Form } from "antd";
import { Button as Btn } from "react-bootstrap";
import { Card } from "react-bootstrap";
// import { DownOutlined } from "@ant-design/icons";
import { DatePicker, Space } from "antd";
// import moment from "moment";
import "../../../Styling/chaletcard.css";
import "../../../Styling/detailschaletcard.css";
import SendExchangeRequestModal from "../../../Components/modal/sendExchangeRequestModal";
import { getUserChalet } from "../../../redux/actions/chaletActionCreator";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getNotAvailableDays } from "../../../redux/actions/requestActionCreator";
function DetailsChaletCard({ chalet, chalets, auth, user, days }) {
  // const dateFormat = "YYYY/MM/DD";
  const [status, setStatus] = useState("");
  const [sendRequestModalShow, setSendRequestModalShow] = useState(false);
  const { RangePicker } = DatePicker;
  const { Option } = Select;
  const dispatch = useDispatch();
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };

  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  const [requestfilterStatus, setRequestFilterStatus] = useState("");
  const verifyChalets = chalets.filter((c) => c.verification === "verified");
  console.log(verifyChalets);
  console.log(chalet);
  useEffect(() => {
    dispatch(getUserChalet(""));
    dispatch(getNotAvailableDays(chalet.id));
    // let mychalet = (c) => {
    //   console.log(c.id);
    //   return c.id === chalet.id;
    // };
    // console.log(mychalet);
    // console.log(verifyChalets.some(mychalet));
    // if (verifyChalets.some(mychalet)) {
    //   console.log(verifyChalets.some(mychalet));

    //   setIsThisMyChalet("true");
    //   console.log(isThisyChalet);
    // }
    if (chalet && chalet.status === "available_to_exchange") {
      setStatus("Exchange");
    } else if (chalet && chalet.status === "available_to_rent") {
      setStatus("Rent");
    } else if (chalet && chalet.status === "available_to_all") {
      setStatus("available_to_all");
    }
  }, [dispatch, chalet]);
  console.log(chalets);
  let mychalet = (c) => {
    console.log(c.id);
    return c.id === chalet.id;
  };
  console.log(mychalet);
  // console.log(verifyChalets.some(mychalet));
  // console.log(isThisyChalet);
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
  const handleRequestFilter = (value) => {
    if (value === "Exchange") setRequestFilterStatus("Exchange");
    else if (value === "Rent") setRequestFilterStatus("Rent");
  };
  console.log(requestfilterStatus);
  const handleCheckAvailabilty = (values) => {
    console.log(values);
    console.log(requestfilterStatus);
    if (requestfilterStatus === "Exchange") {
      setSendRequestModalShow(true);
    }
  };
  // const disabledDate = (current) => {
  //   if (!dates || dates.length === 0) {
  //     return false;
  //   }
  //   //console.log(current);
  //   const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
  //   const tooEarly = dates[1] && dates[1].diff(current, "days") > 7;
  //   return tooEarly || tooLate;
  // };
  function disabledDate(current) {
    // Can not select days before today and today
    let dayss = (d) => {
      return current.format("YYYY-MM-DD") === d;
    };
    return days.some(dayss);
  }
  console.log(days);
  const onOpenChange = (open) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };
  return (
    <Card className="details-card">
      <Card.Body className="pl-4 pr-4 pt-3 pb-2">
        <h3 className="p-3">{chalet && chalet.address}</h3>
        <Form onFinish={handleCheckAvailabilty}>
          <Row>
            <Col lg={10} xl={12} xxl={12}>
              <h4 className="p-3">$ {chalet && chalet.fees}</h4>
            </Col>
            <Col lg={10} xl={12} xxl={12}>
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
                    defaultValue="status"
                    // style={{ width: 109 }}
                    className="selectbox"
                    name="status"
                    onChange={handleRequestFilter}
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
          <Card.Text className="coloor desc-card pl-3">
            {chalet && chalet.description}
          </Card.Text>
          <hr />
          <Card.Title className="about-title pl-3">Features</Card.Title>
          <div className="features d-flex">
            {Object.keys(chalet).length !== 0 ? (
              chalet.feature.map((f, i) => (
                <div className="about-title ml-2">
                  <img
                    key={i}
                    src={`/images/${f}.png`}
                    className="featureImg"
                    alt={`${f}`}
                  />
                  {f}
                </div>
              ))
            ) : (
              <p>no features</p>
            )}
            {/* <div className="h6 ml-2">
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
            </div> */}
          </div>
          <hr />
          {!verifyChalets.some(mychalet) && (
            <>
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
                  {/* <RangePicker
                defaultValue={[
                  moment("2015/01/01", dateFormat),
                  moment("2015/01/02", dateFormat),
                  moment("2015/01/01", dateFormat),
                ]}
              /> */}
                  <RangePicker
                    value={hackValue || value}
                    disabledDate={disabledDate}
                    onCalendarChange={(val) => setDates(val)}
                    onChange={(val) => setValue(val)}
                    onOpenChange={onOpenChange}
                  />
                </Form.Item>
              </Space>
              {Object.keys(user).length === 0 ? (
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
            </>
          )}
        </Form>
        <SendExchangeRequestModal
          dates={dates}
          chalets={chalets}
          chalet={chalet}
          requestfilterStatus={requestfilterStatus}
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
      <hr className="separte-guests" />
      <div className="footerCard detail-footer d-block">
        <div className="text-center guests-header">
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
    days: reduxState.Requests.days,
  };
};
export default connect(mapStateToProps)(DetailsChaletCard);
