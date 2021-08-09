import {Col, Row} from "react-bootstrap";
import {CardChecklist, EmojiLaughing, People, UiChecks} from "react-bootstrap-icons";
import React from "react";

function SectionTwo() {
  return(
    <Row className="iconInfo justify-content-md-center">
      <Col className="colIcons">
        <div className="iconHome">
          <UiChecks size={40} />
        </div>
        <h3 className="iconHeader">CREATE</h3>
        <p>In just a few clicks, create your next remote or in-person event with Walmart Invite.</p>
      </Col>
      <Col className="colIcons">
        <div className="iconHome">
          <People size={40} />
        </div>
        <h3 className="iconHeader">INVITE</h3>
        <p>Easily invite your friends and family. They'll receive an email with the details.</p>
      </Col>
      <Col className="colIcons">
        <div className="iconHome">
          <CardChecklist size={40} />
        </div>
        <h3 className="iconHeader">TRACK</h3>
        <p>Keep track of attendees. You'll be able to see who has accepted and declined your invite.</p>
      </Col>
      <Col className="colIcons">
        <div className="iconHome">
          <EmojiLaughing size={40} />
        </div>
        <h3 className="iconHeader">ENJOY</h3>
        <p>Walmart Invite removes the hassle from planning events so you can focus on enjoying them. </p>
      </Col>
    </Row>
  )
}

export default SectionTwo;
