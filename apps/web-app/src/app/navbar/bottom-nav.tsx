import {Container, Navbar, Row} from "react-bootstrap";
import React from "react";

function BottomNav() {
  return(
    <Row>
      <Navbar style={{backgroundColor:"#2a9d8f", padding: "10px"}} variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Walmart Invite
          </Navbar.Brand>
          <Navbar.Text>
            Created by Adison Lampert.
          </Navbar.Text>
        </Container>
      </Navbar>
    </Row>
  )
}

export default BottomNav;
