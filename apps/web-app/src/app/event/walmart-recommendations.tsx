import React from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from "react-bootstrap";
import {gql, useQuery} from "@apollo/client";

const GET_RECOMMENDATIONS = gql`
query getRecommendations($criteria: RecQueryInput!) {
  recommendations(criteria: $criteria) {
    type
    recs {
      img
      name
      price
      link
    }
  }
}
`;


function SimpleSlider({type}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const {data, loading, error } = useQuery(GET_RECOMMENDATIONS, {
    variables: {criteria: {type: type}}
  })

  if(error){
    return(<div>Error. There are no recommendations for this event.</div>)
  }
  else if(loading){
    return(<div>Loading.</div>)
  }
  else {
    console.log(data)
    console.log(type)
    return (
      <Slider style={{width: "85%"}}{...settings}>
        {data.recommendations.recs.map(rec => {
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
}

export default SimpleSlider;
