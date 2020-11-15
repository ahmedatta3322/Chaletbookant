import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Row, Col, Layout, Button as Btn, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import { Tabs } from "antd";
import "../Styling/login.css";
import SignUp from "./signup";
// import { Button } from "react-bootstrap";
export default function Login(props) {
  const { Content } = Layout;
  const [setClass, setStateClass] = useState("1");
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const handleFilter = (e) => {
    console.log(typeof e.target.textContent);
    props.location.push("/signup");
  };
  // const tailLayout = {
  //   wrapperCol: { offset: 8, span: 16 },
  // };

  // const Demo = () => {
  //   const onFinish = (values) => {
  //     console.log("Success:", values);
  //   };

  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };
  // };
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(props);
    if (key === "2") {
      // props.location.push("/signup");
      setStateClass("2");
    } else if (key === "1") {
      setStateClass("1");
    }
    console.log(key);
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
            <Col span={6} offset={9}>
              <Tabs
                defaultActiveKey="1"
                onChange={callback}
                className={`login ${setClass === "1" ? "m-login" : "m-signup"}`}
              >
                <TabPane tab="Login" key="1" className="h1">
                  <Col className="ml-0 mr-5 ">
                    <img src="/images/brand.png" className="mb-4" alt="brand" />
                    <Col offset={4}>
                      <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                      >
                        <Form.Item>
                          <Form.Item
                            name="username"
                            noStyle
                            rules={[
                              {
                                required: true,
                                message: "Username is required",
                              },
                            ]}
                          ></Form.Item>
                          <i class="fas fa-envelope email"></i>
                          <Input className="input-email" />
                        </Form.Item>
                        <Form.Item>
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
                            <i class="fas fa-lock lock"></i>
                            <Input.Password className="input-password" />
                          </Form.Item>
                        </Form.Item>
                        {/* <Form.Item
                          {...tailLayout}
                          name="remember"
                          valuePropName="checked"
                        ></Form.Item> */}
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
                        {/* <Form.Item {...tailLayout}> */}
                        <Btn
                          type="primary"
                          htmlType="submit"
                          className="mt-5 mb-3 h3 pl-3 pr-3 btn-submit"
                        >
                          LOGIN
                        </Btn>
                        <a
                          href="forgetpassword.html"
                          className="d-block text-right pl-5 pt-5 pb-3 text-dark h5"
                        >
                          Forget password?
                        </a>
                        {/* </Form.Item> */}
                      </Form>
                    </Col>
                  </Col>
                </TabPane>
                <TabPane tab="Sign Up" key="2" onClick={handleFilter}>
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
