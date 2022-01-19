import axios from "axios"
import React from "react"
import SearchForm from "./SearchForm.jsx"
import SearchResult from "./SearchResult.jsx"

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTitle: "",
            searchResult: "",
        }
    }

    getShowData = async (title) => {
        try {
            // don't call API on empty form submissions
            if (title === "") {
                throw new Error("empty sumbission field")
            } else if (title === this.state.searchTitle) {
                return
            }

            const API = `${process.env.REACT_APP_SERVER_URL}/search/shows/${title}`
            const results = await axios.get(API)
            results.data.splice(0, -5)
            this.setState({
                searchTitle: title,
                searchResult: results.data,
            })
        } catch (error) {
            //TODO: better error handling; render an error
            this.props.errorHandler(error)
            this.setState({ searchResult: "", searchTitle: "" })
        }
    }

    render() {
        return (
            <div className="search">
                <SearchForm getShowData={this.getShowData} />
                {this.state.searchResult && (
                    <SearchResult
                        searchResult={this.state.searchResult}
                        addShow={this.props.addShow}
                        loggedIn={this.props.loggedIn}
                    />
                )}
            </div>
        )
    }
}

export default Search
