import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import people from '../../../imports/db/people';
import ProfilePage from './ProfilePage';

class ProfilePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editName: false,
      editMail: true,
      nameInput: '',
      mailInput: '',
    }
  }

  goBack() {
    window.history.back();
  }

  onClickRemove = (id) => {
    people.remove({ _id : id });
    this.goBack();
  }

  updateName = () => {
    if (this.state.editName) {
      people.update({ _id: this.props.tasks._id }, { $set: { name: this.state.nameInput }});
    }
    this.setState({ editName: !this.state.editName});
  }

  updateMail = () => {
    if (this.state.editMail) {
      people.update({ _id: this.props.tasks._id }, { $set: { mail: this.state.nameInput }});
    }
    this.setState({ editMail: !this.state.editMail});
  }

  handleChange(event) {
    this.setState({ nameInput: event.target.value, mailInput: event.target.value });
  }

  render() {
    const { tasks } = this.props;
    return (
      <ProfilePage
        goBack={() => this.goBack()}
        mail={tasks ? tasks.mail : 'email'}
        name={tasks ? tasks.name : 'name'}
        onClickRemove={() => this.onClickRemove(tasks._id)}
        updateName={() => this.updateName()}
        updateMail={() => this.updateMail()}
        handleChange={event => this.handleChange(event)}
        editName={this.state.editName}
        editMail={this.state.editMail}
      />
    );
  }
}

export default withTracker(({ match }) => {
  return {
    tasks: people.findOne({ _id: match.params.id }),
  };
})(ProfilePageContainer);
