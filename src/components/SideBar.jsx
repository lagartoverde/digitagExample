import React, { Component } from 'react'

import './SideBar.css'

export class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }
  componentWillMount(){
    console.log('hello')
    this.getListOfCategories().then((categories) => {
      console.log(categories)
      this.setState((prevState) => ({
        categories
      }))
    })
  }
  async getListOfCategories() {
    const response = await fetch('http://localhost/wordpress/index.php/wp-json/wp/v2/categories', {method: 'GET'});
    const categories = await response.json();
    console.log(categories)
    return categories;
  }
  render() {
    return (
      <div class='sidebarContainer'>
        <h3>Categories</h3>
        {this.state.categories.map((category)=> {
          return (
            <a class='sidebarLink' href='/#'>{category.name} ({category.count})</a>
          )
        })}
      </div>
    )
  }
}

export default SideBar
