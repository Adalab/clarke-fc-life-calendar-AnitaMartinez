import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DaysList extends Component {

  render() {


    return (

      <div>
        <Link to='/editor'> + </Link> <br/>

        <ul>
          {this.props.moods.map((mood, index) => {
            return <li key={index}>
                    <img className="icon" src= { "icons/" + mood + ".svg" } alt={mood} />
                  </li>
          })}

        </ul>

      </div>


    );
  }
}

export default DaysList;
