import React from "react";
import { Card, Button, NavLink } from "react-bootstrap";
import "../../../Styling/usercard.css";
export default function UserCard() {
  return (
    <div class="userCard">
      <Card>
        <Card.Img
          variant="top"
          src="/images/Person-on-rock.png"
          className="imgCard"
        />
        <div className="info">
          <span className="color">
            <i class="fas fa-phone-alt mr-2 blue"></i>010005004412
          </span>
          <span className="color">
            <i class="fas fa-envelope mr-2 ml-2 blue"></i>Gabriella@gmail.com
          </span>
        </div>
        <Button variant="outline-primary" className="edit" roundedCircle>
          <i class="fas fa-pen text-white"></i>
        </Button>
        <Card.Body className="p-3">
          <Card.Title>ABOUT</Card.Title>
          <Card.Text>
            Me gusta mucho mi casa porque puedo inviter a mis amigos a cenar o a
            ver el fútbol en mi televisión. Además, cerca de mi casa hay muchas
            tiendas para hacer la compra: panadería, carnicería o pescadería...
            <NavLink>Read More</NavLink>
          </Card.Text>
        </Card.Body>
        <div className="cardFooter">
          <Button variant="primary cardButton" className="filterCount active">
            <img src="/images/Chalets-Icon.png" alt="chalet" />
            <br />
            <span className=" mt-1">My Chalets</span>
            <br />
            <span className="color">112</span>
          </Button>
          <Button variant="primary cardButton" className="filterCount">
            <img src="/images/requests icon.png" alt="chalet" />
            <br />
            <span className="text-secondary mt-1">Requests </span>
            <br />
            <span className="color">1000</span>
          </Button>
          <Button variant="primary cardButton" className="filterCount">
            <img src="/images/view icon.png" alt="chalet" />
            <br />
            <span className="text-secondary mt-1">Views</span>
            <br />
            <span className="color">10.000</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
