import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import PostList from "./components/postlist";
import Post from  "./components/post";

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header/>
        <Main>
          <PostList>
            <Post/><Post/><Post/>
          </PostList>
        </Main>
      </div>
    );
  }
}

export default App;
