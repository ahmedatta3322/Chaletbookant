import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Row, Col, Layout, Button as Btn, Form, Input, Alert } from "antd";
import { NavLink } from "react-router-dom";
import { Tabs } from "antd";
import "../Styling/login.css";
import SignUp from "./signup";
import { logIn } from "../redux/actions/userActionCreator";
// import { Button } from "react-bootstrap";
function Login(props) {
  const { Content } = Layout;
  const { err } = props;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState("");
  const [auth, setAuth] = useState(false);
  const [setClass, setStateClass] = useState("1");
  useEffect(() => {
    // console.log(props.auth);
    setAuth(props.auth);
    if (auth && submit === "submitted") {
      props.history.push(`/profile/${props.user.id}`);
    } else if (!auth && submit === "submitted") {
      setError(err);
    }
    console.log(props.user);
    // console.log(props.err);
  }, [err, auth, props.auth, props.user, props.history, submit]);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    await dispatch(logIn(values));
    console.log(auth);
    console.log(props.auth);
    setSubmit("submitted");
    // if (props.auth) {
    //   console.log(props.user);
    //   props.history.push(`/profile/${props.user.id}`);
    // }
  };
  // console.log(props.user, err, "redux", error, "state");

  const { TabPane } = Tabs;

  function callback(key) {
    // console.log(props);
    if (key === "2") {
      // props.location.push("/signup");
      setStateClass("2");
    } else if (key === "1") {
      setStateClass("1");
    }
    // console.log(key);
  }
  return (
    <div>
      <Layout>
        {/* <div className="logo"> */}
        <NavLink to="/">
          <img
            className="login-logo mt-5 ml-3"
            src="/images/navbar.png"
            alt="logo"
          />
        </NavLink>
        {/* </div> */}
        <Content
          onChange={callback}
          className={`login-content ${
            setClass === "1" ? "p-login" : "p-signup"
          }`}
        >
          <Row>
            <Col xl={10} xxl={6} offset={9}>
              <Tabs
                defaultActiveKey="1"
                onChange={callback}
                className={`login ${setClass === "1" ? "m-login" : "m-signup"}`}
              >
                <TabPane tab="Login" key="1" className="h1">
                  <Col className="ml-0 mr-5 ">
                    <img src="/images/brand.png" className="mb-4 brand-img" alt="brand" />
                    <Col offset={4} className="form-container">
                      <Form
                        {...layout}
                        form={form}
                        // name="register"
                        onFinish={onFinish}
                        // onSubmit={handleSubmit}
                        // onFinishFailed={onFinishFailed}
                      >
                        <Form.Item>
                          <i className="fas fa-envelope email"></i>
                          <Form.Item
                            name="email"
                            noStyle
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
                          >
                            <Input name="email" className="input-email" />
                          </Form.Item>
                        </Form.Item>
                        <Form.Item>
                          <i className="fas fa-lock lock"></i>
                          <Form.Item
                            className="m-0"
                            noStyle
                            rules={[
                              {
                                required: true,
                                message: "Please input your password!",
                              },
                            ]}
                            // hasFeedback
                            name="password"
                          >
                            <Input.Password
                              name="password"
                              className="input-password"
                            />
                          </Form.Item>
                        </Form.Item>
                        {error !== "" && (
                          <Alert
                            message={error}
                            type="error"
                            showIcon
                            className="mb-3"
                          />
                        )}
                        {/* <Form.Item>
                          <Form.Item
                            name="password"
                            className="m-0"
                            rules={[
                              {
                                required: true,
                                message: "Please input your password!",
                              },
                            ]}
                          >
                            <i className="fas fa-lock lock"></i>
                            <Input.Password className="input-password" />
                          </Form.Item>
                        </Form.Item> */}
                        {/* <Form.Item
                          {...tailLayout}
                          name="remember"
                          valuePropName="checked"
                        ></Form.Item> */}
                        <div className="d-block">
                        <Button
                          variant="outline-secondary"
                          className="connect-btn mr-5 p-2"
                        >
                          Continue with{" "}
                          <img
                            src="/images/facebook.png"
                            className="connect"
                            alt="facebook"
                          />
                        </Button>{" "}
                        <Button
                          variant="outline-secondary"
                          className="connect-btn mr-5 p-2"
                        >
                          Continue with{" "}
                          <img
                            src="/images/gmail.png"
                            className="connect"
                            alt="gmail"
                          />
                        </Button>{" "}
                        </div>
                        {/* <Form.Item {...tailLayout}> */}
                        <Btn
                          type="primary"
                          htmlType="submit"
                          className="mt-5 mb-3 h3 pl-3 pr-3 pb-3 btn-submit"
                        >
                          LOGIN
                        </Btn>
                        <NavLink
                          to="/forgetpassword"
                          className="d-block text-right pl-5 pt-5 pb-3 text-dark h5"
                        >
                          Forget password?
                        </NavLink>
                        {/* </Form.Item> */}
                      </Form>
                    </Col>
                  </Col>
                </TabPane>
                <TabPane tab="Sign Up" key="2">
                  <SignUp />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.Users.currentUser,
    err: reduxState.Users.errorMessg,
    auth: reduxState.Users.auth,
  };
};
export default connect(mapStateToProps)(Login);
