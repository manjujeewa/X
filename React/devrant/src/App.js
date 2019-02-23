import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import PostList from "./components/Postlist";
import Post from  "./components/Post";


class App extends Component {
  render() {
    return (
      <div className="page">
        <Header/>
        <Main isLoading={false}>
          <PostList>
            <Post/><Post/><Post/>
          </PostList>
        </Main>
      </div>
    );
  }
}

export default App;
