import React from "react";
import { Card, Button } from "react-bootstrap";

import { Button as Btn, Form, Upload } from "antd";
import "../../../Styling/usercard.css";
function UserCard(props) {
  const { user, chaletsCount } = props;
  // console.log(user, chaletsCount, match.url.slice(1, 8));
  return (
    <div>
      <Card className="userCard">
        <Card.Img variant="top" src={`${user.avatar}`} className="img-Card" />
        {user.avatar === "http://app.apptechegy.com/images/defaultuser.jpg" && (
          <Form.Item
            name="upload"
            valuePropName="fileList"
            className="upload-img"
            // getValueFromEvent={normFile}
            // extra="longgggggggggggggggggggggggggggggggggg"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Btn
                className="bg-transparent border-0 add-img"
                disabled={user.mobile_verfied === 0 ? true : false}
                icon={
                  <i className="fas fa-plus-circle color add mr-3 i-add"></i>
                }
              ></Btn>
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
        <Button variant="outline-primary" className="edit" roundedCircle>
          <i className="fas fa-edit text-white editIcon"></i>
        </Button>
        {/* <Card.Body className="p-3">
          <Card.Title className="h5">ABOUT</Card.Title>
          <Card.Text className="h6">
            {user.description}
            {user.description && <NavLink className="h5">Read More</NavLink>}
          </Card.Text>
        </Card.Body> */}
        <div className="cardFooter">
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
