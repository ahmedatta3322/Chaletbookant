import React from "react";
import { Button } from "react-bootstrap";
import "../../../Styling/usercard.css";
import "../../../Styling/profilefilter.css";
export default function ProfileFilter() {
  return (
    <div>
      <Button variant="primary" className="filter active shadow p-5 cardButton">
        <img src="/images/Chalets-Icon.png" alt="chalet" />
        <br />
        <span className=" mt-1">My Chalets</span>
      </Button>
      <Button
        variant="primary"
        className="filter bg-light ml-5 shadow p-5 cardButton"
      >
        <img src="/images/requests icon.png" alt="chalet" />
        <br />
        <span className="text-secondary mt-1">Requests </span>
      </Button>
    </div>
  );
}
