import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DaysList from './DaysList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionInput: "",
    }
  }

  getDay = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0
    let yyyy = today.getFullYear();
    if(dd < 10) {
      dd = '0'+ dd
    }
    if(mm < 10) {
      mm = '0'+ mm
    }
    return today = mm + '/' + dd + '/' + yyyy;
  }

  handleChange = event => {
    this.setState({
      optionInput: event.currentTarget.value
    })
  }


  render() {

    const date = this.getDay();

    return (
      <div>

        <ul>
          <li>
            <label htmlFor="o1">
              <input type="radio" value="smile" id="o1" name="moods" onChange={this.handleChange}/> :)
            </label>
          </li>
          <li>
            <label htmlFor="o2">
              <input type="radio" value="sad" id="o2" name="moods" onChange={this.handleChange} /> :(
            </label>
          </li>
        </ul>

        { date }

        <br/>
        <Link to='/'> Cancelar </Link>

        
      </div>
      );
    }
  }

  export default App;
