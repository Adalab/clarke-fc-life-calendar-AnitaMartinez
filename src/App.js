import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DaysList from './components/DaysList';
import Editor from './components/Editor';

let AllMoods;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionInput: "",
    }
  }

  handleChangeInput = event => {
    this.setState({
      optionInput: event.currentTarget.value
    })
  }

  saveDataToLocalStorage = data => {
    let a = JSON.parse(localStorage.getItem('moods')) || [];
    a.push(data);
    localStorage.setItem('moods', JSON.stringify(a));
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
              onChange= { this.handleChangeInput }
              onClick= { this.handleSaveValue }
            />
          }
          />
          <Route exact path='/' render={() =>
            <DaysList
              moodState={ this.state.optionInput }
            />
          }
          />
        </Switch>
      </main>

    )
  }


}
  export default App;
