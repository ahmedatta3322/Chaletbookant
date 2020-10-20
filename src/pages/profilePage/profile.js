import React from "react";
import Nav from "../../Layout/nav";
import { Jumbotron, Row, Col } from "react-bootstrap";
import UserCard from "./components/usercard";
import "../../Styling/profile.css";
export default function Profile() {
  return (
    <div>
      <Nav />
      <Jumbotron fluid>
        {/* <Container> */}
        <Row>
          <UserCard />

          <Col></Col>
        </Row>

        {/* </Container> */}
      </Jumbotron>
    </div>
  );
}
