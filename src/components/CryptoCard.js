import React, { Component } from 'react'
import { Col,Card,Button } from 'react-bootstrap'
class CryptoCard extends Component {
    render() {
        return (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.item.title}</Card.Title>
                        <Card.Text>
                        {this.props.item.toUSD}
                        </Card.Text>
                        <Button onClick={()=>this.props.addCrypto(this.props.item)} variant="primary">Add to Fav</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default CryptoCard
