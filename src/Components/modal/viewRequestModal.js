import React from "react";
import { Modal, Card, Button, Jumbotron } from "react-bootstrap";
import { Row, Layout, Col, DatePicker, Form } from "antd";
import { NavLink } from "react-router-dom";
import "../../Styling/viewrequestmodal.css";
import moment from "moment";
const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";
export default function ViewRequestModal(props) {
  const { request, filterStatus } = props;
  const handleCancel = () => {
    props.onHide();
  };
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };
  console.log(request);
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
                  </Col>
                  <Col span={3} className="exchange-img">
                    <img src="/images/exchange.png" alt="icon" />
                  </Col>
                  <Col span={8}>
                    <h4 className="h3 text-white text-center mb-5">
                      {filterStatus === "Sent" ? `Host Chalet` : `Guest Chalet`}
                    </h4>
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
                  </Col>
                </Row>
              </Jumbotron>
              <hr className="seprate" />
              <h2 className="title h2 mt-5 mb-3 ml-5 view-title">Duration</h2>
              <Modal.Body
                id="Personal Info"
                className="w-form ml-5 mr-5 mb-5 mt-0"
              >
                <Row>
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

                {filterStatus === "Receivied" &&
                  request.status_guest === "pending" && (
                    <>
                      <h2 className="title h2 mt-5 mb-4 ml-0 view-title text-left">
                        {" "}
                        Enter your valid duration
                      </h2>
                      <Row>
                        <Col span={24} offset={12}>
                          <Form.Item
                            name="range-picker"
                            label="RangePicker"
                            {...rangeConfig}
                            noStyle
                          >
                            <RangePicker />
                          </Form.Item>
                        </Col>
                      </Row>
                    </>
                  )}
              </Modal.Body>
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
                request.status_host === "pending" &&
                request.status_guest === "approve" && (
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
