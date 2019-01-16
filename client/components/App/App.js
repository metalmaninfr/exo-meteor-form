import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePageContainer from '../ProfilePage/ProfilePageContainer';
import Form from '../Form/Form';
import Names from '../Names/Names';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Form} />
          <Route exact path='/names' component={Names} />
          <Route exact path='/profile/:id' component={ProfilePageContainer} />
        </Switch>
			</Router>
    );
  }
}

export default App;
