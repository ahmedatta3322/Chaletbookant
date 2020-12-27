import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Form, Upload } from "antd";
import { useDispatch } from "react-redux";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import "../../../Styling/usercard.css";
import EditPersonalInfoModal from "../../../Components/modal/editPersonalInfoModal";
import { addAvatar } from "../../../redux/actions/userActionCreator";
function UserCard(props) {
  const { user, chaletsCount } = props;
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [state, setState] = useState({ loading: false });
  const [fiile, setFile] = useState({ file: "", Upload: false });
  const { file } = fiile;
  // console.log(user, chaletsCount, match.url.slice(1, 8));
  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      dispatch(addAvatar({ avatar: reader.result }));
      // window.location.reload();
      setFile((prevState) => ({
        ...prevState,
        file: reader.result,
        Upload: true,
      }));
      setFile(file);
    };
    console.log(file);
    // dispatch(addAvatar({ avatar: reader.result }));
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  // function beforeUpload(file) {
  //   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  //   console.log(isJpgOrPng);
  //   if (!isJpgOrPng) {
  //     message.error("You can only upload JPG/PNG file!");
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     message.error("Image must smaller than 2MB!");
  //   }
  //   debugger;
  //   return isJpgOrPng && isLt2M;
  // }
  const prop2 = {
    onRemove: (file) => {
      setFile((state) => {
        const index = state.file.indexOf(file);
        const newFileList = state.file.slice();
        newFileList.splice(index, 1);
        return {
          file: newFileList,
        };
      });
    },
    beforeUpload: (file) => {
      getBase64(file);
      console.log(file);
      setFile((state) => ({
        file: { ...state.file, file },
        Upload: true,
      }));
      return false;
    },
    file,
  };
  // console.log(file);
  // const handleChange = (info) => {
  //   console.log(info.file);
  // if (info.file.status === "uploading") {
  //   setState({ loading: true });
  //   return;
  // }
  // if (info.file.status === "done") {
  //   // Get this url from response in real world.
  //   console.log(info.file.originFileObj);
  //   getBase64(info.file.originFileObj, (imageUrl) =>
  //     setState({
  //       imageUrl,
  //       loading: false,
  //     })
  //   );
  // }
  // };
  // const { loading, imageUrl } = state;
  const uploadButton = (
    <div>
      <LoadingOutlined /> : <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  // console.log(loading);
  return (
    <div>
      <Card className="userCard">
        <Form.Item
          name="upload"
          valuePropName="fileList"
          className="upload-img uploader"

          // getValueFromEvent={normFile}
          // extra="longgggggggggggggggggggggggggggggggggg"
        >
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader uploader"
            showUploadList={false}
            action={`${user.avatar}`}
            {...prop2}
            // onChange={handleChange}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="avatar"
                className="img-Card uploader"
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        {/* <Card.Img
          variant="top"
          src={`${user.avatar}`}
          className="img-Card"
        ></Card.Img> */}
        {user.avatar === "http://app.apptechegy.com/images/defaultuser.jpg" && (
          <Form.Item
            name="upload"
            valuePropName="fileList"
            className="upload-img uploader"
            // getValueFromEvent={normFile}
            // extra="longgggggggggggggggggggggggggggggggggg"
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader uploader"
              showUploadList={false}
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              // beforeUpload={beforeUpload}
              {...prop2}
              // onChange={handleChange}
            >
              {user.avatar ===
              "http://app.apptechegy.com/images/defaultuser.jpg" ? (
                <img
                  className="img-Card uploader"
                  src="http://app.apptechegy.com/images/defaultuser.jpg"
                  alt="avatar"
                  style={{ width: "100%" }}
                />
              ) : (
                <img
                  className="img-Card uploader"
                  src={user.avatar}
                  alt="avatar"
                  style={{ width: "100%" }}
                />
              )}
            </Upload>
          </Form.Item>
        )}
        <div className="info">
          <span className="color h6 phone">
            <i className="fas fa-phone-alt mr-2 blue"></i>
            <p className="d-inline-block count">{user.mobile}</p>
          </span>
          <span className="color h6">
            <i className="fas fa-envelope mr-2 ml-3 blue"></i>
            <p className="d-inline-block count mt-3">{user.email}</p>
          </span>
        </div>

        <Button
          variant="outline-primary"
          className="edit"
          roundedCircle
          onClick={() => setModalShow(true)}
        >
          <i className="fas fa-edit text-white editIcon"></i>
        </Button>
        <EditPersonalInfoModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        {/* <Card.Body className="p-3">
          <Card.Title className="h5">ABOUT</Card.Title>
          <Card.Text className="h6">
            {user.description}
            {user.description && <NavLink className="h5">Read More</NavLink>}
          </Card.Text>
        </Card.Body> */}
        <div className="cardFooter userCard-footer">
          <Button variant="primary" className="filterCount active cardButton">
            <img src="/images/Chalets-Icon.png" alt="chalet" />
            <br />
            <span className=" mt-1 h4">My Chalets</span>
            <br />
            <span className="count h3">{chaletsCount}</span>
          </Button>
          <Button variant="primary" className="filterCount cardButton">
            <img src="/images/requests icon.png" alt="chalet" />
            <br />
            <span className="mt-1 h4">Requests </span>
            <br />
            <span className="count h3">1000</span>
          </Button>
          <Button variant="primary" className="filterCount cardButton">
            <img src="/images/view icon.png" alt="chalet" />
            <br />
            <span className="mt-1 h4">Views</span>
            <br />
            <span className="count h3">10.000</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
export default UserCard;
