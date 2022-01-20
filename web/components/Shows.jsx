import { useEffect } from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import ShowCard from "./ShowCard.jsx"

function Shows(props) {
    useEffect(() => {
        props.loggedIn && props.getUserShows()
    })

    return (
        <Container className="shows">
            <Row>
                {props.myShows.length > 0 ? (
                    props.myShows.map((show, index) => {
                        return (
                            <Col key={index}>
                                <ShowCard
                                    tvShow={show}
                                    deleteShow={props.deleteShow}
                                />
                            </Col>
                        )
                    })
                ) : (
                    <div className="noShowsParent">
                        <div className="noShowsChild">
                            <h4>
                                Add your favorite shows in{" "}
                                <Link to="/search">search</Link> to get started!
                            </h4>
                        </div>
                    </div>
                )}
            </Row>
        </Container>
    )
}

export default Shows
