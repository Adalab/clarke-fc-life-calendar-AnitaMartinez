import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <div>
        <Link to='/editor'> + </Link> <br/>

        <p>{this.props.moodState}</p>
        </div>


    );
  }
}

export default App;
