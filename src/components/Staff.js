import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./About.css";
const submit = (data) => {
  axios
    .post("https://61ef7787732d93001778e3c3.mockapi.io/Staff", data)
    .then((x) => {
      console.log(x);
    });
};

function Staff() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [mobile, setMobile] = useState(" ");
  const [dob, setDob] = useState(" ");
  return (
    <div className="cent">
      <div className="div-wid">
        <h1>Staff Details</h1>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="mobile"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>D.O.B</Form.Label>
            <Form.Control
              type="text"
              placeholder="D.O.B"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const data = { name, email, mobile, dob };
              submit(data);
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Staff;
