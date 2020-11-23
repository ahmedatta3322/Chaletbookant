import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Col, Button as Btn, Form, Input, Alert } from "antd";
import { Link, withRouter } from "react-router-dom";
import { getUsers, Signup } from "../redux/actions/userActionCreator";
import "../Styling/signup.css";
function SignUp(props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  useEffect(() => {
    dispatch(getUsers());
    setError(props.err);
    // console.log(props.err);
  }, [props.err, dispatch]);
  const onFinish = (values) => {
    const newValues = { ...values, mobile: `+20${values.mobile}` };
    console.log(newValues);
    dispatch(Signup(newValues));
    console.log(props);
    if (props.users.length !== 0) {
      props.history.push(`/profile/${props.users[props.users.length - 1].id}`);
    }
  };
  return (
    <div>
      <Col className="ml-0 mr-5 ">
        <Col offset={4}>
          <Form {...layout} form={form} name="register" onFinish={onFinish}>
            <Form.Item>
              <Form.Item label="USER NAME" className="mb-0 h4 labels ml-4">
                <i class="fas fa-user iconn"></i>
              </Form.Item>
              <Form.Item
                noStyle
                rules={[{ required: true, message: "Username is required" }]}
                name="first_name"
              >
                <Input
                  // onChange={handleChange}
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
              >
                <Input
                  style={{ width: "33rem" }}
                  placeholder="ex. Jessica Alexander@gmail.com"
                />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Form.Item label="PHONE NO" className="mb-0 h4 labels ml-4">
                {" "}
                <i class="fas fa-phone-alt iconn"></i>
              </Form.Item>
              <Form.Item
                noStyle
                name="mobile"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  addonBefore="+20"
                  // value={state.mobile}
                  // type="number"
                  // onChange={handleChange}
                  style={{ width: "33rem" }}
                />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Form.Item label="PASSWORD" className="mb-0 h4 labels ml-4">
                {" "}
                <i class="fas fa-lock iconn"></i>
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
                    message: "The password must be at least 8 characters.",
                  },
                ]}
                // hasFeedback
                name="password"
              >
                <Input.Password
                  // onChange={handleChange}
                  style={{ width: "33rem" }}
                />
              </Form.Item>
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
                      if (!value || getFieldValue("password") === value) {
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
                  style={{ width: "33rem" }}
                />
              </Form.Item>
            </Form.Item>
            {error && (
              <Alert message={error} type="error" showIcon className="mb-3" />
            )}
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
const mapStateToProps = (reduxState) => {
  return {
    users: reduxState.Users.users,
    err: reduxState.Users.errorMessg,
    auth: reduxState.Users.auth,
  };
};
export default connect(mapStateToProps)(withRouter(SignUp));
