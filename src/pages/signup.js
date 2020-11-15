import React from "react";
import { Button } from "react-bootstrap";
import { Col, Button as Btn, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../Styling/signup.css";
export default function SignUp() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <div>
      <Col className="ml-0 mr-5 ">
        <Col offset={4}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item>
              <Form.Item label="USER NAME" className="mb-0 h4 labels ml-4">
                <i class="fas fa-user iconn"></i>
              </Form.Item>
              <Form.Item
                name="username"
                noStyle
                rules={[{ required: true, message: "Username is required" }]}
              >
                <Input
                  placeholder="ex. Jessica Alexander"
                  style={{ width: "33rem" }}
                />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Form.Item label="EMAIL" className="mb-0 h4 labels ml-4">
                {" "}
                <i class="fas fa-envelope iconn"></i>
              </Form.Item>
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
              ></Form.Item>
              <Input
                style={{ width: "33rem" }}
                placeholder="ex. Jessica Alexander@gmail.com"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item label="PHONE NO" className="mb-0 h4 labels ml-4">
                {" "}
                <i class="fas fa-phone-alt iconn"></i>
              </Form.Item>
              <Form.Item
                name="phone"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              ></Form.Item>
              <Input type="number" style={{ width: "33rem" }} />
            </Form.Item>
            <Form.Item>
              <Form.Item label="PASSWORD" className="mb-0 h4 labels ml-4">
                {" "}
                <i class="fas fa-lock iconn"></i>
              </Form.Item>
              <Form.Item
                name="password"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                // hasFeedback
              ></Form.Item>
              <Input.Password style={{ width: "33rem" }} />
            </Form.Item>
            <Form.Item>
              <Form.Item
                label="CONFIRM PASSWORD "
                className="mb-0 h4 labels ml-4"
              >
                {" "}
                <i class="fas fa-lock iconn"></i>
              </Form.Item>
              <Form.Item
                name="confirm"
                noStyle
                dependencies={["password"]}
                className="mb-0 h4"
                // hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              ></Form.Item>
              <Input.Password style={{ width: "33rem" }} />
            </Form.Item>
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
              <img src="/images/gmail.png" className="connect" alt="gmail" />
            </Button>{" "}
            {/* <Form.Item {...tailLayout}> */}
            <Btn
              type="primary"
              htmlType="submit"
              className="mt-5 mb-3 h3 pl-3 mr-5 pr-3 btn-submit"
            >
              SIGN UP
            </Btn>
            <p>
              {" "}
              Already have an account?{" "}
              <Link to="/login" className="text-right pl-3 pt-5 pb-3 h5">
                Login
              </Link>
            </p>
          </Form>
        </Col>
      </Col>
    </div>
  );
}
