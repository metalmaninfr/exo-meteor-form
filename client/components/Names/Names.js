import React, { Component } from 'react';
import people from '../../../imports/db/people';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

class Names extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div>
        <ul>
          {tasks.map(p => (
            <div key={p._id}>
              <li>Name: { p.name }, mail: { p.mail }
                <Link to={`/profile/${p._id}`}>Go to account</Link>
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
