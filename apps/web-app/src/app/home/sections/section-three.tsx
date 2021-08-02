import {Col, Row} from "react-bootstrap";
import SvgZoom from "../svg/svg-zoom";
import React from "react";

function SectionThree() {
  return (
    <Row className="section3row justify-content-md-center">
      <Col md={5}>
        <SvgZoom />
      </Col>
      <Col md={7} className="section3description">
        <h2 className="section3header">Connect From Anywhere</h2>
        <p>As things are opening up, Walmart recognizes that social events are going to look a little different than they did before. Whether remote or in-person, mask or maskless, let Walmart help  you plan your next event with ease. <br /> <br /> Walmart Invite is part-virtual invite, part-product discovery. Not only do we simplify sending out invitations, we also recommend Walmart products to help you and your guests prepare for your event confidently. Need sunblock for your hike? We've got you covered. Chips for your next party? We've got that too!</p>
      </Col>
    </Row>
  )
}

export default SectionThree;
