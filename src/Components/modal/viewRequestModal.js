import React, { useEffect } from "react";
import { Modal, Card, Button, Jumbotron } from "react-bootstrap";
import { Row, Layout, Col, DatePicker, Form, message } from "antd";
import { NavLink } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  editGuestStatus,
  editHostStatus,
  getNotAvailableDays,
} from "../../redux/actions/requestActionCreator";
import "../../Styling/viewrequestmodal.css";
import moment from "moment";
const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";
function ViewRequestModal(props) {
  const { request, filterStatus, days } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(request).length !== 0 && filterStatus === "Sent") {
      dispatch(getNotAvailableDays(request.chalet_host.id));
    } else if (
      Object.keys(request).length !== 0 &&
      filterStatus === "Receivied"
    ) {
      console.log(request);
      // dispatch(getNotAvailableDays(request && request.chalet_Guest.id));
    }
  }, [dispatch, filterStatus, request]);

  const warning = () => {
    message.warning("You refused this Request");
  };
  const handleCancel = () => {
    if (filterStatus === "Receivied") {
      dispatch(editHostStatus(request.id, { status_host: "disapprove" }));
    } else if (filterStatus === "Sent") {
      dispatch(editHostStatus(request.id, { status_guest: "disapprove" }));
    }
    props.onHide();
    warning();
  };
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };
  const success = () => {
    message.success("You accept this Request ");
  };
  const handleRequest = (fieldsValue) => {
    const checkValue = fieldsValue["check"];
    const values = {
      ...fieldsValue,
      check: [
        checkValue[0].format("YYYY-MM-DD"),
        checkValue[1].format("YYYY-MM-DD"),
      ],
    };
    console.log(values);
    const { check } = values;
    if (filterStatus === "Receivied") {
      const check_in_host = check[0];
      const check_out_host = check[1];
      dispatch(
        editHostStatus(request.id, {
          check_in_host,
          check_out_host,
          status_host: "approve",
        })
      );
      props.onHide();
      success();
    }
  };
  const handleApprove = () => {
    if (filterStatus === "Sent") {
      dispatch(
        editGuestStatus(request.id, {
          status_guest: "approve",
        })
      );
      props.onHide();
      success();
    }
  };
  // console.log(request, Object.keys(request).length === 0);
  function disabledDate(current) {
    // Can not select days before today and today
    let dayss = (d) => {
      return current.format("YYYY-MM-DD") === d;
    };
    return days.some(dayss);
  }
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
            Exchange Request
          </Modal.Title>
        </Modal.Header>
        <Layout>
          <Row>
            <Col span={24}>
              <Jumbotron fluid className="view-bg">
                <Row>
                  <Col span={2}></Col>
                  <Col span={8}>
                    <h4 className="h3 text-white text-center mb-5">
                      Your Chalet
                    </h4>
                    {Object.keys(request).length !== 0 && (
                      <Card className="request-card">
                        <Card.Img
                          variant="top"
                          className="cover-card"
                          src={
                            filterStatus === "Sent"
                              ? request.chalet_Guest.cover
                              : request.chalet_host.cover
                          }
                        />

                        <Card.Footer className="exchange-card">
                          <Row>
                            <Col span={15}>
                              <small className="text-muted h3">
                                {filterStatus === "Sent"
                                  ? request.chalet_Guest.address
                                  : request.chalet_host.address}
                              </small>
                            </Col>

                            <Col span={9}>
                              {" "}
                              <NavLink
                                variant="primary"
                                className="active pl-4 pr-4 p-3 viewbtn d-flex border-0 h3"
                                to={`/viewchalet/${
                                  filterStatus === "Sent"
                                    ? request.chalet_Guest.id
                                    : request.chalet_host.id
                                }`}
                              >
                                view
                              </NavLink>
                            </Col>
                          </Row>
                        </Card.Footer>
                      </Card>
                    )}
                  </Col>
                  <Col span={3} className="exchange-img">
                    <img src="/images/exchange.png" alt="icon" />
                  </Col>
                  <Col span={8}>
                    <h4 className="h3 text-white text-center mb-5">
                      {filterStatus === "Sent" ? `Host Chalet` : `Guest Chalet`}
                    </h4>
                    {Object.keys(request).length !== 0 && (
                      <Card className="request-card">
                        <Card.Img
                          variant="top"
                          className="cover-card"
                          src={
                            filterStatus === "Sent"
                              ? request.chalet_host.cover
                              : request.chalet_Guest.cover
                          }
                        />

                        <Card.Footer className="exchange-card">
                          <Row>
                            <Col span={15}>
                              <small className="text-muted h3">
                                {filterStatus === "Sent"
                                  ? request.chalet_host.address
                                  : request.chalet_Guest.address}
                              </small>
                            </Col>

                            <Col span={9}>
                              {" "}
                              <NavLink
                                variant="primary"
                                className="active pl-4 pr-4 p-3 viewbtn d-flex border-0 h3"
                                to={`/viewchalet/${
                                  filterStatus === "Sent"
                                    ? request.chalet_host.id
                                    : request.chalet_Guest.id
                                }`}
                              >
                                view
                              </NavLink>
                            </Col>
                          </Row>
                        </Card.Footer>
                      </Card>
                    )}
                  </Col>
                </Row>
              </Jumbotron>
              <hr className="seprate" />
              <h2 className="title h2 mt-5 mb-3 ml-5 view-title">Duration</h2>
              <Form onFinish={handleRequest}>
                <Modal.Body
                  id="Personal Info"
                  className="w-form send-form ml-5 mr-5 mt-0"
                >
                  <Row className="date-form mb-5">
                    <Col span={24} offset={12}>
                      <RangePicker
                        defaultValue={[
                          moment(`${request.check_in_guest}`, dateFormat),
                          moment(`${request.check_out_guest}`, dateFormat),
                        ]}
                        disabled
                      />
                    </Col>
                  </Row>
                  {request.status_guest === "pending" &&
                    request.status_host === "approve" && (
                      <>
                        <h2 className="title h2 mt-5 mb-4 ml-0 view-title text-left">
                          {" "}
                          {filterStatus === "Sent"
                            ? "Host Duration"
                            : "your duration"}
                        </h2>
                        <Row>
                          <Col span={24} offset={12}>
                            <RangePicker
                              defaultValue={[
                                moment(`${request.check_in_host}`, dateFormat),
                                moment(`${request.check_out_host}`, dateFormat),
                              ]}
                              disabled
                            />
                          </Col>
                        </Row>
                      </>
                    )}

                  {filterStatus === "Receivied" &&
                    request.status_guest === "pending" &&
                    request.status_host !== "approve" && (
                      <>
                        <h2 className="title h2 mt-5 mb-4 ml-0 view-title text-left">
                          {" "}
                          Enter your valid duration
                        </h2>
                        <Row>
                          <Col span={24} offset={6} className="range-date">
                            <Form.Item
                              name="check"
                              // label="RangePicker"
                              {...rangeConfig}
                              // noStyle
                            >
                              <RangePicker
                                disabled={
                                  request.status_host === "disapprove"
                                    ? true
                                    : false
                                }
                                disabledDate={disabledDate}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                      </>
                    )}
                  {filterStatus === "Receivied" &&
                    request.status_guest === "pending" &&
                    request.status_host === "pending" && (
                      <Modal.Footer className="modalFooter mt-1">
                        <>
                          <Button
                            variant="outline-primary"
                            className="rounded"
                            type="submit"
                          >
                            Approve
                          </Button>{" "}
                          <Button
                            variant="outline-secondary"
                            className="rounded"
                            onClick={handleCancel}
                          >
                            Disapprove
                          </Button>
                        </>
                      </Modal.Footer>
                    )}
                  {filterStatus === "Sent" &&
                    request.status_host === "approve" &&
                    request.status_guest === "pending" && (
                      <Modal.Footer className="modalFooter mt-1">
                        <>
                          <Button
                            variant="outline-primary"
                            className="rounded"
                            onClick={handleApprove}
                          >
                            Approve
                          </Button>{" "}
                          <Button
                            variant="outline-secondary"
                            className="rounded"
                            type="submit"
                            onClick={handleCancel}
                          >
                            Disapprove
                          </Button>
                        </>
                      </Modal.Footer>
                    )}
                </Modal.Body>
              </Form>
              {request.status_guest === "canceld" && (
                <Button
                  variant="warning"
                  className="bg-warning request-done request-cancel h4 mb-0"
                >
                  {filterStatus === "Sent"
                    ? "You canceld this request"
                    : "This request is canceld"}
                </Button>
              )}
              {request.status_guest === "disapprove" && (
                <Button
                  variant="danger"
                  className={`bg-danger request-done request-cancel h4 mb-0 ${
                    filterStatus === "Sent"
                      ? "request-disapprove"
                      : "disapprovee"
                  } `}
                >
                  {filterStatus === "Sent"
                    ? "Your request refused"
                    : "This request is refused"}
                </Button>
              )}
              {request.status_host === "disapprove" && (
                <Button
                  variant="danger"
                  className={`bg-danger request-done request-cancel h4 mb-0 ${
                    filterStatus === "Sent"
                      ? "request-disapprove"
                      : "disapprovee"
                  } `}
                >
                  {filterStatus === "Sent"
                    ? "Your request refused"
                    : "You refused this request"}
                </Button>
              )}
              {request.status_guest === "approve" &&
                request.status_host === "approve" && (
                  <Button
                    variant="success"
                    className="bg-success request-done h4 mb-0"
                  >
                    Deal Done.!
                  </Button>
                )}
            </Col>
          </Row>
        </Layout>
      </Modal>
    </div>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    days: reduxState.Requests.days,
  };
};
export default connect(mapStateToProps)(ViewRequestModal);
