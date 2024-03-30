import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import modalback from "../assets/images/modal/image.png";
import { Image, ModalBody } from "react-bootstrap";
import cup from "../assets/images/modal/modaltea.webp";
import "../assets/css/Modal.css";
import Form from "react-bootstrap/Form";

function ModalButton(props) {
  const { showModal, handleClose } = props;
  return (
    <>
      <Modal
        size="lg"
        show={props.showModal}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-sm">
        <div className="row">
          <div
            className="col"
            style={{
              backgroundImage: `url(${modalback})`,
              backgroundSize: "contain",
              height: "550px",
              maxWidth: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: " 18% 0%",
            }}>
            <Image src={cup} className="cup_image" />
          </div>
          <div className="col my-5 mx-5">
            <h3>
              Let’s Brew Success For{" "}
              <span className="fw-bold"> Your Business!</span>
            </h3>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="email"
                  placeholder="Name"
                  autoFocus
                  className="custom-border"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  autoFocus
                  className="custom-border"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  autoFocus
                  className="custom-border"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="What's your Project about ?"
                  className="custom-border"
                />
              </Form.Group>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={props.handleClose} className="mx-2">
                Save Changes
              </Button>
             
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalButton;
