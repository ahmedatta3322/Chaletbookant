import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import "../../../Styling/chaletcard.css";
export default function ChaletCard() {
  return (
    <Card className="mt-5">
      <Card.Img variant="top" src="/images/chalet.png" className="imgCard" />
      <Card.Body className="pb-3">
        <h3>James smith Chalet</h3>
        <h4>
          $ 3,10,500<Badge className="badge p-3 ml-3">For Sell</Badge>
        </h4>
        <Card.Title>ABOUT</Card.Title>
        <Card.Text className="coloor">
          Me gusta mucho mi casa porque puedo inviter a mis amigos a cenar o a
          ver el fútbol en mi televisión. Además, cerca de mi casa hay muchas
          tiendas para hacer la compra: panadería, carnicería o pescadería...
        </Card.Text>
      </Card.Body>
      <div className="footerCard">
        <Button variant="primary" className="active m-3 pl-3 pr-3 p-3 view">
          view
        </Button>
      </div>
    </Card>
  );
}
