import React from "react";
import {RouteComponentProps} from "react-router-dom";
import "./event.css";
import {Check, X, Question} from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from "react-bootstrap";
import SimpleSlider from "./walmart-recommendations";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type TParams = {id: string };

const guestResponses = [<Check color={'green'} size={24} />, <X color={'red'} size={24} />, <Question color={'orange'} size={24} />]

function getRandomInt(number: number) {
  return Math.floor(Math.random() * number);
}

function EventView({ match }: RouteComponentProps<TParams>) {
  const event = JSON.parse(localStorage.getItem("events"))[match.params.id];

  if(!event){
    return(<div>Error. The event you're looking for does not exist.</div>)
  }
  else {
    return(
      <div className="eventOuter" style={{backgroundColor: event.color}}>
        <div className="eventContainer" style={{borderColor: event.color}}>
          <Container>
            <Row>
              <Col md={8} sm={12}>
                <h1 className="eventHeader" style={{color: event.color}}>{event.name}</h1>
                <div className="eventDetails">
                  <p>This event is <span className="detailHeader" style={{color: event.color}}>{event.type}</span></p>
                  { event.type === "In Person" ?
                    <p>Are masks required? <span className="detailHeader" style={{color: event.color}}>{event.mask}</span></p>
                    : <p><span className="detailHeader" style={{color: event.color}}>Link: </span><a href={event.link}>{event.link}</a></p>
                  }
                  <p><span className="detailHeader" style={{color: event.color}}>Time: </span>{new Date(event.startTime).toUTCString()} to {new Date(event.endTime).toUTCString()}</p>
                  <p><span className="detailHeader" style={{color: event.color}}>Description: </span>{event.description}</p>
                </div>
              </Col>
              <Col className="guestsCol">
                <p><span className="detailHeader" style={{color: event.color}}>Guests</span></p>
                {event.guests.replaceAll(" ", "").split(",").map(guest =>
                {
                  return(<p>{guestResponses[getRandomInt(3)]} {guest}</p>)
                })}
              </Col>
            </Row>
            <Row className="justify-content-center">
              <h3 style={{color: event.color, margin: "2rem 0", fontWeight: "bold"}}>RECOMMENDATIONS</h3>
              <SimpleSlider type={event.invite} />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default EventView;
