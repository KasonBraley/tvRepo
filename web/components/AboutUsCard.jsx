import React from "react"
import Card from "react-bootstrap/Card"
import "../AboutUs.css"

function AboutUsCard(props) {
    return (
        <Card className="aboutuscard">
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.bio}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default AboutUsCard
