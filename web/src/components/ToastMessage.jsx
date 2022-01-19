import React from "react"
import { Toast, ToastContainer } from "react-bootstrap"

class ToastMessage2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: this.props.show || false,
        }
    }

    render() {
        return (
            <ToastContainer className="p-3" position="top-center">
                <Toast
                    onClose={() => {
                        this.setState({ show: false })
                        this.props.clearError()
                    }}
                    show={this.state.show}
                    delay={3000}
                    autohide
                    bg="danger"
                >
                    <Toast.Header>
                        <strong>{this.props.title}</strong>
                    </Toast.Header>
                    <Toast.Body>{this.props.body}</Toast.Body>
                </Toast>
            </ToastContainer>
        )
    }
}

export default ToastMessage2
