import React from "react";
import { Card, Button, NavLink } from "react-bootstrap";
import "../../../Styling/usercard.css";
export default function UserCard() {
  return (
    <div>
      <Card className="userCard">
        <Card.Img
          variant="top"
          src="/images/Person-on-rock.png"
          className="img-Card"
        />
        <div className="info">
          <span className="color h6 phone">
            <i class="fas fa-phone-alt mr-2 blue"></i>
            <p className="d-inline-block count">010005004412</p>
          </span>
          <span className="color h6">
            <i class="fas fa-envelope mr-2 ml-3 blue"></i>
            <p className="d-inline-block count mt-3">Gabriella@gmail.com</p>
          </span>
        </div>
        <Button variant="outline-primary" className="edit" roundedCircle>
          <i class="fas fa-edit text-white editIcon"></i>
        </Button>
        <Card.Body className="p-3">
          <Card.Title className="h5">ABOUT</Card.Title>
          <Card.Text className="h6">
            Me gusta mucho mi casa porque puedo inviter a mis amigos a cenar o a
            ver el fútbol en mi televisión. Además, cerca de mi casa hay muchas
            tiendas para hacer la compra: panadería, carnicería o pescadería...
            <NavLink className="h5">Read More</NavLink>
          </Card.Text>
        </Card.Body>
        <div className="cardFooter">
          <Button variant="primary" className="filterCount active cardButton">
            <img src="/images/Chalets-Icon.png" alt="chalet" />
            <br />
            <span className=" mt-1 h4">My Chalets</span>
            <br />
            <span className="count h3">112</span>
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
