import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Editor extends Component {


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


  render() {

    const date = this.getDay();

    return (
      <div>

        <form>
          <ul>
            <li>
              <label htmlFor="smile">
                <input type="radio" value="smile" id="smile" name="moods" onChange={this.props.onChange}/> :)
              </label>
            </li>
            <li>
              <label htmlFor="sad">
                <input type="radio" value="sad" id="sad" name="moods" onChange={this.props.onChange} /> :(
              </label>
            </li>
          </ul>
        </form>

        { date }

        <br/>

        <Link to='/'>
          <button type="button" name="button" onClick={this.props.onClick}> Guardar </button>
        </Link>

        <br/>

        <Link to='/'> Cancelar </Link>

      </div>
      );
    }
  }

  export default Editor;
