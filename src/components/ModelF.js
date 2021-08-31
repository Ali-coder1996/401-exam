import React, { Component } from 'react'
import { Form,Modal, Button } from 'react-bootstrap'
class ModelF extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showM} onHide={this.props.closeHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updata}>
                            <Form.Control type="text" name='image_url' defaultvalue={this.props.image_url} />
                            <Form.Control type="text" name='toUSD' defaultvalue={this.props.toUSD} />
                            <Form.Control type="text" name='description' defaultvalue={this.description} />

                        </Form>
                        <Button variant="primary" type='submit'>
                            Save Changes
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeHandler}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ModelF
