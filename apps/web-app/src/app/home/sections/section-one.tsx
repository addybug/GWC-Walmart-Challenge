import {Button, Col, Row} from "react-bootstrap";
import SvgComponent from "../svg/svg-creator";
import React, {useState} from "react";
import LoginModal from "../../login/login-modal";
import {useHistory} from "react-router-dom";

function SectionOne() {
  const [clicked, setClick] = useState(false);
  const history = useHistory();

  return(
    <Row className="banner">
      <Col md={7}>
        <div className="always">Always together.</div>
        <h1>
          <img
            src="https://seeklogo.net/wp-content/uploads/2016/11/walmart-logo-preview-400x400.png"
            height="50"
            className="d-inline-block align-top"
            alt="Walmart Logo"
          />
          WALMART <span className="invite">INVITE</span></h1>
        <h5 className="subtitle">{"Plan Your Next" + " "}
          <span className="word w1">Remote Book Club</span>
          <span className="word w2">Picnic</span>
          <span className="word w3">Party</span>
          <span className="word w4">School Trip</span>
          <span className="word w5">Zoom Happy Hour</span>
        </h5>
        <Button className="start" onClick={() => setClick(true)} variant="outline-light">Get Started!</Button>{' '}
        { clicked && localStorage.name ? history.push('/create-invite') : (clicked ? <LoginModal /> : "")}
      </Col>
      <Col md={5}>
        <SvgComponent className="svgComp" />
      </Col>
    </Row>
  )
}

export default SectionOne;
