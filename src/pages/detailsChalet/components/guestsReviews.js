import React from "react";
import { Rate } from "antd";
import { Card } from "react-bootstrap";
import GuestsComments from "../components/comments";
import "../../../Styling/guestReviews.css";
export default function GuestsReviews({ rate }) {
  console.log(rate);
  return (
    <div>
      <Card className="Review-card">
        <Card.Header className="text-white h3 pl-5 pr-5 pt-4 pb-3">
          Guests Reviews
          <div className="mt-3">
            <Rate defaultValue={rate && rate.rate} />
          </div>
        </Card.Header>
        <Card.Body className="p-3">
          <Card.Title className="comment-title">Comments</Card.Title>
          <Card.Text>
            <GuestsComments />
            <GuestsComments>
              <GuestsComments />
            </GuestsComments>
            <GuestsComments />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
