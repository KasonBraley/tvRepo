import { useContext, useEffect } from "react"
import Link from "next/link"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import ShowCard from "../components/ShowCard.jsx"
import { ShowContext } from "../context/showContext.jsx"

function Shows() {
    let { deleteShow, loggedIn, getUserShows, myShows } =
        useContext(ShowContext)

    useEffect(() => {
        loggedIn && getUserShows()
    })

    return (
        <Container className="shows">
            <Row>
                {myShows.length > 0 ? (
                    myShows.map((show, index) => {
                        return (
                            <Col key={index}>
                                <ShowCard
                                    tvShow={show}
                                    deleteShow={deleteShow}
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
