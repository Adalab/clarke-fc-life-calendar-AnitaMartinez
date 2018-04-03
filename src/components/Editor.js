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
      <div className="container-editor">

        <div className="container-inputs">

          <h2 className="tittle-editor">Hoy es...</h2>

          <div className="container-date">
            <p className="date">{ date }</p>
            <img className="icon-calendar" src="./icons/calendar.svg" alt="Icono calendario"/>
          </div>

          <form>
            <h1 className="tittle-editor">¿Y me siento?</h1>

            <input className="input-radio" type="radio" value="smile" id="smile" name="moods" onChange={this.props.onChange}/>
            <label className="label-radio" htmlFor="smile"> :) </label>

            <input type="radio" value="sad" id="sad" name="moods" onChange={this.props.onChange} />
            <label htmlFor="sad"> :( </label>

            <div className={`message-form ${this.props.mood === 'smile' ? 'visible' : '' }`}>
              <label htmlFor="message">¿Por qué es un buen día?</label>
              <input id="message" type="text" name="message" onChange={this.props.handleMessage} placeholder="Es un buen día por..." />
            </div>

          </form>

          </div>

          <div className="container-buttons">
            <Link to='/'>
              <button className="button button-save" type="button" name="button" onClick={this.props.onClick}> Guardar </button>
            </Link>
            <Link className="button button-cancel" to='/'> Cancelar </Link>
          </div>

      </div>
    );
    }
  }

  export default Editor;
