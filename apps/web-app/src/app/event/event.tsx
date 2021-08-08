import React from "react";
import {RouteComponentProps} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import "./event.css";
import {Check, X, Question} from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from "react-bootstrap";
import SimpleSlider from "./walmart-recommendations";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GET_EVENT = gql`
query getEvents($criteria: EventQueryInput) {
  events(criteria: $criteria) {
    id
    invite
    name
    description
    startTime
    endTime
    type
    link
    mask
    test
    guests
    color
  }
}
`
type TParams = {id: string };

const guestResponses = [<Check color={'green'} size={24} />, <X color={'red'} size={24} />, <Question color={'orange'} size={24} />]

function getRandomInt(number: number) {
  return Math.floor(Math.random() * number);
}

function EventView({ match }: RouteComponentProps<TParams>) {
  const {data, loading, error } = useQuery(GET_EVENT, {
    variables: {criteria: {id: match.params.id}}
  })

  if(error){
    return(<div>Error. The event you're looking for does not exist.</div>)
  }
  else if(loading){
    return(<div>Loading.</div>)
  }
  else {
    return(
      <div className="eventOuter" style={{backgroundColor: data.events[0].color}}>
        <div className="eventContainer" style={{borderColor: data.events[0].color}}>
          <Container>
            <Row>
              <Col md={8} sm={12}>
                <h1 className="eventHeader" style={{color: data.events[0].color}}>{data.events[0].name}</h1>
                <div className="eventDetails">
                  <p>This event is <span className="detailHeader" style={{color: data.events[0].color}}>{data.events[0].type}</span></p>
                  { data.events[0].type === "In Person" ?
                    <p>Are masks required? <span className="detailHeader" style={{color: data.events[0].color}}>{data.events[0].mask}</span></p>
                    : <p><span className="detailHeader" style={{color: data.events[0].color}}>Link: </span><a href={data.events[0].link}>{data.events[0].link}</a></p>
                  }
                  <p><span className="detailHeader" style={{color: data.events[0].color}}>Time: </span>{new Date(data.events[0].startTime).toUTCString()} to {new Date(data.events[0].endTime).toUTCString()}</p>
                  <p><span className="detailHeader" style={{color: data.events[0].color}}>Description: </span>{data.events[0].description}</p>
                </div>
              </Col>
              <Col className="guestsCol">
                <p><span className="detailHeader" style={{color: data.events[0].color}}>Guests</span></p>
                {data.events[0].guests.replaceAll(" ", "").split(",").map(guest =>
                {
                  return(<p>{guestResponses[getRandomInt(3)]} {guest}</p>)
                })}
              </Col>
            </Row>
            <Row className="justify-content-center">
              <h3 style={{color: data.events[0].color, margin: "2rem 0", fontWeight: "bold"}}>RECOMMENDATIONS</h3>
              <SimpleSlider type={data.events[0].invite} />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default EventView;
