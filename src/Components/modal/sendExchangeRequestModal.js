import React, { useState, useEffect } from "react";
import { Modal, Card, Button, Jumbotron } from "react-bootstrap";
import { Row, Layout, Col, DatePicker, Form, Radio, message } from "antd";
import { NavLink } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
// import { getUserChalet } from "../../redux/actions/chaletActionCreator";
import "../../Styling/viewrequestmodal.css";
import "../../Styling/sendexchangerequestmodal.css";
// import moment from "moment";
import { exchangeChalet } from "../../redux/actions/chaletActionCreator";
import { getNotAvailableDays } from "../../redux/actions/requestActionCreator";
const { RangePicker } = DatePicker;
// const dateFormat = "YYYY/MM/DD";
function SendExchangeRequestModal(props) {
  const { chalet, chalets, requestfilterStatus, dates, status, days } = props;
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  // const [userChalets, setUserChalets] = useState(chalets);
  // const [verifiedChalets, setverifiedChalet] = useState([]);
  const [chalet_guest_id, setchalet_guest_id] = useState(1);
  // const [checkinGuest, setCheckinGuest] = useState();
  // const [checkoutGuest, setCheckoutGuest] = useState();

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setchalet_guest_id(e.target.value);
  };
  const handleCancel = () => {
    props.onHide();
  };
  const verifyChalets = chalets.filter((c) => c.verification === "verified");
  console.log(chalets);
  console.log(verifyChalets);
  useEffect(() => {
    console.log(status);
    dispatch(getNotAvailableDays(chalet.id));
    if (status === "OK") {
      success();
    }
  }, [dispatch, status, chalet.id]);
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };
  function disabledDate(current) {
    // Can not select days before today and today
    let dayss = (d) => {
      return current.format("YYYY-MM-DD") === d;
    };
    return days.some(dayss);
  }
  // function onDateChange(dates, dateStrings) {
  //   console.log("From: ", dates[0], ", to: ", dates[1]);
  //   console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
  //   setcheckinGuest(dateStrings[0]);
  //   setCheckoutGuest(dateStrings[1]);
  // }
  const success = () => {
    message.success("Your Request Sent Successfully");
  };
  const handleSendExchangeRequest = (fieldsValue) => {
    const rangeValue = fieldsValue["range"];
    const values = {
      ...fieldsValue,
      range: [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD"),
      ],
    };
    console.log(values);
    // setCheckinGuest(values.range[0]);
    // setCheckoutGuest(values.range[1]);
    console.log(values.range[0]);
    console.log(values.range[1]);
    console.log(chalet.id);

    // console.log(checkinGuest);
    const { id } = chalet;
    const chalet_host_id = id;
    console.log(chalet_host_id);
    const { range } = values;
    const check_in_guest = range[0];
    const check_out_guest = range[1];
    console.log(requestfilterStatus);
    if (requestfilterStatus === "Exchange") {
      dispatch(
        exchangeChalet({
          chalet_host_id,
          chalet_guest_id,
          check_in_guest,
          check_out_guest,
        })
      );
    }
    props.onHide();

    // const newContructs = values.map((d, i) => {
    //   return { uid: i.id, name: i.name, url: i.url, status: "done" };
    // });
  };

  // console.log(status);

  // console.log(requestfilterStatus);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="d-block pb-0 modal-view">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="title h1 mr-5 mb-3 m-3 view-title"
          >
            Exchange Chalet
          </Modal.Title>
        </Modal.Header>
        <Layout>
          <Row>
            <Col span={24}>
              <Form onFinish={handleSendExchangeRequest}>
                <Jumbotron fluid className="view-bg">
                  <Row>
                    <Col offset={1}>
                      <h4 className="h3 text-white text-center mb-5">
                        Select Chalet
                      </h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={3}></Col>
                    {/* <Col span={8}> */}
                    {verifyChalets && verifyChalets.length !== 0 ? (
                      verifyChalets.map((chalet) => (
                        <>
                          <Col xl={10} xxl={9} span={6}>
                            <Row>
                              <Form.Item
                                name="radio"
                                // label="Radio.Button"
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      "Please choose your chalet you want to exchange!",
                                  },
                                ]}
                              >
                                <Radio.Group
                                  onChange={onChange}
                                  value={chalet_guest_id}
                                >
                                  <Radio value={chalet.id}>
                                    <Card className="request-card">
                                      <Card.Img
                                        variant="top"
                                        className="cover-card"
                                        src={chalet.cover}
                                      />

                                      <Card.Footer className="exchange-card">
                                        <Row>
                                          <Col span={15}>
                                            <small className="text-muted h3">
                                              {chalet.address}
                                            </small>
                                          </Col>

                                          <Col span={9}>
                                            {" "}
                                            <NavLink
                                              variant="primary"
                                              className="active pl-4 pr-4 p-3 viewbtn d-flex border-0 h3"
                                              to={`/viewchalet/${chalet.id}`}
                                            >
                                              view
                                            </NavLink>
                                          </Col>
                                        </Row>
                                      </Card.Footer>
                                    </Card>
                                  </Radio>
                                </Radio.Group>
                              </Form.Item>
                            </Row>
                          </Col>
                          <Col md={1} span={1}></Col>
                        </>
                      ))
                    ) : (
                      <p>No Chlets Added</p>
                    )}
                    {/* </Col> */}
                  </Row>
                  <Col span={3} className="exchange-img"></Col>
                </Jumbotron>
                <hr className="seprate" />
                <h2 className="title h2 mt-5 mb-3 ml-5 view-title">Duration</h2>
                <Modal.Body
                  id="Personal Info"
                  className="w-form send-form ml-5 mr-5  mt-0"
                >
                  <Row className="date-form mb-5">
                    <Col span={24} offset={12}>
                      <Form.Item
                        name="range"
                        initialValue={dates}
                        {...rangeConfig}
                      >
                        <RangePicker
                          disabledDate={disabledDate}
                          // onChange={onDateChange}
                          defaultValue={dates}
                        />
                      </Form.Item>
                      <Button
                        // type="submit"
                        // variant="success"
                        className="date-available h4 mt-4 d-block text-center"
                      >
                        Date is Available
                      </Button>
                    </Col>
                  </Row>
                  <Modal.Footer className="modalFooter mt-1">
                    <>
                      <Col offset={15}>
                        <Button
                          variant="outline-primary"
                          className="rounded"
                          type="submit"
                        >
                          Send
                        </Button>{" "}
                        <Button
                          variant="outline-secondary"
                          className="rounded"
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                      </Col>
                    </>
                  </Modal.Footer>
                </Modal.Body>
              </Form>
            </Col>
          </Row>
        </Layout>
      </Modal>
    </div>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    chalets: reduxState.Chalets.currentUserChalets,
    status: reduxState.Chalets.status,
    days: reduxState.Requests.days,
  };
};
export default connect(mapStateToProps)(SendExchangeRequestModal);
