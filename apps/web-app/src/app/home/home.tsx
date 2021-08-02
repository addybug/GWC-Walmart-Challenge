import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import SectionOne from "./sections/section-one";
import SectionTwo from "./sections/section-two";
import SectionThree from "./sections/section-three"

export function Home() {
  return(
    <Container className="homeContainer">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </Container>
  )
}

export default Home;
