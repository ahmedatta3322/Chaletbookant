import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../../Styling/usercard.css";
import "../../../Styling/subscribeCard.css";
export default function SubscribeCard() {
  return (
    <div>
      <Card className="mt-5">
        <Card.Header className="color">SUBSCRIBTION</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>
            <img
              src="/images/subscribtion shape.png"
              className="shape"
              alt="shape"
            />
            <div className="leftSide text-center">
              <h4 className="text-white">Advance</h4>
              <span className="price">10$</span>
            </div>
            <div className="rightSide text-white ">
              <Card.Text>
                {" "}
                <i class="fas fa-check blue-icon mr-3"></i>Rent
              </Card.Text>

              <Card.Text>
                <i class="fas fa-check blue-icon mr-3"></i>Exchange
              </Card.Text>

              <Card.Text>
                <i class="fas fa-check blue-icon mr-3"></i>Up to 2/4 Units.
              </Card.Text>
            </div>
          </Card.Text>
        </Card.Body>
        {/* <div className='cardfoo'>

</div> */}
      </Card>
    </div>
  );
}
