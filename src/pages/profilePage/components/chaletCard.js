import React from "react";
import { Card, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../../Styling/chaletcard.css";
export default function ChaletCard() {
  return (
    <Card className="mt-5">
      <Card.Img variant="top" src="/images/chalet.png" className="imgCard" />
      <Card.Body className="p-2">
        <h3>James smith Chalet</h3>
        <h4>
          $ 3,10,500<Badge className="badge p-3 ml-3">For Sell</Badge>
        </h4>
        <div className="features d-flex">
          <div className="h6 air">
            <img
              src="/images/air condition.png"
              className="featureImg"
              alt="air condition"
            />
            3 Air Conditioner
          </div>
          <div className="h6">
            <img src="/images/garden.png" className="featureImg" alt="garden" />
            2 Garden
          </div>
          <div className="h6 ml-2">
            <img src="/images/wifi.png" className="featureImg" alt="wifi" />1
            Wi-Fi
          </div>
        </div>
        <Card.Title>ABOUT</Card.Title>
        <Card.Text className="coloor">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Card.Text>
      </Card.Body>
      <div className="footerCard">
        <NavLink
          to="/viewchalet/1"
          variant="primary"
          className="active m-3 pl-4 pr-4 p-3 view text-white"
        >
          view
        </NavLink>
      </div>
    </Card>
  );
}
