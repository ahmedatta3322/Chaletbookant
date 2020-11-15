import React from "react";
import { Card } from "react-bootstrap";
import "../../../Styling/usercard.css";
import "../../../Styling/subscribeCard.css";
export default function SubscribeCard() {
  return (
    <div className="subscribeCard">
      <Card className="mt-5 mb-5">
        <Card.Header className="heading">SUBSCRIBTION</Card.Header>
        <Card.Body className="p-1 pb-3">
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
                <i class="fas fa-check  mr-3"></i>Rent
              </Card.Text>

              <Card.Text>
                <i class="fas fa-check  mr-3"></i>Exchange
              </Card.Text>

              <Card.Text>
                <i class="fas fa-check  mr-3"></i> 2/4 Units.
              </Card.Text>
            </div>
            <div className="text-center mb-3 mt-3">
              <div className="emptydivright"></div>
              <h5 className="d-inline-block bluee">Billing Info</h5>
              <div className="emptydivleft"></div>
            </div>

            <div className="text-center bottomcard">
              <div className="date">
                <span className="bill">Next Billing Date </span>
                <span>22/02/2022</span>
              </div>
              <div className="date">
                <span className="bill">Last Billing Date </span>
                <span>20/10/2020</span>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
        {/* <div className='cardfoo'>

</div> */}
      </Card>
    </div>
  );
}
