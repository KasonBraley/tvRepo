import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function SearchForm(props) {
    function handleSubmit(event) {
        event.preventDefault()
        const title = event.target.formTitle.value
        // const genre = event.target.formGenre.value;
        // const person = event.target.formPerson.value;
        // const streamingService = event.target.formStreamingService.value;

        props.getShowData(title)
    }

    return (
        <div className="searchform">
            <h2 style={{ textAlign: "center" }}>
                Search for your next show here!
            </h2>
            <Form style={{ width: "450px" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Control type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SearchForm
