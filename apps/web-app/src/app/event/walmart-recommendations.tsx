import React from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from "react-bootstrap";
import { recommendations } from "./recommendations"


function SimpleSlider({type}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const r = recommendations.filter(rec => {return(rec.type === type)})[0];

    return (
      <Slider style={{width: "85%"}}{...settings}>
        {r.recs.map(rec => {
          return(
            <div>
              <Card style={{ margin: '0.5rem', width:"15rem" }}>
                <Card.Img variant="top" src={rec.img} />
                <Card.Body>
                  <Card.Title>{rec.name}</Card.Title>
                  <Card.Text>
                    {rec.price}
                  </Card.Text>
                  <a href={rec.link} className="btn btn-primary stretched-link">Explore!</a>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </Slider>
    );
}

export default SimpleSlider;
