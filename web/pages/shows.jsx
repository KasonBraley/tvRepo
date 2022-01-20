import { useEffect } from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Link from "next/link"
import ShowCard from "../components/ShowCard.jsx"

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
                                <Link href="/search" className="nav-link">
                                    <a>Search to get started!</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                )}
            </Row>
        </Container>
    )
}

export default Shows
