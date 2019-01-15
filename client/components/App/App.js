import React, { Component } from 'react';
import Form from '../Form/Form';
import Names from '../Names/Names';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Form</h1>
        <Form />
        <Names />
      </div>
    );
  }
}

export default App;
