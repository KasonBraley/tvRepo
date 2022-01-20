import React from "react"
import { Button, Card } from "react-bootstrap"
import parse from "html-react-parser"

function ShowCard(props) {
    function handleImageClick() {
        props.tvShow?.officialSite && window.open(props.tvShow.officialSite)
    }

    const tvShow = props.tvShow
    return (
        <Card className="showcard">
            <Card.Img
                variant="top"
                src={tvShow.showImageLarge}
                onClick={() => handleImageClick()}
            />
            <Card.Body
                className="hidescroll"
                style={{ height: "100px", overflowY: "scroll" }}
            >
                <Card.Title>{tvShow.showTitle}</Card.Title>
                {parse(tvShow.showDescription)}
                <br />
            </Card.Body>
            <div
                className="hidescroll"
                style={{
                    height: "6rem",
                    backgroundColor: "#CCC",
                    color: "black",
                    borderRadius: "6px",
                    margin: "5px",
                    padding: "12px",
                    overflowY: "auto",
                }}
            >
                Airing status: {tvShow.showStatus}
                <br />
                Airs on: {tvShow.showNextEpisodeDayOfWeek}
                {tvShow.showNextEpisode24HourTime && " "}
                {tvShow.showNextEpisode24HourTime &&
                    tvShow.showNextEpisode24HourTime}
                <br />
                Network: {tvShow.showNetwork}
            </div>
            <Button
                style={{ margin: "5px" }}
                variant="danger"
                onClick={() => props.deleteShow(tvShow)}
            >
                Delete
            </Button>
        </Card>
    )
}

export default ShowCard
