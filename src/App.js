import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DaysList from './components/DaysList';
import Editor from './components/Editor';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ DaysList } />
        <Route path='/editor' component={ Editor } />
      </Switch>
    );
  }
}

export default App;
