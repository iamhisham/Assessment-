import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState, useEffect } from "react";
import "./About.css";

import axios from "axios";
function Course() {
  const [datas, setData] = useState([]);
  const [sub, setSub] = useState("");
  const [show, setShow] = useState("");
  const [state, setstate] = React.useState([]);
  useEffect(() => {
    axios
      .get("https://61ef7787732d93001778e3c3.mockapi.io/course")
      .then((x) => {
        // console(x);
        // console.log(x.data.map((va) => va.coursename));
        const get = x.data;
        setData(get);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const findData = (e) => {
    let findvalue = datas.find((x) => {
      return x.coursename === e.target.value;
    });
    if (findvalue) {
      console.log();
      return [findvalue.staffName];
    }
  };

  return (
    <div className="cent">
      <div classname="div-wid">
        <h1>Course Details</h1>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>

              <Form.Select
                aria-label="Default select example"
                value={sub}
                onChange={(e) => {
                  setSub(e.target.value);

                  setstate(findData(e));
                }}
              >
                <option>Open this select menu</option>
                <option value="Physics">Physics</option>
                <option value="Maths">Maths</option>
                <option value="computer">computer</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              {/* <Form.Control
              type="email"
              placeholder="Enter email"
              value={show}
              onChange={(e) => {
                setShow(e.target.value);
              }}
            /> */}

              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                {state && state.map((v, i) => <option value={i}>{v}</option>)}
              </Form.Select>
            </Form.Group>
          </Row>
          ,
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Course;
