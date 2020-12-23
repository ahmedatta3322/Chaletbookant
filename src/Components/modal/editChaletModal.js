import React, { useState, useRef, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, connect } from "react-redux";
import {
  Form,
  Select,
  Checkbox,
  Upload,
  // Button as Btn,
  Row,
  Col,
  Input,
} from "antd";
// import { InboxOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import Map from "../map";
import "../../Styling/chaletModal.css";
import "../../Styling/home.css";
import {
  addImage,
  deleteImage,
  EditChalet,
  verifyChalet,
  // getChaletById,
} from "../../redux/actions/chaletActionCreator";
// const { Dragger } = Upload;
const { TextArea } = Input;
const { Option } = Select;
const normFile = (e) => {
  // console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }
  // console.log(e.fileList);
  return e && e.fileList;
};
function EditChaletModal(props) {
  const dispatch = useDispatch();
  console.log(props);
  const { userChalet, chalet } = props;

  const { images, chalet_contruct } = userChalet;
  const parentRef = useRef(null);
  const [currentTab, setCurrentTab] = useState("About Chalet");
  const [location, setLocation] = useState({
    langitude: "29.69843312500002",
    latitude: "27.450745816193173",
  });

  const newImages = images.map((i) => {
    return { uid: i.id, name: i.name, url: i.url, status: "done" };
  });

  // const [imagesChalet, setImagesChalet] = useState({});
  const [files, setFiles] = useState({ fileList: newImages });
  const [fiile, setFile] = useState({
    file: [
      {
        uid: "-1",
        name: "pic.png",
        status: "done",
        url: userChalet.cover,
      },
    ],
    Upload: false,
  });
  const { file } = fiile;
  const { fileList } = files;
  // useEffect(() => {
  // console.log(fileList);
  // setEditChalet(chalet);
  // if (Object.keys(editChalet).length !== 0) {
  //   console.log(chalet.images);
  //   setEditChalet(chalet);
  //   let newImages = editChalet.images.map((i) => {
  //     return { uid: i.id, name: i.name, url: i.url, status: "done" };
  //   });
  //   console.log(newImages);

  //   setFiles({ fileList: newImages });
  // }
  // console.log(fileList);
  // if (fileList[fileList.length - 1]) {
  // dispatch(deleteImage(userChalet.images[image.id]));
  // // console.log("dis");
  // let formData = new FormData();
  // console.log(
  //   typeof fileList[fileList.length - 1],
  //   fileList[fileList.length - 1]
  // );
  // formData.append("chalet_album[]", fileList[fileList.length - 1]);
  // dispatch(addImage(formData, userChalet.id));
  //dispatch(getUserChalet("1"));
  // }
  // }, [fileList, dispatch, userChalet.id, userChalet.cover, images]);
  const newContructs = chalet_contruct.map((i) => {
    return { uid: i.id, name: i.name, url: i.url, status: "done" };
  });
  const [filesDocument, setDocumentsFiles] = useState({
    fileList: newContructs,
  });
  // console.log(filesDocument);
  const prop = {
    onRemove: (file) => {
      console.log(file, fileList, userChalet.images);
      images.map((i) => {
        console.log(i.id);
        console.log(file.name);
        if (i.name === file.name) {
          dispatch(deleteImage(i.id));
        }
        return true;
      });
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
  const prop2 = {
    onRemove: (file) => {
      setFile((state) => {
        // console.log(state.file);
        if (typeof state.file === "object") {
          delete file.file;
          const newFileList = [];
          // console.log(newFileList);
          return {
            file: newFileList,
          };
        } else {
          const index = state.file.indexOf(file);
          const newFileList = state.file.slice();
          newFileList.splice(index, 1);
          // console.log(newFileList);
          return {
            file: newFileList,
          };
        }
      });
      // }
    },
    beforeUpload: (file) => {
      setFile((state) => ({
        file: { ...state.file, file },
        Upload: true,
      }));
      return false;
    },
    file,
  };
  const prop3 = {
    onRemove: (file) => {
      setDocumentsFiles((state) => {
        const index = state.fileList.indexOf(file);
        const newFileList = state.fileList.slice();
        newFileList.splice(index, 1);

        return {
          fileList: newFileList,
        };
      });
    },
    beforeUpload: (file) => {
      console.log(file);
      setDocumentsFiles((state) => ({
        // console.log(state.fileList)
        fileList: [...state.fileList, file],
      }));
      return false;
    },
  };
  // console.log(fileList);
  const handleChange = (fileList1, e) => {
    // console.log(editChalet);
    console.log(e);
    // const newImages = images.map((i) => {
    //   return { uid: i.id, name: i.name, url: i.url, status: "done" };
    // });
    // setFiles(newImages);
    console.log(userChalet, fileList1, fileList);
    if (fileList1.file.status === "removed") {
      // const image = images.length - 1;
      // console.log(images);
      // dispatch(deleteImage(userChalet.images[image.id]));
      // console.log(editChalet);
      // const newImages = chalet.images.map((i) => {
      //   return { uid: i.id, name: i.name, url: i.url, status: "done" };
      // });
      // setFiles(newImages);
    }

    // fileList = fileList.map((i) => {
    //   return { uid: i.id, name: i.name, url: i.url, status: "done" };
    // });
    // return { uid: i.id, name: i.name, url: i.url, status: "done" };
    //console.log("change", fileList, e);
    // let file1 = new File(fileList[fileList.length - 1]);
    else if (fileList1.fileList > fileList) {
      let formData = new FormData();
      formData.append("chalet_album[]", fileList1.file);

      dispatch(addImage(formData, userChalet.id));
    }
  };
  console.log(chalet);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  // console.log(fileList);
  const handleFilter = (e) => {
    // console.log(e.target.textContent);
    const { textContent } = e.target;
    // console.log(textContent);
    // console.log(currentTab, "after");
    // debugger;
    if (textContent === "About Chalet") {
      //   parentRef.current.id = "aboutChalet";
      console.log(currentTab, "befor");
      setCurrentTab("About Chalet");
    } else if (textContent === "Images") {
      // parentRef.current.id = "Images";
      setCurrentTab("Images");
    } else if (textContent === "Verification") {
      // parentRef.current.id = "Verification";
      setCurrentTab("Verification");
    }
  };
  const handleCancel = () => {
    props.onHide();
    setCurrentTab("About Chalet");
  };
  const moveMarker = (props, x) => {
    const { position } = x;
    setLocation((prevState) => ({
      ...prevState,
      langitude: position.lng(),
      latitude: position.lat(),
    }));
    // console.log(state);
  };

  const onFinish = async (values) => {
    // console.log({ ...values, ...location });
    // console.log(values);
    console.log(file.file);

    if (file.file !== undefined) {
      let formData = new FormData();
      if (values.feature) {
        values.feature.forEach((f) => {
          formData.append("feature[]", f);
        });
      }
      console.log(file.file);
      formData.append("cover", file.file);
      await dispatch(EditChalet(userChalet.id, formData));

      for (var pair of formData.entries()) {
        console.log(pair[0] + ":" + pair[1]);
        // data.pair[0] = pair[1];
      }
      setCurrentTab("About Chalet");
      window.location.reload();
    } else {
      dispatch(EditChalet(userChalet.id, { ...values, ...location }));
      setCurrentTab("About Chalet");
    }
    // console.log(file.file);
    props.onHide();
    // console.log(currentTab);
  };
  const handleVerifyChalet = (values) => {
    console.log(values.chalet_contruct);
    // console.log(chalet);
    let formData = new FormData();
    filesDocument.fileList.forEach((file) => {
      formData.append("chalet_contruct[]", file);
    });
    // console.log(userChalet.id);
    dispatch(verifyChalet(userChalet.id, formData));
    props.onHide();
  };
  // console.log(about);
  // console.log(userChalet.images);
  // console.log(location.langitude);
  // console.log(location.latitude);
  // console.log({ ...about, ...image, ...location });
  // console.log(fiile.Upload);
  // console.log(file);
  // console.log(userChalet.chalet_contruct.length, "contruct length");
  // console.log(userChalet, "contruct");

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
          Edit Chalet
        </Modal.Title>
        <div className="mt-3 tabs">
          {currentTab === "About Chalet" && <div className="left-div"></div>}

          <Button className="tab p-3 mb-5 mr-3" onClick={handleFilter}>
            About Chalet
          </Button>
          {currentTab === "Images" && <div className="left-div"></div>}
          <Button className="tab p-3 mb-5 mr-3" onClick={handleFilter}>
            Images
          </Button>
          {currentTab === "Verification" &&
            userChalet.verification !== "verified" && (
              <div className="left-div"></div>
            )}
          {userChalet.verification !== "verified" && (
            <Button
              className="tab p-3 mb-5 mr-3"
              onClick={handleFilter}
              disabled={userChalet.verification === "verified" ? true : false}
            >
              Verification
            </Button>
          )}
        </div>
      </Modal.Header>

      {currentTab === "About Chalet" && (
        <Modal.Body id="aboutChalet" ref={parentRef}>
          <Form
            name="validate_other"
            className="ml-1 h2 form"
            // {...formItemLayout}
            onFinish={onFinish}
          >
            <Row>
              <Col span={13}>
                <Form.Item label="Location" className="label mb-0">
                  <Col span={2}>
                    <Row className="add-loction mt-1">
                      <Col span={18} offset={3}>
                        <Map
                          moveMarker={moveMarker}
                          langitude={userChalet && userChalet.langitude}
                          latitude={userChalet && userChalet.latitude}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Form.Item>
                <Form.Item
                  name="address"
                  label="Address"
                  className="input-icons mt-3 label mb-0 mr-3"
                >
                  <Row>
                    <Col span={6}>
                      <Form.Item
                        className="mb-3"
                        name="address"
                        noStyle
                        rules={[
                          { required: true, message: "address is required" },
                        ]}
                        initialValue={userChalet && userChalet.address}
                      >
                        {/* <i class="fas fa-map-marker-alt icon "></i> */}
                        <Input
                          {...props}
                          // onChange={handleChange}
                          name="address"
                          className="input-field d-block p-3 inputs ml-3 mb-3"
                          placeholder="Address of your Chalet "
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
              </Col>
              <Col span={1} offset={15}></Col>
            </Row>

            <Row>
              <Col span={13}>
                <Form.Item
                  className="input-icons label mb-0 mr-3"
                  label="Description"
                >
                  <Row>
                    <Col span={23} className="ml-3">
                      <Form.Item
                        className="mb-3"
                        name="description"
                        rules={[
                          {
                            required: true,
                            message: "Description is required",
                          },
                        ]}
                        noStyle
                        initialValue={userChalet && userChalet.description}
                      >
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
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item
                  label="Fee per night"
                  className="input-icons label mb-2 mr-3"
                >
                  <Row>
                    <Col span={6}>
                      <Form.Item
                        // className="mb-3"
                        name="fees"
                        rules={[
                          { required: true, message: "fees is required" },
                        ]}
                        noStyle
                        initialValue={userChalet && userChalet.fees}
                      >
                        {/* <i class="fas fa-dollar-sign"></i> */}
                        <Input
                          {...props}
                          className="input-field d-block p-3 ml-3 inputs"
                          placeholder="Enter price of the Chalet per night "
                          maxLength={25}
                          type="number"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Row>
                  <Col span={18}>
                    <Form.Item
                      className="input-icons label mt-4 mb-3"
                      label="Availability"
                      hasFeedback
                    >
                      <Form.Item
                        // className="mb-3"
                        name="status"
                        rules={[
                          {
                            required: true,
                            message: "status is required",
                          },
                        ]}
                        noStyle
                        initialValue={userChalet && userChalet.status}
                      >
                        <Select>
                          <Option value="available_to_all">
                            Available To All
                          </Option>
                          <Option value="available_to_rent">
                            Available To Rent
                          </Option>
                          <Option value="available_to_exchange">
                            Available To Exchange
                          </Option>
                          <Option value="available_to_sell">
                            Available To Sell
                          </Option>
                        </Select>
                      </Form.Item>
                    </Form.Item>
                  </Col>
                </Row>
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

                <Form.Item
                  label="Max Guests"
                  className="input-icons label mb-3"
                >
                  <Form.Item
                    className="mb-3"
                    name="max_guests"
                    rules={[
                      { required: true, message: "Max Guests is required" },
                    ]}
                    noStyle
                    initialValue={userChalet && userChalet.max_guests}
                  >
                    {/* <i class="fas fa-users"></i> */}
                    <Input
                      {...props}
                      className="input-field d-block p-3 ml-3 inputs"
                      placeholder="The Number of Guests"
                      maxLength={25}
                      type="number"
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={1} offset={13} className="ml-5">
                <img src="/images/home.png" alt="chalet" />
              </Col>
            </Row>

            <Modal.Footer>
              <Button variant="outline-primary" type="submit">
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
      {currentTab === "Images" && (
        <Form className="pt-3 pl-3 pr-3 form" onFinish={onFinish}>
          <Modal.Body id="images" ref={parentRef}>
            <Form.Item label="Chalet Cover" className="label"></Form.Item>
            <Form.Item
              name="cover"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              {/* {file && ( */}
              {userChalet.cover !== null && (
                <Upload
                  listType="picture-card"
                  {...prop2}
                  defaultFileList={file}
                  // onChange={handleChange}
                  // onPreview={this.handlePreview}
                  // disabled={fiile.Upload ? true : false}
                >
                  {file.length === 0 ? uploadButton : null}
                </Upload>
              )}
              {userChalet.cover === null && (
                <Upload
                  {...prop2}
                  listType="picture-card"
                  //onChange={handleChange}
                  // onPreview={this.handlePreview}
                  // disabled={fiile.Upload ? true : false}
                >
                  {file.length === 1 || file.length === 0 ? uploadButton : null}
                </Upload>
              )}

              {/* <Upload.Dragger
                listType="picture"
                defaultFileList={file}
                // name="files"
                {...prop2}
                disabled={fiile.Upload ? true : false}
                // disabled={true}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag Image to this area to upload
                </p>
              </Upload.Dragger> */}
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

            <Form.Item
              // name="images"
              label="Chalet Photos"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              className="label mb-3"
            >
              <Form.Item
                // className="mb-3"
                // name="images"
                rules={[
                  {
                    required: true,
                    message: "Note : Chalet Photos is required",
                  },
                ]}
                noStyle
                // initialValue={userChalet.images}
              >
                <Upload
                  {...prop}
                  listType="picture-card"
                  fileList={fileList}
                  onChange={handleChange}

                  // onPreview={this.handlePreview}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                {/* <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal> */}
                {/* <Upload listType="picture" {...prop} defaultFileList={fileList}>
                  <Btn icon={<UploadOutlined />}>Upload Chalet photos</Btn>
                </Upload> */}
              </Form.Item>
            </Form.Item>
            <Form.Item
              name="feature"
              label="Chalet Features"
              className="label mb-3 mt-3"
            >
              <Form.Item
                // className="mb-3"
                name="feature"
                rules={[
                  { required: true, message: "Note : feature is required" },
                ]}
                noStyle
                initialValue={userChalet.feature}
              >
                <Checkbox.Group
                  className="ml-4 mb-5"
                  value={userChalet.feature}
                >
                  <Row>
                    <Col span={15}>
                      <Checkbox
                        value="Air Condition"
                        style={{
                          lineHeight: "32px",
                        }}
                        className="mb-2"
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
                        className="mb-2"
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
                        className="mb-2"
                      >
                        Garden
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Form.Item>
            <Modal.Footer className="modalFooter">
              <Button variant="outline-primary" type="submit">
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

      {currentTab === "Verification" && (
        <Modal.Body id="verification" ref={parentRef}>
          {" "}
          <Form className="form" onFinish={handleVerifyChalet}>
            <Form.Item
              label="Chalet license"
              className="label mb-3"
            ></Form.Item>
            <Form.Item
              name="chalet_contruct"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Form.Item
                // className="mb-3"
                // name="images"
                rules={[
                  {
                    required: true,
                    message: "Note : Chalet Photos is required",
                  },
                ]}
                noStyle
              >
                {userChalet.chalet_contruct.length !== 0 && (
                  <Upload
                    style={{ width: "104px", height: "104px" }}
                    {...prop3}
                    listType="picture-card"
                    defaultFileList={filesDocument.fileList}
                    // onChange={handleChange}
                    // onPreview={this.handlePreview}
                  >
                    {filesDocument.fileList.length >= 8 ? null : uploadButton}
                  </Upload>
                )}
                {userChalet.chalet_contruct.length === 0 && (
                  <Upload
                    {...prop3}
                    listType="picture-card"
                    style={{ width: "104px", height: "104px" }}
                    // onChange={handleChange}
                    // onPreview={this.handlePreview}
                    // disabled={fiile.Upload ? true : false}
                  >
                    {userChalet.chalet_contruct.length === 0
                      ? uploadButton
                      : null}
                  </Upload>
                )}
                {/* <Upload.Dragger name="files" {...prop3}>
                <p className="ant-upload-drag-icon">
                  <i class="fas fa-file-upload"></i>
                </p>
                <p className="ant-upload-text">Upload the Chalet document</p>
              </Upload.Dragger> */}
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
                  hotel es antiguo, pero está muy bien conservado. Sin embargo,
                  me he quejado de los ruidos. Continuamente escucho gritos de
                  la habitación contigua. Esta primera noche no he podido
                  dormir.
                </p>
                {/* <Checkbox
                  value="I agree the terms, conditions &amp; privacy Policy."
                  style={{
                    lineHeight: "32px",
                  }}
                  rules={[
                    { required: true, message: "Note : feature is required" },
                  ]}
                >
                  I agree the terms, conditions &amp; privacy Policy.
                </Checkbox> */}
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject("Should accept agreement"),
                    },
                  ]}
                  // {...tailFormItemLayout}
                >
                  <Checkbox>
                    I agree the terms, conditions &amp; privacy Policy.
                  </Checkbox>
                </Form.Item>
              </Col>
            </Row>
            <Modal.Footer className="modalFooter-third">
              <Button variant="outline-primary" type="submit">
                Verify
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
    </Modal>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    chalet: reduxState.Chalets.chalet,
  };
};
export default connect(mapStateToProps)(EditChaletModal);
