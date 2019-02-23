import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import RantList from "./containers/RantList";
import RantDetails from "./containers/RantDetails";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page">
          <Header/>
          <div>
            <Route exact path="/" component={RantList} />
            <Route exact path="/rant/:rant_id" component={RantDetails} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
