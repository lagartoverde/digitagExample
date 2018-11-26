import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar.jsx'
import SideBar from './components/SideBar.jsx'
import ArticleList from './components/ArticleList.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='topbar'>
          <TopBar />
        </div>
        <div className='content'>
          <div className='articleList'>
            <ArticleList />
          </div>
          <div className='sidebar'>
            <SideBar />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
