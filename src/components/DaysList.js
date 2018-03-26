import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DaysList extends Component {

  render() {


    return (

      <div>
        <Link className="link-change-view" to='/editor'> + </Link> <br/>

        <div className="container-icons">

          <ul className="list-icons">
            {this.props.moods.map((mood, index) => {
              return <li key={index}>
                      <img className="icon" src= { "icons/" + mood + ".svg" } alt={mood} />
                    </li>
            })}
          </ul>

        </div>
      </div>


    );
  }
}

export default DaysList;
