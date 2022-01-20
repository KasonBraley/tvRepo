import { createContext, useState } from "react"
import axios from "axios"

export const ShowContext = createContext()

export default function ShowProvider(props) {
    let [myShows, setMyShows] = useState([])
    let [loggedIn, setLoggedIn] = useState(false)
    let [loggedInUser, setLoggedInUser] = useState("")
    let [error, setError] = useState({})

    function errorHandler(error) {
        setError({ status: true, content: error.message })
    }

    function clearError() {
        setError({ status: false, content: "" })
    }

    async function addShow(tvShow) {
        // prevent duplicate additions
        const found = myShows.find(
            (savedShow) => savedShow.showTitle === tvShow.showTitle
        )

        if (found) return

        try {
            const newArray = [...myShows, tvShow]

            setMyShows(newArray)
            put(newArray) // newArray??
        } catch (error) {
            errorHandler(error)
        }
    }

    async function deleteShow(tvShow) {
        try {
            const newArray = myShows.filter((show) => {
                return show.showTitle !== tvShow.showTitle
            })

            setMyShows(newArray)
            put(newArray)
        } catch (error) {
            errorHandler(error)
        }
    }

    async function put(newArray) {
        const API = `${process.env.NEXT_PUBLIC_SERVER_URL}/shows/$loggedInUser}`
        await axios.put(API, newArray)
    }

    async function getUserShows() {
        try {
            const API = `${process.env.NEXT_PUBLIC_SERVER_URL}/shows/${loggedInUser}`
            const results = await axios.get(API)

            setMyShows(results.data)
        } catch (error) {
            errorHandler(error)
        }
    }

    function toggleLoginStatus(status, email) {
        setLoggedIn(status)
        setLoggedInUser(email)
    }

    function clearShowsState() {
        setMyShows([])
    }

    let values = {
        toggleLoginStatus,
        clearShowsState,
        getUserShows,
        deleteShow,
        clearError,
        addShow,
        error,
        loggedIn,
        loggedInUser,
        errorHandler,
        myShows,
    }

    return (
        <ShowContext.Provider value={values}>
            {props.children}
        </ShowContext.Provider>
    )
}
