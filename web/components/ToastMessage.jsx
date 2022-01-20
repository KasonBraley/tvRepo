import { useState } from "react"
import { Toast, ToastContainer } from "react-bootstrap"

function ToastMessage2(props) {
    let [show, setShow] = useState(props.show || false)

    return (
        <ToastContainer className="p-3" position="top-center">
            <Toast
                onClose={() => {
                    setShow(false)
                    props.clearError()
                }}
                show={show}
                delay={3000}
                autohide
                bg="danger"
            >
                <Toast.Header>
                    <strong>{props.title}</strong>
                </Toast.Header>
                <Toast.Body>{props.body}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default ToastMessage2
