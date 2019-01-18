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
    <p style={{ cursor: "pointer", padding: '1rem' }} onClick={() => goBack()}>Go back</p>
    <div className="Profile">
      <div className='title-container Form-container-input'>
      {editName ?
        <h1>Welcome <input onChange={event => handleChange(event)} /></h1>
        :
        <h1>{`Welcome ${name}`}</h1>
        }
      </div>
      <div className="Form-container-input">
      {editMail ?
        <p>you're email is <input onChange={event => handleChange(event)} /></p>
        :
        <p>{`you're github is ${mail}`}</p>
      }
      </div>
      <div className="params">
        <button onClick={() => updateName()}>{editName ? 'update name' : 'edit name'}</button>
        <button onClick={() => updateMail()}>{editMail ? 'update github' : 'edit github'}</button>
        <button onClick={() => onClickRemove()}>Delete</button>
      </div>
    </div>
  </div>
);


  export default ProfilePage;
