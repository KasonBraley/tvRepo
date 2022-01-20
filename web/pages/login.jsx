import { useContext } from "react"
import axios from "axios"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import { useRouter } from "next/router"

import { ShowContext } from "../context/showContext.jsx"

export default function Login() {
    let { toggleLoginStatus } = useContext(ShowContext)
    let router = useRouter()

    async function processLogin(event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value
        // todo: probably want a cross-component auth check utility

        try {
            await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + "/login", {
                data: { email, password },
            })
            toggleLoginStatus(true, email)
        } catch (error) {
            console.error(error)
        }

        navigateToHomePage()
    }

    function navigateToHomePage() {
        router.push("/")
    }

    return (
        <Modal
            size="lg"
            show={true}
            onHide={navigateToHomePage}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Account Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={processLogin}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button variant="primary" type="submit">
                                Login or Create Account
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                variant="secondary"
                                onClick={navigateToHomePage}
                            >
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
