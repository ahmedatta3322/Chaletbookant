import React, { useEffect, useState } from "react";
import { Modal, Card, Button, Jumbotron } from "react-bootstrap";
import { Row, Layout, Col, DatePicker, Form, Radio } from "antd";
import { NavLink } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
// import { getUserChalet } from "../../redux/actions/chaletActionCreator";
import "../../Styling/viewrequestmodal.css";
import "../../Styling/sendexchangerequestmodal.css";
const { RangePicker } = DatePicker;
function SendExchangeRequestModal(props) {
  const { chalet, chalets } = props;
  // const dispatch = useDispatch();
  // const [userChalets, setUserChalets] = useState(chalets);
  // const [verifiedChalets, setverifiedChalet] = useState([]);
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleCancel = () => {
    props.onHide();
  };
  const verifyChalets = chalets.filter((c) => c.verification === "verified");
  console.log(verifyChalets);
  // useEffect(() => {
  //   setverifiedChalet(verifyChalets);
  //   console.log(verifiedChalets);
  // }, [dispatch]);
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };
  // console.log(chalet, verifiedChalets);

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
                    verifyChalets.map((chalet, i) => (
                      <>
                        <Col xl={10} xxl={9} span={6}>
                          <Row>
                            <Radio.Group onChange={onChange} value={value}>
                              <Radio value={i + 1}>
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
                className="w-form ml-5 mr-5 mb-5 mt-0"
              >
                <Row>
                  <Col span={24} offset={12}>
                    <Form>
                      <Form.Item
                        name="range-picker"
                        label="RangePicker"
                        {...rangeConfig}
                        noStyle
                      >
                        <RangePicker />
                      </Form.Item>
                      <Button
                        type="submit"
                        // variant="success"
                        className="date-available h4 mt-4 d-block text-center"
                      >
                        Date is Available
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Modal.Body>

              <Modal.Footer className="modalFooter mt-1">
                <>
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
                </>
              </Modal.Footer>
            </Col>
          </Row>
        </Layout>
      </Modal>
    </div>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    // chalets: reduxState.Chalets.currentUserChalets,
  };
};
export default connect(mapStateToProps)(SendExchangeRequestModal);
