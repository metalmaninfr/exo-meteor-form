import React, { Component } from 'react';
import people from '../../../imports/db/people';
import { withTracker } from 'meteor/react-meteor-data';

class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }
  onClick = (id) => {
    people.remove({
      _id : id,
    });
  }
  handleChange = () => {
    this.setState({ edit: !this.state.edit });
  }
  // handleSubmit = (id, e) => {
  //   e.preventDefault();
  //   people.update({ _id: id }, { $set: { name: this.inputName.current.value, mail: this.inputMail.current.value }});
  //   this.setState({ edit: !this.state.edit });
  // }
  render() {
    const { tasks } = this.props;
    const { edit } = this.state;
    console.log(people);
    return (
      <div>
        <ul>
          {tasks.map(p => (
            <div key={p._id}>
              <li id={p._id}>Name: { p.name }, mail: { p.mail }
                <button onClick={() => this.onClick(p._id)}>X</button>
                <button onClick={() => this.handleChange()}>Edit</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
    return {
      tasks: people.find({}).fetch(),
    };
  })(Names);
