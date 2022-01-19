import React from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

class Logout extends React.Component {
    async componentDidMount() {
        try {
            await axios.post(process.env.REACT_APP_SERVER_URL + "/logout", {
                data: { email: this.props.loggedInUser },
            })
            this.props.toggleLoginStatus(false, "")
            this.props.clearShowsState()
        } catch (error) {
            console.error(error)
        }

        this.navigateToHomePage()
    }

    navigateToHomePage = () => this.props.history.push("/")

    render() {
        return null
    }
}

export default withRouter(Logout)
