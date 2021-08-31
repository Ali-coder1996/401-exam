import React, { Component } from 'react'
import { Col,Card,Button } from 'react-bootstrap'
class FavCard extends Component {
    render() {
        return (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.item.description}</Card.Title>
                        <Card.Text>
                        {this.props.item.toUSD}
                        </Card.Text>
                        <Button onClick={()=>this.props.deleteCrypto(this.props.idx)} variant="danger">delete</Button>
                        <Button onClick={()=>this.props.updataCrypto(this.props.idx)} variant="primary">updata</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default FavCard
