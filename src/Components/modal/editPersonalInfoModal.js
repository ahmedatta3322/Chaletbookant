import React, { useState, useRef, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, connect } from "react-redux";
import { Form, Upload, Row, Col, Input, Alert } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "../../Styling/chaletModal.css";
import "../../Styling/home.css";
import "../../Styling/editPersonalInfoModal.css";
import {
  changePassword,
  EditUser,
  verifyAccount,
} from "../../redux/actions/userActionCreator";
const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }
  console.log(e.fileList);
  return e && e.fileList;
};
function EditPersonalInfoModal(props) {
  const { user, err, onHide, status } = props;
  const dispatch = useDispatch();
  const parentRef = useRef(null);
  const [currentTab, setCurrentTab] = useState("Personal Info");
  const [submit, setSubmit] = useState("");
  const [files, setFiles] = useState({ fileList: [] });
  const { fileList } = files;
  const prop = {
    onRemove: (file) => {
      setFiles((state) => {
        const index = state.fileList.indexOf(file);
        const newFileList = state.fileList.slice();
        newFileList.splice(index, 1);
        return {
          fileList: newFileList,
        };
      });
    },
    beforeUpload: (file) => {
      setFiles((state) => ({
        fileList: [...state.fileList, file],
      }));
      return false;
    },
    fileList,
  };
  useEffect(() => {
    console.log(err);
    // debugger;
    if (
      submit === "submit" &&
      status === "OK" &&
      err !== "The password  doesnot match"
    ) {
      setSubmit("");
      onHide();
      console.log(err);
    }
    console.log(submit, status, err);
  }, [err, onHide, submit, status]);

  const handleCancel = () => {
    props.onHide();
    setSubmit("");
  };
  const handleFilter = (e) => {
    console.log(e.target.textContent);
    const { textContent } = e.target;
    console.log(textContent);
    console.log(currentTab, "after");
    // debugger;
    if (textContent === "Personal Info") {
      parentRef.current.id = "Personal Info";
      console.log(currentTab, "befor");
      setCurrentTab("Personal Info");
    } else if (textContent === "Change Password") {
      parentRef.current.id = "Change Password";
      setCurrentTab("Change Password");
    } else if (textContent === "Verify Account") {
      parentRef.current.id = "Verify Account";
      setCurrentTab("Verify Account");
    }
  };
  const onPersonalFinish = (values) => {
    // console.log(values);
    const newValues = { ...values, mobile: `+20${values.mobile}` };
    dispatch(EditUser(newValues));
    props.onHide();
  };
  const onChangePasswordFinish = (values) => {
    console.log(values);
    // debugger;
    dispatch(changePassword(values));
    setSubmit("submit");
    // setSubmit("");
    console.log(err);

    // props.onHide();
  };
  const onVerifyAccountFinish = (values) => {
    // setAbout(values);
    // handleNextClick();
    let formData = new FormData();
    fileList.forEach((file) => {
      formData.append("card_images[]", file);
    });
    dispatch(verifyAccount(formData));
    props.onHide();
  };
  // console.log(user.first_name);
  return (
    <div>
      <Modal
        {...props}
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="d-block pb-0">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="title h1 mr-5 mb-3 m-3"
          >
            Edit
          </Modal.Title>
          <div className="mt-3 tabs">
            {currentTab === "Personal Info" && <div className="left-div"></div>}

            <Button className="tab p-3 mb-5" onClick={handleFilter}>
              Personal Info
            </Button>
            {currentTab === "Change Password" && (
              <div className="left-div"></div>
            )}
            <Button className="tab p-3 mb-5" onClick={handleFilter}>
              Change Password
            </Button>
            {currentTab === "Verify Account" && (
              <div className="left-div"></div>
            )}
            <Button
              className="tab p-3 mb-5"
              onClick={handleFilter}
              disabled={user.status === "verified" ? true : false}
            >
              Verify Account
            </Button>
          </div>
        </Modal.Header>
        {currentTab === "Personal Info" && (
          <Modal.Body id="Personal Info" ref={parentRef} className="w-form">
            <Form
              name="validate_other"
              className="ml-5 h2"
              // {...formItemLayout}
              onFinish={onPersonalFinish}
            >
              <Row>
                <Col span={13}>
                  <Form.Item>
                    <Form.Item
                      label="USER NAME"
                      className="mb-0 h4 labels ml-3"
                    >
                      <i class="fas fa-user iconn"></i>
                    </Form.Item>
                    <Form.Item
                      noStyle
                      rules={[
                        { required: true, message: "Username is required" },
                      ]}
                      name="first_name"
                      initialValue={user.first_name}
                    >
                      <Input
                        // value={state.first_name}
                        // onChange={handleChange}
                        placeholder="ex. Jessica Alexander"
                        style={{ width: "33rem" }}
                      />
                    </Form.Item>
                  </Form.Item>
                  <Form.Item>
                    <Form.Item label="EMAIL" className="mb-0 h4 labels ml-3">
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
                      initialValue={user.email}
                    >
                      <Input
                        // value={state.email}
                        style={{ width: "33rem" }}
                        placeholder="ex. Jessica Alexander@gmail.com"
                      />
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col span={1} offset={15}></Col>
              </Row>

              <Row>
                <Col span={13}>
                  <Form.Item>
                    <Form.Item label="PHONE NO" className="mb-0 h4 labels ml-3">
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
                      initialValue={user.mobile && user.mobile.slice(3)}
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
                </Col>
              </Row>

              <Modal.Footer className="modalFooter">
                <Button
                  variant="outline-primary"
                  className="rounded"
                  type="submit"
                >
                  Save
                </Button>{" "}
                <Button
                  variant="outline-secondary"
                  className="rounded"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        )}
        {currentTab === "Change Password" && (
          <Form
            className="pt-3 pl-3 pr-3 ml-1"
            onFinish={onChangePasswordFinish}
          >
            <Modal.Body id="Change Password" ref={parentRef} className="w-form">
              <Form.Item>
                <Form.Item label="OLD PASSWORD" className="mb-0 h4 labels ml-3">
                  {" "}
                  <i class="fas fa-lock iconn f-icon"></i>
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
                  name="current_password"
                >
                  <Input.Password
                    // onChange={handleChange}
                    style={{ width: "33rem" }}
                  />
                </Form.Item>
              </Form.Item>
              {err && submit && (
                <Alert
                  message="this password does not match your old password"
                  type="error"
                  showIcon
                  className="mb-3 mr-5"
                />
              )}
              <Form.Item>
                <Form.Item label="NEW PASSWORD" className="mb-0 h4 labels ml-3">
                  <i class="fas fa-lock iconn f-icon"></i>{" "}
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
                  name="new_password"
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
                  className="mb-0 h4 labels ml-3"
                >
                  {" "}
                  <i class="fas fa-lock iconn f-icon"></i>
                </Form.Item>
                <Form.Item
                  noStyle
                  dependencies={["new_password"]}
                  className="mb-0 h4"
                  name="c_password"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("new_password") === value) {
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
              <Modal.Footer className="modalFooter">
                <Button
                  variant="outline-primary"
                  className="rounded"
                  type="submit"
                >
                  Save
                </Button>{" "}
                <Button
                  variant="outline-secondary"
                  className="rounded"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal.Body>
          </Form>
        )}
        {currentTab === "Verify Account" && (
          <Form className="pt-3 pl-3 pr-3" onFinish={onVerifyAccountFinish}>
            <Modal.Body id="Verify Account" ref={parentRef}>
              <Form.Item label="VERIFY ACCOUNT" className="label"></Form.Item>
              <Form.Item
                // className="w-upload"
                name="card_images"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                // noStyle
                rules={[
                  {
                    required: true,
                    message: "Please upload your ID!",
                  },
                ]}
              >
                <Upload.Dragger
                  // name="files"
                  {...prop}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag to Upload Your ID
                  </p>
                </Upload.Dragger>
                {/* )} */}

                {/* <Upload.Dragger name="files" {...prop2}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag Image to this area to upload
                </p>
              </Upload.Dragger> */}
              </Form.Item>

              <Modal.Footer className="modalFooter">
                <Button variant="outline-primary" type="submit">
                  Save
                </Button>{" "}
                <Button variant="outline-secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal.Body>
          </Form>
        )}
      </Modal>
    </div>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.Users.user,
    err: reduxState.Users.errorMessg,
    status: reduxState.Users.status,
  };
};
export default connect(mapStateToProps)(EditPersonalInfoModal);
