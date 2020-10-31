import React, { useState, useRef, useEffect } from "react";
import { Modal } from "react-bootstrap";
import {
  Form,
  Select,
  InputNumber,
  Checkbox,
  Button,
  Upload,
  Row,
  Col,
  Input,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import Map from "../map";
import "../../Styling/chaletModal.css";
import "../../Styling/home.css";
const { TextArea } = Input;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};
export default function AboutChaletModal(props) {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [next, setNext] = useState(false);
  const [currentTab, setCurrentTab] = useState(
    parentRef.current && parentRef.current.id ? parentRef.current.id : ""
  );
  // useEffect(() => {
  //   console.log(parentRef, "p");
  //   // console.log(currentTab);
  // });
  const handleNextClick = () => {
    // console.log(parentRef.current.id);
    setCurrentTab(parentRef.current.id);
    if (parentRef.current.id === "aboutChalet") {
      parentRef.current.id = "images";
      setCurrentTab("images");
      setNext(true);
    } else if (parentRef.current.id === "images") {
      console.log(parentRef, "p");
      parentRef.current.id = "verification";
      setCurrentTab("verification");
      console.log(currentTab, "after");
      setNext(true);
    } else {
      setNext(false);
    }
    console.log(currentTab, "pn");
  };
  const handlePreviousClick = () => {
    if (parentRef.current.id === "images") {
      parentRef.current.id = "aboutChalet";
      setNext(false);
    } else if (parentRef.current.id === "verification") {
      console.log(parentRef, "p");
      parentRef.current.id = "images";
      console.log(parentRef, "after");
      setNext(false);
    } else {
      setNext(true);
    }
  };
  const handleCancel = () => {
    props.onHide();
    setNext(false);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  console.log(currentTab, "p");
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="d-block pb-0">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="title h1 mr-5 mb-3 m-3"
        >
          Add Chalet
        </Modal.Title>
        <div className="mt-3 tabs">
          <div className="left-div"></div>
          <Button className="tab p-3 mb-5 mr-3">About Chalet</Button>
          <Button className="tab p-3 mb-5 mr-3">Images</Button>
          <Button className="tab p-3 mb-5 mr-3">Verification</Button>
        </div>
      </Modal.Header>
      <Modal.Body
        id="aboutChalet"
        ref={parentRef}
        className={`${next ? "d-none" : "d-block"}`}
        // className="d-none"
      >
        <Form
          name="validate_other"
          className="ml-1 h2"
          {...formItemLayout}
          onFinish={onFinish}
        >
          {/* <Form.Item
            name="select"
            label="Select"
            hasFeedback
            rules={[
              {
                required: true,
                
                message: "Please select your country!",
              },
            ]}
          ></Form.Item> */}
          <Row>
            <Col span={13}>
              <Form.Item label="Location" className="label">
                <Col span={2}>
                  <Row className="add-loction mt-5">
                    <Col span={16} offset={1}>
                      <Map />
                    </Col>
                  </Row>
                </Col>
              </Form.Item>
              <Form.Item label="Address" className="input-icons label">
                <Col>
                  {/* <i class="fas fa-map-marker-alt icon "></i> */}
                  <Input
                    {...props}
                    className="input-field d-block p-3  inputs"
                    placeholder="Address of your Chalet "
                  />
                </Col>
              </Form.Item>
            </Col>
            <Col span={1} offset={15}></Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item className="input-icons label" label="Description">
                <Row className="ml-3">
                  <Col span={25}>
                    {/* <i class="fas fa-pen icon "></i> */}
                    <TextArea
                      placeholder="textarea with clear icon"
                      allowClear
                      rows="4"
                      cols="60"
                    />
                    {/* <Form.Control
                    className="input-field inputs ml-3"
                    as="textarea"
                    rows="4"
                    cols="55"
                  /> */}
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label="Fee per night" className="input-icons label">
                <Row>
                  <Col span={6}>
                    {/* <i class="fas fa-dollar-sign"></i> */}
                    <Input
                      {...props}
                      className="input-field d-block p-3 ml-3 inputs"
                      placeholder="Enter price of the Chalet per night "
                      maxLength={25}
                      type="number"
                    />
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item
                className="input-icons label"
                name="select"
                label="Availability"
                hasFeedback
                // rules={[
                //   {
                //     required: true,
                //     // message: 'Please select your country!',
                //   },
                // ]}
              >
                <Select defaultValue="Available To All">
                  <Option value="Available To All">Available To All</Option>
                  <Option value="Available To Rent">Available To Rent</Option>
                  <Option value="Available To Exchange">
                    Available To Exchange
                  </Option>
                  <Option value="Available To Sell">Available To Sell</Option>
                </Select>
              </Form.Item>
              {/* <Form.Group
                  inline
                  className="d-flex inputs"
                  controlId="formGridState"
                >
                  <Form.Label>Availability</Form.Label>
                  <Form.Control as="select" defaultValue="Available To All">
                    <option>Available To All</option>
                    <option>Available To Rent</option>
                    <option>Available To Exchange</option>
                    <option>Available To Sell</option>
                  </Form.Control>
                </Form.Group> */}

              <Form.Item label="Max Guests" className="input-icons label">
                {/* <i class="fas fa-users"></i> */}
                <Input
                  {...props}
                  className="input-field d-block p-3 ml-3 inputs"
                  placeholder="The Number of Guests"
                  maxLength={25}
                  type="number"
                />
              </Form.Item>
            </Col>
            <Col span={1} offset={13} className="ml-5">
              <img src="/images/home.png" alt="chalet" />
            </Col>
          </Row>

          <Modal.Footer>
            <Button
              ref={childRef}
              variant="outline-primary"
              onClick={handleNextClick}
            >
              Next <i class="fas fa-angle-double-right ml-3"></i>
            </Button>{" "}
            <Button variant="outline-secondary" onClick={props.onHide}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
      <Modal.Body
        id="images"
        // ref={parentRef}
        className={`${
          next && parentRef.current && parentRef.current.id === "images"
            ? "d-block"
            : "d-none"
        }`}
        // className="d-none"
      >
        <Form className="pt-3 pl-3 pr-3">
          <Form.Item label="Chalet Cover" className="label">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag Image to this area to upload
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <Form.Item
            name="upload"
            label="Chalet Photos"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            className="label"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="checkbox-group"
            label="Chalet Features"
            className="label"
          >
            <Checkbox.Group>
              <Row>
                <Col span={15}>
                  <Checkbox
                    value="Air Condition"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Air Condition
                  </Checkbox>
                </Col>
                <Col span={15}>
                  <Checkbox
                    value="WI-FI"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    WI-FI
                  </Checkbox>
                </Col>
                <Col span={15}>
                  <Checkbox
                    value="Garden"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Garden
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handlePreviousClick}>
              <i class="fas fa-angle-double-left"></i>Pervious
            </Button>
            <Button
              variant="outline-primary"
              // ref={childRef}
              variant="outline-primary"
              onClick={handleNextClick}
            >
              Next <i class="fas fa-angle-double-right ml-3"></i>
            </Button>{" "}
            <Button variant="outline-secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>

      <Modal.Body
        id="verification"
        // ref={parentRef}
        className={`${
          next && parentRef.current && parentRef.current.id === "verification"
            ? "d-block"
            : "d-none"
        }`}
        // className="d-block"
      >
        {" "}
        <Form>
          <Form.Item label="Chalet license" className="label m-5">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <i class="fas fa-file-upload"></i>
                </p>
                <p className="ant-upload-text">Upload the Chalet document</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <div className="label ml-5 h4">
            <span className="yellow">Chalet</span>
            <span className="blue">Book</span> Terms &amp; Conditions
          </div>
          <Row className="ml-5">
            <Col span={24}>
              <p className="terms p-3 m-5">
                Me gusta mucho la ciudad. La zona vieja es realmente bonita y
                aquí la gente es muy agradable. Hay un parque muy grande cerca
                de mi hotel. Me gusta observar a la gente desde mi ventana. El
                hotel es antiguo, pero está muy bien conservado. Sin embargo, me
                he quejado de los ruidos. Continuamente escucho gritos de la
                habitación contigua. Esta primera noche no he podido dormir.
              </p>
              <Checkbox
                value="I agree the terms, conditions &amp; privacy Policy."
                style={{
                  lineHeight: "32px",
                }}
              >
                I agree the terms, conditions &amp; privacy Policy.
              </Checkbox>
            </Col>
          </Row>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handlePreviousClick}>
              <i class="fas fa-angle-double-left"></i>
              Pervious
            </Button>
            <Button
              variant="outline-primary"
              // ref={childRef}
              variant="outline-primary"
            >
              Done <i class="fas fa-angle-double-right ml-3"></i>
            </Button>{" "}
            <Button variant="outline-secondary" onClick={handleCancel}>
              Skip
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
