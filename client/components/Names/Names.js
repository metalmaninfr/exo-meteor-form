import React, { Component } from 'react';
import people from '../../../imports/db/people';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import './Names.css';

class Names extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div>
        <h1 style={{ textAlign: 'center', margin: "4rem 0" }}>Students</h1>
        <ul className='card-container'>
          {tasks.map(p => (
            <Link to={`/profile/${p._id}`} key={p._id}>
              <div className='card'>
                <li>Name: { p.name }</li>
                <li>Github: { p.mail }</li>
              </div>
            </Link>
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
