import React from "react";
import { useDispatch } from "react-redux";
import { Col, Row, Form, Input } from "antd";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { forgetPasword } from "../../redux/actions/userActionCreator";
import "../../Styling/forgetpassword.css";
import "../../Styling/resetpassword.css";
import "../../Styling/login.css";

function ForgetPassword(props) {
  const dispatch = useDispatch();
  const onForgetPasswordFinish = (values) => {
    console.log(values);
    dispatch(forgetPasword(values));
  };
  return (
    <div>
      <div>
        <Row gutter={16} className="m-0 forget-container">
          <Col span={7}>
            <NavLink to="/">
              <img
                className="login-logo ml-3 d-block forget-logo"
                src="/images/log.png"
                alt="logo"
              />
            </NavLink>
          </Col>
          <Col span={11} className="forget">
            <h3 className="forget-header text-center">Forgot Your Password?</h3>
            <p className="forget-body mr-4 mb-5 mt-5">
              Don't Worry! Enter your mail and we'll help you to set a new
              password.
            </p>
            <Card className="forget-card">
              <Card.Header as="h5" className="header-card p-5">
                Forgot Password
              </Card.Header>
              <Card.Body className="text-center">
                <Card.Title>
                  <img src="/images/solid envelope.png" alt="email" />
                </Card.Title>
                <Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}

                  <Form
                    name="validate_other"
                    className="ml-5 h2"
                    // {...formItemLayout}
                    onFinish={onForgetPasswordFinish}
                  >
                    <Row>
                      <Col span={13} offset={5}>
                        <Form.Item className="mt-3">
                          <Form.Item
                            noStyle
                            // onChange={handleChange}
                            name="email"
                            rules={[
                              {
                                type: "email",
                                message: "The input is not valid E-mail!",
                              },
                              {
                                required: true,
                                message: "Please input your E-mail!",
                              },
                            ]}
                            // initialValue={user.email}
                          >
                            <Input
                              // value={state.email}
                              style={{ width: "40rem" }}
                              placeholder="ex. Jessica Alexander@gmail.com"
                            />
                          </Form.Item>
                        </Form.Item>
                      </Col>
                      <Col span={1} offset={15}></Col>
                    </Row>
                    <Button
                      variant="primary"
                      className="done rounded d-inline-block text-center m-0 bg-primary pl-4 pr-4 mr-5"
                      type="submit"
                    >
                      Submit
                    </Button>{" "}
                    <div className="d-flex h5 justify-content-end mt-4">
                      <i class="fas fa-chevron-left mt-1 mr-2"></i>
                      Back to
                      <NavLink
                        variant="outline-secondary"
                        className="rounded text-right d-block"
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </div>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col span={7}></Col>
        </Row>
      </div>
    </div>
  );
}
export default ForgetPassword;
