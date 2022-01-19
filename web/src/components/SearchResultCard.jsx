import parse from "html-react-parser"
import React from "react"
import { Button, Card } from "react-bootstrap"
import { withRouter } from "react-router-dom"

class SearchResultCard extends React.Component {
    render() {
        return (
            <Card className="searchresultcard">
                <Card.Img
                    variant="top"
                    src={this.props.tvShow.showImageSmall}
                />
                <Card.Body
                    className="hidescroll"
                    style={{ overflowY: "scroll" }}
                >
                    <Card.Title>{this.props.tvShow.showTitle}</Card.Title>
                    {this.props.tvShow.showDescription ? (
                        <div>{parse(this.props.tvShow.showDescription)}</div>
                    ) : (
                        "No description available"
                    )}
                </Card.Body>
                {this.props.loggedIn ? (
                    <Button
                        variant="primary"
                        onClick={() => this.props.addShow(this.props.tvShow)}
                    >
                        Add
                    </Button>
                ) : (
                    <Button onClick={() => this.props.history.push("/login")}>
                        Log in to add!
                    </Button>
                )}
            </Card>
        )
    }
}

export default withRouter(SearchResultCard)
