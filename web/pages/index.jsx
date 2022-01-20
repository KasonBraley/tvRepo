<<<<<<< HEAD
import Head from "next/head"
import { useContext } from "react"

import Home from "../components/Home"
import ToastMessage from "../components/ToastMessage"

import { ShowContext } from "../context/showContext.jsx"

export default function HomePage() {
    let { clearError, error } = useContext(ShowContext)

    return (
        <>
            <Head>
                <title>tvRepo</title>
                <meta charSet="utf-8" />
            </Head>

            {error.status && (
                <ToastMessage
                    title="error"
                    body={error.content}
                    show={true}
                    clearError={clearError}
                />
            )}

            <Home />
        </>
    )
}
||||||| parent of d825289 (Switch to Next.js and functional components)
=======
import Head from "next/head"

// import Layout from "../components/layout.jsx"

import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Search from "./components/Search"
import Shows from "./components/Shows"
import ToastMessage from "./components/ToastMessage"

export default function App() {
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
        const API = `${process.env.REACT_APP_SERVER_URL}/shows/$loggedInUser}`
        await axios.put(API, newArray)
    }

    async function getUserShows() {
        try {
            const API = `${process.env.REACT_APP_SERVER_URL}/shows/${loggedInUser}`
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

    return (
        <>
            <Head>
                <title>Entertainment Tracker</title>
                <meta charSet="utf-8" />
            </Head>
            <div className="app">
                {error.status && (
                    <ToastMessage
                        title="error"
                        body={error.content}
                        show={true}
                        clearError={clearError}
                    />
                )}
                <Header loggedIn={loggedIn} />

                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/search">
                            <Search
                                errorHandler={errorHandler}
                                addShow={addShow}
                                loggedIn={loggedIn}
                            />
                        </Route>
                        <Route path="/login">
                            <Home />
                            <Login toggleLoginStatus={toggleLoginStatus} />
                        </Route>
                        <Route path="/logout">
                            <Home />
                            <Logout
                                toggleLoginStatus={toggleLoginStatus}
                                loggedInUser={loggedInUser}
                                clearShowsState={clearShowsState}
                            />
                        </Route>
                        <Route path="/shows">
                            <Shows
                                myShows={myShows}
                                deleteShow={deleteShow}
                                getUserShows={getUserShows}
                                loggedIn={loggedIn}
                            />
                        </Route>
                        <Route path="/about">
                            <AboutUs />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </>
    )
}
>>>>>>> d825289 (Switch to Next.js and functional components)
