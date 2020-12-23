import React from "react";
// import { useDispatch } from "react-redux";
import { Col, Row, Form, Input } from "antd";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { forgetPasword } from "../../redux/actions/userActionCreator";
import "../../Styling/forgetpassword.css";
import "../../Styling/resetpassword.css";
function ResetPassword(props) {
  //   const dispatch = useDispatch();
  //   const onForgetPasswordFinish = (values) => {
  //     console.log(values);
  //     dispatch(forgetPasword(values));
  //   };
  return (
    <div>
      <div>
        <Row gutter={16} className="m-0 forget-container">
          <Col span={7}>
            <NavLink to="/">
              <img
                className="login-logo mt-5 ml-3 d-block"
                src="/images/navbar.png"
                alt="logo"
              />
            </NavLink>
          </Col>
          <Col span={11} className="reset">
            <h3 className="forget-header text-center">Reset Your Password?</h3>
            <p className="forget-body text-center mt-5 mb-5">
              Now! you can enter your new password.
            </p>
            <Card className="forget-card">
              <Card.Header as="h5" className="header-card p-5">
                Reset Password
              </Card.Header>
              <Card.Body className="text-center">
                <Card.Title>
                  <img src="/images/password.png" alt="password" />
                </Card.Title>
                <Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}

                  <Form
                    name="validate_other"
                    className="ml-5 h2"
                    // {...formItemLayout}
                    // onFinish={onForgetPasswordFinish}
                  >
                    <Row>
                      <Col span={13} offset={5}>
                        <Form.Item>
                          <Form.Item
                            label="PASSWORD"
                            className="mb-0 h4 labels ml-4"
                          >
                            {" "}
                            <i class="fas fa-lock iconn r-password"></i>
                          </Form.Item>
                          <Form.Item
                            noStyle
                            rules={[
                              {
                                required: true,
                                message: "Please input your password!",
                              },
                              {
                                min: 8,
                                message:
                                  "The password must be at least 8 characters.",
                              },
                            ]}
                            // hasFeedback
                            name="password"
                          >
                            <Input.Password
                              // onChange={handleChange}
                              style={{ width: "40rem" }}
                            />
                          </Form.Item>
                        </Form.Item>
                        <Form.Item>
                          <Form.Item
                            label="CONFIRM PASSWORD "
                            className="mb-0 h4 labels ml-4"
                          >
                            {" "}
                            <i class="fas fa-lock iconn r-password"></i>
                          </Form.Item>
                          <Form.Item
                            noStyle
                            dependencies={["password"]}
                            className="mb-0 h4"
                            // hasFeedback
                            name="c_password"
                            rules={[
                              {
                                required: true,
                                message: "Please confirm your password!",
                              },
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (
                                    !value ||
                                    getFieldValue("password") === value
                                  ) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(
                                    "The two passwords that you entered do not match!"
                                  );
                                },
                              }),
                            ]}
                          >
                            <Input.Password
                              // onChange={handleChange}
                              style={{ width: "40rem" }}
                            />
                          </Form.Item>
                        </Form.Item>
                      </Col>
                      <Col span={1} offset={15}></Col>
                    </Row>
                    <Button
                      variant="primary"
                      className="done d-inline-block text-center m-0 bg-primary pl-4 pr-4"
                      type="submit"
                    >
                      Done
                    </Button>{" "}
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
export default ResetPassword;
