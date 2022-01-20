import { useContext, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"

import { ShowContext } from "../context/showContext.jsx"

export default function Logout() {
    let { clearShowsState, loggedInUser, toggleLoginStatus } =
        useContext(ShowContext)
    let router = useRouter()

    useEffect(() => {
        async function getData() {
            try {
                await axios.post(
                    process.env.NEXT_PUBLIC_SERVER_URL + "/logout",
                    {
                        data: { email: loggedInUser },
                    }
                )
                toggleLoginStatus(false, "")
                clearShowsState()
            } catch (error) {
                console.error(error)
            }
            navigateToHomePage()
        }

        getData()
    })

    function navigateToHomePage() {
        router.push("/")
    }

    return null
}
