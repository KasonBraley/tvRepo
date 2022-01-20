import parse from "html-react-parser"
import React from "react"
import { Button, Card } from "react-bootstrap"
import { withRouter } from "react-router-dom"

function SearchResultCard(props) {
    return (
        <Card className="searchresultcard">
            <Card.Img variant="top" src={props.tvShow.showImageSmall} />
            <Card.Body className="hidescroll" style={{ overflowY: "scroll" }}>
                <Card.Title>{props.tvShow.showTitle}</Card.Title>
                {props.tvShow.showDescription ? (
                    <div>{parse(props.tvShow.showDescription)}</div>
                ) : (
                    "No description available"
                )}
            </Card.Body>
            {props.loggedIn ? (
                <Button
                    variant="primary"
                    onClick={() => props.addShow(props.tvShow)}
                >
                    Add
                </Button>
            ) : (
                <Button onClick={() => props.history.push("/login")}>
                    Log in to add!
                </Button>
            )}
        </Card>
    )
}

export default withRouter(SearchResultCard)
