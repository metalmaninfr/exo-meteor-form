import React, { Component } from 'react';
import people from '../../../imports/db/people';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valide: false,
      inputName: '',
      inputMail: '',
    }
  }
  handleSubmit = (e) => {
    const { inputName, inputMail } = this.state;
    e.preventDefault();
    if (inputName !== '' && inputMail !== '') {
      people.insert({
        name : inputName,
        mail : inputMail,
      });
      this.props.history.push('/names');
    }
  }

  handleChange(event) {
    const { inputName, inputMail } = this.state;
    this.setState({ inputName: event.target.value, inputMail: event.target.value });
    if (inputName !== '' && inputMail !== '') {
      this.setState({ valide: true });
    }
  }

  render() {
    const { valide } = this.state;
    console.log(valide);
    
    return(
      <div className="Form">
        <form name="form" onSubmit={e => this.handleSubmit(e)} className="Form-container">
          <h1>Sign up</h1>
          <div className="Form-container-input">
            <label className="form_label_name" htmlFor="name">Name</label>
            <input id='name' type="text" onChange={inputName => this.handleChange(event)} placeholder='Name' />
          </div>
          <div className="Form-container-input">
            <label className="form_label_name" htmlFor="mail">Github</label>
            <input id='mail' type="text" onChange={inputName => this.handleChange(event)} placeholder='Github' />
          </div>
          <button type="submit" id="submit" className={`Form-btn ${valide ? 'btn-valide' : 'btn-not-valide'}`}>Add user</button>
        </form>
      </div>
    );
  }
}


export default Form;
