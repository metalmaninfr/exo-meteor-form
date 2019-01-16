import React from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import people from '../../../imports/db/people';

const ProfilePage = ({
  name,
  mail,
  goBack,
  editName,
  editMail,
  updateName,
  updateMail,
  handleChange,
  onClickRemove,
}) => (
  <div>
    <p onClick={() => goBack()}>Go Back</p>
    {editName ?
      <h1>Welcome<input onChange={event => handleChange(event)} /></h1>
    :
    <h1>{`Welcome ${name}`}</h1>
    }
    <span onClick={() => updateName()}>{editName ? 'update' : 'edit'}</span>
    {editMail ?
      <p>you're email is <input onChange={event => handleChange(event)} /></p>
      :
      <p>{`you're email is ${mail}`}</p>
    }
    <span onClick={() => updateMail()}>{editName ? 'update' : 'edit'}</span>
    <br />
    <button onClick={() => onClickRemove()}>Delete</button>
  </div>
);


  export default ProfilePage;
