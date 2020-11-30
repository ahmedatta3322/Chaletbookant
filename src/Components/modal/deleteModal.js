import React from "react";
import { Modal, Button } from "react-bootstrap";
export default function DeleteModal(props) {
  const { handleDelete } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      //   show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>do you want to delete this item ?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="text-dark"
          onClick={props.onHide}
        >
          {" "}
          Cancel
        </Button>

        <Button variant="primary" className="text-dark" onClick={handleDelete}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
