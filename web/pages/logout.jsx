import { useContext, useEffect } from "react"
import axios from "axios"

import { ShowContext } from "../context/showContext.jsx"

export default function Logout(props) {
    let { clearShowsState, loggedInUser, toggleLoginStatus } = useContext(ShowContext)

    useEffect(() => {
        async function getData() {
            try {
                await axios.post(process.env.REACT_APP_SERVER_URL + "/logout", {
                    data: { email: loggedInUser },
                })
                toggleLoginStatus(false, "")
                clearShowsState()
            } catch (error) {
                console.error(error)
            }
            navigateToHomePage()
        }

        getData()
    })

    // @@@ props history won't work
    function navigateToHomePage() {
        props.history.push("/")
    }

    return null
}
