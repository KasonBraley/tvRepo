import { useEffect } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

function Logout(props) {
    useEffect(() => {
        async function getData() {
            try {
                await axios.post(process.env.REACT_APP_SERVER_URL + "/logout", {
                    data: { email: props.loggedInUser },
                })
                props.toggleLoginStatus(false, "")
                props.clearShowsState()
            } catch (error) {
                console.error(error)
            }
            navigateToHomePage()
        }

        getData()
    })

    function navigateToHomePage() {
        props.history.push("/")
    }

    return null
}

export default withRouter(Logout)
