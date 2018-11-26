import React, { Component } from 'react'
import Article from './Article'
import {Container, Row} from 'react-bootstrap'

export class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentWillMount() {
    this.getListOfPosts().then((posts) => {
      this.setState((prevState) => ({posts}));
    });
  }
  async getListOfPosts() {
    const response = await fetch('http://localhost/wordpress/index.php/wp-json/wp/v2/posts',{
      method: 'GET'
    })
    const posts = await response.json()
    
    // post.map with an async function returns an array of promises, we have to use Promise.all in order to obtain the values
    const postsInflated = await Promise.all(posts.map(async (post) => {
      return await this.inflatePost(post);
    }))
    return postsInflated;
  }
  // Inflates each post in order to include the information about the featured media
  async inflatePost(post) {
    const media = await fetch(`http://localhost/wordpress/index.php/wp-json/wp/v2/media/${post.featured_media}`, 
    {
      method: 'GET'
    })
    // Replace the featured media that was an id with the information we obtained from the API
    post.featured_media = await media.json();
    return post
  }
  render() {
    return (
      <Container>
        <Row>
          {this.state.posts.map((post) => {
              return (
                <Article id={post.id} key={post.id} 
                  image={post.featured_media.source_url} title={post.title.rendered} 
                  excerpt={post.excerpt.rendered}  />
                )
            })
          }
        </Row>
      </Container>
    )
  }
}

export default ArticleList
