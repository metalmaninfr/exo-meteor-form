import React, { Component } from 'react';
import people from '../../../imports/db/people';

class Form extends Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputMail = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.inputName.current.value !== '' && this.inputMail.current.value !== '') {
      people.insert({
        name : this.inputName.current.value,
        mail : this.inputMail.current.value,
      });
    }
  }

  render() {
    return(
      <form name="form" onSubmit={e => this.handleSubmit(e)}>
        <label className="form_label_name" htmlFor="name">Name</label>
        <input type="text" ref={this.inputName} />
        <label className="form_label_name" htmlFor="mail">Mail</label>
        <input type="mail" ref={this.inputMail} />
        <button type="submit" id="submit">Submit</button>
      </form>
    );
  }
}


export default Form;
