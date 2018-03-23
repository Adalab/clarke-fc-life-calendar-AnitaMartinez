import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DaysList from './components/DaysList';
import Editor from './components/Editor';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionInput: "",
    }
  }

  handleChange = event => {
    this.setState({
      optionInput: event.currentTarget.value
    })
  }



  render() {
    return (

      <main>
        <Switch>
          <Route path='/Editor' render={() =>
            <Editor
              onChange={this.handleChange}
            />
          }
          />
          <Route exact path='/' render={() =>
            <DaysList
              moodState={this.state.optionInput}
            />
          }
          />
        </Switch>
      </main>

    )
  }


}
  export default App;
