import { Meteor } from 'meteor/meteor'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './main.html';

Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
})
