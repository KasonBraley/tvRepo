import React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import SearchResultCard from "./SearchResultCard"

// render as many SearchResultCard's as needed based on the results data from the api
function SearchResult(props) {
    return (
        <Container className="searchresult">
            <Row xs={1} md={2} className="g-4">
                {props.searchResult
                    .filter(
                        (tvShow) =>
                            tvShow.showImageSmall && tvShow.showDescription
                    )
                    .map((tvShow, index) => {
                        return (
                            <Col key={index} className="col-sm-4 col-md-3">
                                <SearchResultCard
                                    tvShow={tvShow}
                                    addShow={props.addShow}
                                    loggedIn={props.loggedIn}
                                />
                            </Col>
                        )
                    })}
            </Row>
        </Container>
    )
}

export default SearchResult
