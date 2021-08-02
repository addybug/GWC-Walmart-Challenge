import React from 'react';
import {Navbar, Container, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Login from "../login/login";

export function Navigation() {
  return(
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://seeklogo.net/wp-content/uploads/2016/11/walmart-logo-preview-400x400.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Walmart Logo"
            style={{marginLeft:"10px"}}
          />
          Walmart Invite</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" style={{marginRight: "20px"}}>
          <Navbar.Text style={{display:"flex", alignItems:"center"}}>
            {localStorage.name ?
              <div>Hi, {localStorage.name}!
                <Button style={{marginLeft:"10px"}} size="sm" variant="light">Create Invite</Button>{' '}
                <Button style={{marginLeft:"10px"}} size="sm" onClick={(() => {localStorage.clear(); window.location.reload()})} variant="outline-light">Log Out</Button>{' '}
              </div>
              : <Login />}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
