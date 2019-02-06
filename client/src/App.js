import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import FileUpload from './components/fileupload/fileupload';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={FileUpload} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;

