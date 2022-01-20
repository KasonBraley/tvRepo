import axios from "axios"
import { useState } from "react"

import SearchForm from "../components/SearchForm.jsx"
import SearchResult from "../components/SearchResult.jsx"

export default function Search(props) {
    let [searchTitle, setSearchTitle] = useState("")
    let [searchResult, setSearchResult] = useState("")

    async function getShowData(title) {
        try {
            // don't call API on empty form submissions
            if (title === "") {
                throw new Error("empty sumbission field")
            } else if (title === searchTitle) {
                return
            }

            const API = `${process.env.REACT_APP_SERVER_URL}/search/shows/${title}`
            const results = await axios.get(API)
            results.data.splice(0, -5)

            setSearchTitle(title)
            setSearchResult(results.data)
        } catch (error) {
            //TODO: better error handling; render an error
            props.errorHandler(error)
            setSearchTitle("")
            setSearchResult("")
        }
    }

    return (
        <div className="search">
            <SearchForm getShowData={getShowData} />
            {searchResult && (
                <SearchResult
                    searchResult={searchResult}
                    addShow={props.addShow}
                    loggedIn={props.loggedIn}
                />
            )}
        </div>
    )
}
