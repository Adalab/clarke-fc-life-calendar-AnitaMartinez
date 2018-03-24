import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DaysList from './components/DaysList';
import Editor from './components/Editor';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionInput: "",
      moods: JSON.parse(localStorage.getItem('moods')) || [],
    }
  }

  handleChangeInput = event => {
    this.setState({
      optionInput: event.currentTarget.value
    })
  }

  saveDataToLocalStorage = data => {
    let moods = JSON.parse(localStorage.getItem('moods')) || [];
    moods.push(data);
    localStorage.setItem('moods', JSON.stringify(moods));
    this.setState({
      moods: moods
    })
  }

  handleSaveValue = () => {
    this.saveDataToLocalStorage(this.state.optionInput);
  }


  render() {

    return (

      <main>
        <Switch>
          <Route path='/Editor' render= {() =>
            <Editor
              onChange = { this.handleChangeInput }
              onClick = { this.handleSaveValue }
            />
          }
          />
          <Route exact path='/' render={() =>
            <DaysList
              moodState = { this.state.optionInput }
              moods = { this.state.moods}
            />
          }
          />
        </Switch>
      </main>

    )
  }


}
  export default App;
