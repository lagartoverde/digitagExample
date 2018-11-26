import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'

export class Article extends Component {
  render() {
    return (
      <Card style={{ width: '18rem', margin: '10px'}}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text dangerouslySetInnerHTML={{__html: this.props.excerpt}}>
            
          </Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default Article
