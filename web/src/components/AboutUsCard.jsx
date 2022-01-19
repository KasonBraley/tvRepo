import React from "react";
import Card from "react-bootstrap/Card";
import "../AboutUs.css";

class AboutUsCard extends React.Component {
  render() {
    return (
      <Card className="aboutuscard">
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.bio}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default AboutUsCard;
